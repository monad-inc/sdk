# \OrganizationUsersAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddUser**](OrganizationUsersAPI.md#AddUser) | **Post** /v1/{organization_id}/users | Add user to organization
[**ListUsers**](OrganizationUsersAPI.md#ListUsers) | **Get** /v1/{organization_id}/users | List organization users
[**RemoveUser**](OrganizationUsersAPI.md#RemoveUser) | **Delete** /v1/{organization_id}/users/{user_id} | Remove user from organization
[**UpdateUser**](OrganizationUsersAPI.md#UpdateUser) | **Patch** /v1/{organization_id}/users/{user_id} | Update user in organization
[**V1OrganizationIdUsersLeavePost**](OrganizationUsersAPI.md#V1OrganizationIdUsersLeavePost) | **Post** /v1/{organization_id}/users/leave | Leave organization



## AddUser

> ModelsOrganizationUser AddUser(ctx, organizationId).RoutesAddUserToOrganizationRequest(routesAddUserToOrganizationRequest).Execute()

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
	resp, r, err := apiClient.OrganizationUsersAPI.AddUser(context.Background(), organizationId).RoutesAddUserToOrganizationRequest(routesAddUserToOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.AddUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddUser`: ModelsOrganizationUser
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.AddUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiAddUserRequest struct via the builder pattern


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


## ListUsers

> ModelsOrganizationUserList ListUsers(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.OrganizationUsersAPI.ListUsers(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.ListUsers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUsers`: ModelsOrganizationUserList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.ListUsers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListUsersRequest struct via the builder pattern


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


## RemoveUser

> map[string]interface{} RemoveUser(ctx, organizationId, userId).UserAuthProviderId(userAuthProviderId).Execute()

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
	userAuthProviderId := "userAuthProviderId_example" // string | User Auth Provider ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.RemoveUser(context.Background(), organizationId, userId).UserAuthProviderId(userAuthProviderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.RemoveUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RemoveUser`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.RemoveUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **userAuthProviderId** | **string** | User Auth Provider ID | 

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


## UpdateUser

> ModelsOrganizationUser UpdateUser(ctx, organizationId, userId).RoutesUpdateUserInOrganizationRequest(routesUpdateUserInOrganizationRequest).Execute()

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
	resp, r, err := apiClient.OrganizationUsersAPI.UpdateUser(context.Background(), organizationId, userId).RoutesUpdateUserInOrganizationRequest(routesUpdateUserInOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.UpdateUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateUser`: ModelsOrganizationUser
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.UpdateUser`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserRequest struct via the builder pattern


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


## V1OrganizationIdUsersLeavePost

> map[string]interface{} V1OrganizationIdUsersLeavePost(ctx, organizationId).Execute()

Leave organization



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationUsersAPI.V1OrganizationIdUsersLeavePost(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationUsersAPI.V1OrganizationIdUsersLeavePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdUsersLeavePost`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationUsersAPI.V1OrganizationIdUsersLeavePost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdUsersLeavePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

