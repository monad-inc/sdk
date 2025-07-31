# \ConnectionsRbacAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3ConnectionsConnectionIdRolesGet**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesGet) | **Get** /v3/connections/{connection_id}/roles | Get Connection Roles
[**V3ConnectionsConnectionIdRolesPost**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesPost) | **Post** /v3/connections/{connection_id}/roles | Create Connection Role
[**V3ConnectionsConnectionIdRolesRoleIdDelete**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesRoleIdDelete) | **Delete** /v3/connections/{connection_id}/roles/{role_id} | Delete Connection Role
[**V3ConnectionsConnectionIdRolesRoleIdGet**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesRoleIdGet) | **Get** /v3/connections/{connection_id}/roles/{role_id} | Get Connection Role
[**V3ConnectionsConnectionIdRolesRoleIdPatch**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesRoleIdPatch) | **Patch** /v3/connections/{connection_id}/roles/{role_id} | Update Connection Role
[**V3ConnectionsConnectionIdRolesRoleIdUsersPost**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesRoleIdUsersPost) | **Post** /v3/connections/{connection_id}/roles/{role_id}/users | Create Connection User Role
[**V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete**](ConnectionsRbacAPI.md#V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete) | **Delete** /v3/connections/{connection_id}/roles/{role_id}/users/{user_id} | Delete Connection User Role
[**V3ConnectionsPermissionsGet**](ConnectionsRbacAPI.md#V3ConnectionsPermissionsGet) | **Get** /v3/connections/permissions | Get Connection Permissions



## V3ConnectionsConnectionIdRolesGet

> []ModelsConnectionRole V3ConnectionsConnectionIdRolesGet(ctx, connectionId).Execute()

Get Connection Roles



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesGet(context.Background(), connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesGet`: []ModelsConnectionRole
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesPost

> ModelsConnectionRole V3ConnectionsConnectionIdRolesPost(ctx, connectionId).RoutesV3CreateConnectionRoleRequest(routesV3CreateConnectionRoleRequest).Execute()

Create Connection Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	routesV3CreateConnectionRoleRequest := *openapiclient.NewRoutesV3CreateConnectionRoleRequest("Name_example", []string{"Permissions_example"}) // RoutesV3CreateConnectionRoleRequest | Create Connection Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesPost(context.Background(), connectionId).RoutesV3CreateConnectionRoleRequest(routesV3CreateConnectionRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesPost`: ModelsConnectionRole
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3CreateConnectionRoleRequest** | [**RoutesV3CreateConnectionRoleRequest**](RoutesV3CreateConnectionRoleRequest.md) | Create Connection Role Request | 

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesRoleIdDelete

> string V3ConnectionsConnectionIdRolesRoleIdDelete(ctx, connectionId, roleId).Execute()

Delete Connection Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdDelete(context.Background(), connectionId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesRoleIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesRoleIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesRoleIdGet

> ModelsConnectionRole V3ConnectionsConnectionIdRolesRoleIdGet(ctx, connectionId, roleId).Execute()

Get Connection Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdGet(context.Background(), connectionId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesRoleIdGet`: ModelsConnectionRole
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesRoleIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesRoleIdPatch

> ModelsConnectionRole V3ConnectionsConnectionIdRolesRoleIdPatch(ctx, connectionId, roleId).RoutesV3UpdateConnectionRoleRequest(routesV3UpdateConnectionRoleRequest).Execute()

Update Connection Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	roleId := "roleId_example" // string | Role ID
	routesV3UpdateConnectionRoleRequest := *openapiclient.NewRoutesV3UpdateConnectionRoleRequest() // RoutesV3UpdateConnectionRoleRequest | Update Connection Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdPatch(context.Background(), connectionId, roleId).RoutesV3UpdateConnectionRoleRequest(routesV3UpdateConnectionRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesRoleIdPatch`: ModelsConnectionRole
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesRoleIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3UpdateConnectionRoleRequest** | [**RoutesV3UpdateConnectionRoleRequest**](RoutesV3UpdateConnectionRoleRequest.md) | Update Connection Role Request | 

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesRoleIdUsersPost

> string V3ConnectionsConnectionIdRolesRoleIdUsersPost(ctx, connectionId, roleId).RoutesV3CreateConnectionUserRoleRequest(routesV3CreateConnectionUserRoleRequest).Execute()

Create Connection User Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	roleId := "roleId_example" // string | Role ID
	routesV3CreateConnectionUserRoleRequest := *openapiclient.NewRoutesV3CreateConnectionUserRoleRequest("UserEmail_example") // RoutesV3CreateConnectionUserRoleRequest | Create Connection User Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersPost(context.Background(), connectionId, roleId).RoutesV3CreateConnectionUserRoleRequest(routesV3CreateConnectionUserRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesRoleIdUsersPost`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesRoleIdUsersPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3CreateConnectionUserRoleRequest** | [**RoutesV3CreateConnectionUserRoleRequest**](RoutesV3CreateConnectionUserRoleRequest.md) | Create Connection User Role Request | 

### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete

> string V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete(ctx, connectionId, roleId, userId).Execute()

Delete Connection User Role



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	connectionId := "connectionId_example" // string | Connection ID
	roleId := "roleId_example" // string | Role ID
	userId := "userId_example" // string | User ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete(context.Background(), connectionId, roleId, userId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID | 
**roleId** | **string** | Role ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdRolesRoleIdUsersUserIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3ConnectionsPermissionsGet

> []ModelsConnectionPermission V3ConnectionsPermissionsGet(ctx).Execute()

Get Connection Permissions



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsRbacAPI.V3ConnectionsPermissionsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsRbacAPI.V3ConnectionsPermissionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsPermissionsGet`: []ModelsConnectionPermission
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsRbacAPI.V3ConnectionsPermissionsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsPermissionsGetRequest struct via the builder pattern


### Return type

[**[]ModelsConnectionPermission**](ModelsConnectionPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

