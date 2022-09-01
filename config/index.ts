import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

const {
  ENV,
  STAGE,
  AWS_ACCOUNT_ID,
  AWS_REGION,
  SERVERLESS_SERVICE_NAME,
  COGNITO_ENDPOINT,
  COGNITO_POOL_ARN,
  COGNITO_POOL_ID,
  COGNITO_POOL_CLIENT_ID,
  COGNITO_REGION,
  DYNAMO_DB_ENDPOINT,
  DYNAMO_DB_REGION
} = process.env;

export const CONFIG = {
  ENV: ENV || 'dev',
  STAGE: STAGE || 'dev',

  SERVERLESS_SERVICE_NAME: SERVERLESS_SERVICE_NAME as string,

  COGNITO_POOL_ID: COGNITO_POOL_ARN!?.substring(
    COGNITO_POOL_ARN!.lastIndexOf('/') + 1
  ),
  COGNITO_REGION: COGNITO_REGION,
  COGNITO_ENDPOINT: COGNITO_ENDPOINT,
  COGNITO_POOL_CLIENT_ID:
    COGNITO_POOL_CLIENT_ID || '',

  DYNAMO_DB_REGION: DYNAMO_DB_REGION || 'localhost',
  DYNAMO_DB_ENDPOINT: DYNAMO_DB_ENDPOINT || 'http://localhost:8000'
};
