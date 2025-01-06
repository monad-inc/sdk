# .DataApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdDataNodeIdGet**](DataApi.md#v1OrganizationIdDataNodeIdGet) | **GET** /v1/{organization_id}/data/{node_id} | Stream node data


# **v1OrganizationIdDataNodeIdGet**
> string v1OrganizationIdDataNodeIdGet()

Stream data for a specific node within an organization

### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiV1OrganizationIdDataNodeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiV1OrganizationIdDataNodeIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Node ID
  nodeId: "node_id_example",
};

const data = await apiInstance.v1OrganizationIdDataNodeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data stream |  -  |
**400** | Failed to enable node watching |  -  |
**500** | Failed to create consumer |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


