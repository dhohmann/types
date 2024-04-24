/**
* ProjectMemberships service.
* @module api/ProjectMembershipsApi
* @version 3.0.4
*/
export class ProjectMembershipsApi {
    /**
    * Constructs a new ProjectMembershipsApi.
    * @alias module:api/ProjectMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a project membership
     * Returns the complete project record for a single project membership.
     * @param {String} project_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectMembershipWithHttpInfo(project_membership_gid: string, opts: any): Promise<any>;
    /**
     * Get a project membership
     * Returns the complete project record for a single project membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectMembershipNormalResponseData}
     */
    getProjectMembership(project_membership_gid: any, opts: any): Promise<any>;
    /**
     * Get memberships from a project
     * Returns the compact project membership records for the project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectMembershipsForProjectWithHttpInfo(project_gid: string, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a project
     * Returns the compact project membership records for the project.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectMembershipCompactArray}
     */
    getProjectMembershipsForProject(project_gid: any, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
}
