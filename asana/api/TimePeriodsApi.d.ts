/**
* TimePeriods service.
* @module api/TimePeriodsApi
* @version 3.0.4
*/
export class TimePeriodsApi {
    /**
    * Constructs a new TimePeriodsApi.
    * @alias module:api/TimePeriodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @param {String} time_period_gid Globally unique identifier for the time period.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimePeriodWithHttpInfo(time_period_gid: string, opts: any): Promise<any>;
    /**
     * Get a time period
     * Returns the full record for a single time period.
     * @param {<&vendorExtensions.x-jsdoc-type>} time_period_gid Globally unique identifier for the time period.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimePeriodResponseData}
     */
    getTimePeriod(time_period_gid: any, opts: any): Promise<any>;
    /**
     * Get time periods
     * Returns compact time period records.
     * @param {String} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.start_on ISO 8601 date string
     * @param {Date} opts.end_on ISO 8601 date string
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTimePeriodsWithHttpInfo(workspace: string, opts: {
        limit: number;
        offset: string;
        start_on: Date;
        end_on: Date;
    }): Promise<any>;
    /**
     * Get time periods
     * Returns compact time period records.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Date} opts.start_on ISO 8601 date string
     * @param {Date} opts.end_on ISO 8601 date string
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TimePeriodResponseArray}
     */
    getTimePeriods(workspace: any, opts: {
        limit: number;
        offset: string;
        start_on: Date;
        end_on: Date;
    }): Promise<any>;
}