/**
* CustomFields service.
* @module api/CustomFieldsApi
* @version 3.0.4
*/
export class CustomFieldsApi {
    /**
    * Constructs a new CustomFieldsApi.
    * @alias module:api/CustomFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create a custom field
     * Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.
     * @param {module:model/Object} body The custom field object to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createCustomFieldWithHttpInfo(body: any, opts: any): Promise<any>;
    /**
     * Create a custom field
     * Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.  A custom field’s name must be unique within a workspace and not conflict with names of existing task properties such as &#x60;Due Date&#x60; or &#x60;Assignee&#x60;. A custom field’s type must be one of &#x60;text&#x60;, &#x60;enum&#x60;, &#x60;multi_enum&#x60;, &#x60;number&#x60;, &#x60;date&#x60;, or &#x60;people&#x60;.  Returns the full record of the newly created custom field.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The custom field object to create.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    createCustomField(body: any, opts: any): Promise<any>;
    /**
     * Create an enum option
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    createEnumOptionForCustomFieldWithHttpInfo(custom_field_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Create an enum option
     * Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list. Locked custom fields can only have enum options added by the user who locked the field. Returns the full record of the newly created enum option.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    createEnumOptionForCustomField(custom_field_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Delete a custom field
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    deleteCustomFieldWithHttpInfo(custom_field_gid: string): Promise<any>;
    /**
     * Delete a custom field
     * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked custom fields can only be deleted by the user who locked the field. Returns an empty data record.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EmptyResponseData}
     */
    deleteCustomField(custom_field_gid: any): Promise<any>;
    /**
     * Get a custom field
     * Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getCustomFieldWithHttpInfo(custom_field_gid: string, opts: any): Promise<any>;
    /**
     * Get a custom field
     * Get the complete definition of a custom field’s metadata.  Since custom fields can be defined for one of a number of types, and these types have different data and behaviors, there are fields that are relevant to a particular type. For instance, as noted above, enum_options is only relevant for the enum type and defines the set of choices that the enum could represent. The examples below show some of these type-specific custom field definitions.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    getCustomField(custom_field_gid: any, opts: any): Promise<any>;
    /**
     * Get a workspace&#x27;s custom fields
     * Returns a list of the compact representation of all of the custom fields in a workspace.
     * @param {String} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    getCustomFieldsForWorkspaceWithHttpInfo(workspace_gid: string, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Get a workspace&#x27;s custom fields
     * Returns a list of the compact representation of all of the custom fields in a workspace.
     * @param {<&vendorExtensions.x-jsdoc-type>} workspace_gid Globally unique identifier for the workspace or organization.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {String} opts.offset Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27;
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseArray}
     */
    getCustomFieldsForWorkspace(workspace_gid: any, opts: {
        limit: number;
        offset: string;
    }): Promise<any>;
    /**
     * Reorder a custom field&#x27;s enum
     * Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    insertEnumOptionForCustomFieldWithHttpInfo(custom_field_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Reorder a custom field&#x27;s enum
     * Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked custom fields can only be reordered by the user who locked the field.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to create.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    insertEnumOptionForCustomField(custom_field_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update a custom field
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.
     * @param {String} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The custom field object with all updated properties.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateCustomFieldWithHttpInfo(custom_field_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update a custom field
     * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the &#x60;data&#x60; block will be updated; any unspecified fields will remain unchanged When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field. A custom field’s &#x60;type&#x60; cannot be updated. An enum custom field’s &#x60;enum_options&#x60; cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update &#x60;enum_options&#x60;. Locked custom fields can only be updated by the user who locked the field. Returns the complete updated custom field record.
     * @param {<&vendorExtensions.x-jsdoc-type>} custom_field_gid Globally unique identifier for the custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The custom field object with all updated properties.
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomFieldResponseData}
     */
    updateCustomField(custom_field_gid: any, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update an enum option
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.
     * @param {String} enum_option_gid Globally unique identifier for the enum option.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to update
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data and HTTP response
     */
    updateEnumOptionWithHttpInfo(enum_option_gid: string, opts: {
        body: any;
    }): Promise<any>;
    /**
     * Update an enum option
     * Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can only be updated by the user who locked the field. Returns the full record of the updated enum option.
     * @param {<&vendorExtensions.x-jsdoc-type>} enum_option_gid Globally unique identifier for the enum option.
     * @param {Object} opts Optional parameters
     * @param {module:model/Object} opts.body The enum option object to update
     * @param {Array.<module:model/String>} opts.opt_fields This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnumOptionData}
     */
    updateEnumOption(enum_option_gid: any, opts: {
        body: any;
    }): Promise<any>;
}