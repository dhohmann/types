/**
* WorkspaceMemberships service.
* @module api/WorkspaceMembershipsApi
* @version 3.0.4
*/
export class WorkspaceMembershipsApi {
    /**
    * Constructs a new WorkspaceMembershipsApi.
    * @alias module:api/WorkspaceMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a workspace membership
     * Returns the complete workspace record for a single workspace membership.
     * @param {String} workspace_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getWorkspaceMembershipWithHttpInfo(workspace_membership_gid: string, opts: any): Promise<any>;
    /**
     * Get a workspace membership
     * Returns the complete workspace record for a single workspace membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceMembershipResponseData}
     */
    getWorkspaceMembership(workspace_membership_gid: any, opts: any): Promise<any>;
    /**
     * Get workspace memberships for a user
     * Returns the compact workspace membership records for the user.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getWorkspaceMembershipsForUserWithHttpInfo(user_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get workspace memberships for a user
     * Returns the compact workspace membership records for the user.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceMembershipResponseArray}
     */
    getWorkspaceMembershipsForUser(user_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get the workspace memberships for a workspace
     * Returns the compact workspace membership records for the workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getWorkspaceMembershipsForWorkspaceWithHttpInfo(workspace_gid: string, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get the workspace memberships for a workspace
     * Returns the compact workspace membership records for the workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkspaceMembershipResponseArray}
     */
    getWorkspaceMembershipsForWorkspace(workspace_gid: any, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
}
