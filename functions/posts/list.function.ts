import { DynamoDB } from "aws-sdk"
import { Table_Names } from "../../types/dynamoDB.types"
import { dynamoDB } from "../../utils/dynamodb.utils"
import { APIResponse } from "../../utils/response.util"

export const listPosts = async (event: any) => {
  try {
    const { id } = event.pathParameters;
    console.log(event)
    const parsedId: string = `CATEGORY#${id}`;

    let expressionValues: DynamoDB.DocumentClient.ExpressionAttributeValueMap = {
      ':pk': parsedId
    }
    const queryParams: DynamoDB.DocumentClient.QueryInput = {
      TableName: Table_Names.POSTS,
      KeyConditionExpression: 'pk = :pk',
      ExpressionAttributeValues: expressionValues
    }

    const results = await dynamoDB.query(queryParams).promise();
    if (results) {
      return APIResponse.success(200, `All posts for ${id}!`, results.Items)
    }
  }
  catch(err) {
    console.log(err);
    return APIResponse.error(err.statusCode, err.message);
  }
}