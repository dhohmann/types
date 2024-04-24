/**
* PortfolioMemberships service.
* @module api/PortfolioMembershipsApi
* @version 3.0.4
*/
export class PortfolioMembershipsApi {
    /**
    * Constructs a new PortfolioMembershipsApi.
    * @alias module:api/PortfolioMembershipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get a portfolio membership
     * Returns the complete portfolio record for a single portfolio membership.
     * @param {String} portfolio_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipWithHttpInfo(portfolio_membership_gid: string, opts: any): Promise<any>;
    /**
     * Get a portfolio membership
     * Returns the complete portfolio record for a single portfolio membership.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_membership_gid
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseData}
     */
    getPortfolioMembership(portfolio_membership_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple portfolio memberships
     * Returns a list of portfolio memberships in compact representation. You must specify &#x60;portfolio&#x60;, &#x60;portfolio&#x60; and &#x60;user&#x60;, or &#x60;workspace&#x60; and &#x60;user&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio The portfolio to filter results on.
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipsWithHttpInfo(opts: {
        portfolio: string;
        workspace: string;
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get multiple portfolio memberships
     * Returns a list of portfolio memberships in compact representation. You must specify &#x60;portfolio&#x60;, &#x60;portfolio&#x60; and &#x60;user&#x60;, or &#x60;workspace&#x60; and &#x60;user&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio The portfolio to filter results on.
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseArray}
     */
    getPortfolioMemberships(opts: {
        portfolio: string;
        workspace: string;
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a portfolio
     * Returns the compact portfolio membership records for the portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioMembershipsForPortfolioWithHttpInfo(portfolio_gid: string, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get memberships from a portfolio
     * Returns the compact portfolio membership records for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user A string identifying a user. This can either be the string \&quot;me\&quot;, an email, or the gid of a user.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioMembershipResponseArray}
     */
    getPortfolioMembershipsForPortfolio(portfolio_gid: any, opts: {
        user: string;
        limit: number;
        offset: string;
    }): Promise<any>;
}
