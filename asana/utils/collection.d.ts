export = Collection;
/**
 * Create a Collection object from a response containing a list of resources.
 *
 * @param {Object} response_and_data
 * @param {ApiClient} apiClient
 * @param {Object} apiRequestData
 * @returns {Object} Collection
 */
declare function Collection(response_and_data: any, apiClient: ApiClient, apiRequestData: any): any;
declare class Collection {
    /**
     * Create a Collection object from a response containing a list of resources.
     *
     * @param {Object} response_and_data
     * @param {ApiClient} apiClient
     * @param {Object} apiRequestData
     * @returns {Object} Collection
     */
    constructor(response_and_data: any, apiClient: ApiClient, apiRequestData: any);
    data: any;
    _response: any;
    _apiClient: ApiClient;
    _apiRequestData: any;
    /**
     * Get the next page of results in a collection.
     *
     * @returns {Promise<Collection?>} Resolves to either a collection representing
     *     the next page of results, or null if no more pages.
     */
    nextPage(): Promise<Collection | null>;
}
declare namespace Collection {
    /**
     * Transforms a Promise of a raw response into a Promise for a Collection.
     *
     * @param {Promise<Object>} promise
     * @param {ApiClient} apiClient
     * @param {Object} apiRequestData
     * @returns {Promise<Collection>}
     */
    function fromApiClient(promise: Promise<any>, apiClient: ApiClient, apiRequestData: any): Promise<Collection>;
    /**
     * @param response {Object} Response that a request promise resolved to
     * @returns {boolean} True iff the response is a collection (possibly empty)
     */
    function isCollectionResponse(responseData: any): boolean;
}
