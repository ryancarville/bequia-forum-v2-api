import { CognitoIdentityServiceProvider } from "aws-sdk"
import { CONFIG } from "../../config"
import { IUserRequest } from "../../types/User.types"
import { APIResponse } from "../../utils/response.util"
import { createUser } from "../users/create.function"

/**
 *
 * @param event
 * @description Lambda to create a new cognito user
 */

export const register = async (event: any) => {
  const userData: IUserRequest = JSON.parse(event.body);
  const {
    givenName,
    familyName,
    email,
    password,
    username,
    tosAccepted
  } = userData;

  try {
    const cognitoIsp = new CognitoIdentityServiceProvider();

    if (
      !email ||
      !password ||
      !tosAccepted ||
      !givenName ||
      !familyName ||
      !username
    ) {
      return APIResponse.error(401, 'Invalid Request.  Missing required data.');
    }

    const createUserParams: CognitoIdentityServiceProvider.Types.SignUpRequest =
      {
        ClientId: CONFIG.COGNITO_POOL_CLIENT_ID,
        Password: password,
        Username: email,
        UserAttributes: [
          {
            Name: 'email',
            Value: email
          },
          {
            Name: 'given_name',
            Value: givenName
          },
          {
            Name: 'family_name',
            Value: familyName
          },
          {
            Name: 'gender',
            Value: 'male'
          },
          {
            Name: 'preferred_username',
            Value: username
          }
        ]
      };

    const { UserSub } = await cognitoIsp.signUp(createUserParams).promise()
    console.log('REPSONSE');
    console.log(UserSub);
    if (!!UserSub) {
      delete userData.password;
      const newUser = await createUser(UserSub, userData)
      if (newUser) {
        return APIResponse.success(201, 'New user created!', {userId: newUser.userId});
      }
    }
    console.log('REPSONSE');

  } catch (err) {
    console.log("ERROR");
    console.log(err.message);
    console.log('ERROR');

    return APIResponse.error(
      err.statusCode,
      err.message,
      err
    );
  }
};
