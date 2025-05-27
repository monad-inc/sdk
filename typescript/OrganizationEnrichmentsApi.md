# .OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdEnrichmentsEnrichmentIdDelete**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdDelete) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**v3OrganizationIdEnrichmentsEnrichmentIdGet**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdGet) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**v3OrganizationIdEnrichmentsEnrichmentIdPatch**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdPatch) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment
[**v3OrganizationIdEnrichmentsEnrichmentIdPut**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdPut) | **PUT** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment
[**v3OrganizationIdEnrichmentsGet**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsGet) | **GET** /v3/{organization_id}/enrichments | List enrichments
[**v3OrganizationIdEnrichmentsPost**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsPost) | **POST** /v3/{organization_id}/enrichments | Create enrichment
[**v3OrganizationIdEnrichmentsTestConnectionPost**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsTestConnectionPost) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection


# **v3OrganizationIdEnrichmentsEnrichmentIdDelete**
> RoutesV3SuccessResponse v3OrganizationIdEnrichmentsEnrichmentIdDelete()

Delete an enrichment by ID

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
};

const data = await apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentId** | [**string**] | Enrichment ID | defaults to undefined


### Return type

**RoutesV3SuccessResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment deleted successfully |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsEnrichmentIdGet**
> ModelsEnrichment v3OrganizationIdEnrichmentsEnrichmentIdGet()

Get an enrichment by ID

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
};

const data = await apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentId** | [**string**] | Enrichment ID | defaults to undefined


### Return type

**ModelsEnrichment**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment details |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsEnrichmentIdPatch**
> ModelsEnrichment v3OrganizationIdEnrichmentsEnrichmentIdPatch(routesV3UpdateEnrichmentRequest)

Update an existing enrichment with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
    // Enrichment configuration update
  routesV3UpdateEnrichmentRequest: {
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
    // Test connection before updating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateEnrichmentRequest** | **RoutesV3UpdateEnrichmentRequest**| Enrichment configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentId** | [**string**] | Enrichment ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before updating the enrichment | (optional) defaults to undefined


### Return type

**ModelsEnrichment**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment updated successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsEnrichmentIdPut**
> ModelsEnrichment v3OrganizationIdEnrichmentsEnrichmentIdPut(routesV3PutEnrichmentRequest)

Replace an existing enrichment with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsEnrichmentIdPutRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
    // Enrichment configuration update
  routesV3PutEnrichmentRequest: {
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
    // Test connection before updating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3PutEnrichmentRequest** | **RoutesV3PutEnrichmentRequest**| Enrichment configuration update |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentId** | [**string**] | Enrichment ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before updating the enrichment | (optional) defaults to undefined


### Return type

**ModelsEnrichment**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment updated successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsGet**
> ModelsEnrichmentList v3OrganizationIdEnrichmentsGet()

List all enrichments for an organization

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Number of results to return (default 100) (optional)
  limit: 1,
    // Number of results to skip (default 0) (optional)
  offset: 1,
};

const data = await apiInstance.v3OrganizationIdEnrichmentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Number of results to return (default 100) | (optional) defaults to undefined
 **offset** | [**number**] | Number of results to skip (default 0) | (optional) defaults to undefined


### Return type

**ModelsEnrichmentList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of enrichments |  -  |
**400** | Invalid request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsPost**
> ModelsEnrichment v3OrganizationIdEnrichmentsPost(routesV3CreateEnrichmentRequest)

Create a new enrichment with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration
  routesV3CreateEnrichmentRequest: {
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
    // Test connection before creating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.v3OrganizationIdEnrichmentsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateEnrichmentRequest** | **RoutesV3CreateEnrichmentRequest**| Enrichment configuration |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **testConnection** | [**boolean**] | Test connection before creating the enrichment | (optional) defaults to undefined


### Return type

**ModelsEnrichment**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment created successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdEnrichmentsTestConnectionPost**
> RoutesV3SuccessResponse v3OrganizationIdEnrichmentsTestConnectionPost(routesV3TestEnrichmentConnectionRequest)

Tests the connection for a given enrichment type and configuration

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsTestConnectionPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiV3OrganizationIdEnrichmentsTestConnectionPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration to test
  routesV3TestEnrichmentConnectionRequest: {
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

const data = await apiInstance.v3OrganizationIdEnrichmentsTestConnectionPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3TestEnrichmentConnectionRequest** | **RoutesV3TestEnrichmentConnectionRequest**| Enrichment configuration to test |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV3SuccessResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection test successful |  -  |
**400** | Invalid request body, enrichment type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


