# .TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TransformsRepositoryGet**](TransformsRepositoryApi.md#v2TransformsRepositoryGet) | **GET** /v2/transforms/repository | List transforms
[**v2TransformsRepositoryTransformIdGet**](TransformsRepositoryApi.md#v2TransformsRepositoryTransformIdGet) | **GET** /v2/transforms/repository/{transform_id} | Get transform details


# **v2TransformsRepositoryGet**
> ModelsTransformsRepositoryList v2TransformsRepositoryGet()

List transforms from repository with pagination

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiV2TransformsRepositoryGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiV2TransformsRepositoryGetRequest = {
    // Number of items to return (default: 10) (optional)
  limit: 1,
    // Number of items to skip (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v2TransformsRepositoryGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Number of items to return (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Number of items to skip (default: 0) | (optional) defaults to undefined


### Return type

**ModelsTransformsRepositoryList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transforms retrieved successfully |  -  |
**500** | Failed to list transforms |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TransformsRepositoryTransformIdGet**
> ModelsTransformsRepositoryTransform v2TransformsRepositoryTransformIdGet()

Get detailed information about a specific transform from repository

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiV2TransformsRepositoryTransformIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiV2TransformsRepositoryTransformIdGetRequest = {
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.v2TransformsRepositoryTransformIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | [**string**] | Transform ID | defaults to undefined


### Return type

**ModelsTransformsRepositoryTransform**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform details retrieved successfully |  -  |
**500** | Failed to get transform details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


