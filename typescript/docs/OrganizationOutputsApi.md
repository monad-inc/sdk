# .OrganizationOutputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOutput**](OrganizationOutputsApi.md#createOutput) | **POST** /v2/{organization_id}/outputs | Create output
[**deleteOrganizationOutput**](OrganizationOutputsApi.md#deleteOrganizationOutput) | **DELETE** /v1/{organization_id}/outputs/{output_id} | Delete output
[**getOrganizationOutput**](OrganizationOutputsApi.md#getOrganizationOutput) | **GET** /v1/{organization_id}/outputs/{output_id} | Get a output
[**listOrganizationOutputs**](OrganizationOutputsApi.md#listOrganizationOutputs) | **GET** /v1/{organization_id}/outputs | List configured outputs in organization
[**replaceOutput**](OrganizationOutputsApi.md#replaceOutput) | **PUT** /v2/{organization_id}/outputs/{output_id} | Replace output
[**testOutputConnection**](OrganizationOutputsApi.md#testOutputConnection) | **POST** /v2/{organization_id}/outputs/test-connection | Test output connection
[**updateOutput**](OrganizationOutputsApi.md#updateOutput) | **PATCH** /v2/{organization_id}/outputs/{output_id} | Update output


# **createOutput**
> ModelsOutput createOutput(routesV2CreateOutputRequest)

Create a new output with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiCreateOutputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiCreateOutputRequest = {
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
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.createOutput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateOutputRequest** | **RoutesV2CreateOutputRequest**| Output configuration |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


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

# **deleteOrganizationOutput**
> string deleteOrganizationOutput()

Delete output

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiDeleteOrganizationOutputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiDeleteOrganizationOutputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
};

const data = await apiInstance.deleteOrganizationOutput(request);
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

# **getOrganizationOutput**
> RoutesGetOutputResponse getOrganizationOutput()

Get a configured output in organization

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiGetOrganizationOutputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiGetOrganizationOutputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
};

const data = await apiInstance.getOrganizationOutput(request);
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

# **listOrganizationOutputs**
> ModelsOutputList listOrganizationOutputs()

List outputs

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiListOrganizationOutputsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiListOrganizationOutputsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listOrganizationOutputs(request);
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

# **replaceOutput**
> ModelsOutput replaceOutput(routesV2PutOutputRequest)

Replace an existing output with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiReplaceOutputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiReplaceOutputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Output ID
  outputId: "output_id_example",
    // Output configuration update
  routesV2PutOutputRequest: {
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
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.replaceOutput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2PutOutputRequest** | **RoutesV2PutOutputRequest**| Output configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


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

# **testOutputConnection**
> RoutesV2SuccessResponse testOutputConnection(routesV2TestOutputConnectionRequest)

Tests the connection for a given output type and configuration

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiTestOutputConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiTestOutputConnectionRequest = {
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
    type: "type_example",
  },
};

const data = await apiInstance.testOutputConnection(request);
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

# **updateOutput**
> ModelsOutput updateOutput(routesV2UpdateOutputRequest)

Update an existing output with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationOutputsApi } from '';
import type { OrganizationOutputsApiUpdateOutputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationOutputsApi(configuration);

const request: OrganizationOutputsApiUpdateOutputRequest = {
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
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.updateOutput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateOutputRequest** | **RoutesV2UpdateOutputRequest**| Output configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **outputId** | [**string**] | Output ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


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


