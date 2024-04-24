type AuthMethod<T extends string> = {
    readonly type: T
}
type BasicAuth = AuthMethod<"basic"> & {
    username: string,
    password: string
};

type ApiKeyAuth = AuthMethod<"apiKey"> & {
    apiKey: string,
    name: string,
    apiKeyPrefix?: string,
    in?: "header"
}

type OAuth2Auth = AuthMethod<"oauth2"> & {
    accessToken: string
}

type PersonalAccessTokenAuth = AuthMethod<"personalAccessToken" | "token"> & {
    accessToken: string
}

declare module "asana" {

    export class ApiClient {

        static instance: ApiClient

        /**
         * Per default implementation only PersonalAccessTokenAuth is used.
         */
        authentications: Record<string, BasicAuth | ApiKeyAuth | PersonalAccessTokenAuth | OAuth2Auth>

        constructor();
        /**
         * Returns a string representation for an actual parameter.
         * @param param The actual parameter.
         * @returns {String} The string representation of <code>param</code>.
         */
        paramToString(param?: any): String

        /**
        * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
        * NOTE: query parameters are not handled here.
        * @param {String} path The path to append to the base URL.
        * @param {Object} pathParams The parameter values to append.
        * @returns {String} The encoded path with parameter values substituted.
        */
        buildUrl(path: String, pathParams: Object): String

        /**
         * Applies authentication headers to the request.
         * @param {Object} request The request object created by a <code>superagent()</code> call.
         * @param {Array.<String>} authNames An array of authentication method names.
         */
        applyAuthToRequest(request: Object, authNames: String[]): void

        /**
         * Deserializes an HTTP response body into a value of the specified type.
         * @param {Object} response A SuperAgent response object.
         * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
         * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
         * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
         * all properties on <code>data<code> will be converted to this type.
         * @returns A value of the specified type.
         */
        deserialize(response: Object, returnType: String | String[] | Object | Function): typeof returnType
    }
    namespace UsersApi {

    }
}