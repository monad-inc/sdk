# \BillingProductsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2BillingAccountsBillingAccountIdSubscriptionDelete**](BillingProductsAPI.md#V2BillingAccountsBillingAccountIdSubscriptionDelete) | **Delete** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription
[**V2BillingAccountsBillingAccountIdSubscriptionGet**](BillingProductsAPI.md#V2BillingAccountsBillingAccountIdSubscriptionGet) | **Get** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription
[**V2BillingAccountsBillingAccountIdSubscriptionPost**](BillingProductsAPI.md#V2BillingAccountsBillingAccountIdSubscriptionPost) | **Post** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription
[**V2BillingProductsGet**](BillingProductsAPI.md#V2BillingProductsGet) | **Get** /v2/billing/products | List Billing Products



## V2BillingAccountsBillingAccountIdSubscriptionDelete

> V2BillingAccountsBillingAccountIdSubscriptionDelete(ctx, billingAccountId).Execute()

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
	r, err := apiClient.BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionDelete(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest struct via the builder pattern


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


## V2BillingAccountsBillingAccountIdSubscriptionGet

> ModelsBillingProduct V2BillingAccountsBillingAccountIdSubscriptionGet(ctx, billingAccountId).Execute()

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
	resp, r, err := apiClient.BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionGet(context.Background(), billingAccountId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdSubscriptionGet`: ModelsBillingProduct
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdSubscriptionGetRequest struct via the builder pattern


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


## V2BillingAccountsBillingAccountIdSubscriptionPost

> RoutesV2CreateBillingAccountSubscriptionResponse V2BillingAccountsBillingAccountIdSubscriptionPost(ctx, billingAccountId).RoutesV2CreateBillingAccountSubscriptionRequest(routesV2CreateBillingAccountSubscriptionRequest).Execute()

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
	routesV2CreateBillingAccountSubscriptionRequest := *openapiclient.NewRoutesV2CreateBillingAccountSubscriptionRequest("ProductId_example") // RoutesV2CreateBillingAccountSubscriptionRequest | Request body for creating a billing subscription

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionPost(context.Background(), billingAccountId).RoutesV2CreateBillingAccountSubscriptionRequest(routesV2CreateBillingAccountSubscriptionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingAccountsBillingAccountIdSubscriptionPost`: RoutesV2CreateBillingAccountSubscriptionResponse
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.V2BillingAccountsBillingAccountIdSubscriptionPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**billingAccountId** | **string** | Billing Account ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingAccountsBillingAccountIdSubscriptionPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateBillingAccountSubscriptionRequest** | [**RoutesV2CreateBillingAccountSubscriptionRequest**](RoutesV2CreateBillingAccountSubscriptionRequest.md) | Request body for creating a billing subscription | 

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


## V2BillingProductsGet

> ModelsBillingProductList V2BillingProductsGet(ctx).Limit(limit).Offset(offset).Execute()

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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.BillingProductsAPI.V2BillingProductsGet(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BillingProductsAPI.V2BillingProductsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2BillingProductsGet`: ModelsBillingProductList
	fmt.Fprintf(os.Stdout, "Response from `BillingProductsAPI.V2BillingProductsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2BillingProductsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

