# .EnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet**](EnrichmentsApi.md#v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet) | **GET** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta
[**v3OrganizationIdEnrichmentsMetaGet**](EnrichmentsApi.md#v3OrganizationIdEnrichmentsMetaGet) | **GET** /v3/{organization_id}/enrichments_meta | List enrichments


# **v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet**
> EnrichmentConnectorMeta v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet()

Get enrichment config meta

### Example


```typescript
import { createConfiguration, EnrichmentsApi } from '';
import type { EnrichmentsApiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentsApi(configuration);

const request: EnrichmentsApiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment type ID
  enrichmentTypeId: "enrichment_type_id_example",
};

const data = await apiInstance.v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(request);
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

# **v3OrganizationIdEnrichmentsMetaGet**
> Array<EnrichmentConnectorMeta> v3OrganizationIdEnrichmentsMetaGet()

List available enrichment types

### Example


```typescript
import { createConfiguration, EnrichmentsApi } from '';
import type { EnrichmentsApiV3OrganizationIdEnrichmentsMetaGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentsApi(configuration);

const request: EnrichmentsApiV3OrganizationIdEnrichmentsMetaGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v3OrganizationIdEnrichmentsMetaGet(request);
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


