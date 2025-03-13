# \BillingAccountsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2BillingAccountsBillingAccountIdDelete**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdDelete) | **Delete** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**V2BillingAccountsBillingAccountIdGet**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdGet) | **Get** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**V2BillingAccountsBillingAccountIdPatch**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdPatch) | **Patch** /v2/billing/accounts/{billing_account_id} | Update Billing Account
[**V2BillingAccountsBillingAccountIdRolesGet**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesGet) | **Get** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**V2BillingAccountsBillingAccountIdRolesPost**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesPost) | **Post** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**V2BillingAccountsBillingAccountIdRolesRoleIdDelete**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesRoleIdDelete) | **Delete** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**V2BillingAccountsBillingAccountIdRolesRoleIdGet**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesRoleIdGet) | **Get** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**V2BillingAccountsBillingAccountIdRolesRoleIdPatch**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesRoleIdPatch) | **Patch** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role
[**V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost) | **Post** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete) | **Delete** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**V2BillingAccountsGet**](BillingAccountsAPI.md#V2BillingAccountsGet) | **Get** /v2/billing/accounts | List Billing Accounts
[**V2BillingAccountsPost**](BillingAccountsAPI.md#V2BillingAccountsPost) | **Post** /v2/billing/accounts | Create Billing Account
[**V2BillingPermissionsGet**](BillingAccountsAPI.md#V2BillingPermissionsGet) | **Get** /v2/billing/permissions | Get Billing Permissions



## V2BillingAccountsBillingAccountIdDelete

> V2BillingAccountsBillingAccountIdDelete(ctx, billingAccountId).Body(body).Execute()

Delete Billing Account



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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdDelete(context.Background(), billingAccountId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsBillingAccountIdGet

> ModelsBillingAccount V2BillingAccountsBillingAccountIdGet(ctx, billingAccountId).Body(body).Execute()

Get Billing Account



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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdGet(context.Background(), billingAccountId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdGet`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsBillingAccountIdPatch

> ModelsBillingAccount V2BillingAccountsBillingAccountIdPatch(ctx, billingAccountId).RoutesV2UpdateBillingAccountRequest(routesV2UpdateBillingAccountRequest).Execute()

Update Billing Account



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
	routesV2UpdateBillingAccountRequest := *openapiclient.NewRoutesV2UpdateBillingAccountRequest() // RoutesV2UpdateBillingAccountRequest | Request body for updating a billing account

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdPatch(context.Background(), billingAccountId).RoutesV2UpdateBillingAccountRequest(routesV2UpdateBillingAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdPatch`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2UpdateBillingAccountRequest** | [**RoutesV2UpdateBillingAccountRequest**](RoutesV2UpdateBillingAccountRequest.md) | Request body for updating a billing account | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsBillingAccountIdRolesGet

> []ModelsBillingAccountRole V2BillingAccountsBillingAccountIdRolesGet(ctx, billingAccountId).Body(body).Execute()

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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesGet(context.Background(), billingAccountId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesGet`: []ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **map[string]interface{}** |  | 

### Return type

[**[]ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsBillingAccountIdRolesPost

> ModelsBillingAccountRole V2BillingAccountsBillingAccountIdRolesPost(ctx, billingAccountId).RoutesV2CreateBillingAccountRoleRequest(routesV2CreateBillingAccountRoleRequest).Execute()

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
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesPost(context.Background(), billingAccountId).RoutesV2CreateBillingAccountRoleRequest(routesV2CreateBillingAccountRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesPost`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesPostRequest struct via the builder pattern


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


## V2BillingAccountsBillingAccountIdRolesRoleIdDelete

> string V2BillingAccountsBillingAccountIdRolesRoleIdDelete(ctx, billingAccountId, roleId).Body(body).Execute()

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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdDelete(context.Background(), billingAccountId, roleId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesRoleIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **body** | **map[string]interface{}** |  | 

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


## V2BillingAccountsBillingAccountIdRolesRoleIdGet

> ModelsBillingAccountRole V2BillingAccountsBillingAccountIdRolesRoleIdGet(ctx, billingAccountId, roleId).Body(body).Execute()

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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdGet(context.Background(), billingAccountId, roleId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesRoleIdGet`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **body** | **map[string]interface{}** |  | 

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


## V2BillingAccountsBillingAccountIdRolesRoleIdPatch

> ModelsBillingAccountRole V2BillingAccountsBillingAccountIdRolesRoleIdPatch(ctx, billingAccountId, roleId).RoutesV2UpdateBillingAccountRoleRequest(routesV2UpdateBillingAccountRoleRequest).Execute()

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
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdPatch(context.Background(), billingAccountId, roleId).RoutesV2UpdateBillingAccountRoleRequest(routesV2UpdateBillingAccountRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesRoleIdPatch`: ModelsBillingAccountRole
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest struct via the builder pattern


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


## V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost

> string V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(ctx, billingAccountId, roleId).RoutesV2CreatebillingAccountUserRoleRequest(routesV2CreatebillingAccountUserRoleRequest).Execute()

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
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(context.Background(), billingAccountId, roleId).RoutesV2CreatebillingAccountUserRoleRequest(routesV2CreatebillingAccountUserRoleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 
**roleId** | **string** | Role ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest struct via the builder pattern


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


## V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete

> string V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(ctx, billingAccountId, roleId, userId).Body(body).Execute()

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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(context.Background(), billingAccountId, roleId, userId).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **body** | **map[string]interface{}** |  | 

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


## V2BillingAccountsGet

> ModelsBillingAccount V2BillingAccountsGet(ctx, billingAccountId).Limit(limit).Offset(offset).Execute()

List Billing Accounts



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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsGet(context.Background(), billingAccountId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsGet`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsPost

> ModelsBillingAccount V2BillingAccountsPost(ctx).RoutesV2CreateBillingAccountRequest(routesV2CreateBillingAccountRequest).Execute()

Create Billing Account



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
	routesV2CreateBillingAccountRequest := *openapiclient.NewRoutesV2CreateBillingAccountRequest("BillingEmail_example", "Name_example") // RoutesV2CreateBillingAccountRequest | Request body for creating a billing account

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsPost(context.Background()).RoutesV2CreateBillingAccountRequest(routesV2CreateBillingAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsPost`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateBillingAccountRequest** | [**RoutesV2CreateBillingAccountRequest**](RoutesV2CreateBillingAccountRequest.md) | Request body for creating a billing account | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingPermissionsGet

> []ModelsBillingAccountPermission V2BillingPermissionsGet(ctx).Body(body).Execute()

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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingPermissionsGet(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingPermissionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingPermissionsGet`: []ModelsBillingAccountPermission
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingPermissionsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingPermissionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

[**[]ModelsBillingAccountPermission**](ModelsBillingAccountPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

