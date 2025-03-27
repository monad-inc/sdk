# .BillingProductsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BillingAccountsBillingAccountIdSubscriptionDelete**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription
[**v2BillingAccountsBillingAccountIdSubscriptionGet**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionGet) | **GET** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription
[**v2BillingAccountsBillingAccountIdSubscriptionPost**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionPost) | **POST** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription
[**v2BillingProductsGet**](BillingProductsApi.md#v2BillingProductsGet) | **GET** /v2/billing/products | List Billing Products


# **v2BillingAccountsBillingAccountIdSubscriptionDelete**
> void v2BillingAccountsBillingAccountIdSubscriptionDelete()

Cancel Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdSubscriptionDelete(request);
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

# **v2BillingAccountsBillingAccountIdSubscriptionGet**
> ModelsBillingProduct v2BillingAccountsBillingAccountIdSubscriptionGet()

Get Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdSubscriptionGet(request);
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

# **v2BillingAccountsBillingAccountIdSubscriptionPost**
> RoutesV2CreateBillingAccountSubscriptionResponse v2BillingAccountsBillingAccountIdSubscriptionPost(routesV2CreateBillingAccountSubscriptionRequest)

Create Billing Account Subscription

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiV2BillingAccountsBillingAccountIdSubscriptionPostRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Request body for creating a billing subscription
  routesV2CreateBillingAccountSubscriptionRequest: {
    productId: "productId_example",
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdSubscriptionPost(request);
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

# **v2BillingProductsGet**
> ModelsBillingProductList v2BillingProductsGet()

List Billing Products

### Example


```typescript
import { createConfiguration, BillingProductsApi } from '';
import type { BillingProductsApiV2BillingProductsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingProductsApi(configuration);

const request: BillingProductsApiV2BillingProductsGetRequest = {
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v2BillingProductsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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


