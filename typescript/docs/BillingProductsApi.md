# .BillingProductsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBillingAccountSubscription**](BillingProductsApi.md#cancelBillingAccountSubscription) | **DELETE** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription
[**createBillingAccountSubscription**](BillingProductsApi.md#createBillingAccountSubscription) | **POST** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription
[**getBillingAccountSubscription**](BillingProductsApi.md#getBillingAccountSubscription) | **GET** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription
[**getBillingProducts**](BillingProductsApi.md#getBillingProducts) | **GET** /v2/billing/products | List Billing Products


# **cancelBillingAccountSubscription**
> void cancelBillingAccountSubscription()

Cancel Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiCancelBillingAccountSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiCancelBillingAccountSubscriptionRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.cancelBillingAccountSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Billing subscription cancelled successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to cancel billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBillingAccountSubscription**
> RoutesV2CreateBillingAccountSubscriptionResponse createBillingAccountSubscription(routesV2CreateBillingAccountSubscriptionRequest)

Create Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiCreateBillingAccountSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiCreateBillingAccountSubscriptionRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Request body for creating a billing subscription
  routesV2CreateBillingAccountSubscriptionRequest: {
    productId: "productId_example",
  },
};

const data = await apiInstance.createBillingAccountSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateBillingAccountSubscriptionRequest** | **RoutesV2CreateBillingAccountSubscriptionRequest**| Request body for creating a billing subscription |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**RoutesV2CreateBillingAccountSubscriptionResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing subscription intialized successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to created billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingAccountSubscription**
> ModelsBillingProduct getBillingAccountSubscription()

Get Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiGetBillingAccountSubscriptionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiGetBillingAccountSubscriptionRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.getBillingAccountSubscription(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingProduct**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing subscription retrieved successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingProducts**
> ModelsBillingProductList getBillingProducts()

List Billing Products

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiGetBillingProductsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiGetBillingProductsRequest = {
    // Show inactive products (optional)
  showInactive: true,
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.getBillingProducts(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **showInactive** | [**boolean**] | Show inactive products | (optional) defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsBillingProductList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing product listed successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list billing products |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


