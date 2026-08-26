# .SchemaDetectionApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationSchemaTrackingSummary**](SchemaDetectionApi.md#getOrganizationSchemaTrackingSummary) | **GET** /v3/{organization_id}/schema_detection/summary | Schema tracking summary
[**listOrganizationPipelinesWithSchema**](SchemaDetectionApi.md#listOrganizationPipelinesWithSchema) | **GET** /v3/{organization_id}/schema_detection/pipelines | List pipelines with tracked schema
[**listOrganizationSchemaChangeEvents**](SchemaDetectionApi.md#listOrganizationSchemaChangeEvents) | **GET** /v3/{organization_id}/schema_detection/events | List organization schema change events


# **getOrganizationSchemaTrackingSummary**
> ModelsSchemaTrackingSummary getOrganizationSchemaTrackingSummary()

Counts of the organization\'s tracked edges by mode (learning / detection).

### Example


```typescript
import { createConfiguration, SchemaDetectionApi } from '';
import type { SchemaDetectionApiGetOrganizationSchemaTrackingSummaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SchemaDetectionApi(configuration);

const request: SchemaDetectionApiGetOrganizationSchemaTrackingSummaryRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.getOrganizationSchemaTrackingSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsSchemaTrackingSummary**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Learning / detection counts |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationPipelinesWithSchema**
> Array<ModelsPipelineWithSchemaTracked> listOrganizationPipelinesWithSchema()

List the id and name of every pipeline in the organization that has any edge with a tracked schema state, for populating pipeline pickers.

### Example


```typescript
import { createConfiguration, SchemaDetectionApi } from '';
import type { SchemaDetectionApiListOrganizationPipelinesWithSchemaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SchemaDetectionApi(configuration);

const request: SchemaDetectionApiListOrganizationPipelinesWithSchemaRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.listOrganizationPipelinesWithSchema(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<ModelsPipelineWithSchemaTracked>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipelines with tracked schema |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationSchemaChangeEvents**
> ModelsSchemaHistoryList listOrganizationSchemaChangeEvents()

List schema drift events (new field / type change) across every pipeline and edge in the organization, newest first, with offset pagination. Optionally bounded to events after `from`.

### Example


```typescript
import { createConfiguration, SchemaDetectionApi } from '';
import type { SchemaDetectionApiListOrganizationSchemaChangeEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SchemaDetectionApi(configuration);

const request: SchemaDetectionApiListOrganizationSchemaChangeEventsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Page size (default 10) (optional)
  limit: 1,
    // Row offset for pagination (default 0) (optional)
  offset: 1,
    // Only events strictly after this RFC3339 timestamp (optional)
  _from: "from_example",
};

const data = await apiInstance.listOrganizationSchemaChangeEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Page size (default 10) | (optional) defaults to undefined
 **offset** | [**number**] | Row offset for pagination (default 0) | (optional) defaults to undefined
 **_from** | [**string**] | Only events strictly after this RFC3339 timestamp | (optional) defaults to undefined


### Return type

**ModelsSchemaHistoryList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | One page of schema change events |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


