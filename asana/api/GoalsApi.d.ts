/**
* Goals service.
* @module api/GoalsApi
* @version 3.0.4
*/
export class GoalsApi {
    /**
    * Constructs a new GoalsApi.
    * @alias module:api/GoalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/Object} body The followers to be added as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addFollowersWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Add a collaborator to a goal
     * Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to be added as collaborators
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    addFollowers(body: any, goal_gid: any, opts: any): Promise<any>;
    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {module:model/Object} body The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createGoalWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create a goal
     * Creates a new goal in a workspace or team.  Returns the full record of the newly created goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The goal to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    createGoal(body: any, opts: any): Promise<any>;
    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {module:model/Object} body The goal metric to create.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createGoalMetricWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Create a goal metric
     * Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The goal metric to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    createGoalMetric(body: any, goal_gid: any, opts: any): Promise<any>;
    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteGoalWithHttpInfo(goal_gid: string): Promise<any>;
    /**
     * Delete a goal
     * A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteGoal(goal_gid: any): Promise<any>;
    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalWithHttpInfo(goal_gid: string, opts: any): Promise<any>;
    /**
     * Get a goal
     * Returns the complete goal record for a single goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    getGoal(goal_gid: any, opts: any): Promise<any>;
    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {String} opts.task Globally unique identifier for supporting task.
     * @param {Boolean} opts.is_workspace_level Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.time_periods Globally unique identifiers for the time periods.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalsWithHttpInfo(opts: {
        portfolio: string;
        project: string;
        task: string;
        is_workspace_level: boolean;
        team: string;
        workspace: string;
        time_periods: Array<string>;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get goals
     * Returns compact goal records.
     * @param {Object} opts Optional parameters
     * @param {String} opts.portfolio Globally unique identifier for supporting portfolio.
     * @param {String} opts.project Globally unique identifier for supporting project.
     * @param {String} opts.task Globally unique identifier for supporting task.
     * @param {Boolean} opts.is_workspace_level Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     * @param {String} opts.team Globally unique identifier for the team.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Array.<String>} opts.time_periods Globally unique identifiers for the time periods.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseArray}
     */
    getGoals(opts: {
        portfolio: string;
        project: string;
        task: string;
        is_workspace_level: boolean;
        team: string;
        workspace: string;
        time_periods: Array<string>;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getParentGoalsForGoalWithHttpInfo(goal_gid: string, opts: any): Promise<any>;
    /**
     * Get parent goals from a goal
     * Returns a compact representation of all of the parent goals of a goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseArray}
     */
    getParentGoalsForGoal(goal_gid: any, opts: any): Promise<any>;
    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {module:model/Object} body The followers to be removed as collaborators
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeFollowersWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Remove a collaborator from a goal
     * Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero or more followers in the system. Requests to add/remove followers, if successful, will return the complete updated goal record, described above.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The followers to be removed as collaborators
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    removeFollowers(body: any, goal_gid: any, opts: any): Promise<any>;
    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {module:model/Object} body The updated fields for the goal.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Update a goal
     * An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    updateGoal(body: any, goal_gid: any, opts: any): Promise<any>;
    /**
     * Update a goal metric
     * Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {module:model/Object} body The updated fields for the goal metric.
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalMetricWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Update a goal metric
     * Updates a goal&#x27;s existing metric&#x27;s &#x60;current_number_value&#x60; if one exists, otherwise responds with a 400 status code.  Returns the complete updated goal metric record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal metric.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalResponseData}
     */
    updateGoalMetric(body: any, goal_gid: any, opts: any): Promise<any>;
}
