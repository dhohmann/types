/**
* TeamMemberships service.
* @module api/TeamMembershipsApi
* @version 3.0.4
*/
export class TeamMembershipsApi {
    /**
    * Constructs a new TeamMembershipsApi.
    * @alias module:api/TeamMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a team membership
     * Returns the complete team membership record for a single team membership.
     * @param {String} team_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamMembershipWithHttpInfo(team_membership_gid: string, opts: any): Promise<any>;
    /**
     * Get a team membership
     * Returns the complete team membership record for a single team membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMembershipResponseData}
     */
    getTeamMembership(team_membership_gid: any, opts: any): Promise<any>;
    /**
     * Get team memberships
     * Returns compact team membership records.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. This parameter must be used with the workspace parameter.
     * @param {String} opts.workspace Globally unique identifier for the workspace. This parameter must be used with the user parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamMembershipsWithHttpInfo(opts: {
        limit: number;
        offset: string;
        team: string;
        user: string;
        workspace: string;
    }): Promise<any>;
    /**
     * Get team memberships
     * Returns compact team membership records.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user. This parameter must be used with the workspace parameter.
     * @param {String} opts.workspace Globally unique identifier for the workspace. This parameter must be used with the user parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMembershipResponseArray}
     */
    getTeamMemberships(opts: {
        limit: number;
        offset: string;
        team: string;
        user: string;
        workspace: string;
    }): Promise<any>;
    /**
     * Get memberships from a team
     * Returns the compact team memberships for the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamMembershipsForTeamWithHttpInfo(team_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a team
     * Returns the compact team memberships for the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMembershipResponseArray}
     */
    getTeamMembershipsForTeam(team_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a user
     * Returns the compact team membership records for the user.
     * @param {String} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {String} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTeamMembershipsForUserWithHttpInfo(user_gid: string, workspace: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a user
     * Returns the compact team membership records for the user.
     * @param {<&vendorExtensions.x-jsdoc-type>} user_gid A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace Globally unique identifier for the workspace.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TeamMembershipResponseArray}
     */
    getTeamMembershipsForUser(user_gid: any, workspace: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
}
