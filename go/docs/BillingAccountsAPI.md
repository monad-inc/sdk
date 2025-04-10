# \BillingAccountsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2BillingAccountsBillingAccountIdDelete**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdDelete) | **Delete** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**V2BillingAccountsBillingAccountIdGet**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdGet) | **Get** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**V2BillingAccountsBillingAccountIdPatch**](BillingAccountsAPI.md#V2BillingAccountsBillingAccountIdPatch) | **Patch** /v2/billing/accounts/{billing_account_id} | Update Billing Account
[**V2BillingAccountsGet**](BillingAccountsAPI.md#V2BillingAccountsGet) | **Get** /v2/billing/accounts | List Billing Accounts
[**V2BillingAccountsPost**](BillingAccountsAPI.md#V2BillingAccountsPost) | **Post** /v2/billing/accounts | Create Billing Account



## V2BillingAccountsBillingAccountIdDelete

> V2BillingAccountsBillingAccountIdDelete(ctx, billingAccountId).Execute()

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdDelete(context.Background(), billingAccountId).Execute()
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


### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2BillingAccountsBillingAccountIdGet

> ModelsBillingAccount V2BillingAccountsBillingAccountIdGet(ctx, billingAccountId).Execute()

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsBillingAccountIdGet(context.Background(), billingAccountId).Execute()
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


## V2BillingAccountsGet

> ModelsBillingAccountList V2BillingAccountsGet(ctx).Limit(limit).Offset(offset).Execute()

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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.V2BillingAccountsGet(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.V2BillingAccountsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsGet`: ModelsBillingAccountList
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.V2BillingAccountsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsBillingAccountList**](ModelsBillingAccountList.md)

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

