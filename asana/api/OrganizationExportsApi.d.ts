/**
* OrganizationExports service.
* @module api/OrganizationExportsApi
* @version 3.0.4
*/
export class OrganizationExportsApi {
    /**
    * Constructs a new OrganizationExportsApi.
    * @alias module:api/OrganizationExportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create an organization export request
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     * @param {module:model/Object} body The organization to export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createOrganizationExportWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create an organization export request
     * This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The organization to export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationExportResponseData}
     */
    createOrganizationExport(body: any, opts: any): Promise<any>;
    /**
     * Get details on an org export request
     * Returns details of a previously-requested Organization export.
     * @param {String} organization_export_gid Globally unique identifier for the organization export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getOrganizationExportWithHttpInfo(organization_export_gid: string, opts: any): Promise<any>;
    /**
     * Get details on an org export request
     * Returns details of a previously-requested Organization export.
     * @param {<&vendorExtensions.x-jsdoc-type>} organization_export_gid Globally unique identifier for the organization export.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationExportResponseData}
     */
    getOrganizationExport(organization_export_gid: any, opts: any): Promise<any>;
}
