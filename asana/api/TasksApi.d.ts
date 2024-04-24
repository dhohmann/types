/**
* Tasks service.
* @module api/TasksApi
* @version 3.0.4
*/
export class TasksApi {
    /**
    * Constructs a new TasksApi.
    * @alias module:api/TasksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Set dependencies for a task
     * Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.
     * @param {module:model/Object} body The list of tasks to set as dependencies.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addDependenciesForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Set dependencies for a task
     * Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The list of tasks to set as dependencies.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addDependenciesForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Set dependents for a task
     * Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.
     * @param {module:model/Object} body The list of tasks to add as dependents.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addDependentsForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Set dependents for a task
     * Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The list of tasks to add as dependents.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addDependentsForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Add followers to a task
     * Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated task record, described above.
     * @param {module:model/Object} body The followers to add to the task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addFollowersForTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Add followers to a task
     * Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated task record, described above.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to add to the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    addFollowersForTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Add a project to a task
     * Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.  &#x60;addProject&#x60; can also be used to reorder a task within a project or section that already contains it.  At most one of &#x60;insert_before&#x60;, &#x60;insert_after&#x60;, or &#x60;section&#x60; should be specified. Inserting into a section in an non-order-dependent way can be done by specifying section, otherwise, to insert within a section in a particular place, specify &#x60;insert_before&#x60; or &#x60;insert_after&#x60; and a task within the section to anchor the position of this task.  Returns an empty data block.
     * @param {module:model/Object} body The project to add the task to.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addProjectForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Add a project to a task
     * Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task will be added to the end of the project.  &#x60;addProject&#x60; can also be used to reorder a task within a project or section that already contains it.  At most one of &#x60;insert_before&#x60;, &#x60;insert_after&#x60;, or &#x60;section&#x60; should be specified. Inserting into a section in an non-order-dependent way can be done by specifying section, otherwise, to insert within a section in a particular place, specify &#x60;insert_before&#x60; or &#x60;insert_after&#x60; and a task within the section to anchor the position of this task.  Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project to add the task to.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addProjectForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Add a tag to a task
     * Adds a tag to a task. Returns an empty data block.
     * @param {module:model/Object} body The tag to add to the task.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addTagForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Add a tag to a task
     * Adds a tag to a task. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The tag to add to the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    addTagForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Create a subtask
     * Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.
     * @param {module:model/Object} body The new subtask to create.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createSubtaskForTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Create a subtask
     * Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The new subtask to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    createSubtaskForTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Create a task
     * Creating a new task is as easy as POSTing to the &#x60;/tasks&#x60; endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.  Every task is required to be created in a specific workspace, and this workspace cannot be changed once set. The workspace need not be set explicitly if you specify &#x60;projects&#x60; or a &#x60;parent&#x60; task instead.
     * @param {module:model/Object} body The task to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createTaskWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create a task
     * Creating a new task is as easy as POSTing to the &#x60;/tasks&#x60; endpoint with a data block containing the fields you’d like to set on the task. Any unspecified fields will take on default values.  Every task is required to be created in a specific workspace, and this workspace cannot be changed once set. The workspace need not be set explicitly if you specify &#x60;projects&#x60; or a &#x60;parent&#x60; task instead.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The task to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    createTask(body: any, opts: any): Promise<any>;
    /**
     * Delete a task
     * A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.  Returns an empty data record.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteTaskWithHttpInfo(task_gid: string): Promise<any>;
    /**
     * Delete a task
     * A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the “trash” of the user making the delete request. Tasks can be recovered from the trash within a period of 30 days; afterward they are completely removed from the system.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteTask(task_gid: any): Promise<any>;
    /**
     * Duplicate a task
     * Creates and returns a job that will asynchronously handle the duplication.
     * @param {module:model/Object} body Describes the duplicate&#x27;s name and the fields that will be duplicated.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    duplicateTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Duplicate a task
     * Creates and returns a job that will asynchronously handle the duplication.
     * @param {<&vendorExtensions.x-jsdoc-type>} body Describes the duplicate&#x27;s name and the fields that will be duplicated.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobResponseData}
     */
    duplicateTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Get dependencies from a task
     * Returns the compact representations of all of the dependencies of a task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getDependenciesForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get dependencies from a task
     * Returns the compact representations of all of the dependencies of a task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getDependenciesForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get dependents from a task
     * Returns the compact representations of all of the dependents of a task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getDependentsForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get dependents from a task
     * Returns the compact representations of all of the dependents of a task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getDependentsForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get subtasks from a task
     * Returns a compact representation of all of the subtasks of a task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getSubtasksForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get subtasks from a task
     * Returns a compact representation of all of the subtasks of a task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getSubtasksForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a task
     * Returns the complete task record for a single task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskWithHttpInfo(task_gid: string, opts: any): Promise<any>;
    /**
     * Get a task
     * Returns the complete task record for a single task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    getTask(task_gid: any, opts: any): Promise<any>;
    /**
     * Get a task for a given custom ID
     * Returns a task given a custom ID shortcode.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {String} custom_id Generated custom ID for a task.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTaskForCustomIDWithHttpInfo(workspace_gid: string, custom_id: string): Promise<any>;
    /**
     * Get a task for a given custom ID
     * Returns a task given a custom ID shortcode.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_id Generated custom ID for a task.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    getTaskForCustomID(workspace_gid: any, custom_id: any): Promise<any>;
    /**
     * Get multiple tasks
     * Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a &#x60;project&#x60; or &#x60;tag&#x60; if you do not specify &#x60;assignee&#x60; and &#x60;workspace&#x60;.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.assignee The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified. *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.*
     * @param {String} opts.project The project to filter tasks on.
     * @param {String} opts.section The section to filter tasks on.
     * @param {String} opts.workspace The workspace to filter tasks on. *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.*
     * @param {Date} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time.
     * @param {Date} opts.modified_since Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTasksWithHttpInfo(opts: {
        limit: number;
        offset: string;
        assignee: string;
        project: string;
        section: string;
        workspace: string;
        completed_since: Date;
        modified_since: Date;
    }): Promise<any>;
    /**
     * Get multiple tasks
     * Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a &#x60;project&#x60; or &#x60;tag&#x60; if you do not specify &#x60;assignee&#x60; and &#x60;workspace&#x60;.  For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/reference/searchtasksforworkspace).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.assignee The assignee to filter tasks on. If searching for unassigned tasks, assignee.any &#x3D; null can be specified. *Note: If you specify &#x60;assignee&#x60;, you must also specify the &#x60;workspace&#x60; to filter on.*
     * @param {String} opts.project The project to filter tasks on.
     * @param {String} opts.section The section to filter tasks on.
     * @param {String} opts.workspace The workspace to filter tasks on. *Note: If you specify &#x60;workspace&#x60;, you must also specify the &#x60;assignee&#x60; to filter on.*
     * @param {Date} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time.
     * @param {Date} opts.modified_since Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getTasks(opts: {
        limit: number;
        offset: string;
        assignee: string;
        project: string;
        section: string;
        workspace: string;
        completed_since: Date;
        modified_since: Date;
    }): Promise<any>;
    /**
     * Get tasks from a project
     * Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.
     * @param {String} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTasksForProjectWithHttpInfo(project_gid: string, opts: {
        completed_since: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get tasks from a project
     * Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.
     * @param {<&vendorExtensions.x-jsdoc-type>} project_gid Globally unique identifier for the project.
     * @param {Object} opts Optional parameters
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getTasksForProject(project_gid: any, opts: {
        completed_since: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get tasks from a section
     * *Board view only*: Returns the compact section records for all tasks within the given section.
     * @param {String} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTasksForSectionWithHttpInfo(section_gid: string, opts: {
        limit: number;
        offset: string;
        completed_since: string;
    }): Promise<any>;
    /**
     * Get tasks from a section
     * *Board view only*: Returns the compact section records for all tasks within the given section.
     * @param {<&vendorExtensions.x-jsdoc-type>} section_gid The globally unique identifier for the section.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getTasksForSection(section_gid: any, opts: {
        limit: number;
        offset: string;
        completed_since: string;
    }): Promise<any>;
    /**
     * Get tasks from a tag
     * Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.
     * @param {String} tag_gid Globally unique identifier for the tag.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTasksForTagWithHttpInfo(tag_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get tasks from a tag
     * Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.
     * @param {<&vendorExtensions.x-jsdoc-type>} tag_gid Globally unique identifier for the tag.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getTasksForTag(tag_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get tasks from a user task list
     * Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.* *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting &#x60;completed_since&#x3D;now&#x60; will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*
     * @param {String} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getTasksForUserTaskListWithHttpInfo(user_task_list_gid: string, opts: {
        completed_since: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get tasks from a user task list
     * Returns the compact list of tasks in a user’s My Tasks list. *Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.* *Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting &#x60;completed_since&#x3D;now&#x60; will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*
     * @param {<&vendorExtensions.x-jsdoc-type>} user_task_list_gid Globally unique identifier for the user task list.
     * @param {Object} opts Optional parameters
     * @param {String} opts.completed_since Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or the keyword *now*.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    getTasksForUserTaskList(user_task_list_gid: any, opts: {
        completed_since: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Unlink dependencies from a task
     * Unlinks a set of dependencies from this task.
     * @param {module:model/Object} body The list of tasks to unlink as dependencies.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeDependenciesForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Unlink dependencies from a task
     * Unlinks a set of dependencies from this task.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The list of tasks to unlink as dependencies.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeDependenciesForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Unlink dependents from a task
     * Unlinks a set of dependents from this task.
     * @param {module:model/Object} body The list of tasks to remove as dependents.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeDependentsForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Unlink dependents from a task
     * Unlinks a set of dependents from this task.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The list of tasks to remove as dependents.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeDependentsForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Remove followers from a task
     * Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.
     * @param {module:model/Object} body The followers to remove from the task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeFollowerForTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Remove followers from a task
     * Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to remove from the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    removeFollowerForTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Remove a project from a task
     * Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.  Returns an empty data block.
     * @param {module:model/Object} body The project to remove the task from.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeProjectForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Remove a project from a task
     * Removes the task from the specified project. The task will still exist in the system, but it will not be in the project anymore.  Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The project to remove the task from.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeProjectForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Remove a tag from a task
     * Removes a tag from a task. Returns an empty data block.
     * @param {module:model/Object} body The tag to remove from the task.
     * @param {String} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeTagForTaskWithHttpInfo(body: any, task_gid: string): Promise<any>;
    /**
     * Remove a tag from a task
     * Removes a tag from a task. Returns an empty data block.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The tag to remove from the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeTagForTask(body: any, task_gid: any): Promise<any>;
    /**
     * Search tasks in a workspace
     * To mirror the functionality of the Asana web app&#x27;s advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need. #### Premium access Like the Asana web product&#x27;s advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:  - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace  Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a &#x60;402 Payment Required&#x60; error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the &#x60;limit&#x60; query parameter. #### Eventual consistency Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product. #### Rate limits You may receive a &#x60;429 Too Many Requests&#x60; response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits). #### Custom field parameters | Parameter name | Custom field type | Accepted type | |---|---|---| | custom_fields.{gid}.is_set | All | Boolean | | custom_fields.{gid}.value | Text | String | | custom_fields.{gid}.value | Number | Number | | custom_fields.{gid}.value | Enum | Enum option ID | | custom_fields.{gid}.starts_with | Text only | String | | custom_fields.{gid}.ends_with | Text only | String | | custom_fields.{gid}.contains | Text only | String | | custom_fields.{gid}.less_than | Number only | Number | | custom_fields.{gid}.greater_than | Number only | Number |   For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be &#x60;custom_fields.12345.is_set&#x3D;true&#x60;. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: &#x60;custom_fields.12345.value&#x3D;67890&#x60;.  **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field  *Note: If you specify &#x60;projects.any&#x60; and &#x60;sections.any&#x60;, you will receive tasks for the project **and** tasks for the section. If you&#x27;re looking for only tasks in a section, omit the &#x60;projects.any&#x60; from the request.*
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.text Performs full-text search on both task name and description
     * @param {module:model/String} opts.resource_subtype Filters results by the task&#x27;s resource_subtype (default to <.>)
     * @param {String} opts.assignee.any Comma-separated list of user identifiers
     * @param {String} opts.assignee.not Comma-separated list of user identifiers
     * @param {String} opts.portfolios.any Comma-separated list of portfolio IDs
     * @param {String} opts.projects.any Comma-separated list of project IDs
     * @param {String} opts.projects.not Comma-separated list of project IDs
     * @param {String} opts.projects.all Comma-separated list of project IDs
     * @param {String} opts.sections.any Comma-separated list of section or column IDs
     * @param {String} opts.sections.not Comma-separated list of section or column IDs
     * @param {String} opts.sections.all Comma-separated list of section or column IDs
     * @param {String} opts.tags.any Comma-separated list of tag IDs
     * @param {String} opts.tags.not Comma-separated list of tag IDs
     * @param {String} opts.tags.all Comma-separated list of tag IDs
     * @param {String} opts.teams.any Comma-separated list of team IDs
     * @param {String} opts.followers.not Comma-separated list of user identifiers
     * @param {String} opts.created_by.any Comma-separated list of user identifiers
     * @param {String} opts.created_by.not Comma-separated list of user identifiers
     * @param {String} opts.assigned_by.any Comma-separated list of user identifiers
     * @param {String} opts.assigned_by.not Comma-separated list of user identifiers
     * @param {String} opts.liked_by.not Comma-separated list of user identifiers
     * @param {String} opts.commented_on_by.not Comma-separated list of user identifiers
     * @param {Date} opts.due_on.before ISO 8601 date string
     * @param {Date} opts.due_on.after ISO 8601 date string
     * @param {Date} opts.due_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.due_at.before ISO 8601 datetime string
     * @param {Date} opts.due_at.after ISO 8601 datetime string
     * @param {Date} opts.start_on.before ISO 8601 date string
     * @param {Date} opts.start_on.after ISO 8601 date string
     * @param {Date} opts.start_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.created_on.before ISO 8601 date string
     * @param {Date} opts.created_on.after ISO 8601 date string
     * @param {Date} opts.created_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.created_at.before ISO 8601 datetime string
     * @param {Date} opts.created_at.after ISO 8601 datetime string
     * @param {Date} opts.completed_on.before ISO 8601 date string
     * @param {Date} opts.completed_on.after ISO 8601 date string
     * @param {Date} opts.completed_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.completed_at.before ISO 8601 datetime string
     * @param {Date} opts.completed_at.after ISO 8601 datetime string
     * @param {Date} opts.modified_on.before ISO 8601 date string
     * @param {Date} opts.modified_on.after ISO 8601 date string
     * @param {Date} opts.modified_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.modified_at.before ISO 8601 datetime string
     * @param {Date} opts.modified_at.after ISO 8601 datetime string
     * @param {Boolean} opts.is_blocking Filter to incomplete tasks with dependents
     * @param {Boolean} opts.is_blocked Filter to tasks with incomplete dependencies
     * @param {Boolean} opts.has_attachment Filter to tasks with attachments
     * @param {Boolean} opts.completed Filter to completed tasks
     * @param {Boolean} opts.is_subtask Filter to subtasks
     * @param {module:model/String} opts.sort_by One of &#x60;due_date&#x60;, &#x60;created_at&#x60;, &#x60;completed_at&#x60;, &#x60;likes&#x60;, or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; (default to <.>)
     * @param {Boolean} opts.sort_ascending Default &#x60;false&#x60; (default to <.>)
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    searchTasksForWorkspaceWithHttpInfo(workspace_gid: string, opts: {
        text: string;
        resource_subtype: any;
    }): Promise<any>;
    /**
     * Search tasks in a workspace
     * To mirror the functionality of the Asana web app&#x27;s advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need. #### Premium access Like the Asana web product&#x27;s advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:  - The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace  Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a &#x60;402 Payment Required&#x60; error. #### Pagination Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the &#x60;limit&#x60; query parameter. #### Eventual consistency Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product. #### Rate limits You may receive a &#x60;429 Too Many Requests&#x60; response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits). #### Custom field parameters | Parameter name | Custom field type | Accepted type | |---|---|---| | custom_fields.{gid}.is_set | All | Boolean | | custom_fields.{gid}.value | Text | String | | custom_fields.{gid}.value | Number | Number | | custom_fields.{gid}.value | Enum | Enum option ID | | custom_fields.{gid}.starts_with | Text only | String | | custom_fields.{gid}.ends_with | Text only | String | | custom_fields.{gid}.contains | Text only | String | | custom_fields.{gid}.less_than | Number only | Number | | custom_fields.{gid}.greater_than | Number only | Number |   For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be &#x60;custom_fields.12345.is_set&#x3D;true&#x60;. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: &#x60;custom_fields.12345.value&#x3D;67890&#x60;.  **Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field  *Note: If you specify &#x60;projects.any&#x60; and &#x60;sections.any&#x60;, you will receive tasks for the project **and** tasks for the section. If you&#x27;re looking for only tasks in a section, omit the &#x60;projects.any&#x60; from the request.*
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {String} opts.text Performs full-text search on both task name and description
     * @param {module:model/String} opts.resource_subtype Filters results by the task&#x27;s resource_subtype (default to <.>)
     * @param {String} opts.assignee.any Comma-separated list of user identifiers
     * @param {String} opts.assignee.not Comma-separated list of user identifiers
     * @param {String} opts.portfolios.any Comma-separated list of portfolio IDs
     * @param {String} opts.projects.any Comma-separated list of project IDs
     * @param {String} opts.projects.not Comma-separated list of project IDs
     * @param {String} opts.projects.all Comma-separated list of project IDs
     * @param {String} opts.sections.any Comma-separated list of section or column IDs
     * @param {String} opts.sections.not Comma-separated list of section or column IDs
     * @param {String} opts.sections.all Comma-separated list of section or column IDs
     * @param {String} opts.tags.any Comma-separated list of tag IDs
     * @param {String} opts.tags.not Comma-separated list of tag IDs
     * @param {String} opts.tags.all Comma-separated list of tag IDs
     * @param {String} opts.teams.any Comma-separated list of team IDs
     * @param {String} opts.followers.not Comma-separated list of user identifiers
     * @param {String} opts.created_by.any Comma-separated list of user identifiers
     * @param {String} opts.created_by.not Comma-separated list of user identifiers
     * @param {String} opts.assigned_by.any Comma-separated list of user identifiers
     * @param {String} opts.assigned_by.not Comma-separated list of user identifiers
     * @param {String} opts.liked_by.not Comma-separated list of user identifiers
     * @param {String} opts.commented_on_by.not Comma-separated list of user identifiers
     * @param {Date} opts.due_on.before ISO 8601 date string
     * @param {Date} opts.due_on.after ISO 8601 date string
     * @param {Date} opts.due_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.due_at.before ISO 8601 datetime string
     * @param {Date} opts.due_at.after ISO 8601 datetime string
     * @param {Date} opts.start_on.before ISO 8601 date string
     * @param {Date} opts.start_on.after ISO 8601 date string
     * @param {Date} opts.start_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.created_on.before ISO 8601 date string
     * @param {Date} opts.created_on.after ISO 8601 date string
     * @param {Date} opts.created_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.created_at.before ISO 8601 datetime string
     * @param {Date} opts.created_at.after ISO 8601 datetime string
     * @param {Date} opts.completed_on.before ISO 8601 date string
     * @param {Date} opts.completed_on.after ISO 8601 date string
     * @param {Date} opts.completed_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.completed_at.before ISO 8601 datetime string
     * @param {Date} opts.completed_at.after ISO 8601 datetime string
     * @param {Date} opts.modified_on.before ISO 8601 date string
     * @param {Date} opts.modified_on.after ISO 8601 date string
     * @param {Date} opts.modified_on ISO 8601 date string or &#x60;null&#x60;
     * @param {Date} opts.modified_at.before ISO 8601 datetime string
     * @param {Date} opts.modified_at.after ISO 8601 datetime string
     * @param {Boolean} opts.is_blocking Filter to incomplete tasks with dependents
     * @param {Boolean} opts.is_blocked Filter to tasks with incomplete dependencies
     * @param {Boolean} opts.has_attachment Filter to tasks with attachments
     * @param {Boolean} opts.completed Filter to completed tasks
     * @param {Boolean} opts.is_subtask Filter to subtasks
     * @param {module:model/String} opts.sort_by One of &#x60;due_date&#x60;, &#x60;created_at&#x60;, &#x60;completed_at&#x60;, &#x60;likes&#x60;, or &#x60;modified_at&#x60;, defaults to &#x60;modified_at&#x60; (default to <.>)
     * @param {Boolean} opts.sort_ascending Default &#x60;false&#x60; (default to <.>)
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseArray}
     */
    searchTasksForWorkspace(workspace_gid: any, opts: {
        text: string;
        resource_subtype: any;
    }): Promise<any>;
    /**
     * Set the parent of a task
     * parent, or no parent task at all. Returns an empty data block. When using &#x60;insert_before&#x60; and &#x60;insert_after&#x60;, at most one of those two options can be specified, and they must already be subtasks of the parent.
     * @param {module:model/Object} body The new parent of the subtask.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    setParentForTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Set the parent of a task
     * parent, or no parent task at all. Returns an empty data block. When using &#x60;insert_before&#x60; and &#x60;insert_after&#x60;, at most one of those two options can be specified, and they must already be subtasks of the parent.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The new parent of the subtask.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    setParentForTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Update a task
     * A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated task record.
     * @param {module:model/Object} body The task to update.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Update a task
     * A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the task.  Returns the complete updated task record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The task to update.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TaskResponseData}
     */
    updateTask(body: any, task_gid: any, opts: any): Promise<any>;
}
