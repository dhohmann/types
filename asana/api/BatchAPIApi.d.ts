/**
* BatchAPI service.
* @module api/BatchAPIApi
* @version 3.0.4
*/
export class BatchAPIApi {
    /**
    * Constructs a new BatchAPIApi.
    * @alias module:api/BatchAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Submit parallel requests
     * Make multiple requests in parallel to Asana&#x27;s API.
     * @param {module:model/Object} body The requests to batch together via the Batch API.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createBatchRequestWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Submit parallel requests
     * Make multiple requests in parallel to Asana&#x27;s API.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The requests to batch together via the Batch API.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchResponseArray}
     */
    createBatchRequest(body: any, opts: any): Promise<any>;
}
