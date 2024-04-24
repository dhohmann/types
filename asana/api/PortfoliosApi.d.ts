/**
* Portfolios service.
* @module api/PortfoliosApi
* @version 3.0.4
*/
export class PortfoliosApi {
    /**
    * Constructs a new PortfoliosApi.
    * @alias module:api/PortfoliosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add a custom field to a portfolio
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     * @param {module:model/Object} body Information about the custom field setting.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addCustomFieldSettingForPortfolioWithHttpInfo(body: any, portfolio_gid: string): Promise<any>;
    /**
     * Add a custom field to a portfolio
     * Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldSettingResponseData}
     */
    addCustomFieldSettingForPortfolio(body: any, portfolio_gid: any): Promise<any>;
    /**
     * Add a portfolio item
     * Add an item to a portfolio. Returns an empty data block.
     * @param {module:model/Object} body Information about the item being inserted.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addItemForPortfolioWithHttpInfo(body: any, portfolio_gid: string): Promise<any>;
    /**
     * Add a portfolio item
     * Add an item to a portfolio. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the item being inserted.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addItemForPortfolio(body: any, portfolio_gid: any): Promise<any>;
    /**
     * Add users to a portfolio
     * Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.
     * @param {module:model/Object} body Information about the members being added.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addMembersForPortfolioWithHttpInfo(body: any, portfolio_gid: string, opts: any): Promise<any>;
    /**
     * Add users to a portfolio
     * Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being added.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    addMembersForPortfolio(body: any, portfolio_gid: any, opts: any): Promise<any>;
    /**
     * Create a portfolio
     * Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.
     * @param {module:model/Object} body The portfolio to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createPortfolioWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create a portfolio
     * Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may have some state (like the “Priority” custom field) which is automatically added to the portfolio when it is created. Portfolios created via our API will *not* be created with the same initial state to allow integrations to create their own starting state on a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The portfolio to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    createPortfolio(body: any, opts: any): Promise<any>;
    /**
     * Delete a portfolio
     * An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deletePortfolioWithHttpInfo(portfolio_gid: string): Promise<any>;
    /**
     * Delete a portfolio
     * An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deletePortfolio(portfolio_gid: any): Promise<any>;
    /**
     * Get portfolio items
     * Get a list of the items in compact form in a portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getItemsForPortfolioWithHttpInfo(portfolio_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get portfolio items
     * Get a list of the items in compact form in a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getItemsForPortfolio(portfolio_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a portfolio
     * Returns the complete portfolio record for a single portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfolioWithHttpInfo(portfolio_gid: string, opts: any): Promise<any>;
    /**
     * Get a portfolio
     * Returns the complete portfolio record for a single portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    getPortfolio(portfolio_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple portfolios
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     * @param {String} workspace The workspace or organization to filter portfolios on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.owner The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getPortfoliosWithHttpInfo(workspace: string, opts: {
        limit: number;
        offset: string;
        owner: string;
    }): Promise<any>;
    /**
     * Get multiple portfolios
     * Returns a list of the portfolios in compact representation that are owned by the current API user.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace The workspace or organization to filter portfolios on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.owner The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseArray}
     */
    getPortfolios(workspace: any, opts: {
        limit: number;
        offset: string;
        owner: string;
    }): Promise<any>;
    /**
     * Remove a custom field from a portfolio
     * Removes a custom field setting from a portfolio.
     * @param {module:model/Object} body Information about the custom field setting being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeCustomFieldSettingForPortfolioWithHttpInfo(body: any, portfolio_gid: string): Promise<any>;
    /**
     * Remove a custom field from a portfolio
     * Removes a custom field setting from a portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeCustomFieldSettingForPortfolio(body: any, portfolio_gid: any): Promise<any>;
    /**
     * Remove a portfolio item
     * Remove an item from a portfolio. Returns an empty data block.
     * @param {module:model/Object} body Information about the item being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeItemForPortfolioWithHttpInfo(body: any, portfolio_gid: string): Promise<any>;
    /**
     * Remove a portfolio item
     * Remove an item from a portfolio. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the item being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeItemForPortfolio(body: any, portfolio_gid: any): Promise<any>;
    /**
     * Remove users from a portfolio
     * Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.
     * @param {module:model/Object} body Information about the members being removed.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeMembersForPortfolioWithHttpInfo(body: any, portfolio_gid: string, opts: any): Promise<any>;
    /**
     * Remove users from a portfolio
     * Removes the specified list of users from members of the portfolio. Returns the updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    removeMembersForPortfolio(body: any, portfolio_gid: any, opts: any): Promise<any>;
    /**
     * Update a portfolio
     * An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.
     * @param {module:model/Object} body The updated fields for the portfolio.
     * @param {String} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updatePortfolioWithHttpInfo(body: any, portfolio_gid: string, opts: any): Promise<any>;
    /**
     * Update a portfolio
     * An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated portfolio record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the portfolio.
     * @param {<&vendorExtensions.x-jsdoc-type>} portfolio_gid Globally unique identifier for the portfolio.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PortfolioResponseData}
     */
    updatePortfolio(body: any, portfolio_gid: any, opts: any): Promise<any>;
}
