# .PipelinesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPipeline**](PipelinesApi.md#createPipeline) | **POST** /v2/{organization_id}/pipelines | Create pipeline
[**deletePipeline**](PipelinesApi.md#deletePipeline) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**deletePipelineV1**](PipelinesApi.md#deletePipelineV1) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**getMetricsForPipelines**](PipelinesApi.md#getMetricsForPipelines) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines
[**getOrganizationSummary**](PipelinesApi.md#getOrganizationSummary) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**getPipeline**](PipelinesApi.md#getPipeline) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**getPipelineConfig**](PipelinesApi.md#getPipelineConfig) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**getPipelineEdgeConditionOperatorTypes**](PipelinesApi.md#getPipelineEdgeConditionOperatorTypes) | **GET** /v3/pipeline_edges/edge_condition_operator_types | Conditional types for edge conditions
[**getPipelineEdgeConditionRules**](PipelinesApi.md#getPipelineEdgeConditionRules) | **GET** /v3/pipeline_edges/edge_condition_rules | Rules for edge conditions
[**getPipelineMetrics**](PipelinesApi.md#getPipelineMetrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id} | Get pipeline metrics
[**getPipelineNodeMetrics**](PipelinesApi.md#getPipelineNodeMetrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id}/{node_id} | Get pipeline node metrics
[**getPipelineNodeMetricsV2**](PipelinesApi.md#getPipelineNodeMetricsV2) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**getPipelineNodeStatus**](PipelinesApi.md#getPipelineNodeStatus) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**getPipelineStatus**](PipelinesApi.md#getPipelineStatus) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**getPipelinesStatuses**](PipelinesApi.md#getPipelinesStatuses) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status
[**listPipelines**](PipelinesApi.md#listPipelines) | **GET** /v2/{organization_id}/pipelines | List pipelines
[**listPipelinesV1**](PipelinesApi.md#listPipelinesV1) | **GET** /v1/{organization_id}/pipelines | List pipelines
[**triggerPipeline**](PipelinesApi.md#triggerPipeline) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually
[**updatePipeline**](PipelinesApi.md#updatePipeline) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**updatePipelineEdge**](PipelinesApi.md#updatePipelineEdge) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id} | Update pipeline edge
[**updatePipelineV1**](PipelinesApi.md#updatePipelineV1) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline


# **createPipeline**
> ModelsPipelineConfigV2 createPipeline(createPipelineRequest)

Create a new pipeline with specified configuration

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiCreatePipelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiCreatePipelineRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a pipeline
  createPipelineRequest: null,
};

const data = await apiInstance.createPipeline(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPipelineRequest** | **CreatePipelineRequest**| Request body for creating a pipeline |
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

# **deletePipeline**
> string deletePipeline()

Delete pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiDeletePipelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiDeletePipelineRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.deletePipeline(request);
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

# **deletePipelineV1**
> string deletePipelineV1()

Delete pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiDeletePipelineV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiDeletePipelineV1Request = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.deletePipelineV1(request);
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

# **getMetricsForPipelines**
> RoutesV2MetricsResponse getMetricsForPipelines()

Get aggregated ingress and egress metrics for specific pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetMetricsForPipelinesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetMetricsForPipelinesRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Comma-separated list of pipeline IDs
  pipelineIds: "pipeline_ids_example",
    // Resolution for metrics (default: 5m) (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.getMetricsForPipelines(request);
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

# **getOrganizationSummary**
> RoutesV2GetOrganizationSummaryResponse getOrganizationSummary()

Get status of all pipelines for an organization

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetOrganizationSummaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetOrganizationSummaryRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.getOrganizationSummary(request);
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

# **getPipeline**
> ModelsPipeline getPipeline()

Get pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.getPipeline(request);
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

# **getPipelineConfig**
> ModelsPipelineConfigV2 getPipelineConfig()

Retrieve a specific pipeline configuration by pipeline ID

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineConfigRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Include the status of the pipeline nodes (optional)
  includeStatus: true,
};

const data = await apiInstance.getPipelineConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **includeStatus** | [**boolean**] | Include the status of the pipeline nodes | (optional) defaults to undefined


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

# **getPipelineEdgeConditionOperatorTypes**
> string getPipelineEdgeConditionOperatorTypes()

Returns the conditional types for edge conditions

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request = {};

const data = await apiInstance.getPipelineEdgeConditionOperatorTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**200** | Conditions returned succesfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipelineEdgeConditionRules**
> string getPipelineEdgeConditionRules()

Returns the rules for edge conditions

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request = {};

const data = await apiInstance.getPipelineEdgeConditionRules(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**200** | Rules returned succesfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipelineMetrics**
> ModelsPipelineMetrics getPipelineMetrics()

Get time series metrics for a pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineMetricsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default determined by time window (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.getPipelineMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **metric** | [**string**] | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **resolution** | [**string**] | Resolution of the data, default determined by time window | (optional) defaults to undefined


### Return type

**ModelsPipelineMetrics**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipelineNodeMetrics**
> ModelsPipelineMetrics getPipelineNodeMetrics()

Get pipeline node metrics

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineNodeMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineNodeMetricsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default determined by time window (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.getPipelineNodeMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **metric** | [**string**] | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **resolution** | [**string**] | Resolution of the data, default determined by time window | (optional) defaults to undefined


### Return type

**ModelsPipelineMetrics**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline node metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline or node not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipelineNodeMetricsV2**
> ModelsPipelineMetrics getPipelineNodeMetricsV2()

Get pipeline node metrics

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineNodeMetricsV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineNodeMetricsV2Request = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default determined by time window (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.getPipelineNodeMetricsV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **metric** | [**string**] | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **resolution** | [**string**] | Resolution of the data, default determined by time window | (optional) defaults to undefined


### Return type

**ModelsPipelineMetrics**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline node metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline or node not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPipelineNodeStatus**
> ModelsPipelineNodeStatus getPipelineNodeStatus()

Get pipeline node status

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineNodeStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineNodeStatusRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
  metrics: [
    "metrics_example",
  ],
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.getPipelineNodeStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **metrics** | **Array&lt;string&gt;** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | (optional) defaults to undefined
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

# **getPipelineStatus**
> ModelsPipelineStatus getPipelineStatus()

Get pipeline status

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelineStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelineStatusRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
  metrics: [
    "metrics_example",
  ],
    // ISO3339 start time, default 24 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
};

const data = await apiInstance.getPipelineStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **metrics** | **Array&lt;string&gt;** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | (optional) defaults to undefined
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

# **getPipelinesStatuses**
> Array<RoutesV2PipelineWithStatus> getPipelinesStatuses()

Retrieve the status of pipelines within an organization for a specified time period.

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiGetPipelinesStatusesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiGetPipelinesStatusesRequest = {
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

const data = await apiInstance.getPipelinesStatuses(request);
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

# **listPipelines**
> ModelsPipelineList listPipelines()

List pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiListPipelinesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiListPipelinesRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
    // Include the status of the pipeline nodes (optional)
  includeStatus: true,
};

const data = await apiInstance.listPipelines(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined
 **includeStatus** | [**boolean**] | Include the status of the pipeline nodes | (optional) defaults to undefined


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

# **listPipelinesV1**
> ModelsPipelineList listPipelinesV1()

List pipelines

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiListPipelinesV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiListPipelinesV1Request = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listPipelinesV1(request);
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

# **triggerPipeline**
> string triggerPipeline()

Manually trigger a cron-scheduled pipeline to run

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiTriggerPipelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiTriggerPipelineRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.triggerPipeline(request);
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

# **updatePipeline**
> ModelsPipelineConfigV2 updatePipeline(updatePipelineRequest)

Update an existing pipeline with the specified configuration

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiUpdatePipelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiUpdatePipelineRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Request body for updating a pipeline
  updatePipelineRequest: null,
};

const data = await apiInstance.updatePipeline(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePipelineRequest** | **UpdatePipelineRequest**| Request body for updating a pipeline |
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

# **updatePipelineEdge**
> void updatePipelineEdge(updatePipelineEdgeRequest)

Enable or disable a pipeline edge

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiUpdatePipelineEdgeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiUpdatePipelineEdgeRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Edge ID
  edgeId: "edge_id_example",
    // Request body
  updatePipelineEdgeRequest: null,
};

const data = await apiInstance.updatePipelineEdge(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePipelineEdgeRequest** | **UpdatePipelineEdgeRequest**| Request body |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **edgeId** | [**string**] | Edge ID | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Edge updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**404** | Edge not found in pipeline |  -  |
**500** | Failed to update pipeline edge |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePipelineV1**
> ModelsPipeline updatePipelineV1(updatePipelineV1Request)

Update pipeline

### Example


```typescript
import { createConfiguration, PipelinesApi } from '';
import type { PipelinesApiUpdatePipelineV1Request } from '';

const configuration = createConfiguration();
const apiInstance = new PipelinesApi(configuration);

const request: PipelinesApiUpdatePipelineV1Request = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Request body for updating a pipeline
  updatePipelineV1Request: null,
};

const data = await apiInstance.updatePipelineV1(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePipelineV1Request** | **UpdatePipelineV1Request**| Request body for updating a pipeline |
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


