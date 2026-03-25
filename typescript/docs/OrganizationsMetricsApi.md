# .OrganizationsMetricsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationMetrics**](OrganizationsMetricsApi.md#getOrganizationMetrics) | **GET** /v2/{organization_id}/metrics | Get organization metrics


# **getOrganizationMetrics**
> ModelsPipelineMetrics getOrganizationMetrics()

Get time series metrics for an organization

### Example


```typescript
import { createConfiguration, OrganizationsMetricsApi } from '';
import type { OrganizationsMetricsApiGetOrganizationMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsMetricsApi(configuration);

const request: OrganizationsMetricsApiGetOrganizationMetricsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default determined by time window (optional)
  resolution: "resolution_example",
};

const data = await apiInstance.getOrganizationMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
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
**200** | Organization metrics |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


