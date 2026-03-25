# \BillingAccountsRBACAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateBillingAccountRole**](BillingAccountsRBACAPI.md#CreateBillingAccountRole) | **Post** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**CreateBillingAccountUserRole**](BillingAccountsRBACAPI.md#CreateBillingAccountUserRole) | **Post** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**DeleteBillingAccountRole**](BillingAccountsRBACAPI.md#DeleteBillingAccountRole) | **Delete** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**DeleteBillingAccountUserRole**](BillingAccountsRBACAPI.md#DeleteBillingAccountUserRole) | **Delete** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**GetBillingAccountRole**](BillingAccountsRBACAPI.md#GetBillingAccountRole) | **Get** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**GetBillingAccountRoles**](BillingAccountsRBACAPI.md#GetBillingAccountRoles) | **Get** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**GetBillingPermissions**](BillingAccountsRBACAPI.md#GetBillingPermissions) | **Get** /v2/billing/permissions | Get Billing Permissions
[**UpdateBillingAccountRole**](BillingAccountsRBACAPI.md#UpdateBillingAccountRole) | **Patch** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role



## CreateBillingAccountRole

> ModelsBillingAccountRole CreateBillingAccountRole(ctx, billingAccountId).RoutesV2CreateBillingAccountRoleRequest(routesV2CreateBillingAccountRoleRequest).Execute()

Create Billing Account Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	routesV2CreateBillingAccountRoleRequest := *openapiclient.NewRoutesV2CreateBillingAccountRoleRequest("Name_example", []string{"Permissions_example"}) // RoutesV2CreateBillingAccountRoleRequest | Create Billing Account Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.CreateBillingAccountRole(context.Background(), billingAccountId).RoutesV2CreateBillingAccountRoleRequest(routesV2CreateBillingAccountRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.CreateBillingAccountRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingAccountRole`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.CreateBillingAccountRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingAccountRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateBillingAccountRoleRequest** | [**RoutesV2CreateBillingAccountRoleRequest**](RoutesV2CreateBillingAccountRoleRequest.md) | Create Billing Account Role Request | 

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateBillingAccountUserRole

> string CreateBillingAccountUserRole(ctx, billingAccountId, roleId).RoutesV2CreatebillingAccountUserRoleRequest(routesV2CreatebillingAccountUserRoleRequest).Execute()

Create Billing Account User Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	roleId := "roleId_example" // string | Role ID
	routesV2CreatebillingAccountUserRoleRequest := *openapiclient.NewRoutesV2CreatebillingAccountUserRoleRequest("UserEmail_example") // RoutesV2CreatebillingAccountUserRoleRequest | Create Billing Account User Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.CreateBillingAccountUserRole(context.Background(), billingAccountId, roleId).RoutesV2CreatebillingAccountUserRoleRequest(routesV2CreatebillingAccountUserRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.CreateBillingAccountUserRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingAccountUserRole`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.CreateBillingAccountUserRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingAccountUserRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2CreatebillingAccountUserRoleRequest** | [**RoutesV2CreatebillingAccountUserRoleRequest**](RoutesV2CreatebillingAccountUserRoleRequest.md) | Create Billing Account User Role Request | 

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


## DeleteBillingAccountRole

> string DeleteBillingAccountRole(ctx, billingAccountId, roleId).Execute()

Delete Billing Account Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.DeleteBillingAccountRole(context.Background(), billingAccountId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.DeleteBillingAccountRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteBillingAccountRole`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.DeleteBillingAccountRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBillingAccountRoleRequest struct via the builder pattern


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


## DeleteBillingAccountUserRole

> string DeleteBillingAccountUserRole(ctx, billingAccountId, roleId, userId).Execute()

Delete Billing Account User Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	roleId := "roleId_example" // string | Role ID
	userId := "userId_example" // string | User ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.DeleteBillingAccountUserRole(context.Background(), billingAccountId, roleId, userId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.DeleteBillingAccountUserRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteBillingAccountUserRole`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.DeleteBillingAccountUserRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 
**userId** | **string** | User ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBillingAccountUserRoleRequest struct via the builder pattern


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


## GetBillingAccountRole

> ModelsBillingAccountRole GetBillingAccountRole(ctx, billingAccountId, roleId).Execute()

Get Billing Account Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	roleId := "roleId_example" // string | Role ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.GetBillingAccountRole(context.Background(), billingAccountId, roleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.GetBillingAccountRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingAccountRole`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.GetBillingAccountRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingAccountRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingAccountRoles

> []ModelsBillingAccountRole GetBillingAccountRoles(ctx, billingAccountId).Execute()

Get Billing Account Roles



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.GetBillingAccountRoles(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.GetBillingAccountRoles``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingAccountRoles`: []ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.GetBillingAccountRoles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingAccountRolesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingPermissions

> []ModelsBillingAccountPermission GetBillingPermissions(ctx).Execute()

Get Billing Permissions



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
	resp, r, err := apiClient.BillingAccountsRBACAPI.GetBillingPermissions(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.GetBillingPermissions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingPermissions`: []ModelsBillingAccountPermission
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.GetBillingPermissions`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingPermissionsRequest struct via the builder pattern


### Return type

[**[]ModelsBillingAccountPermission**](ModelsBillingAccountPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateBillingAccountRole

> ModelsBillingAccountRole UpdateBillingAccountRole(ctx, billingAccountId, roleId).RoutesV2UpdateBillingAccountRoleRequest(routesV2UpdateBillingAccountRoleRequest).Execute()

Update Billing Account Role



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
	billingAccountId := "billingAccountId_example" // string | Billing Account ID
	roleId := "roleId_example" // string | Role ID
	routesV2UpdateBillingAccountRoleRequest := *openapiclient.NewRoutesV2UpdateBillingAccountRoleRequest() // RoutesV2UpdateBillingAccountRoleRequest | Update Billing Account Role Request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsRBACAPI.UpdateBillingAccountRole(context.Background(), billingAccountId, roleId).RoutesV2UpdateBillingAccountRoleRequest(routesV2UpdateBillingAccountRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsRBACAPI.UpdateBillingAccountRole``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateBillingAccountRole`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsRBACAPI.UpdateBillingAccountRole`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateBillingAccountRoleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdateBillingAccountRoleRequest** | [**RoutesV2UpdateBillingAccountRoleRequest**](RoutesV2UpdateBillingAccountRoleRequest.md) | Update Billing Account Role Request | 

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

