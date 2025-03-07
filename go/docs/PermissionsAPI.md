# \PermissionsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganizationIdRolesPermissionsGet**](PermissionsAPI.md#V2OrganizationIdRolesPermissionsGet) | **Get** /v2/{organization_id}/roles/permissions | List permissions



## V2OrganizationIdRolesPermissionsGet

> ModelsPermissionList V2OrganizationIdRolesPermissionsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List permissions



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
	limit := int32(56) // int32 | Limit the number of permissions returned (default: 10) (optional)
	offset := int32(56) // int32 | Offset the permissions returned (default: 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PermissionsAPI.V2OrganizationIdRolesPermissionsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PermissionsAPI.V2OrganizationIdRolesPermissionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdRolesPermissionsGet`: ModelsPermissionList
	fmt.Fprintf(os.Stdout, "Response from `PermissionsAPI.V2OrganizationIdRolesPermissionsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdRolesPermissionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of permissions returned (default: 10) | 
 **offset** | **int32** | Offset the permissions returned (default: 0) | 

### Return type

[**ModelsPermissionList**](ModelsPermissionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

