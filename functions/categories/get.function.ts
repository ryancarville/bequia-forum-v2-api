import { DynamoDB } from "aws-sdk"
import { Table_Names } from "../../types/dynamoDB.types"
import { dynamoDB } from "../../utils/dynamodb.utils"
import { APIResponse } from "../../utils/response.util"

export const getCategory = async (event: any) => {
  // const events  = JSON.parse(event);
  try {
    console.log(event)
    const { id } = event.queryStringParameters;
    if (!!!id) throw new Error('Missing required params!');

    const queryParams: DynamoDB.DocumentClient.QueryInput = {
      TableName: Table_Names.CATEGORIES,
      ExpressionAttributeValues: {
        ':pk': id
      },
      KeyConditionExpression: 'pk = :pk',
      ReturnConsumedCapacity: 'TOTAL'
    }
    const res = await dynamoDB.query(queryParams).promise();
    if (res.Items?.length) {
      console.log(res)
      return APIResponse.success(200, 'Category retrieved!', res.Items)
    }
  }
  catch (err) {
    console.log(err);
    return APIResponse.error(500, err.message);
  }
}

