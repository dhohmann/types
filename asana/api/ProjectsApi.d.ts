/**
* Projects service.
* @module api/ProjectsApi
* @version 3.0.4
*/
export class ProjectsApi {
    /**
    * Constructs a new ProjectsApi.
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add a custom field to a project
     * Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.
     * @param {module:model/Object} body Information about the custom field setting.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addCustomFieldSettingForProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Add a custom field to a project
     * Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldSettingResponseData}
     */
    addCustomFieldSettingForProject(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Add followers to a project
     * Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation. Returns the updated project record.
     * @param {module:model/Object} body Information about the followers being added.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addFollowersForProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Add followers to a project
     * Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation. Returns the updated project record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the followers being added.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    addFollowersForProject(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Add users to a project
     * Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user&#x27;s default notification settings (i.e., in the \&quot;Notifcations\&quot; tab of \&quot;My Profile Settings\&quot;) will override this endpoint&#x27;s default behavior of setting \&quot;Tasks added\&quot; notifications to &#x60;false&#x60;. Returns the updated project record.
     * @param {module:model/Object} body Information about the members being added.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addMembersForProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Add users to a project
     * Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user&#x27;s default notification settings (i.e., in the \&quot;Notifcations\&quot; tab of \&quot;My Profile Settings\&quot;) will override this endpoint&#x27;s default behavior of setting \&quot;Tasks added\&quot; notifications to &#x60;false&#x60;. Returns the updated project record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being added.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    addMembersForProject(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Create a project
     * Create a new project in a workspace or team.  Every project is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the &#x60;workspace&#x60; parameter regardless of whether or not it is an organization.  If the workspace for your project is an organization, you must also supply a &#x60;team&#x60; to share the project with.  Returns the full record of the newly created project.
     * @param {module:model/Object} body The project to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create a project
     * Create a new project in a workspace or team.  Every project is required to be created in a specific workspace or organization, and this cannot be changed once set. Note that you can use the &#x60;workspace&#x60; parameter regardless of whether or not it is an organization.  If the workspace for your project is an organization, you must also supply a &#x60;team&#x60; to share the project with.  Returns the full record of the newly created project.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    createProject(body: any, opts: any): Promise<any>;
    /**
     * Create a project in a team
     * Creates a project shared with the given team.  Returns the full record of the newly created project.
     * @param {module:model/Object} body The new project to create.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectForTeamWithHttpInfo(body: any, team_gid: string, opts: any): Promise<any>;
    /**
     * Create a project in a team
     * Creates a project shared with the given team.  Returns the full record of the newly created project.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The new project to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    createProjectForTeam(body: any, team_gid: any, opts: any): Promise<any>;
    /**
     * Create a project in a workspace
     * Creates a project in the workspace.  If the workspace for your project is an organization, you must also supply a team to share the project with.  Returns the full record of the newly created project.
     * @param {module:model/Object} body The new project to create.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createProjectForWorkspaceWithHttpInfo(body: any, workspace_gid: string, opts: any): Promise<any>;
    /**
     * Create a project in a workspace
     * Creates a project in the workspace.  If the workspace for your project is an organization, you must also supply a team to share the project with.  Returns the full record of the newly created project.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The new project to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    createProjectForWorkspace(body: any, workspace_gid: any, opts: any): Promise<any>;
    /**
     * Delete a project
     * A specific, existing project can be deleted by making a DELETE request on the URL for that project.  Returns an empty data record.
     * @param {String} project_gid Globally unique identifier for the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteProjectWithHttpInfo(project_gid: string): Promise<any>;
    /**
     * Delete a project
     * A specific, existing project can be deleted by making a DELETE request on the URL for that project.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteProject(project_gid: any): Promise<any>;
    /**
     * Duplicate a project
     * Creates and returns a job that will asynchronously handle the duplication.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the duplicate&#x27;s name and the elements that will be duplicated.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    duplicateProjectWithHttpInfo(project_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Duplicate a project
     * Creates and returns a job that will asynchronously handle the duplication.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body Describes the duplicate&#x27;s name and the elements that will be duplicated.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    duplicateProject(project_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Get a project
     * Returns the complete project record for a single project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectWithHttpInfo(project_gid: string, opts: any): Promise<any>;
    /**
     * Get a project
     * Returns the complete project record for a single project.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    getProject(project_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple projects
     * Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned. *Note: This endpoint may timeout for large domains. Try filtering by team!*
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.workspace The workspace or organization to filter projects on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectsWithHttpInfo(opts: {
        limit: number;
        offset: string;
        workspace: string;
        team: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get multiple projects
     * Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned. *Note: This endpoint may timeout for large domains. Try filtering by team!*
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.workspace The workspace or organization to filter projects on.
     * @param {String} opts.team The team to filter projects on.
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getProjects(opts: {
        limit: number;
        offset: string;
        workspace: string;
        team: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get projects a task is in
     * Returns a compact representation of all of the projects the task is in.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectsForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get projects a task is in
     * Returns a compact representation of all of the projects the task is in.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getProjectsForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a team&#x27;s projects
     * Returns the compact project records for all projects in the team.
     * @param {String} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectsForTeamWithHttpInfo(team_gid: string, opts: {
        limit: number;
        offset: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get a team&#x27;s projects
     * Returns the compact project records for all projects in the team.
     * @param {<&vendorExtensions.x-jsdoc-type>} team_gid Globally unique identifier for the team.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getProjectsForTeam(team_gid: any, opts: {
        limit: number;
        offset: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get all projects in a workspace
     * Returns the compact project records for all projects in the workspace. *Note: This endpoint may timeout for large domains. Prefer the &#x60;/teams/{team_gid}/projects&#x60; endpoint.*
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getProjectsForWorkspaceWithHttpInfo(workspace_gid: string, opts: {
        limit: number;
        offset: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get all projects in a workspace
     * Returns the compact project records for all projects in the workspace. *Note: This endpoint may timeout for large domains. Prefer the &#x60;/teams/{team_gid}/projects&#x60; endpoint.*
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Boolean} opts.archived Only return projects whose &#x60;archived&#x60; field takes on the value of this parameter.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseArray}
     */
    getProjectsForWorkspace(workspace_gid: any, opts: {
        limit: number;
        offset: string;
        archived: boolean;
    }): Promise<any>;
    /**
     * Get task count of a project
     * Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/inputoutput-options) using &#x60;opt_fields&#x60; to get any information from this endpoint.  This endpoint has an additional [rate limit](/docs/rate-limits) and each field counts especially high against our [cost limits](/docs/rate-limits#cost-limits).  Milestones are just tasks, so they are included in the &#x60;num_tasks&#x60;, &#x60;num_incomplete_tasks&#x60;, and &#x60;num_completed_tasks&#x60; counts.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskCountsForProjectWithHttpInfo(project_gid: string, opts: any): Promise<any>;
    /**
     * Get task count of a project
     * Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/inputoutput-options) using &#x60;opt_fields&#x60; to get any information from this endpoint.  This endpoint has an additional [rate limit](/docs/rate-limits) and each field counts especially high against our [cost limits](/docs/rate-limits#cost-limits).  Milestones are just tasks, so they are included in the &#x60;num_tasks&#x60;, &#x60;num_incomplete_tasks&#x60;, and &#x60;num_completed_tasks&#x60; counts.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskCountResponseData}
     */
    getTaskCountsForProject(project_gid: any, opts: any): Promise<any>;
    /**
     * Create a project template from a project
     * Creates and returns a job that will asynchronously handle the project template creation. Note that while the resulting project template can be accessed with the API, it won&#x27;t be visible in the Asana UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).
     * @param {module:model/Object} body Describes the inputs used for creating a project template, such as the resulting project template&#x27;s name, which team it should be created in.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    projectSaveAsTemplateWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Create a project template from a project
     * Creates and returns a job that will asynchronously handle the project template creation. Note that while the resulting project template can be accessed with the API, it won&#x27;t be visible in the Asana UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).
     * @param {<&vendorExtensions.x-jsdoc-type>} body Describes the inputs used for creating a project template, such as the resulting project template&#x27;s name, which team it should be created in.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    projectSaveAsTemplate(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Remove a custom field from a project
     * Removes a custom field setting from a project.
     * @param {module:model/Object} body Information about the custom field setting being removed.
     * @param {String} project_gid Globally unique identifier for the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeCustomFieldSettingForProjectWithHttpInfo(body: any, project_gid: string): Promise<any>;
    /**
     * Remove a custom field from a project
     * Removes a custom field setting from a project.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the custom field setting being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeCustomFieldSettingForProject(body: any, project_gid: any): Promise<any>;
    /**
     * Remove followers from a project
     * Removes the specified list of users from following the project, this will not affect project membership status. Returns the updated project record.
     * @param {module:model/Object} body Information about the followers being removed.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeFollowersForProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Remove followers from a project
     * Removes the specified list of users from following the project, this will not affect project membership status. Returns the updated project record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the followers being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    removeFollowersForProject(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Remove users from a project
     * Removes the specified list of users from members of the project. Returns the updated project record.
     * @param {module:model/Object} body Information about the members being removed.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeMembersForProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Remove users from a project
     * Removes the specified list of users from members of the project. Returns the updated project record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Information about the members being removed.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    removeMembersForProject(body: any, project_gid: any, opts: any): Promise<any>;
    /**
     * Update a project
     * A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated project record.
     * @param {module:model/Object} body The updated fields for the project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateProjectWithHttpInfo(body: any, project_gid: string, opts: any): Promise<any>;
    /**
     * Update a project
     * A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated project record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the project.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectResponseData}
     */
    updateProject(body: any, project_gid: any, opts: any): Promise<any>;
}
