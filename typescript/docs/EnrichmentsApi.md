# .EnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEnrichmentTypeMeta**](EnrichmentsApi.md#getEnrichmentTypeMeta) | **GET** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta
[**listEnrichmentTypes**](EnrichmentsApi.md#listEnrichmentTypes) | **GET** /v3/{organization_id}/enrichments_meta | List enrichments


# **getEnrichmentTypeMeta**
> EnrichmentConnectorMeta getEnrichmentTypeMeta()

Get enrichment config meta

### Example


```typescript
import { createConfiguration, EnrichmentsApi } from '';
import type { EnrichmentsApiGetEnrichmentTypeMetaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentsApi(configuration);

const request: EnrichmentsApiGetEnrichmentTypeMetaRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment type ID
  enrichmentTypeId: "enrichment_type_id_example",
};

const data = await apiInstance.getEnrichmentTypeMeta(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **enrichmentTypeId** | [**string**] | Enrichment type ID | defaults to undefined


### Return type

**EnrichmentConnectorMeta**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment config meta retrieved successfully |  -  |
**404** | Enrichment type not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEnrichmentTypes**
> Array<EnrichmentConnectorMeta> listEnrichmentTypes()

List available enrichment types

### Example


```typescript
import { createConfiguration, EnrichmentsApi } from '';
import type { EnrichmentsApiListEnrichmentTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentsApi(configuration);

const request: EnrichmentsApiListEnrichmentTypesRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.listEnrichmentTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<EnrichmentConnectorMeta>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichments retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


