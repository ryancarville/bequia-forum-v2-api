import { CognitoIdentityCredentials } from "aws-sdk"

export const createAuthorization = async (event: any) => {
  const cognitoCreds = new CognitoIdentityCredentials()

  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Create Auth Lambda!',
        input: event
      },
      null,
      2
    )
  };
}