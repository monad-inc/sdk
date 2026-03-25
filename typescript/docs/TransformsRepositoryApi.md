# .TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportTransform**](TransformsRepositoryApi.md#exportTransform) | **POST** /v3/transforms/repository/export | Export transform to YAML
[**getTransformDetailsFromRepository**](TransformsRepositoryApi.md#getTransformDetailsFromRepository) | **GET** /v3/transforms/repository/{transform_id} | Get transform details
[**getTransformRepositoryDetails**](TransformsRepositoryApi.md#getTransformRepositoryDetails) | **GET** /v2/transforms/repository/{transform_id} | Get transform details
[**importTransform**](TransformsRepositoryApi.md#importTransform) | **POST** /v3/transforms/repository/import | Import transform from YAML
[**listCommunityTransforms**](TransformsRepositoryApi.md#listCommunityTransforms) | **GET** /v3/transforms/repository | List community transforms
[**listTransformRepository**](TransformsRepositoryApi.md#listTransformRepository) | **GET** /v2/transforms/repository | List transforms


# **exportTransform**
> string exportTransform(communityTransformsInternalTransformConfig)

Export transform to YAML format

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiExportTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiExportTransformRequest = {
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

const data = await apiInstance.exportTransform(request);
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

# **getTransformDetailsFromRepository**
> CommunityTransformsInternalTransformConfig getTransformDetailsFromRepository()

Get detailed information about a specific transform from repository

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiGetTransformDetailsFromRepositoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiGetTransformDetailsFromRepositoryRequest = {
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.getTransformDetailsFromRepository(request);
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

# **getTransformRepositoryDetails**
> ModelsTransformsRepositoryTransform getTransformRepositoryDetails()

Get detailed information about a specific transform from repository

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiGetTransformRepositoryDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiGetTransformRepositoryDetailsRequest = {
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.getTransformRepositoryDetails(request);
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

# **importTransform**
> RoutesV3ImportTransformResponse importTransform(body)

Import transform from YAML file

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiImportTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiImportTransformRequest = {
    // YAML transform definition
  body: "body_example",
};

const data = await apiInstance.importTransform(request);
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

# **listCommunityTransforms**
> CommunityTransformsInternalTransformsIndex listCommunityTransforms()

List transforms from repository index

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request = {};

const data = await apiInstance.listCommunityTransforms(request);
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

# **listTransformRepository**
> ModelsTransformsRepositoryList listTransformRepository()

List transforms from repository with pagination

### Example


```typescript
import { createConfiguration, TransformsRepositoryApi } from '';
import type { TransformsRepositoryApiListTransformRepositoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRepositoryApi(configuration);

const request: TransformsRepositoryApiListTransformRepositoryRequest = {
    // Number of items to return (default: 10) (optional)
  limit: 1,
    // Number of items to skip (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.listTransformRepository(request);
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


