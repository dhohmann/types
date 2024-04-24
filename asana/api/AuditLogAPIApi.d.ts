/**
* AuditLogAPI service.
* @module api/AuditLogAPIApi
* @version 3.0.4
*/
export class AuditLogAPIApi {
    /**
    * Constructs a new AuditLogAPIApi.
    * @alias module:api/AuditLogAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get audit log events
     * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](/reference/audit-log-api) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/reference/audit-log-api) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the &#x60;offset&#x60; from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return &#x60;null&#x60; for the &#x60;next_page&#x60; field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a &#x60;next_page&#x60; with an &#x60;offset&#x60;, subsequent requests can be made with the latest &#x60;offset&#x60; to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and &#x60;next_page&#x60; is present in the response, we will continue to send &#x60;next_page&#x60; on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty &#x60;data&#x60; response for the end of current events that match your filters.*  When no &#x60;offset&#x60; is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/reference/audit-log-api) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start_at Filter to events created after this time (inclusive).
     * @param {Date} opts.end_at Filter to events created before this time (exclusive).
     * @param {String} opts.event_type Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
     * @param {module:model/String} opts.actor_type Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If &#x60;actor_gid&#x60; is included, this should be excluded.
     * @param {String} opts.actor_gid Filter to events triggered by the actor with this ID.
     * @param {String} opts.resource_gid Filter to events with this resource ID.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getAuditLogEventsWithHttpInfo(workspace_gid: string, opts: {
        start_at: Date;
        end_at: Date;
        event_type: string;
        actor_type: any;
        actor_gid: string;
        resource_gid: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get audit log events
     * Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEvent](/reference/audit-log-api) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.  There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/reference/audit-log-api) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.  The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the &#x60;offset&#x60; from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return &#x60;null&#x60; for the &#x60;next_page&#x60; field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a &#x60;next_page&#x60; with an &#x60;offset&#x60;, subsequent requests can be made with the latest &#x60;offset&#x60; to poll for new events that match the provided filters.  *Note: If the filters you provided match events in your domain and &#x60;next_page&#x60; is present in the response, we will continue to send &#x60;next_page&#x60; on subsequent requests even when there are no more events that match the filters. This was put in place so that you can implement an audit log stream that will return future events that match these filters. If you are not interested in future events that match the filters you have defined, you can rely on checking empty &#x60;data&#x60; response for the end of current events that match your filters.*  When no &#x60;offset&#x60; is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/reference/audit-log-api) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.start_at Filter to events created after this time (inclusive).
     * @param {Date} opts.end_at Filter to events created before this time (exclusive).
     * @param {String} opts.event_type Filter to events of this type. Refer to the [supported audit log events](/docs/audit-log-events#supported-audit-log-events) for a full list of values.
     * @param {module:model/String} opts.actor_type Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. If &#x60;actor_gid&#x60; is included, this should be excluded.
     * @param {String} opts.actor_gid Filter to events triggered by the actor with this ID.
     * @param {String} opts.resource_gid Filter to events with this resource ID.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuditLogEventArray}
     */
    getAuditLogEvents(workspace_gid: any, opts: {
        start_at: Date;
        end_at: Date;
        event_type: string;
        actor_type: any;
        actor_gid: string;
        resource_gid: string;
        limit: number;
        offset: string;
    }): Promise<any>;
}