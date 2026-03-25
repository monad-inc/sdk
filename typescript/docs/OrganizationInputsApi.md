# .OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInput**](OrganizationInputsApi.md#createInput) | **POST** /v2/{organization_id}/inputs | Create input
[**deleteOrganizationInput**](OrganizationInputsApi.md#deleteOrganizationInput) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input
[**getOrganizationInput**](OrganizationInputsApi.md#getOrganizationInput) | **GET** /v1/{organization_id}/inputs/{input_id} | Get organization input
[**listOrganizationInputs**](OrganizationInputsApi.md#listOrganizationInputs) | **GET** /v1/{organization_id}/inputs | List organization inputs
[**replaceInput**](OrganizationInputsApi.md#replaceInput) | **PUT** /v2/{organization_id}/inputs/{input_id} | Replace input
[**testInputConnection**](OrganizationInputsApi.md#testInputConnection) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection
[**updateInput**](OrganizationInputsApi.md#updateInput) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input


# **createInput**
> ModelsInput createInput(routesV2CreateInputRequest)

Create a new input with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiCreateInputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiCreateInputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input configuration
  routesV2CreateInputRequest: {
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
    type: "type_example",
  },
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.createInput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateInputRequest** | **RoutesV2CreateInputRequest**| Input configuration |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


### Return type

**ModelsInput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input created successfully |  -  |
**400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrganizationInput**
> any deleteOrganizationInput()

Delete input

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiDeleteOrganizationInputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiDeleteOrganizationInputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
};

const data = await apiInstance.deleteOrganizationInput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **inputId** | [**string**] | Input ID | defaults to undefined


### Return type

**any**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Failed to delete input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationInput**
> RoutesGetInputResponse getOrganizationInput()

Get a configured input in organization

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiGetOrganizationInputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiGetOrganizationInputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
};

const data = await apiInstance.getOrganizationInput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **inputId** | [**string**] | Input ID | defaults to undefined


### Return type

**RoutesGetInputResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationInputs**
> ModelsInputList listOrganizationInputs()

List configured inputs in organization

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiListOrganizationInputsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiListOrganizationInputsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit the number of organizations returned (default: DefaultLimit) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.listOrganizationInputs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit the number of organizations returned (default: DefaultLimit) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the organizations returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsInputList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inputs retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceInput**
> ModelsInput replaceInput(routesV2PutInputRequest)

Replace an existing input with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiReplaceInputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiReplaceInputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
    // Input configuration update
  routesV2PutInputRequest: {
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
    type: "type_example",
  },
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.replaceInput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2PutInputRequest** | **RoutesV2PutInputRequest**| Input configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **inputId** | [**string**] | Input ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


### Return type

**ModelsInput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input updated successfully |  -  |
**400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
**404** | Input not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testInputConnection**
> RoutesV2SuccessResponse testInputConnection(routesV2TestInputConnectionRequest)

Tests the connection for a given input type and configuration

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiTestInputConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiTestInputConnectionRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input configuration to test
  routesV2TestInputConnectionRequest: {
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

const data = await apiInstance.testInputConnection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2TestInputConnectionRequest** | **RoutesV2TestInputConnectionRequest**| Input configuration to test |
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
**400** | Invalid request body, input type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateInput**
> ModelsInput updateInput(routesV2UpdateInputRequest)

Update an existing input with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiUpdateInputRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiUpdateInputRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
    // Input configuration update
  routesV2UpdateInputRequest: {
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
    type: "type_example",
  },
    // Test connection before creating the input (optional)
  testConnection: true,
};

const data = await apiInstance.updateInput(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateInputRequest** | **RoutesV2UpdateInputRequest**| Input configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **inputId** | [**string**] | Input ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the input | (optional) defaults to undefined


### Return type

**ModelsInput**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input updated successfully |  -  |
**400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
**404** | Input not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


