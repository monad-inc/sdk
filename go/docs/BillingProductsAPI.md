# \BillingProductsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelBillingAccountSubscription**](BillingProductsAPI.md#CancelBillingAccountSubscription) | **Delete** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription
[**CreateBillingAccountSubscription**](BillingProductsAPI.md#CreateBillingAccountSubscription) | **Post** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription
[**GetBillingAccountSubscription**](BillingProductsAPI.md#GetBillingAccountSubscription) | **Get** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription
[**GetBillingProducts**](BillingProductsAPI.md#GetBillingProducts) | **Get** /v2/billing/products | List Billing Products



## CancelBillingAccountSubscription

> CancelBillingAccountSubscription(ctx, billingAccountId).Execute()

Cancel Billing Account Subscription



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
	r, err := apiClient.BillingProductsAPI.CancelBillingAccountSubscription(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.CancelBillingAccountSubscription``: %v\n", err)
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

Other parameters are passed through a pointer to a apiCancelBillingAccountSubscriptionRequest struct via the builder pattern


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


## CreateBillingAccountSubscription

> RoutesV2CreateBillingAccountSubscriptionResponse CreateBillingAccountSubscription(ctx, billingAccountId).CreateBillingAccountSubscriptionRequest(createBillingAccountSubscriptionRequest).Execute()

Create Billing Account Subscription



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
	createBillingAccountSubscriptionRequest := openapiclient.CreateBillingAccountSubscription_request{RoutesV2CreateBillingAccountSubscriptionRequest: openapiclient.NewRoutesV2CreateBillingAccountSubscriptionRequest("ProductId_example")} // CreateBillingAccountSubscriptionRequest | Request body for creating a billing subscription

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingProductsAPI.CreateBillingAccountSubscription(context.Background(), billingAccountId).CreateBillingAccountSubscriptionRequest(createBillingAccountSubscriptionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.CreateBillingAccountSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateBillingAccountSubscription`: RoutesV2CreateBillingAccountSubscriptionResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.CreateBillingAccountSubscription`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateBillingAccountSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createBillingAccountSubscriptionRequest** | [**CreateBillingAccountSubscriptionRequest**](CreateBillingAccountSubscriptionRequest.md) | Request body for creating a billing subscription | 

### Return type

[**RoutesV2CreateBillingAccountSubscriptionResponse**](RoutesV2CreateBillingAccountSubscriptionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingAccountSubscription

> ModelsBillingProduct GetBillingAccountSubscription(ctx, billingAccountId).Execute()

Get Billing Account Subscription



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
	resp, r, err := apiClient.BillingProductsAPI.GetBillingAccountSubscription(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.GetBillingAccountSubscription``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingAccountSubscription`: ModelsBillingProduct
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.GetBillingAccountSubscription`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingAccountSubscriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModelsBillingProduct**](ModelsBillingProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingProducts

> ModelsBillingProductList GetBillingProducts(ctx).ShowInactive(showInactive).Limit(limit).Offset(offset).Execute()

List Billing Products



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
	showInactive := true // bool | Show inactive products (optional)
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingProductsAPI.GetBillingProducts(context.Background()).ShowInactive(showInactive).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.GetBillingProducts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBillingProducts`: ModelsBillingProductList
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.GetBillingProducts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **showInactive** | **bool** | Show inactive products | 
 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsBillingProductList**](ModelsBillingProductList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

