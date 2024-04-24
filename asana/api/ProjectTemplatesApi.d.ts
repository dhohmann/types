/**
* ProjectTemplates service.
* @module api/ProjectTemplatesApi
* @version 3.0.4
*/
export class ProjectTemplatesApi {
    /**
    * Constructs a new ProjectTemplatesApi.
    * @alias module:api/ProjectTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete a project template
     * A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectTemplateWithHttpInfo(project_template_gid: string): Promise<any>;
    /**
     * Delete a project template
     * A specific, existing project template can be deleted by making a DELETE request on the URL for that project template.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProjectTemplate(project_template_gid: any): Promise<any>;
    /**
     * Get a project template
     * Returns the complete project template record for a single project template.
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplateWithHttpInfo(project_template_gid: string, opts: any): Promise<any>;
    /**
     * Get a project template
     * Returns the complete project template record for a single project template.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseData}
     */
    getProjectTemplate(project_template_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple project templates
     * Returns the compact project template records for all project templates in the given team or workspace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplatesWithHttpInfo(opts: {
        workspace: string;
        team: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get multiple project templates
     * Returns the compact project template records for all project templates in the given team or workspace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workspace The workspace to filter results on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseArray}
     */
    getProjectTemplates(opts: {
        workspace: string;
        team: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a team&#x27;s project templates
     * Returns the compact project template records for all project templates in the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectTemplatesForTeamWithHttpInfo(team_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a team&#x27;s project templates
     * Returns the compact project template records for all project templates in the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectTemplateResponseArray}
     */
    getProjectTemplatesForTeam(team_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Instantiate a project from a project template
     * Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the &#x60;gid&#x60; from the object in the &#x60;requested_dates&#x60; array. This &#x60;gid&#x60; should be used in &#x60;requested_dates&#x60; to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._
     * @param {String} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    instantiateProjectWithHttpInfo(project_template_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Instantiate a project from a project template
     * Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recommended to first make a request to [get a project template](/reference/getprojecttemplate). Then, from the response, copy the &#x60;gid&#x60; from the object in the &#x60;requested_dates&#x60; array. This &#x60;gid&#x60; should be used in &#x60;requested_dates&#x60; to instantiate a project.  _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/reference/workspaces) parameter._
     * @param {<&vendorExtensions.x-jsdoc-type>} project_template_gid Globally unique identifier for the project template.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the inputs used for instantiating a project, such as the resulting project&#x27;s name, which team it should be created in, and values for date variables.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    instantiateProject(project_template_gid: any, opts: {
        body: any;
    }): Promise<any>;
}
