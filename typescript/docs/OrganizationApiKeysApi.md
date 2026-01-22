# .OrganizationApiKeysApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganizationIdApiKeysApiKeyIdDelete**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdDelete) | **DELETE** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key
[**v2OrganizationIdApiKeysApiKeyIdGet**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdGet) | **GET** /v2/{organization_id}/api_keys/{api_key_id} | Get API key
[**v2OrganizationIdApiKeysApiKeyIdPatch**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdPatch) | **PATCH** /v2/{organization_id}/api_keys/{api_key_id} | Update API key
[**v2OrganizationIdApiKeysApiKeyIdRegeneratePost**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdRegeneratePost) | **POST** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key
[**v2OrganizationIdApiKeysGet**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysGet) | **GET** /v2/{organization_id}/api_keys | List API keys
[**v2OrganizationIdApiKeysPost**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysPost) | **POST** /v2/{organization_id}/api_keys | Create API key


# **v2OrganizationIdApiKeysApiKeyIdDelete**
> string v2OrganizationIdApiKeysApiKeyIdDelete()

Delete API key

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.v2OrganizationIdApiKeysApiKeyIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **apiKeyId** | [**string**] | API Key ID | defaults to undefined


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
**200** | API key deleted successfully |  -  |
**404** | API key not found |  -  |
**500** | Failed to delete API key |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdApiKeysApiKeyIdGet**
> ModelsAPIKey v2OrganizationIdApiKeysApiKeyIdGet()

Get API key

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.v2OrganizationIdApiKeysApiKeyIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **apiKeyId** | [**string**] | API Key ID | defaults to undefined


### Return type

**ModelsAPIKey**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key details |  -  |
**404** | API key not found |  -  |
**500** | Failed to get API key |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdApiKeysApiKeyIdPatch**
> ModelsAPIKey v2OrganizationIdApiKeysApiKeyIdPatch(routesV2UpdateAPIKeyRequest)

Update API key

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
    // Request body for updating an API key
  routesV2UpdateAPIKeyRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v2OrganizationIdApiKeysApiKeyIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateAPIKeyRequest** | **RoutesV2UpdateAPIKeyRequest**| Request body for updating an API key |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **apiKeyId** | [**string**] | API Key ID | defaults to undefined


### Return type

**ModelsAPIKey**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update API key |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdApiKeysApiKeyIdRegeneratePost**
> ModelsAPIKeyWithToken v2OrganizationIdApiKeysApiKeyIdRegeneratePost()

Regenerates an API key by creating a new one with the same metadata and deleting the old one

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **apiKeyId** | [**string**] | API Key ID | defaults to undefined


### Return type

**ModelsAPIKeyWithToken**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | New API key generated successfully |  -  |
**404** | API key not found |  -  |
**500** | Failed to regenerate API key |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdApiKeysGet**
> ModelsAPIKeyList v2OrganizationIdApiKeysGet()

List API keys

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v2OrganizationIdApiKeysGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsAPIKeyList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of API keys |  -  |
**500** | Failed to list API keys |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdApiKeysPost**
> ModelsAPIKeyWithToken v2OrganizationIdApiKeysPost(routesV2CreateAPIKeyRequest)

Create API key

### Example


```typescript
import { createConfiguration, OrganizationApiKeysApi } from '';
import type { OrganizationApiKeysApiV2OrganizationIdApiKeysPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationApiKeysApi(configuration);

const request: OrganizationApiKeysApiV2OrganizationIdApiKeysPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating an API key
  routesV2CreateAPIKeyRequest: {
    description: "description_example",
    expirationTime: "expirationTime_example",
    name: "name_example",
    roleId: "roleId_example",
  },
};

const data = await apiInstance.v2OrganizationIdApiKeysPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateAPIKeyRequest** | **RoutesV2CreateAPIKeyRequest**| Request body for creating an API key |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsAPIKeyWithToken**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create API key |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


