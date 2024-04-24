/**
* GoalRelationships service.
* @module api/GoalRelationshipsApi
* @version 3.0.4
*/
export class GoalRelationshipsApi {
    /**
    * Constructs a new GoalRelationshipsApi.
    * @alias module:api/GoalRelationshipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.
     * @param {module:model/Object} body The supporting resource to be added to the goal
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    addSupportingRelationshipWithHttpInfo(body: any, goal_gid: string, opts: any): Promise<any>;
    /**
     * Add a supporting goal relationship
     * Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationship record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The supporting resource to be added to the goal
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    addSupportingRelationship(body: any, goal_gid: any, opts: any): Promise<any>;
    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @param {String} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalRelationshipWithHttpInfo(goal_relationship_gid: string, opts: any): Promise<any>;
    /**
     * Get a goal relationship
     * Returns the complete updated goal relationship record for a single goal relationship.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    getGoalRelationship(goal_relationship_gid: any, opts: any): Promise<any>;
    /**
     * Get goal relationships
     * Returns compact goal relationship records.
     * @param {String} supported_goal Globally unique identifier for the supported goal in the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.resource_subtype If provided, filter to goal relationships with a given resource_subtype.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getGoalRelationshipsWithHttpInfo(supported_goal: string, opts: {
        limit: number;
        offset: string;
        resource_subtype: string;
    }): Promise<any>;
    /**
     * Get goal relationships
     * Returns compact goal relationship records.
     * @param {<&vendorExtensions.x-jsdoc-type>} supported_goal Globally unique identifier for the supported goal in the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {String} opts.resource_subtype If provided, filter to goal relationships with a given resource_subtype.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseArray}
     */
    getGoalRelationships(supported_goal: any, opts: {
        limit: number;
        offset: string;
        resource_subtype: string;
    }): Promise<any>;
    /**
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @param {module:model/Object} body The supporting resource to be removed from the goal
     * @param {String} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    removeSupportingRelationshipWithHttpInfo(body: any, goal_gid: string): Promise<any>;
    /**
     * Removes a supporting goal relationship
     * Removes a goal relationship for a given parent goal.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The supporting resource to be removed from the goal
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_gid Globally unique identifier for the goal.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    removeSupportingRelationship(body: any, goal_gid: any): Promise<any>;
    /**
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.
     * @param {module:model/Object} body The updated fields for the goal relationship.
     * @param {String} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateGoalRelationshipWithHttpInfo(body: any, goal_relationship_gid: string, opts: any): Promise<any>;
    /**
     * Update a goal relationship
     * An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated goal relationship record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the goal relationship.
     * @param {<&vendorExtensions.x-jsdoc-type>} goal_relationship_gid Globally unique identifier for the goal relationship.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GoalRelationshipResponseData}
     */
    updateGoalRelationship(body: any, goal_relationship_gid: any, opts: any): Promise<any>;
}
