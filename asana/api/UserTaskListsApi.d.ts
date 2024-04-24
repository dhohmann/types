/**
* UserTaskLists service.
* @module api/UserTaskListsApi
* @version 3.0.4
*/
export class UserTaskListsApi {
    /**
    * Constructs a new UserTaskListsApi.
    * @alias module:api/UserTaskListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @param {String} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getUserTaskListWithHttpInfo(user_task_list_gid: string, opts: any): Promise<any>;
    /**
     * Get a user task list
     * Returns the full record for a user task list.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTaskListResponseData}
     */
    getUserTaskList(user_task_list_gid: any, opts: any): Promise<any>;
    /**
     * Get a user&#x27;s task list
     * Returns the full record for a user&#x27;s task list.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} workspace The workspace in which to get the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getUserTaskListForUserWithHttpInfo(user_gid: string, workspace: string, opts: any): Promise<any>;
    /**
     * Get a user&#x27;s task list
     * Returns the full record for a user&#x27;s task list.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace The workspace in which to get the user task list.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTaskListResponseData}
     */
    getUserTaskListForUser(user_gid: any, workspace: any, opts: any): Promise<any>;
}
