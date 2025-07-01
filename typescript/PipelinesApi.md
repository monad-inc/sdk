# .PipelinesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdPipelinesGet**](PipelinesApi.md#v1OrganizationIdPipelinesGet) | **GET** /v1/{organization_id}/pipelines | List pipelines
[**v1OrganizationIdPipelinesPipelineIdDelete**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdDelete) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**v1OrganizationIdPipelinesPipelineIdGet**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdGet) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**v1OrganizationIdPipelinesPipelineIdPatch**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdPatch) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**v2OrganizationIdPipelineSummaryGet**](PipelinesApi.md#v2OrganizationIdPipelineSummaryGet) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**v2OrganizationIdPipelinesGet**](PipelinesApi.md#v2OrganizationIdPipelinesGet) | **GET** /v2/{organization_id}/pipelines | List pipelines
[**v2OrganizationIdPipelinesMetricsGet**](PipelinesApi.md#v2OrganizationIdPipelinesMetricsGet) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines
[**v2OrganizationIdPipelinesPipelineIdDelete**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdDelete) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**v2OrganizationIdPipelinesPipelineIdGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**v2OrganizationIdPipelinesPipelineIdPatch**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdPatch) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**v2OrganizationIdPipelinesPipelineIdStatusGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdStatusGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**v2OrganizationIdPipelinesPipelineIdTriggerPost**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdTriggerPost) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually
[**v2OrganizationIdPipelinesPost**](PipelinesApi.md#v2OrganizationIdPipelinesPost) | **POST** /v2/{organization_id}/pipelines | Create pipeline
[**v2OrganizationIdPipelinesStatusesGet**](PipelinesApi.md#v2OrganizationIdPipelinesStatusesGet) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status


# **v1OrganizationIdPipelinesGet**
> ModelsPipelineList v1OrganizationIdPipelinesGet()

List pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV1OrganizationIdPipelinesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV1OrganizationIdPipelinesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdPipelinesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsPipelineList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list pipelines |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdPipelinesPipelineIdDelete**
> string v1OrganizationIdPipelinesPipelineIdDelete()

Delete pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV1OrganizationIdPipelinesPipelineIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV1OrganizationIdPipelinesPipelineIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v1OrganizationIdPipelinesPipelineIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


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
**200** | Pipeline deleted successfully |  -  |
**500** | Failed to delete pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdPipelinesPipelineIdGet**
> ModelsPipeline v1OrganizationIdPipelinesPipelineIdGet()

Get pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV1OrganizationIdPipelinesPipelineIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV1OrganizationIdPipelinesPipelineIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v1OrganizationIdPipelinesPipelineIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


### Return type

**ModelsPipeline**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline details |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdPipelinesPipelineIdPatch**
> ModelsPipeline v1OrganizationIdPipelinesPipelineIdPatch(routesUpdatePipelineRequest)

Update pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV1OrganizationIdPipelinesPipelineIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV1OrganizationIdPipelinesPipelineIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Request body for updating a pipeline
  routesUpdatePipelineRequest: {
    description: "description_example",
    enabled: true,
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationIdPipelinesPipelineIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdatePipelineRequest** | **RoutesUpdatePipelineRequest**| Request body for updating a pipeline |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


### Return type

**ModelsPipeline**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating a pipeline |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelineSummaryGet**
> RoutesV2GetOrganizationSummaryResponse v2OrganizationIdPipelineSummaryGet()

Get status of all pipelines for an organization

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelineSummaryGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelineSummaryGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.v2OrganizationIdPipelineSummaryGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 24 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined


### Return type

**RoutesV2GetOrganizationSummaryResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization Pipeline Summary |  -  |
**500** | Failed to get pipelines for organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesGet**
> ModelsPipelineList v2OrganizationIdPipelinesGet()

List pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v2OrganizationIdPipelinesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsPipelineList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list pipelines |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesMetricsGet**
> RoutesV2MetricsResponse v2OrganizationIdPipelinesMetricsGet()

Get aggregated ingress and egress metrics for specific pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesMetricsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesMetricsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Comma-separated list of pipeline IDs
  pipelineIds: "pipeline_ids_example",
    // Resolution for metrics (default: 5m) (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesMetricsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineIds** | [**string**] | Comma-separated list of pipeline IDs | defaults to undefined
 **resolution** | [**string**] | Resolution for metrics (default: 5m) | (optional) defaults to undefined


### Return type

**RoutesV2MetricsResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics data |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdDelete**
> string v2OrganizationIdPipelinesPipelineIdDelete()

Delete pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


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
**200** | Pipeline deleted successfully |  -  |
**500** | Failed to delete pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdGet**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPipelineIdGet()

Retrieve a specific pipeline configuration by pipeline ID

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


### Return type

**ModelsPipelineConfigV2**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline configuration retrieved successfully |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet**
> ModelsPipelineNodeMetrics v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet()

Get pipeline node metrics

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default 15m (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **metric** | [**string**] | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **resolution** | [**string**] | Resolution of the data, default 15m | (optional) defaults to undefined


### Return type

**ModelsPipelineNodeMetrics**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline node metrics |  -  |
**500** | Failed to get node |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdPatch**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPipelineIdPatch(routesV2UpdatePipelineRequest)

Update an existing pipeline with the specified configuration

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Request body for updating a pipeline
  routesV2UpdatePipelineRequest: {
    description: "description_example",
    edges: [
      {
        conditions: {
          conditions: [
            {
              config: {
                "key": null,
              },
              typeId: "typeId_example",
            },
          ],
          operator: "operator_example",
        },
        description: "description_example",
        fromNodeInstanceId: "fromNodeInstanceId_example",
        name: "name_example",
        toNodeInstanceId: "toNodeInstanceId_example",
      },
    ],
    enabled: true,
    name: "name_example",
    nodes: [
      {
        componentId: "componentId_example",
        componentType: "componentType_example",
        enabled: true,
        id: "id_example",
        slug: "slug_example",
      },
    ],
  },
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdatePipelineRequest** | **RoutesV2UpdatePipelineRequest**| Request body for updating a pipeline |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


### Return type

**ModelsPipelineConfigV2**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdStatusGet**
> ModelsPipelineStatus v2OrganizationIdPipelinesPipelineIdStatusGet()

Get pipeline status

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
  metrics: [
    "metrics_example",
  ],
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdStatusGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **metrics** | **Array&lt;string&gt;** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | (optional) defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 24 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined


### Return type

**ModelsPipelineStatus**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline status |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet**
> ModelsPipelineNodeStatus v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet()

Get pipeline node status

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
  metrics: [
    "metrics_example",
  ],
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **metrics** | **Array&lt;string&gt;** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | (optional) defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 24 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined


### Return type

**ModelsPipelineNodeStatus**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline Node status |  -  |
**500** | Failed to get pipeline node status |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPipelineIdTriggerPost**
> string v2OrganizationIdPipelinesPipelineIdTriggerPost()

Manually trigger a cron-scheduled pipeline to run

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPipelineIdTriggerPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPipelineIdTriggerPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesPipelineIdTriggerPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined


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
**200** | Pipeline triggered successfully |  -  |
**400** | Invalid request or pipeline not cron-based |  -  |
**403** | Insufficient permissions |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesPost**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPost(routesV2CreatePipelineRequest)

Create a new pipeline with specified configuration

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a pipeline
  routesV2CreatePipelineRequest: {
    description: "description_example",
    edges: [
      {
        conditions: {
          conditions: [
            {
              config: {
                "key": null,
              },
              typeId: "typeId_example",
            },
          ],
          operator: "operator_example",
        },
        description: "description_example",
        fromNodeInstanceId: "fromNodeInstanceId_example",
        name: "name_example",
        toNodeInstanceId: "toNodeInstanceId_example",
      },
    ],
    enabled: true,
    name: "name_example",
    nodes: [
      {
        componentId: "componentId_example",
        componentType: "componentType_example",
        enabled: true,
        id: "id_example",
        slug: "slug_example",
      },
    ],
  },
};

const data = await apiInstance.v2OrganizationIdPipelinesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreatePipelineRequest** | **RoutesV2CreatePipelineRequest**| Request body for creating a pipeline |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsPipelineConfigV2**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Pipeline created successfully |  -  |
**400** | Invalid JSON request body or Failed to create pipeline |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdPipelinesStatusesGet**
> Array<RoutesV2PipelineWithStatus> v2OrganizationIdPipelinesStatusesGet()

Retrieve the status of pipelines within an organization for a specified time period.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiV2OrganizationIdPipelinesStatusesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiV2OrganizationIdPipelinesStatusesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Maximum number of pipelines to return (default is 10) (optional)
  limit: 1,
    // Offset for pagination (default is 0) (optional)
  offset: 1,
    // Start time (RFC3339 format) for status metrics (default: 24 hours ago) (optional)
  start: "start_example",
    // End time (RFC3339 format) for status metrics (default: now) (optional)
  end: "end_example",
};

const data = await apiInstance.v2OrganizationIdPipelinesStatusesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Maximum number of pipelines to return (default is 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset for pagination (default is 0) | (optional) defaults to undefined
 **start** | [**string**] | Start time (RFC3339 format) for status metrics (default: 24 hours ago) | (optional) defaults to undefined
 **end** | [**string**] | End time (RFC3339 format) for status metrics (default: now) | (optional) defaults to undefined


### Return type

**Array<RoutesV2PipelineWithStatus>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines with status |  -  |
**400** | Invalid query parameters or time range |  -  |
**500** | Failed to retrieve pipeline status |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


