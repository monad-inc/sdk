# \OrganizationUsersAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdUsersGet**](OrganizationUsersAPI.md#V1OrganizationIdUsersGet) | **Get** /v1/{organization_id}/users | List organization users
[**V1OrganizationIdUsersPost**](OrganizationUsersAPI.md#V1OrganizationIdUsersPost) | **Post** /v1/{organization_id}/users | Add user to organization
[**V1OrganizationIdUsersUserIdDelete**](OrganizationUsersAPI.md#V1OrganizationIdUsersUserIdDelete) | **Delete** /v1/{organization_id}/users/{user_id} | Remove user from organization
[**V1OrganizationIdUsersUserIdPatch**](OrganizationUsersAPI.md#V1OrganizationIdUsersUserIdPatch) | **Patch** /v1/{organization_id}/users/{user_id} | Update user in organization



## V1OrganizationIdUsersGet

> ModelsOrganizationUserList V1OrganizationIdUsersGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List organization users



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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.V1OrganizationIdUsersGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.V1OrganizationIdUsersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdUsersGet`: ModelsOrganizationUserList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.V1OrganizationIdUsersGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdUsersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsOrganizationUserList**](ModelsOrganizationUserList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdUsersPost

> ModelsOrganizationUser V1OrganizationIdUsersPost(ctx, organizationId).RoutesAddUserToOrganizationRequest(routesAddUserToOrganizationRequest).Execute()

Add user to organization



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
	organizationId := "organizationId_example" // string | organization ID
	routesAddUserToOrganizationRequest := *openapiclient.NewRoutesAddUserToOrganizationRequest("RoleId_example", "UserId_example") // RoutesAddUserToOrganizationRequest | Request body for adding a user to an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.V1OrganizationIdUsersPost(context.Background(), organizationId).RoutesAddUserToOrganizationRequest(routesAddUserToOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.V1OrganizationIdUsersPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdUsersPost`: ModelsOrganizationUser
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.V1OrganizationIdUsersPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdUsersPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesAddUserToOrganizationRequest** | [**RoutesAddUserToOrganizationRequest**](RoutesAddUserToOrganizationRequest.md) | Request body for adding a user to an organization | 

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdUsersUserIdDelete

> map[string]interface{} V1OrganizationIdUsersUserIdDelete(ctx, organizationId, userId).Execute()

Remove user from organization



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
	userId := "userId_example" // string | User ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.V1OrganizationIdUsersUserIdDelete(context.Background(), organizationId, userId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.V1OrganizationIdUsersUserIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdUsersUserIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.V1OrganizationIdUsersUserIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdUsersUserIdDeleteRequest struct via the builder pattern


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


## V1OrganizationIdUsersUserIdPatch

> ModelsOrganizationUser V1OrganizationIdUsersUserIdPatch(ctx, organizationId, userId).RoutesUpdateUserInOrganizationRequest(routesUpdateUserInOrganizationRequest).Execute()

Update user in organization



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
	userId := "userId_example" // string | User ID
	routesUpdateUserInOrganizationRequest := *openapiclient.NewRoutesUpdateUserInOrganizationRequest() // RoutesUpdateUserInOrganizationRequest | Request body for updating a user in an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.V1OrganizationIdUsersUserIdPatch(context.Background(), organizationId, userId).RoutesUpdateUserInOrganizationRequest(routesUpdateUserInOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.V1OrganizationIdUsersUserIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdUsersUserIdPatch`: ModelsOrganizationUser
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.V1OrganizationIdUsersUserIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdUsersUserIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesUpdateUserInOrganizationRequest** | [**RoutesUpdateUserInOrganizationRequest**](RoutesUpdateUserInOrganizationRequest.md) | Request body for updating a user in an organization | 

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

