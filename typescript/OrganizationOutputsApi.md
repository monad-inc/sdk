# .OrganizationOutputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdOutputsGet**](OrganizationOutputsApi.md#v1OrganizationIdOutputsGet) | **GET** /v1/{organization_id}/outputs | List outputs
[**v1OrganizationIdOutputsOutputIdDelete**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdDelete) | **DELETE** /v1/{organization_id}/outputs/{output_id} | Delete output
[**v1OrganizationIdOutputsOutputIdGet**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdGet) | **GET** /v1/{organization_id}/outputs/{output_id} | Get output
[**v1OrganizationIdOutputsOutputIdPatch**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdPatch) | **PATCH** /v1/{organization_id}/outputs/{output_id} | Update output
[**v1OrganizationIdOutputsPost**](OrganizationOutputsApi.md#v1OrganizationIdOutputsPost) | **POST** /v1/{organization_id}/outputs | Create output
[**v2OrganizationIdOutputsOutputIdPatch**](OrganizationOutputsApi.md#v2OrganizationIdOutputsOutputIdPatch) | **PATCH** /v2/{organization_id}/outputs/{output_id} | Update output
[**v2OrganizationIdOutputsPost**](OrganizationOutputsApi.md#v2OrganizationIdOutputsPost) | **POST** /v2/{organization_id}/outputs | Create output
[**v2OrganizationIdOutputsTestConnectionPost**](OrganizationOutputsApi.md#v2OrganizationIdOutputsTestConnectionPost) | **POST** /v2/{organization_id}/outputs/test-connection | Test output connection


# **v1OrganizationIdOutputsGet**
> ModelsOutputList v1OrganizationIdOutputsGet()

List outputs

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV1OrganizationIdOutputsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV1OrganizationIdOutputsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdOutputsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsOutputList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of outputs |  -  |
**500** | Failed to marshal outputs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdOutputsOutputIdDelete**
> string v1OrganizationIdOutputsOutputIdDelete()

Delete output

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV1OrganizationIdOutputsOutputIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
};

const data = await apiInstance.v1OrganizationIdOutputsOutputIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output deleted successfully |  -  |
**500** | Failed to delete output |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdOutputsOutputIdGet**
> RoutesGetOutputResponse v1OrganizationIdOutputsOutputIdGet()

Get output

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV1OrganizationIdOutputsOutputIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
};

const data = await apiInstance.v1OrganizationIdOutputsOutputIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined


### Return type

**RoutesGetOutputResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output retrieved successfully |  -  |
**500** | Failed to get output |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdOutputsOutputIdPatch**
> ModelsOutput v1OrganizationIdOutputsOutputIdPatch(routesUpdateOutputRequest)

Update output

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV1OrganizationIdOutputsOutputIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV1OrganizationIdOutputsOutputIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
    // Request body for updating an output
  routesUpdateOutputRequest: {
    config: {
      secrets: {
        "key": null,
      },
      settings: {
        "key": null,
      },
    },
    description: "description_example",
    name: "name_example",
    outputType: "outputType_example",
  },
};

const data = await apiInstance.v1OrganizationIdOutputsOutputIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateOutputRequest** | **RoutesUpdateOutputRequest**| Request body for updating an output |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined


### Return type

**ModelsOutput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update output |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdOutputsPost**
> ModelsOutput v1OrganizationIdOutputsPost(routesCreateOutputRequest)

Create output

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV1OrganizationIdOutputsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV1OrganizationIdOutputsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating an output
  routesCreateOutputRequest: {
    config: {
      secrets: {
        "key": null,
      },
      settings: {
        "key": null,
      },
    },
    description: "description_example",
    name: "name_example",
    outputType: "outputType_example",
    promiseId: "promiseId_example",
  },
};

const data = await apiInstance.v1OrganizationIdOutputsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateOutputRequest** | **RoutesCreateOutputRequest**| Request body for creating an output |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsOutput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create output |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdOutputsOutputIdPatch**
> ModelsOutput v2OrganizationIdOutputsOutputIdPatch(routesV2UpdateOutputRequest)

Update an existing output with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV2OrganizationIdOutputsOutputIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
    // Output configuration update
  routesV2UpdateOutputRequest: {
    config: {
      secrets: 
        key: null,
      ,
      settings: 
        key: null,
      ,
    },
    description: "description_example",
    name: "name_example",
    outputType: "outputType_example",
  },
};

const data = await apiInstance.v2OrganizationIdOutputsOutputIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateOutputRequest** | **RoutesV2UpdateOutputRequest**| Output configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined


### Return type

**ModelsOutput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output updated successfully |  -  |
**400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
**404** | Output not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdOutputsPost**
> ModelsOutput v2OrganizationIdOutputsPost(routesV2CreateOutputRequest)

Create a new output with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV2OrganizationIdOutputsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV2OrganizationIdOutputsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output configuration
  routesV2CreateOutputRequest: {
    config: {
      secrets: 
        key: null,
      ,
      settings: 
        key: null,
      ,
    },
    description: "description_example",
    name: "name_example",
    outputType: "outputType_example",
    promiseId: "promiseId_example",
  },
};

const data = await apiInstance.v2OrganizationIdOutputsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateOutputRequest** | **RoutesV2CreateOutputRequest**| Output configuration |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsOutput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output created successfully |  -  |
**400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdOutputsTestConnectionPost**
> RoutesV2SuccessResponse v2OrganizationIdOutputsTestConnectionPost(routesV2TestOutputConnectionRequest)

Tests the connection for a given output type and configuration

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiV2OrganizationIdOutputsTestConnectionPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output configuration to test
  routesV2TestOutputConnectionRequest: {
    config: {
      secrets: 
        key: null,
      ,
      settings: 
        key: null,
      ,
    },
    promiseId: "promiseId_example",
    type: "type_example",
  },
};

const data = await apiInstance.v2OrganizationIdOutputsTestConnectionPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2TestOutputConnectionRequest** | **RoutesV2TestOutputConnectionRequest**| Output configuration to test |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV2SuccessResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection test successful |  -  |
**400** | Invalid request body, output type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


