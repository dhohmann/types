/**
* TaskTemplates service.
* @module api/TaskTemplatesApi
* @version 3.0.4
*/
export class TaskTemplatesApi {
    /**
    * Constructs a new TaskTemplatesApi.
    * @alias module:api/TaskTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete a task template
     * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteTaskTemplateWithHttpInfo(task_template_gid: string): Promise<any>;
    /**
     * Delete a task template
     * A specific, existing task template can be deleted by making a DELETE request on the URL for that task template. Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteTaskTemplate(task_template_gid: any): Promise<any>;
    /**
     * Get a task template
     * Returns the complete task template record for a single task template.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskTemplateWithHttpInfo(task_template_gid: string, opts: any): Promise<any>;
    /**
     * Get a task template
     * Returns the complete task template record for a single task template.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskTemplateResponseData}
     */
    getTaskTemplate(task_template_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple task templates
     * Returns the compact task template records for some filtered set of task templates. You must specify a &#x60;project&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.project The project to filter task templates on.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskTemplatesWithHttpInfo(opts: {
        limit: number;
        offset: string;
        project: string;
    }): Promise<any>;
    /**
     * Get multiple task templates
     * Returns the compact task template records for some filtered set of task templates. You must specify a &#x60;project&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.project The project to filter task templates on.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskTemplateResponseArray}
     */
    getTaskTemplates(opts: {
        limit: number;
        offset: string;
        project: string;
    }): Promise<any>;
    /**
     * Instantiate a task from a task template
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @param {String} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a task - the task&#x27;s name.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    instantiateTaskWithHttpInfo(task_template_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Instantiate a task from a task template
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_template_gid Globally unique identifier for the task template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a task - the task&#x27;s name.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    instantiateTask(task_template_gid: any, opts: {
        body: any;
    }): Promise<any>;
}
