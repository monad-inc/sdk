# .SecretsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSecret**](SecretsApi.md#createSecret) | **POST** /v2/{organization_id}/secrets | Create secret
[**deleteSecret**](SecretsApi.md#deleteSecret) | **DELETE** /v2/{organization_id}/secrets/{secret_id} | Delete secret
[**getSecret**](SecretsApi.md#getSecret) | **GET** /v2/{organization_id}/secrets/{secret_id} | Get secret with components
[**listSecrets**](SecretsApi.md#listSecrets) | **GET** /v2/{organization_id}/secrets | List secrets with components
[**updateSecret**](SecretsApi.md#updateSecret) | **PATCH** /v2/{organization_id}/secrets/{secret_id} | Update secret


# **createSecret**
> RoutesV2SecretResponse createSecret(routesV2CreateOrUpdateSecretRequest)

Creates a new secret for the specified organization

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiCreateSecretRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiCreateSecretRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret to create
  routesV2CreateOrUpdateSecretRequest: {
    description: "description_example",
    name: "name_example",
    value: "value_example",
  },
};

const data = await apiInstance.createSecret(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateOrUpdateSecretRequest** | **RoutesV2CreateOrUpdateSecretRequest**| Secret to create |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV2SecretResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteSecret**
> void deleteSecret()

Deletes a specific secret by ID

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiDeleteSecretRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiDeleteSecretRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret ID
  secretId: "secret_id_example",
};

const data = await apiInstance.deleteSecret(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSecret**
> ModelsSecretWithComponents getSecret()

Gets a specific secret by ID including inputs and outputs that use it

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiGetSecretRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiGetSecretRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret ID
  secretId: "secret_id_example",
};

const data = await apiInstance.getSecret(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**ModelsSecretWithComponents**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSecrets**
> ModelsSecretWithComponentsList listSecrets()

Lists all secrets for the specified organization including inputs and outputs that use them

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiListSecretsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiListSecretsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit number of results (optional)
  limit: 1,
    // Offset results (optional)
  offset: 1,
};

const data = await apiInstance.listSecrets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit number of results | (optional) defaults to undefined
 **offset** | [**number**] | Offset results | (optional) defaults to undefined


### Return type

**ModelsSecretWithComponentsList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSecret**
> RoutesV2SecretResponse updateSecret(routesV2CreateOrUpdateSecretRequest)

Updates a specific secret by ID

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiUpdateSecretRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiUpdateSecretRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret ID
  secretId: "secret_id_example",
    // Secret updates
  routesV2CreateOrUpdateSecretRequest: {
    description: "description_example",
    name: "name_example",
    value: "value_example",
  },
};

const data = await apiInstance.updateSecret(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateOrUpdateSecretRequest** | **RoutesV2CreateOrUpdateSecretRequest**| Secret updates |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**RoutesV2SecretResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request body |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


