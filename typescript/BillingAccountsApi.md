# .BillingAccountsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BillingAccountsBillingAccountIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**v2BillingAccountsBillingAccountIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdGet) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**v2BillingAccountsBillingAccountIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account
[**v2BillingAccountsGet**](BillingAccountsApi.md#v2BillingAccountsGet) | **GET** /v2/billing/accounts | List Billing Accounts
[**v2BillingAccountsPost**](BillingAccountsApi.md#v2BillingAccountsPost) | **POST** /v2/billing/accounts | Create Billing Account


# **v2BillingAccountsBillingAccountIdDelete**
> void v2BillingAccountsBillingAccountIdDelete()

Delete Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdDelete(request);
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
**200** | Billing account deleted successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdGet**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdGet()

Get Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdPatch**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdPatch(routesV2UpdateBillingAccountRequest)

Update Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Request body for updating a billing account
  routesV2UpdateBillingAccountRequest: {
    billingEmail: "billingEmail_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateBillingAccountRequest** | **RoutesV2UpdateBillingAccountRequest**| Request body for updating a billing account |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsGet**
> ModelsBillingAccountList v2BillingAccountsGet()

List Billing Accounts

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsGetRequest = {
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v2BillingAccountsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsBillingAccountList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list billing accounts successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list Billing Accounts |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsPost**
> ModelsBillingAccount v2BillingAccountsPost(routesV2CreateBillingAccountRequest)

Create Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsPostRequest = {
    // Request body for creating a billing account
  routesV2CreateBillingAccountRequest: {
    billingEmail: "billingEmail_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v2BillingAccountsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateBillingAccountRequest** | **RoutesV2CreateBillingAccountRequest**| Request body for creating a billing account |


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


