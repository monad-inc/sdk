# .EnrichmentSandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrichmentSandbox**](EnrichmentSandboxApi.md#enrichmentSandbox) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record


# **enrichmentSandbox**
> RoutesV3EnrichmentSandboxResponse enrichmentSandbox(enrichmentSandboxRequest)

Apply a enrichment configuration to a JSON record

### Example


```typescript
import { createConfiguration, EnrichmentSandboxApi } from '';
import type { EnrichmentSandboxApiEnrichmentSandboxRequest } from '';

const configuration = createConfiguration();
const apiInstance = new EnrichmentSandboxApi(configuration);

const request: EnrichmentSandboxApiEnrichmentSandboxRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration and record
  enrichmentSandboxRequest: null,
};

const data = await apiInstance.enrichmentSandbox(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrichmentSandboxRequest** | **EnrichmentSandboxRequest**| Enrichment configuration and record |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV3EnrichmentSandboxResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


