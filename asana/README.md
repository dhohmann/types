# Asana Client Types
Refers to the Asana Client implementation in Javascript ([node-asana](https://github.com/Asana/node-asana/)). As the type definitions did not match, I looked into the isssue. There are some other client implementations, that do the same thing, but do not follow the online documentation.

## Plan to update/maintain
Basically none as I tried this as a test. To be safe, you should use API implementation like [asana-sdk](https://github.com/pliancy/asana-sdk) or build your own client using the provided schemas.

## Workflow that I used

### Extract the types from the client
Clone the files of the client.

For extraction of the types from the implementation use the command:
> npx -p typescript tsc ./src/index.js --declaration --allowJs --emitDeclarationOnly --outDir types

This results in `d.ts` files that we can work with. You just need to copy them to your desired destination.


### Get the types used during service calls
The service calls in the extracted files work with `any` as the type for various parameters and responses. Using the provided [OpenAPI specification](https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml) we can extract the response and request types.

For the extraction use the command:
> npx openapi-typescript https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml -o ./asana/webservices.d.ts -y

These types are wrapped inside various interfaces. To use the response types, optional request parameters etc. define a new file containing all used types. In `types.ts` are various helper definitions that provide parsing utilities.

```typescript
export type UserRequestOpt = RequestOpt<"getUser">
export type UserResponse = Response<"getUser", 200>
export type UserResponseData = Schemas["UserResponse"]
```