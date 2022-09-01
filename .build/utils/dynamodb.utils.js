"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoDB = void 0;
var aws_sdk_1 = require("aws-sdk");
var config_1 = require("../config");
exports.dynamoDB = new aws_sdk_1.DynamoDB.DocumentClient({
    region: config_1.CONFIG.DYNAMO_DB_REGION,
    endpoint: config_1.CONFIG.DYNAMO_DB_ENDPOINT
});
//# sourceMappingURL=dynamodb.utils.js.map