/**
* Jobs service.
* @module api/JobsApi
* @version 3.0.4
*/
export class JobsApi {
    /**
    * Constructs a new JobsApi.
    * @alias module:api/JobsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a job by id
     * Returns the full record for a job.
     * @param {String} job_gid Globally unique identifier for the job.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getJobWithHttpInfo(job_gid: string, opts: any): Promise<any>;
    /**
     * Get a job by id
     * Returns the full record for a job.
     * @param {<&vendorExtensions.x-jsdoc-type>} job_gid Globally unique identifier for the job.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    getJob(job_gid: any, opts: any): Promise<any>;
}
