# .LogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdLogsApiGet**](LogsApi.md#v1OrganizationIdLogsApiGet) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs
[**v1OrganizationIdLogsGet**](LogsApi.md#v1OrganizationIdLogsGet) | **GET** /v1/{organization_id}/logs | Stream organization logs
[**v1OrganizationIdLogsPipelinesGet**](LogsApi.md#v1OrganizationIdLogsPipelinesGet) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**v1OrganizationIdLogsPipelinesPipelineIdGet**](LogsApi.md#v1OrganizationIdLogsPipelinesPipelineIdGet) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs
[**v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet**](LogsApi.md#v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs


# **v1OrganizationIdLogsApiGet**
> string v1OrganizationIdLogsApiGet()

Stream api logs for an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiV1OrganizationIdLogsApiGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiV1OrganizationIdLogsApiGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
};

const data = await apiInstance.v1OrganizationIdLogsApiGet(request);
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
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdLogsGet**
> string v1OrganizationIdLogsGet()

Stream logs for an entire organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiV1OrganizationIdLogsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiV1OrganizationIdLogsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5h\' or \'30m\') (optional)
  last: "last_example",
};

const data = await apiInstance.v1OrganizationIdLogsGet(request);
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
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdLogsPipelinesGet**
> string v1OrganizationIdLogsPipelinesGet()

Stream pipeline logs for an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiV1OrganizationIdLogsPipelinesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiV1OrganizationIdLogsPipelinesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
};

const data = await apiInstance.v1OrganizationIdLogsPipelinesGet(request);
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
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdLogsPipelinesPipelineIdGet**
> string v1OrganizationIdLogsPipelinesPipelineIdGet()

Stream logs for a specific pipeline within an organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiV1OrganizationIdLogsPipelinesPipelineIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiV1OrganizationIdLogsPipelinesPipelineIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Pipeline ID
  pipelineId: "pipeline_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5h\' or \'30m\') (optional)
  last: "last_example",
};

const data = await apiInstance.v1OrganizationIdLogsPipelinesPipelineIdGet(request);
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
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet**
> string v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet()

Stream logs for a specific node within a pipeline and organization

### Example


```typescript
import { createConfiguration, LogsApi } from '';
import type { LogsApiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogsApi(configuration);

const request: LogsApiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest = {
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

const data = await apiInstance.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(request);
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
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid \&#39;since\&#39; timestamp or \&#39;last\&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


