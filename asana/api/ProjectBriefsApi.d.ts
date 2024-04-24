/**
* ProjectBriefs service.
* @module api/ProjectBriefsApi
* @version 3.0.4
*/
export class ProjectBriefsApi {
    /**
    * Constructs a new ProjectBriefsApi.
    * @alias module:api/ProjectBriefsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a project brief
     * Creates a new project brief.  Returns the full record of the newly created project brief.
     * @param {module:model/Object} body The project brief to create.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectBriefWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Create a project brief
     * Creates a new project brief.  Returns the full record of the newly created project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project brief to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    createProjectBrief(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Delete a project brief
     * Deletes a specific, existing project brief.  Returns an empty data record.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectBriefWithHttpInfo(project_brief_gid: string): Promise<any>;
    /**
     * Delete a project brief
     * Deletes a specific, existing project brief.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProjectBrief(project_brief_gid: any): Promise<any>;
    /**
     * Get a project brief
     * Get the full record for a project brief.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectBriefWithHttpInfo(project_brief_gid: string, opts: any): Promise<any>;
    /**
     * Get a project brief
     * Get the full record for a project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    getProjectBrief(project_brief_gid: any, opts: any): Promise<any>;
    /**
     * Update a project brief
     * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
     * @param {module:model/Object} body The updated fields for the project brief.
     * @param {String} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateProjectBriefWithHttpInfo(body: any, project_brief_gid: string, opts: any): Promise<any>;
    /**
     * Update a project brief
     * An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated project brief record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the project brief.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_brief_gid Globally unique identifier for the project brief.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectBriefResponseData}
     */
    updateProjectBrief(body: any, project_brief_gid: any, opts: any): Promise<any>;
}
