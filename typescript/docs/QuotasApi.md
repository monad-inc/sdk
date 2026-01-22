# .QuotasApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2QuotasGet**](QuotasApi.md#v2QuotasGet) | **GET** /v2/quotas | List quotas


# **v2QuotasGet**
> ModelsQuotaList v2QuotasGet()

List quotas for a given billing account or organization id.

### Example


```typescript
import { createConfiguration, QuotasApi } from '';
import type { QuotasApiV2QuotasGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuotasApi(configuration);

const request: QuotasApiV2QuotasGetRequest = {
    // Billing Account ID (optional)
  billingAccountId: "billing_account_id_example",
    // Organization ID (optional)
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
  
  body: {},
};

const data = await apiInstance.v2QuotasGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | (optional) defaults to undefined
 **organizationId** | [**string**] | Organization ID | (optional) defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsQuotaList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list quotas successful |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list quotas |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


