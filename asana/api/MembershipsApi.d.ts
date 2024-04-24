/**
* Memberships service.
* @module api/MembershipsApi
* @version 3.0.4
*/
export class MembershipsApi {
    /**
    * Constructs a new MembershipsApi.
    * @alias module:api/MembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a membership
     * Creates a new membership in a &#x60;goal&#x60; or &#x60;project&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60; or &#x60;projects&#x60;.  Returns the full record of the newly created membership.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The updated fields for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createMembershipWithHttpInfo(opts: {
        body: any;
    }): Promise<any>;
    /**
     * Create a membership
     * Creates a new membership in a &#x60;goal&#x60; or &#x60;project&#x60;. &#x60;Teams&#x60; or &#x60;users&#x60; can be a member of &#x60;goals&#x60; or &#x60;projects&#x60;.  Returns the full record of the newly created membership.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The updated fields for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseData}
     */
    createMembership(opts: {
        body: any;
    }): Promise<any>;
    /**
     * Delete a membership
     * A specific, existing membership for a &#x60;goal&#x60; or &#x60;project&#x60; can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteMembershipWithHttpInfo(membership_gid: string): Promise<any>;
    /**
     * Delete a membership
     * A specific, existing membership for a &#x60;goal&#x60; or &#x60;project&#x60; can be deleted by making a &#x60;DELETE&#x60; request on the URL for that membership.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteMembership(membership_gid: any): Promise<any>;
    /**
     * Get a membership
     * Returns compact &#x60;project_membership&#x60; record for a single membership. &#x60;GET&#x60; only supports project memberships currently
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getMembershipWithHttpInfo(membership_gid: string, opts: any): Promise<any>;
    /**
     * Get a membership
     * Returns compact &#x60;project_membership&#x60; record for a single membership. &#x60;GET&#x60; only supports project memberships currently
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectMembershipCompactResponseData}
     */
    getMembership(membership_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple memberships
     * Returns compact &#x60;goal_membership&#x60; or &#x60;project_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;goal&#x60; or &#x60;project&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for &#x60;goal&#x60; or &#x60;project&#x60;.
     * @param {String} opts.member Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getMembershipsWithHttpInfo(opts: {
        parent: string;
        member: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get multiple memberships
     * Returns compact &#x60;goal_membership&#x60; or &#x60;project_membership&#x60; records. The possible types for &#x60;parent&#x60; in this request are &#x60;goal&#x60; or &#x60;project&#x60;. An additional member (user GID or team GID) can be passed in to filter to a specific membership.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for &#x60;goal&#x60; or &#x60;project&#x60;.
     * @param {String} opts.member Globally unique identifier for &#x60;team&#x60; or &#x60;user&#x60;.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseArray}
     */
    getMemberships(opts: {
        parent: string;
        member: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Update a membership
     * An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;goals&#x60; and &#x60;projects&#x60; can be updated.  Returns the full record of the updated membership.
     * @param {module:model/Object} body The membership to update.
     * @param {String} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateMembershipWithHttpInfo(body: any, membership_gid: string): Promise<any>;
    /**
     * Update a membership
     * An existing membership can be updated by making a &#x60;PUT&#x60; request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. Memberships on &#x60;goals&#x60; and &#x60;projects&#x60; can be updated.  Returns the full record of the updated membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The membership to update.
     * @param {<&vendorExtensions.x-jsdoc-type>} membership_gid Globally unique identifier for the membership.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MembershipResponseData}
     */
    updateMembership(body: any, membership_gid: any): Promise<any>;
}
