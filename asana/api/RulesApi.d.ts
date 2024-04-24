/**
* Rules service.
* @module api/RulesApi
* @version 3.0.4
*/
export class RulesApi {
    /**
    * Constructs a new RulesApi.
    * @alias module:api/RulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Trigger a rule
     * Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.
     * @param {module:model/Object} body A dictionary of variables accessible from within the rule.
     * @param {String} rule_trigger_gid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    triggerRuleWithHttpInfo(body: any, rule_trigger_gid: string): Promise<any>;
    /**
     * Trigger a rule
     * Trigger a rule which uses an [\&quot;incoming web request\&quot;](/docs/incoming-web-requests) trigger.
     * @param {<&vendorExtensions.x-jsdoc-type>} body A dictionary of variables accessible from within the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} rule_trigger_gid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuleTriggerResponseData}
     */
    triggerRule(body: any, rule_trigger_gid: any): Promise<any>;
}
