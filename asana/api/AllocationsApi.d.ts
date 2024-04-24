/**
* Allocations service.
* @module api/AllocationsApi
* @version 3.0.4
*/
export class AllocationsApi {
    /**
    * Constructs a new AllocationsApi.
    * @alias module:api/AllocationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create an allocation
     * Creates a new allocation.  Returns the full record of the newly created allocation.
     * @param {module:model/Object} body The allocation to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createAllocationWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create an allocation
     * Creates a new allocation.  Returns the full record of the newly created allocation.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The allocation to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllocationResponseData}
     */
    createAllocation(body: any, opts: any): Promise<any>;
    /**
     * Delete an allocation
     * A specific, existing allocation can be deleted by making a DELETE request on the URL for that allocation.  Returns an empty data record.
     * @param {String} allocation_gid Globally unique identifier for the allocation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteAllocationWithHttpInfo(allocation_gid: string): Promise<any>;
    /**
     * Delete an allocation
     * A specific, existing allocation can be deleted by making a DELETE request on the URL for that allocation.  Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} allocation_gid Globally unique identifier for the allocation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteAllocation(allocation_gid: any): Promise<any>;
    /**
     * Get an allocation
     * Returns the complete allocation record for a single allocation.
     * @param {String} allocation_gid Globally unique identifier for the allocation.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getAllocationWithHttpInfo(allocation_gid: string, opts: any): Promise<any>;
    /**
     * Get an allocation
     * Returns the complete allocation record for a single allocation.
     * @param {<&vendorExtensions.x-jsdoc-type>} allocation_gid Globally unique identifier for the allocation.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllocationResponseData}
     */
    getAllocation(allocation_gid: any, opts: any): Promise<any>;
    /**
     * Get multiple allocations
     * Returns a list of allocations filtered to a specific project or user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for the project to filter allocations by.
     * @param {String} opts.assignee Globally unique identifier for the user the allocation is assigned to.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getAllocationsWithHttpInfo(opts: {
        parent: string;
        assignee: string;
        workspace: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get multiple allocations
     * Returns a list of allocations filtered to a specific project or user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.parent Globally unique identifier for the project to filter allocations by.
     * @param {String} opts.assignee Globally unique identifier for the user the allocation is assigned to.
     * @param {String} opts.workspace Globally unique identifier for the workspace.
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllocationResponseArray}
     */
    getAllocations(opts: {
        parent: string;
        assignee: string;
        workspace: string;
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Update an allocation
     * An existing allocation can be updated by making a PUT request on the URL for that allocation. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated allocation record.
     * @param {module:model/Object} body The updated fields for the allocation.
     * @param {String} allocation_gid Globally unique identifier for the allocation.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateAllocationWithHttpInfo(body: any, allocation_gid: string, opts: any): Promise<any>;
    /**
     * Update an allocation
     * An existing allocation can be updated by making a PUT request on the URL for that allocation. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged.  Returns the complete updated allocation record.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The updated fields for the allocation.
     * @param {<&vendorExtensions.x-jsdoc-type>} allocation_gid Globally unique identifier for the allocation.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllocationResponseData}
     */
    updateAllocation(body: any, allocation_gid: any, opts: any): Promise<any>;
}
