"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
var path_1 = require("path");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, '../../.env') });
var _a = process.env, ENV = _a.ENV, STAGE = _a.STAGE, AWS_ACCOUNT_ID = _a.AWS_ACCOUNT_ID, AWS_REGION = _a.AWS_REGION, SERVERLESS_SERVICE_NAME = _a.SERVERLESS_SERVICE_NAME, COGNITO_ENDPOINT = _a.COGNITO_ENDPOINT, COGNITO_POOL_ARN = _a.COGNITO_POOL_ARN, COGNITO_POOL_ID = _a.COGNITO_POOL_ID, COGNITO_POOL_CLIENT_ID = _a.COGNITO_POOL_CLIENT_ID, COGNITO_REGION = _a.COGNITO_REGION, DYNAMO_DB_ENDPOINT = _a.DYNAMO_DB_ENDPOINT, DYNAMO_DB_REGION = _a.DYNAMO_DB_REGION;
exports.CONFIG = {
    ENV: ENV || 'dev',
    STAGE: STAGE || 'dev',
    SERVERLESS_SERVICE_NAME: SERVERLESS_SERVICE_NAME,
    COGNITO_POOL_ID: COGNITO_POOL_ARN === null || COGNITO_POOL_ARN === void 0 ? void 0 : COGNITO_POOL_ARN.substring(COGNITO_POOL_ARN.lastIndexOf('/') + 1),
    COGNITO_REGION: COGNITO_REGION,
    COGNITO_ENDPOINT: COGNITO_ENDPOINT,
    COGNITO_POOL_CLIENT_ID: COGNITO_POOL_CLIENT_ID || '',
    DYNAMO_DB_REGION: DYNAMO_DB_REGION || 'localhost',
    DYNAMO_DB_ENDPOINT: DYNAMO_DB_ENDPOINT || 'http://localhost:8000'
};
//# sourceMappingURL=index.js.map