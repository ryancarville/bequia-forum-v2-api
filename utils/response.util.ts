//import {sendEmail} from '../utils/sendemail'

interface FailBody {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
}

interface SuccessBody {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results?: any;
  extraData?: any;
  totalCount?: number;
  lastEvaluatedKey?: any;
}

/**
 * @name APIResponse
 * @description Class used to identify the global API response format.
 */
export class APIResponse {
  /**
   * @name success
   * @param code
   * @param data Object or Array which contains the data that is returned to the user
   * @description Global response format. Used to create a response which contains user data and metadata such as sort and pagination
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static success(
    code: number,
    message?: string,
    results?: Record<string, any>,
    totalCount?: number,
    extraData?: any,
    lastEvaluatedKey?: any
  ) {
    const data = results instanceof Array ? results : [results ?? {}];
    const obj: SuccessBody = {
      code: code,
      message: message ?? '',
      results: data,
      totalCount: totalCount ? totalCount : data.length,
      // FIXME: include extraData in results after specifying type (temporarily added only for listRequest API)
      extraData,
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
  }

  /**
   * @name error
   * @param code Error code
   * @param message Error Message
   * @param errors Specific errors (Optional)
   * @description Global error response format.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static error(code: number, message: string, errors?: any) {
    const obj: FailBody = {
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
  }
}
