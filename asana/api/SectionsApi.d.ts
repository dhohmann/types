/**
* Sections service.
* @module api/SectionsApi
* @version 3.0.4
*/
export class SectionsApi {
    /**
    * Constructs a new SectionsApi.
    * @alias module:api/SectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add task to section
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.  This does not work for separators (tasks with the resource_subtype of section).
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The task and optionally the insert location.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addTaskForSectionWithHttpInfo(section_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Add task to section
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.  This does not work for separators (tasks with the resource_subtype of section).
     * @param {<&vendorExtensions.x-jsdoc-type>} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The task and optionally the insert location.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addTaskForSection(section_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Create a section in a project
     * Creates a new section in a project. Returns the full record of the newly created section.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createSectionForProjectWithHttpInfo(project_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Create a section in a project
     * Creates a new section in a project. Returns the full record of the newly created section.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionResponseData}
     */
    createSectionForProject(project_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Delete a section
     * A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections must be empty to be deleted.  The last remaining section cannot be deleted.  Returns an empty data block.
     * @param {String} section_gid The globally unique identifier for the section.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteSectionWithHttpInfo(section_gid: string): Promise<any>;
    /**
     * Delete a section
     * A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections must be empty to be deleted.  The last remaining section cannot be deleted.  Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} section_gid The globally unique identifier for the section.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteSection(section_gid: any): Promise<any>;
    /**
     * Get a section
     * Returns the complete record for a single section.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getSectionWithHttpInfo(section_gid: string, opts: any): Promise<any>;
    /**
     * Get a section
     * Returns the complete record for a single section.
     * @param {<&vendorExtensions.x-jsdoc-type>} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionResponseData}
     */
    getSection(section_gid: any, opts: any): Promise<any>;
    /**
     * Get sections in a project
     * Returns the compact records for all sections in the specified project.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getSectionsForProjectWithHttpInfo(project_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get sections in a project
     * Returns the compact records for all sections in the specified project.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionResponseArray}
     */
    getSectionsForProject(project_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Move or Insert sections
     * Move sections relative to each other. One of &#x60;before_section&#x60; or &#x60;after_section&#x60; is required.  Sections cannot be moved between projects.  Returns an empty data block.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section&#x27;s move action.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    insertSectionForProjectWithHttpInfo(project_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Move or Insert sections
     * Move sections relative to each other. One of &#x60;before_section&#x60; or &#x60;after_section&#x60; is required.  Sections cannot be moved between projects.  Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section&#x27;s move action.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    insertSectionForProject(project_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update a section
     * A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the &#x60;name&#x60; field.)  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated section record.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateSectionWithHttpInfo(section_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update a section
     * A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged. (note that at this time, the only field that can be updated is the &#x60;name&#x60; field.)  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated section record.
     * @param {<&vendorExtensions.x-jsdoc-type>} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The section to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionResponseData}
     */
    updateSection(section_gid: any, opts: {
        body: any;
    }): Promise<any>;
}
