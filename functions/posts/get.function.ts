import { DynamoDB } from "aws-sdk"
import { Table_Names } from "../../types/dynamoDB.types"
import { dynamoDB } from "../../utils/dynamodb.utils"
import { APIResponse } from "../../utils/response.util"

export const getPost = async (event:any) => {
  try {
    const {id} = event.queryStringParameters;

    const queryParams: DynamoDB.DocumentClient.GetItemInput = {
      TableName: Table_Names.POSTS,
      Key: id,
      ReturnConsumedCapacity: 'TOTAL'
    }

    const results = await dynamoDB.get(queryParams).promise();
    if (results) {
      console.log(results);
      return APIResponse.success(200, 'Post retrieved!', results.Item);
    }
  }
  catch(err) {
    console.log(err);
    return APIResponse.error(err.statusCode, err.message);
  }
}