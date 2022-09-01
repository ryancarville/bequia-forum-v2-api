import { DynamoDB } from "aws-sdk"
import { Table_Names } from "../../types/dynamoDB.types"
import { IUserRequest } from "../../types/User.types"
import { date } from "../../utils/common.utils"
import { dynamoDB } from "../../utils/dynamodb.utils"

/**
 *
 * @param userId
 * @param userData
 * @description creates a new user dynamoDB item
 * @returns
 */
export const createUser = async (userId: string, userData: IUserRequest) => {
  try {

    if (!userId || !userData.givenName || !userData.familyName || !userData.email || !userData.dob || !userData.tosAccepted) {
      throw new Error('Invalid request!.  Missing required data.')
    }

    //delete empty attributes
    for (const item in userData) {
      if (!item) delete userData[item]
    }

    const userItem = {
      id: userId,
      ...userData,
      createdAt: date.getTime(),
      updatedAt: date.getTime()
    };

    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: Table_Names.USERS,
      Item: userItem,
      ReturnConsumedCapacity: 'TOTAL',
    }

    const res = await dynamoDB.put(params).promise()

    if (!!res) {
      return {
        statusCode: 201,
        body: JSON.stringify({message: 'New User entered into users table!'}),
        userId
      }
    }
  }
  catch(err) {
    // console.log(err);
    return {statusCode: 500, message: err.message}
  }
}