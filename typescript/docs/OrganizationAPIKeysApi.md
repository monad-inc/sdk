# .OrganizationAPIKeysApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIKey**](OrganizationAPIKeysApi.md#createAPIKey) | **POST** /v2/{organization_id}/api_keys | Create API key
[**deleteAPIKey**](OrganizationAPIKeysApi.md#deleteAPIKey) | **DELETE** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key
[**getAPIKey**](OrganizationAPIKeysApi.md#getAPIKey) | **GET** /v2/{organization_id}/api_keys/{api_key_id} | Get API key
[**listAPIKeys**](OrganizationAPIKeysApi.md#listAPIKeys) | **GET** /v2/{organization_id}/api_keys | List API keys
[**regenerateAPIKey**](OrganizationAPIKeysApi.md#regenerateAPIKey) | **POST** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key
[**updateAPIKey**](OrganizationAPIKeysApi.md#updateAPIKey) | **PATCH** /v2/{organization_id}/api_keys/{api_key_id} | Update API key


# **createAPIKey**
> ModelsAPIKeyWithToken createAPIKey(createAPIKeyRequest)

Create API key

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiCreateAPIKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiCreateAPIKeyRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating an API key
  createAPIKeyRequest: null,
};

const data = await apiInstance.createAPIKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAPIKeyRequest** | **CreateAPIKeyRequest**| Request body for creating an API key |
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

# **deleteAPIKey**
> string deleteAPIKey()

Delete API key

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiDeleteAPIKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiDeleteAPIKeyRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.deleteAPIKey(request);
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

# **getAPIKey**
> ModelsAPIKey getAPIKey()

Get API key

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiGetAPIKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiGetAPIKeyRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.getAPIKey(request);
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

# **listAPIKeys**
> ModelsAPIKeyList listAPIKeys()

List API keys

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiListAPIKeysRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiListAPIKeysRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listAPIKeys(request);
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

# **regenerateAPIKey**
> ModelsAPIKeyWithToken regenerateAPIKey()

Regenerates an API key by creating a new one with the same metadata and deleting the old one

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiRegenerateAPIKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiRegenerateAPIKeyRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
};

const data = await apiInstance.regenerateAPIKey(request);
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

# **updateAPIKey**
> ModelsAPIKey updateAPIKey(updateAPIKeyRequest)

Update API key

### Example


```typescript
import { createConfiguration, OrganizationAPIKeysApi } from '';
import type { OrganizationAPIKeysApiUpdateAPIKeyRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationAPIKeysApi(configuration);

const request: OrganizationAPIKeysApiUpdateAPIKeyRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // API Key ID
  apiKeyId: "api_key_id_example",
    // Request body for updating an API key
  updateAPIKeyRequest: null,
};

const data = await apiInstance.updateAPIKey(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAPIKeyRequest** | **UpdateAPIKeyRequest**| Request body for updating an API key |
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


