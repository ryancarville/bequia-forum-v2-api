import { DynamoDB } from "aws-sdk"
import { CONFIG } from "../config"

export const dynamoDB = new DynamoDB.DocumentClient({
  region: CONFIG.DYNAMO_DB_REGION,
  endpoint: CONFIG.DYNAMO_DB_ENDPOINT
});