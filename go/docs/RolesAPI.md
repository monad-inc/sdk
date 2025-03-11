# \RolesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganizationIdRolesGet**](RolesAPI.md#V2OrganizationIdRolesGet) | **Get** /v2/{organization_id}/roles | List roles
[**V2OrganizationIdRolesPost**](RolesAPI.md#V2OrganizationIdRolesPost) | **Post** /v2/{organization_id}/roles | Create role
[**V2OrganizationIdRolesRoleIdDelete**](RolesAPI.md#V2OrganizationIdRolesRoleIdDelete) | **Delete** /v2/{organization_id}/roles/{role_id} | Delete role
[**V2OrganizationIdRolesRoleIdGet**](RolesAPI.md#V2OrganizationIdRolesRoleIdGet) | **Get** /v2/{organization_id}/roles/{role_id} | Get role
[**V2OrganizationIdRolesRoleIdPatch**](RolesAPI.md#V2OrganizationIdRolesRoleIdPatch) | **Patch** /v2/{organization_id}/roles/{role_id} | Update role



## V2OrganizationIdRolesGet

> ModelsRoleWithPermissionsList V2OrganizationIdRolesGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.RolesAPI.V2OrganizationIdRolesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V2OrganizationIdRolesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesGet`: ModelsRoleWithPermissionsList
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V2OrganizationIdRolesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of roles returned (default: 10) | 
 **offset** | **int32** | Offset the roles returned (default: 0) | 

### Return type

[**ModelsRoleWithPermissionsList**](ModelsRoleWithPermissionsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdRolesPost

> ModelsRoleWithPermissions V2OrganizationIdRolesPost(ctx, organizationId).RoutesV2CreateRoleV2Request(routesV2CreateRoleV2Request).Execute()

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
	routesV2CreateRoleV2Request := *openapiclient.NewRoutesV2CreateRoleV2Request("Name_example", []string{"PermissionIds_example"}) // RoutesV2CreateRoleV2Request | Request body for creating a role

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V2OrganizationIdRolesPost(context.Background(), organizationId).RoutesV2CreateRoleV2Request(routesV2CreateRoleV2Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V2OrganizationIdRolesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesPost`: ModelsRoleWithPermissions
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V2OrganizationIdRolesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateRoleV2Request** | [**RoutesV2CreateRoleV2Request**](RoutesV2CreateRoleV2Request.md) | Request body for creating a role | 

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdRolesRoleIdDelete

> map[string]interface{} V2OrganizationIdRolesRoleIdDelete(ctx, organizationId, roleId).Execute()

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
	resp, r, err := apiClient.RolesAPI.V2OrganizationIdRolesRoleIdDelete(context.Background(), organizationId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V2OrganizationIdRolesRoleIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesRoleIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V2OrganizationIdRolesRoleIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesRoleIdDeleteRequest struct via the builder pattern


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


## V2OrganizationIdRolesRoleIdGet

> ModelsRoleWithPermissions V2OrganizationIdRolesRoleIdGet(ctx, organizationId, roleId).Execute()

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
	resp, r, err := apiClient.RolesAPI.V2OrganizationIdRolesRoleIdGet(context.Background(), organizationId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V2OrganizationIdRolesRoleIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesRoleIdGet`: ModelsRoleWithPermissions
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V2OrganizationIdRolesRoleIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesRoleIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdRolesRoleIdPatch

> ModelsRoleWithPermissions V2OrganizationIdRolesRoleIdPatch(ctx, organizationId, roleId).RoutesV2UpdateRoleV2Request(routesV2UpdateRoleV2Request).Execute()

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
	routesV2UpdateRoleV2Request := *openapiclient.NewRoutesV2UpdateRoleV2Request() // RoutesV2UpdateRoleV2Request | Request body for updating a role

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RolesAPI.V2OrganizationIdRolesRoleIdPatch(context.Background(), organizationId, roleId).RoutesV2UpdateRoleV2Request(routesV2UpdateRoleV2Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RolesAPI.V2OrganizationIdRolesRoleIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesRoleIdPatch`: ModelsRoleWithPermissions
	fmt.Fprintf(os.Stdout, "Response from `RolesAPI.V2OrganizationIdRolesRoleIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesRoleIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdateRoleV2Request** | [**RoutesV2UpdateRoleV2Request**](RoutesV2UpdateRoleV2Request.md) | Request body for updating a role | 

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

