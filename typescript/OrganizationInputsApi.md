# .OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdInputsGet**](OrganizationInputsApi.md#v1OrganizationIdInputsGet) | **GET** /v1/{organization_id}/inputs | List inputs
[**v1OrganizationIdInputsInputIdDelete**](OrganizationInputsApi.md#v1OrganizationIdInputsInputIdDelete) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input
[**v1OrganizationIdInputsInputIdGet**](OrganizationInputsApi.md#v1OrganizationIdInputsInputIdGet) | **GET** /v1/{organization_id}/inputs/{input_id} | Get input
[**v2OrganizationIdInputsInputIdPatch**](OrganizationInputsApi.md#v2OrganizationIdInputsInputIdPatch) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input
[**v2OrganizationIdInputsInputIdPut**](OrganizationInputsApi.md#v2OrganizationIdInputsInputIdPut) | **PUT** /v2/{organization_id}/inputs/{input_id} | Replace input
[**v2OrganizationIdInputsPost**](OrganizationInputsApi.md#v2OrganizationIdInputsPost) | **POST** /v2/{organization_id}/inputs | Create input
[**v2OrganizationIdInputsTestConnectionPost**](OrganizationInputsApi.md#v2OrganizationIdInputsTestConnectionPost) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection


# **v1OrganizationIdInputsGet**
> ModelsInputList v1OrganizationIdInputsGet()

List inputs

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV1OrganizationIdInputsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV1OrganizationIdInputsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit the number of organizations returned (default: DefaultLimit) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdInputsGet(request);
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

# **v1OrganizationIdInputsInputIdDelete**
> any v1OrganizationIdInputsInputIdDelete()

Delete input

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV1OrganizationIdInputsInputIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV1OrganizationIdInputsInputIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
};

const data = await apiInstance.v1OrganizationIdInputsInputIdDelete(request);
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

# **v1OrganizationIdInputsInputIdGet**
> RoutesGetInputResponse v1OrganizationIdInputsInputIdGet()

Get input

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV1OrganizationIdInputsInputIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV1OrganizationIdInputsInputIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Input ID
  inputId: "input_id_example",
};

const data = await apiInstance.v1OrganizationIdInputsInputIdGet(request);
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

# **v2OrganizationIdInputsInputIdPatch**
> ModelsInput v2OrganizationIdInputsInputIdPatch(routesV2UpdateInputRequest)

Update an existing input with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV2OrganizationIdInputsInputIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV2OrganizationIdInputsInputIdPatchRequest = {
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

const data = await apiInstance.v2OrganizationIdInputsInputIdPatch(request);
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

# **v2OrganizationIdInputsInputIdPut**
> ModelsInput v2OrganizationIdInputsInputIdPut(routesV2PutInputRequest)

Replace an existing input with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV2OrganizationIdInputsInputIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV2OrganizationIdInputsInputIdPutRequest = {
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

const data = await apiInstance.v2OrganizationIdInputsInputIdPut(request);
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

# **v2OrganizationIdInputsPost**
> ModelsInput v2OrganizationIdInputsPost(routesV2CreateInputRequest)

Create a new input with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV2OrganizationIdInputsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV2OrganizationIdInputsPostRequest = {
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

const data = await apiInstance.v2OrganizationIdInputsPost(request);
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

# **v2OrganizationIdInputsTestConnectionPost**
> RoutesV2SuccessResponse v2OrganizationIdInputsTestConnectionPost(routesV2TestInputConnectionRequest)

Tests the connection for a given input type and configuration

### Example


```typescript
import { createConfiguration, OrganizationInputsApi } from '';
import type { OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInputsApi(configuration);

const request: OrganizationInputsApiV2OrganizationIdInputsTestConnectionPostRequest = {
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

const data = await apiInstance.v2OrganizationIdInputsTestConnectionPost(request);
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


