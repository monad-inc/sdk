# \BillingAccountsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateBillingAccount**](BillingAccountsAPI.md#CreateBillingAccount) | **Post** /v2/billing/accounts | Create Billing Account
[**DeleteBillingAccount**](BillingAccountsAPI.md#DeleteBillingAccount) | **Delete** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**GetBillingAccount**](BillingAccountsAPI.md#GetBillingAccount) | **Get** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**GetBillingAccounts**](BillingAccountsAPI.md#GetBillingAccounts) | **Get** /v2/billing/accounts | List Billing Accounts
[**UpdateBillingAccount**](BillingAccountsAPI.md#UpdateBillingAccount) | **Patch** /v2/billing/accounts/{billing_account_id} | Update Billing Account



## CreateBillingAccount

> ModelsBillingAccount CreateBillingAccount(ctx).CreateBillingAccountRequest(createBillingAccountRequest).Execute()

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
	createBillingAccountRequest := openapiclient.CreateBillingAccount_request{RoutesV2CreateBillingAccountRequest: openapiclient.NewRoutesV2CreateBillingAccountRequest("BillingEmail_example", "Name_example")} // CreateBillingAccountRequest | Request body for creating a billing account

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.CreateBillingAccount(context.Background()).CreateBillingAccountRequest(createBillingAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.CreateBillingAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingAccount`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.CreateBillingAccount`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBillingAccountRequest** | [**CreateBillingAccountRequest**](CreateBillingAccountRequest.md) | Request body for creating a billing account | 

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


## DeleteBillingAccount

> DeleteBillingAccount(ctx, billingAccountId).Execute()

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
	r, err := apiClient.BillingAccountsAPI.DeleteBillingAccount(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.DeleteBillingAccount``: %v\n", err)
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

Other parameters are passed through a pointer to a apiDeleteBillingAccountRequest struct via the builder pattern


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


## GetBillingAccount

> ModelsBillingAccount GetBillingAccount(ctx, billingAccountId).Execute()

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
	resp, r, err := apiClient.BillingAccountsAPI.GetBillingAccount(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.GetBillingAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingAccount`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.GetBillingAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingAccountRequest struct via the builder pattern


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


## GetBillingAccounts

> ModelsBillingAccountList GetBillingAccounts(ctx).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.BillingAccountsAPI.GetBillingAccounts(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.GetBillingAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingAccounts`: ModelsBillingAccountList
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.GetBillingAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingAccountsRequest struct via the builder pattern


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


## UpdateBillingAccount

> ModelsBillingAccount UpdateBillingAccount(ctx, billingAccountId).UpdateBillingAccountRequest(updateBillingAccountRequest).Execute()

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
	updateBillingAccountRequest := openapiclient.UpdateBillingAccount_request{RoutesV2UpdateBillingAccountRequest: openapiclient.NewRoutesV2UpdateBillingAccountRequest()} // UpdateBillingAccountRequest | Request body for updating a billing account

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingAccountsAPI.UpdateBillingAccount(context.Background(), billingAccountId).UpdateBillingAccountRequest(updateBillingAccountRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingAccountsAPI.UpdateBillingAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateBillingAccount`: ModelsBillingAccount
	fmt.Fprintf(os.Stdout, "Response from `BillingAccountsAPI.UpdateBillingAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateBillingAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateBillingAccountRequest** | [**UpdateBillingAccountRequest**](UpdateBillingAccountRequest.md) | Request body for updating a billing account | 

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

