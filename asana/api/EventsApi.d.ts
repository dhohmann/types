/**
* Events service.
* @module api/EventsApi
* @version 3.0.4
*/
export class EventsApi {
    /**
    * Constructs a new EventsApi.
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get events on a resource
     * Returns the full record for all events that have occurred since the sync token was created.  A &#x60;GET&#x60; request to the endpoint &#x60;/[path_to_resource]/events&#x60; can be made in lieu of including the resource ID in the data for the request.  Asana limits a single sync token to 100 events. If more than 100 events exist for a given resource, &#x60;has_more: true&#x60; will be returned in the response, indicating that there are more events to pull.  *Note: The resource returned will be the resource that triggered the event. This may be different from the one that the events were requested for. For example, a subscription to a project will contain events for tasks contained within the project.*
     * @param {String} resource A resource ID to subscribe to. The resource can be a task, project, or goal.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sync A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a &#x60;412 Precondition Failed&#x60; error, and include a fresh sync token in the response.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getEventsWithHttpInfo(resource: string, opts: {
        sync: string;
    }): Promise<any>;
    /**
     * Get events on a resource
     * Returns the full record for all events that have occurred since the sync token was created.  A &#x60;GET&#x60; request to the endpoint &#x60;/[path_to_resource]/events&#x60; can be made in lieu of including the resource ID in the data for the request.  Asana limits a single sync token to 100 events. If more than 100 events exist for a given resource, &#x60;has_more: true&#x60; will be returned in the response, indicating that there are more events to pull.  *Note: The resource returned will be the resource that triggered the event. This may be different from the one that the events were requested for. For example, a subscription to a project will contain events for tasks contained within the project.*
     * @param {<&vendorExtensions.x-jsdoc-type>} resource A resource ID to subscribe to. The resource can be a task, project, or goal.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sync A sync token received from the last request, or none on first sync. Events will be returned from the point in time that the sync token was generated. *Note: On your first request, omit the sync token. The response will be the same as for an expired sync token, and will include a new valid sync token.If the sync token is too old (which may happen from time to time) the API will return a &#x60;412 Precondition Failed&#x60; error, and include a fresh sync token in the response.*
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponseArray}
     */
    getEvents(resource: any, opts: {
        sync: string;
    }): Promise<any>;
}
