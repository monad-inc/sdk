# .LogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streamNodeData**](LogsApi.md#streamNodeData) | **GET** /v1/{organization_id}/data/{node_id} | Stream node data
[**streamNodeLogs**](LogsApi.md#streamNodeLogs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs
[**streamOrganizationAPILogs**](LogsApi.md#streamOrganizationAPILogs) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs
[**streamOrganizationLogs**](LogsApi.md#streamOrganizationLogs) | **GET** /v1/{organization_id}/logs | Stream organization logs
[**streamOrganizationPipelinesLogs**](LogsApi.md#streamOrganizationPipelinesLogs) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**streamPipelineLogs**](LogsApi.md#streamPipelineLogs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs


# **streamNodeData**
> string streamNodeData()

Stream data for a specific node within an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamNodeDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamNodeDataRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Node ID
  nodeId: "node_id_example",
};

const data = await apiInstance.streamNodeData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data stream |  -  |
**400** | Failed to enable node watching |  -  |
**500** | Failed to create consumer |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamNodeLogs**
> string streamNodeLogs()

Stream logs for a specific node within a pipeline and organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamNodeLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamNodeLogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // Node ID
  nodeId: "node_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5h\' or \'30m\') (optional)
  last: "last_example",
};

const data = await apiInstance.streamNodeLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **nodeId** | [**string**] | Node ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined
 **last** | [**string**] | Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;) | (optional) defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamOrganizationAPILogs**
> string streamOrganizationAPILogs()

Stream api logs for an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamOrganizationAPILogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamOrganizationAPILogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
};

const data = await apiInstance.streamOrganizationAPILogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamOrganizationLogs**
> string streamOrganizationLogs()

Stream logs for an entire organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamOrganizationLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamOrganizationLogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5h\' or \'30m\') (optional)
  last: "last_example",
};

const data = await apiInstance.streamOrganizationLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined
 **last** | [**string**] | Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;) | (optional) defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamOrganizationPipelinesLogs**
> string streamOrganizationPipelinesLogs()

Stream pipeline logs for an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamOrganizationPipelinesLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamOrganizationPipelinesLogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
};

const data = await apiInstance.streamOrganizationPipelinesLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamPipelineLogs**
> string streamPipelineLogs()

Stream logs for a specific pipeline within an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiStreamPipelineLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiStreamPipelineLogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5h\' or \'30m\') (optional)
  last: "last_example",
};

const data = await apiInstance.streamPipelineLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **pipelineId** | [**string**] | Pipeline ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined
 **last** | [**string**] | Duration to start streaming from (e.g., \&#39;5h\&#39; or \&#39;30m\&#39;) | (optional) defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


