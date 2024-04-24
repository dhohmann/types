/**
* TimeTrackingEntries service.
* @module api/TimeTrackingEntriesApi
* @version 3.0.4
*/
export class TimeTrackingEntriesApi {
    /**
    * Constructs a new TimeTrackingEntriesApi.
    * @alias module:api/TimeTrackingEntriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a time tracking entry
     * Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.
     * @param {module:model/Object} body Information about the time tracking entry.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createTimeTrackingEntryWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Create a time tracking entry
     * Creates a time tracking entry on a given task.  Returns the record of the newly created time tracking entry.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the time tracking entry.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeTrackingEntryBaseData}
     */
    createTimeTrackingEntry(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Delete a time tracking entry
     * A specific, existing time tracking entry can be deleted by making a &#x60;DELETE&#x60; request on the URL for that time tracking entry.  Returns an empty data record.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteTimeTrackingEntryWithHttpInfo(time_tracking_entry_gid: string): Promise<any>;
    /**
     * Delete a time tracking entry
     * A specific, existing time tracking entry can be deleted by making a &#x60;DELETE&#x60; request on the URL for that time tracking entry.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteTimeTrackingEntry(time_tracking_entry_gid: any): Promise<any>;
    /**
     * Get time tracking entries for a task
     * Returns time tracking entries for a given task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimeTrackingEntriesForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get time tracking entries for a task
     * Returns time tracking entries for a given task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeTrackingEntryCompactArray}
     */
    getTimeTrackingEntriesForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a time tracking entry
     * Returns the complete time tracking entry record for a single time tracking entry.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimeTrackingEntryWithHttpInfo(time_tracking_entry_gid: string, opts: any): Promise<any>;
    /**
     * Get a time tracking entry
     * Returns the complete time tracking entry record for a single time tracking entry.
     * @param {<&vendorExtensions.x-jsdoc-type>} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeTrackingEntryBaseData}
     */
    getTimeTrackingEntry(time_tracking_entry_gid: any, opts: any): Promise<any>;
    /**
     * Update a time tracking entry
     * A specific, existing time tracking entry can be updated by making a &#x60;PUT&#x60; request on the URL for that time tracking entry. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.
     * @param {module:model/Object} body The updated fields for the time tracking entry.
     * @param {String} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateTimeTrackingEntryWithHttpInfo(body: any, time_tracking_entry_gid: string, opts: any): Promise<any>;
    /**
     * Update a time tracking entry
     * A specific, existing time tracking entry can be updated by making a &#x60;PUT&#x60; request on the URL for that time tracking entry. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated time tracking entry record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the time tracking entry.
     * @param {<&vendorExtensions.x-jsdoc-type>} time_tracking_entry_gid Globally unique identifier for the time tracking entry.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimeTrackingEntryBaseData}
     */
    updateTimeTrackingEntry(body: any, time_tracking_entry_gid: any, opts: any): Promise<any>;
}
