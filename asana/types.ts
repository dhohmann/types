import { components, operations } from "./webservices";


/**
 * Extract query property type
 */
type GetQuery<T> = T extends { query?: infer U } ? U : never
/**
 * Extract content property type
 */
type GetContent<T> = T extends { content?: infer U } ? U : never
/**
 * Extract "application/json" property type
 */
type GetJSON<T> = T extends { "application/json"?: infer U } ? U : never

/**
 * Schemas representing the data structures used
 */
export type Schemas = components["schemas"]
/**
 * Method names provided by the api
 */
export type OperationNames = keyof operations
/**
 * Helper for the parameters for a method
 */
export type OperationParameters<S extends OperationNames> = operations[S]["parameters"]
/**
 * Helper for the responses for a method. Provide the method name to access the responses.
 */
export type OperationResponses<S extends OperationNames> = operations[S]["responses"]

/**
 * Helper to get the `opt_*` parameters for a method.
 */
export type RequestOpt<S extends OperationNames> = GetQuery<OperationParameters<S>>

/**
 * Helper for the response for a method and a specific HTTP code. Extracts the JSON structure from the response content.
 */
export type Response<S extends OperationNames, T extends keyof OperationResponses<S>> = GetJSON<GetContent<OperationResponses<S>[T]>>
