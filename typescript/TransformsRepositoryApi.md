# .TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TransformsRepositoryGet**](TransformsRepositoryApi.md#v2TransformsRepositoryGet) | **GET** /v2/transforms/repository | List transforms
[**v2TransformsRepositoryTransformIdGet**](TransformsRepositoryApi.md#v2TransformsRepositoryTransformIdGet) | **GET** /v2/transforms/repository/{transform_id} | Get transform details
[**v3TransformsRepositoryExportPost**](TransformsRepositoryApi.md#v3TransformsRepositoryExportPost) | **POST** /v3/transforms/repository/export | Export transform to YAML
[**v3TransformsRepositoryGet**](TransformsRepositoryApi.md#v3TransformsRepositoryGet) | **GET** /v3/transforms/repository | List community transforms
[**v3TransformsRepositoryImportPost**](TransformsRepositoryApi.md#v3TransformsRepositoryImportPost) | **POST** /v3/transforms/repository/import | Import transform from YAML
[**v3TransformsRepositoryTransformIdGet**](TransformsRepositoryApi.md#v3TransformsRepositoryTransformIdGet) | **GET** /v3/transforms/repository/{transform_id} | Get transform details


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

# **v3TransformsRepositoryExportPost**
> string v3TransformsRepositoryExportPost(communityTransformsInternalTransformConfig)

Export transform to YAML format

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiV3TransformsRepositoryExportPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiV3TransformsRepositoryExportPostRequest = {
    // Transform to export and optional metadata
  communityTransformsInternalTransformConfig: {
    author: "author_example",
    config: {
      "key": null,
    },
    contributors: [
      "contributors_example",
    ],
    description: "description_example",
    inputs: [
      "inputs_example",
    ],
    name: "name_example",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.v3TransformsRepositoryExportPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityTransformsInternalTransformConfig** | **CommunityTransformsInternalTransformConfig**| Transform to export and optional metadata |


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | YAML-formatted transform |  -  |
**400** | Invalid request |  -  |
**500** | Failed to export transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3TransformsRepositoryGet**
> CommunityTransformsInternalTransformsIndex v3TransformsRepositoryGet()

List transforms from repository index

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request = {};

const data = await apiInstance.v3TransformsRepositoryGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CommunityTransformsInternalTransformsIndex**

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

# **v3TransformsRepositoryImportPost**
> RoutesV3ImportTransformResponse v3TransformsRepositoryImportPost(body)

Import transform from YAML file

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiV3TransformsRepositoryImportPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiV3TransformsRepositoryImportPostRequest = {
    // YAML transform definition
  body: "body_example",
};

const data = await apiInstance.v3TransformsRepositoryImportPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| YAML transform definition |


### Return type

**RoutesV3ImportTransformResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform imported successfully |  -  |
**400** | Invalid YAML or transform validation failed |  -  |
**500** | Failed to import transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3TransformsRepositoryTransformIdGet**
> CommunityTransformsInternalTransformConfig v3TransformsRepositoryTransformIdGet()

Get detailed information about a specific transform from repository

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiV3TransformsRepositoryTransformIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiV3TransformsRepositoryTransformIdGetRequest = {
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.v3TransformsRepositoryTransformIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | [**string**] | Transform ID | defaults to undefined


### Return type

**CommunityTransformsInternalTransformConfig**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform details retrieved successfully |  -  |
**404** | Transform not found |  -  |
**500** | Failed to get transform details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


