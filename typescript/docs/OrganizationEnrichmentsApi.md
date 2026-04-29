# .OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnrichment**](OrganizationEnrichmentsApi.md#createEnrichment) | **POST** /v3/{organization_id}/enrichments | Create enrichment
[**deleteEnrichment**](OrganizationEnrichmentsApi.md#deleteEnrichment) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**getEnrichment**](OrganizationEnrichmentsApi.md#getEnrichment) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**listEnrichments**](OrganizationEnrichmentsApi.md#listEnrichments) | **GET** /v3/{organization_id}/enrichments | List enrichments
[**replaceEnrichment**](OrganizationEnrichmentsApi.md#replaceEnrichment) | **PUT** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment
[**testEnrichmentConnection**](OrganizationEnrichmentsApi.md#testEnrichmentConnection) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection
[**updateEnrichment**](OrganizationEnrichmentsApi.md#updateEnrichment) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment


# **createEnrichment**
> ModelsEnrichment createEnrichment(createEnrichmentRequest)

Create a new enrichment with configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiCreateEnrichmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiCreateEnrichmentRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration
  createEnrichmentRequest: null,
    // Test connection before creating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.createEnrichment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEnrichmentRequest** | **CreateEnrichmentRequest**| Enrichment configuration |
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

# **deleteEnrichment**
> RoutesV3SuccessResponse deleteEnrichment()

Delete an enrichment by ID

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiDeleteEnrichmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiDeleteEnrichmentRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
};

const data = await apiInstance.deleteEnrichment(request);
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

# **getEnrichment**
> RoutesV3GetEnrichmentResponse getEnrichment()

Get an enrichment by ID

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiGetEnrichmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiGetEnrichmentRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
};

const data = await apiInstance.getEnrichment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentId** | [**string**] | Enrichment ID | defaults to undefined


### Return type

**RoutesV3GetEnrichmentResponse**

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

# **listEnrichments**
> ModelsEnrichmentList listEnrichments()

List all enrichments for an organization

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiListEnrichmentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiListEnrichmentsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Number of results to return (default 100) (optional)
  limit: 1,
    // Number of results to skip (default 0) (optional)
  offset: 1,
};

const data = await apiInstance.listEnrichments(request);
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

# **replaceEnrichment**
> ModelsEnrichment replaceEnrichment(replaceEnrichmentRequest)

Replace an existing enrichment with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiReplaceEnrichmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiReplaceEnrichmentRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
    // Enrichment configuration update
  replaceEnrichmentRequest: null,
    // Test connection before updating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.replaceEnrichment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replaceEnrichmentRequest** | **ReplaceEnrichmentRequest**| Enrichment configuration update |
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

# **testEnrichmentConnection**
> RoutesV3SuccessResponse testEnrichmentConnection(testEnrichmentConnectionRequest)

Tests the connection for a given enrichment type and configuration

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiTestEnrichmentConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiTestEnrichmentConnectionRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration to test
  testEnrichmentConnectionRequest: null,
};

const data = await apiInstance.testEnrichmentConnection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testEnrichmentConnectionRequest** | **TestEnrichmentConnectionRequest**| Enrichment configuration to test |
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

# **updateEnrichment**
> ModelsEnrichment updateEnrichment(updateEnrichmentRequest)

Update an existing enrichment with new configuration including secrets handling

### Example


```typescript
import { createConfiguration, OrganizationEnrichmentsApi } from '';
import type { OrganizationEnrichmentsApiUpdateEnrichmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationEnrichmentsApi(configuration);

const request: OrganizationEnrichmentsApiUpdateEnrichmentRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment ID
  enrichmentId: "enrichment_id_example",
    // Enrichment configuration update
  updateEnrichmentRequest: null,
    // Test connection before updating the enrichment (optional)
  testConnection: true,
};

const data = await apiInstance.updateEnrichment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEnrichmentRequest** | **UpdateEnrichmentRequest**| Enrichment configuration update |
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


