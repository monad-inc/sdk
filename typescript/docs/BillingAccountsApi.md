# .BillingAccountsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBillingAccount**](BillingAccountsApi.md#createBillingAccount) | **POST** /v2/billing/accounts | Create Billing Account
[**deleteBillingAccount**](BillingAccountsApi.md#deleteBillingAccount) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**getBillingAccount**](BillingAccountsApi.md#getBillingAccount) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**getBillingAccounts**](BillingAccountsApi.md#getBillingAccounts) | **GET** /v2/billing/accounts | List Billing Accounts
[**updateBillingAccount**](BillingAccountsApi.md#updateBillingAccount) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account


# **createBillingAccount**
> ModelsBillingAccount createBillingAccount(createBillingAccountRequest)

Create Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiCreateBillingAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiCreateBillingAccountRequest = {
    // Request body for creating a billing account
  createBillingAccountRequest: null,
};

const data = await apiInstance.createBillingAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBillingAccountRequest** | **CreateBillingAccountRequest**| Request body for creating a billing account |


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

# **deleteBillingAccount**
> void deleteBillingAccount()

Delete Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiDeleteBillingAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiDeleteBillingAccountRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.deleteBillingAccount(request);
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

# **getBillingAccount**
> ModelsBillingAccount getBillingAccount()

Get Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiGetBillingAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiGetBillingAccountRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.getBillingAccount(request);
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

# **getBillingAccounts**
> ModelsBillingAccountList getBillingAccounts()

List Billing Accounts

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiGetBillingAccountsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiGetBillingAccountsRequest = {
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.getBillingAccounts(request);
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

# **updateBillingAccount**
> ModelsBillingAccount updateBillingAccount(updateBillingAccountRequest)

Update Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiUpdateBillingAccountRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiUpdateBillingAccountRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Request body for updating a billing account
  updateBillingAccountRequest: null,
};

const data = await apiInstance.updateBillingAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBillingAccountRequest** | **UpdateBillingAccountRequest**| Request body for updating a billing account |
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


