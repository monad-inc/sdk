# .OrganizationQuotasApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganizationIdQuotasGet**](OrganizationQuotasApi.md#v2OrganizationIdQuotasGet) | **GET** /v2/{organization_id}/quotas | Get Organization Quotas


# **v2OrganizationIdQuotasGet**
> ModelsQuotaList v2OrganizationIdQuotasGet()

Returns a paginated list of quotas with their latest usage for a given organization

### Example


```typescript
import { createConfiguration, OrganizationQuotasApi } from '';
import type { OrganizationQuotasApiV2OrganizationIdQuotasGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationQuotasApi(configuration);

const request: OrganizationQuotasApiV2OrganizationIdQuotasGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
  
  body: {},
};

const data = await apiInstance.v2OrganizationIdQuotasGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsQuotaList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of quotas |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list quotas |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


