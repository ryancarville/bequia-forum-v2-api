import { DynamoDB } from "aws-sdk"
import { Table_Names } from "../../types/dynamoDB.types"
import { dynamoDB } from "../../utils/dynamodb.utils"
import { APIResponse } from "../../utils/response.util"

/**
 * @description return all forum categories
 * @returns collection of all forum categories
 */
export const listCategories = async () => {
  try {
    const queryParams: DynamoDB.DocumentClient.QueryInput = {
      TableName: Table_Names.CATEGORIES,
      // AttributesToGet: ['title', 'description', 'numOfPosts', 'numOfThreads'],
      ReturnConsumedCapacity: 'TOTAL',
    }

    const results = await dynamoDB.scan(queryParams).promise();
    console.log('results: ', results.Items);
    if (!!results.Items) {

      const mappedRes = results.Items.map(item => {
        item.id = item.pk
        delete item.pk;
        return item;
      })
      return APIResponse.success(200, 'All categories retrieved!', mappedRes)
    }
  }
  catch(err) {
    console.log(err)
    return APIResponse.error(err.statusCode, err.message);
  }
}
