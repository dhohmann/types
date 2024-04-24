/**
* StatusUpdates service.
* @module api/StatusUpdatesApi
* @version 3.0.4
*/
export class StatusUpdatesApi {
    /**
    * Constructs a new StatusUpdatesApi.
    * @alias module:api/StatusUpdatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a status update
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @param {module:model/Object} body The status update to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createStatusForObjectWithHttpInfo(body: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Create a status update
     * Creates a new status update on an object. Returns the full record of the newly created status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The status update to create.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseData}
     */
    createStatusForObject(body: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Delete a status update
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @param {String} status_update_gid The status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteStatusWithHttpInfo(status_update_gid: string): Promise<any>;
    /**
     * Delete a status update
     * Deletes a specific, existing status update.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} status_update_gid The status update to get.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteStatus(status_update_gid: any): Promise<any>;
    /**
     * Get a status update
     * Returns the complete record for a single status update.
     * @param {String} status_update_gid The status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStatusWithHttpInfo(status_update_gid: string, opts: any): Promise<any>;
    /**
     * Get a status update
     * Returns the complete record for a single status update.
     * @param {<&vendorExtensions.x-jsdoc-type>} status_update_gid The status update to get.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseData}
     */
    getStatus(status_update_gid: any, opts: any): Promise<any>;
    /**
     * Get status updates from an object
     * Returns the compact status update records for all updates on the object.
     * @param {String} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.created_since Only return statuses that have been created since the given time.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStatusesForObjectWithHttpInfo(parent: string, opts: {
        limit: number;
        offset: string;
        created_since: Date;
    }): Promise<any>;
    /**
     * Get status updates from an object
     * Returns the compact status update records for all updates on the object.
     * @param {<&vendorExtensions.x-jsdoc-type>} parent Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.created_since Only return statuses that have been created since the given time.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatusUpdateResponseArray}
     */
    getStatusesForObject(parent: any, opts: {
        limit: number;
        offset: string;
        created_since: Date;
    }): Promise<any>;
}
