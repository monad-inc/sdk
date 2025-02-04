# .SecretsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganizationIdSecretsGet**](SecretsApi.md#v2OrganizationIdSecretsGet) | **GET** /v2/{organization_id}/secrets | List secrets
[**v2OrganizationIdSecretsPost**](SecretsApi.md#v2OrganizationIdSecretsPost) | **POST** /v2/{organization_id}/secrets | Create secret
[**v2OrganizationIdSecretsSecretIdDelete**](SecretsApi.md#v2OrganizationIdSecretsSecretIdDelete) | **DELETE** /v2/{organization_id}/secrets/{secret_id} | Delete secret
[**v2OrganizationIdSecretsSecretIdGet**](SecretsApi.md#v2OrganizationIdSecretsSecretIdGet) | **GET** /v2/{organization_id}/secrets/{secret_id} | Get secret
[**v2OrganizationIdSecretsSecretIdPatch**](SecretsApi.md#v2OrganizationIdSecretsSecretIdPatch) | **PATCH** /v2/{organization_id}/secrets/{secret_id} | Update secret


# **v2OrganizationIdSecretsGet**
> ModelsSecretList v2OrganizationIdSecretsGet()

Lists all secrets for the specified organization

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiV2OrganizationIdSecretsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiV2OrganizationIdSecretsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit number of results (optional)
  limit: 1,
    // Offset results (optional)
  offset: 1,
};

const data = await apiInstance.v2OrganizationIdSecretsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit number of results | (optional) defaults to undefined
 **offset** | [**number**] | Offset results | (optional) defaults to undefined


### Return type

**ModelsSecretList**

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

# **v2OrganizationIdSecretsPost**
> RoutesV2SecretResponse v2OrganizationIdSecretsPost(routesV2CreateOrUpdateSecretRequest)

Creates a new secret for the specified organization

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiV2OrganizationIdSecretsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiV2OrganizationIdSecretsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret to create
  routesV2CreateOrUpdateSecretRequest: {
    description: "description_example",
    name: "name_example",
    value: "value_example",
  },
};

const data = await apiInstance.v2OrganizationIdSecretsPost(request);
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

# **v2OrganizationIdSecretsSecretIdDelete**
> void v2OrganizationIdSecretsSecretIdDelete()

Deletes a specific secret by ID

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiV2OrganizationIdSecretsSecretIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiV2OrganizationIdSecretsSecretIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret ID
  secretId: "secret_id_example",
};

const data = await apiInstance.v2OrganizationIdSecretsSecretIdDelete(request);
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

# **v2OrganizationIdSecretsSecretIdGet**
> RoutesV2SecretResponse v2OrganizationIdSecretsSecretIdGet()

Gets a specific secret by ID

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiV2OrganizationIdSecretsSecretIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiV2OrganizationIdSecretsSecretIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Secret ID
  secretId: "secret_id_example",
};

const data = await apiInstance.v2OrganizationIdSecretsSecretIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **secretId** | [**string**] | Secret ID | defaults to undefined


### Return type

**RoutesV2SecretResponse**

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

# **v2OrganizationIdSecretsSecretIdPatch**
> RoutesV2SecretResponse v2OrganizationIdSecretsSecretIdPatch(routesV2CreateOrUpdateSecretRequest)

Updates a specific secret by ID

### Example


```typescript
import { createConfiguration, SecretsApi } from '';
import type { SecretsApiV2OrganizationIdSecretsSecretIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecretsApi(configuration);

const request: SecretsApiV2OrganizationIdSecretsSecretIdPatchRequest = {
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

const data = await apiInstance.v2OrganizationIdSecretsSecretIdPatch(request);
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


