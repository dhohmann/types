/**
* Stories service.
* @module api/StoriesApi
* @version 3.0.4
*/
export class StoriesApi {
    /**
    * Constructs a new StoriesApi.
    * @alias module:api/StoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a story on a task
     * Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.
     * @param {module:model/Object} body The story to create.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createStoryForTaskWithHttpInfo(body: any, task_gid: string, opts: any): Promise<any>;
    /**
     * Create a story on a task
     * Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The story to create.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoryResponseData}
     */
    createStoryForTask(body: any, task_gid: any, opts: any): Promise<any>;
    /**
     * Delete a story
     * Deletes a story. A user can only delete stories they have created.  Returns an empty data record.
     * @param {String} story_gid Globally unique identifier for the story.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteStoryWithHttpInfo(story_gid: string): Promise<any>;
    /**
     * Delete a story
     * Deletes a story. A user can only delete stories they have created.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} story_gid Globally unique identifier for the story.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteStory(story_gid: any): Promise<any>;
    /**
     * Get stories from a task
     * Returns the compact records for all stories on the task.
     * @param {String} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStoriesForTaskWithHttpInfo(task_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get stories from a task
     * Returns the compact records for all stories on the task.
     * @param {<&vendorExtensions.x-jsdoc-type>} task_gid The task to operate on.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoryResponseArray}
     */
    getStoriesForTask(task_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a story
     * Returns the full record for a single story.
     * @param {String} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getStoryWithHttpInfo(story_gid: string, opts: any): Promise<any>;
    /**
     * Get a story
     * Returns the full record for a single story.
     * @param {<&vendorExtensions.x-jsdoc-type>} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoryResponseData}
     */
    getStory(story_gid: any, opts: any): Promise<any>;
    /**
     * Update a story
     * Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of &#x60;text&#x60; and &#x60;html_text&#x60; can be specified.
     * @param {module:model/Object} body The comment story to update.
     * @param {String} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateStoryWithHttpInfo(body: any, story_gid: string, opts: any): Promise<any>;
    /**
     * Update a story
     * Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of &#x60;text&#x60; and &#x60;html_text&#x60; can be specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The comment story to update.
     * @param {<&vendorExtensions.x-jsdoc-type>} story_gid Globally unique identifier for the story.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoryResponseData}
     */
    updateStory(body: any, story_gid: any, opts: any): Promise<any>;
}
