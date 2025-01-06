# \RolesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdRolesGet**](RolesAPI.md#V1OrganizationIdRolesGet) | **Get** /v1/{organization_id}/roles | List roles
[**V1OrganizationIdRolesPost**](RolesAPI.md#V1OrganizationIdRolesPost) | **Post** /v1/{organization_id}/roles | Create role
[**V1OrganizationIdRolesRoleIdDelete**](RolesAPI.md#V1OrganizationIdRolesRoleIdDelete) | **Delete** /v1/{organization_id}/roles/{role_id} | Delete role
[**V1OrganizationIdRolesRoleIdGet**](RolesAPI.md#V1OrganizationIdRolesRoleIdGet) | **Get** /v1/{organization_id}/roles/{role_id} | Get role
[**V1OrganizationIdRolesRoleIdPatch**](RolesAPI.md#V1OrganizationIdRolesRoleIdPatch) | **Patch** /v1/{organization_id}/roles/{role_id} | Update role



## V1OrganizationIdRolesGet

> ModelsRoleList V1OrganizationIdRolesGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List roles



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
	organizationId := "organizationId_example" // string | Organization ID
	limit := int32(56) // int32 | Limit the number of roles returned (default: 10) (optional)
	offset := int32(56) // int32 | Offset the roles returned (default: 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V1OrganizationIdRolesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V1OrganizationIdRolesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdRolesGet`: ModelsRoleList
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V1OrganizationIdRolesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdRolesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of roles returned (default: 10) | 
 **offset** | **int32** | Offset the roles returned (default: 0) | 

### Return type

[**ModelsRoleList**](ModelsRoleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdRolesPost

> ModelsRole V1OrganizationIdRolesPost(ctx, organizationId).RoutesCreateRoleRequest(routesCreateRoleRequest).Execute()

Create role



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
	organizationId := "organizationId_example" // string | Organization ID
	routesCreateRoleRequest := *openapiclient.NewRoutesCreateRoleRequest("Name_example") // RoutesCreateRoleRequest | Request body for creating a role

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V1OrganizationIdRolesPost(context.Background(), organizationId).RoutesCreateRoleRequest(routesCreateRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V1OrganizationIdRolesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdRolesPost`: ModelsRole
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V1OrganizationIdRolesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdRolesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesCreateRoleRequest** | [**RoutesCreateRoleRequest**](RoutesCreateRoleRequest.md) | Request body for creating a role | 

### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdRolesRoleIdDelete

> map[string]interface{} V1OrganizationIdRolesRoleIdDelete(ctx, organizationId, roleId).Execute()

Delete role



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
	organizationId := "organizationId_example" // string | Organization ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V1OrganizationIdRolesRoleIdDelete(context.Background(), organizationId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V1OrganizationIdRolesRoleIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdRolesRoleIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V1OrganizationIdRolesRoleIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdRolesRoleIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**map[string]interface{}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdRolesRoleIdGet

> ModelsRole V1OrganizationIdRolesRoleIdGet(ctx, organizationId, roleId).Execute()

Get role



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
	organizationId := "organizationId_example" // string | Organization ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V1OrganizationIdRolesRoleIdGet(context.Background(), organizationId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V1OrganizationIdRolesRoleIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdRolesRoleIdGet`: ModelsRole
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V1OrganizationIdRolesRoleIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdRolesRoleIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdRolesRoleIdPatch

> ModelsRole V1OrganizationIdRolesRoleIdPatch(ctx, organizationId, roleId).RoutesUpdateRoleRequest(routesUpdateRoleRequest).Execute()

Update role



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
	organizationId := "organizationId_example" // string | Organization ID
	roleId := "roleId_example" // string | Role ID
	routesUpdateRoleRequest := *openapiclient.NewRoutesUpdateRoleRequest() // RoutesUpdateRoleRequest | Request body for updating a role

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V1OrganizationIdRolesRoleIdPatch(context.Background(), organizationId, roleId).RoutesUpdateRoleRequest(routesUpdateRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V1OrganizationIdRolesRoleIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdRolesRoleIdPatch`: ModelsRole
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V1OrganizationIdRolesRoleIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdRolesRoleIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesUpdateRoleRequest** | [**RoutesUpdateRoleRequest**](RoutesUpdateRoleRequest.md) | Request body for updating a role | 

### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

