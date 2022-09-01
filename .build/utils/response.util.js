"use strict";
//import {sendEmail} from '../utils/sendemail'
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = void 0;
/**
 * @name APIResponse
 * @description Class used to identify the global API response format.
 */
var APIResponse = /** @class */ (function () {
    function APIResponse() {
    }
    /**
     * @name success
     * @param code
     * @param data Object or Array which contains the data that is returned to the user
     * @description Global response format. Used to create a response which contains user data and metadata such as sort and pagination
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    APIResponse.success = function (code, message, results, totalCount, extraData, lastEvaluatedKey) {
        var data = results instanceof Array ? results : [results !== null && results !== void 0 ? results : {}];
        var obj = {
            code: code,
            message: message !== null && message !== void 0 ? message : '',
            results: data,
            totalCount: totalCount ? totalCount : data.length,
            // FIXME: include extraData in results after specifying type (temporarily added only for listRequest API)
            extraData: extraData,
            lastEvaluatedKey: lastEvaluatedKey ? lastEvaluatedKey : undefined
        };
        return {
            statusCode: code,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Max-Age': 600
            },
            body: JSON.stringify(obj)
        };
    };
    /**
     * @name error
     * @param code Error code
     * @param message Error Message
     * @param errors Specific errors (Optional)
     * @description Global error response format.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    APIResponse.error = function (code, message, errors) {
        var obj = {
            code: code,
            message: message
        };
        if (errors !== null) {
            // allow anything here, not just Arrays
            obj.errors = errors;
        }
        return {
            statusCode: code,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(obj)
        };
    };
    return APIResponse;
}());
exports.APIResponse = APIResponse;
//# sourceMappingURL=response.util.js.map