# .OrganizationsStorageCostApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStorageTypeCost**](OrganizationsStorageCostApi.md#getStorageTypeCost) | **GET** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**getStorageTypeDetails**](OrganizationsStorageCostApi.md#getStorageTypeDetails) | **GET** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**getStorageTypeMetrics**](OrganizationsStorageCostApi.md#getStorageTypeMetrics) | **GET** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**getStorageTypeSummary**](OrganizationsStorageCostApi.md#getStorageTypeSummary) | **GET** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**setStorageTypeCost**](OrganizationsStorageCostApi.md#setStorageTypeCost) | **PUT** /v2/{organization_id}/storage-type-cost | Set storage type cost
[**v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**](OrganizationsStorageCostApi.md#v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type


# **getStorageTypeCost**
> ModelsStorageTypeCostConfig getStorageTypeCost()

Get per-organization cost configuration for storage types

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiGetStorageTypeCostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiGetStorageTypeCostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.getStorageTypeCost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsStorageTypeCostConfig**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type cost |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStorageTypeDetails**
> RoutesV2StorageTypeDetailsResponse getStorageTypeDetails()

Get detailed metrics for each individual output, including egress and associated input

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiGetStorageTypeDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiGetStorageTypeDetailsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Filter by billing type (billable|non_billable) (optional)
  billingType: "billing_type_example",
    // Filter to specific pipeline (optional)
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.getStorageTypeDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **billingType** | [**string**] | Filter by billing type (billable|non_billable) | (optional) defaults to undefined
 **pipelineId** | [**string**] | Filter to specific pipeline | (optional) defaults to undefined


### Return type

**RoutesV2StorageTypeDetailsResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type output details |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStorageTypeMetrics**
> ModelsStorageTypeTimeSeriesResponse getStorageTypeMetrics()

Get time series metrics grouped by storage type for an organization

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiGetStorageTypeMetricsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiGetStorageTypeMetricsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Metric to retrieve (egress_bytes|egress_records|errors)
  metric: "metric_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Resolution of the data, default determined by time window (optional)
  resolution: "resolution_example",
    // Filter by billing type (billable|non_billable) (optional)
  billingType: "billing_type_example",
    // Filter to specific pipeline (optional)
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.getStorageTypeMetrics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **metric** | [**string**] | Metric to retrieve (egress_bytes|egress_records|errors) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **resolution** | [**string**] | Resolution of the data, default determined by time window | (optional) defaults to undefined
 **billingType** | [**string**] | Filter by billing type (billable|non_billable) | (optional) defaults to undefined
 **pipelineId** | [**string**] | Filter to specific pipeline | (optional) defaults to undefined


### Return type

**ModelsStorageTypeTimeSeriesResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type metrics |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStorageTypeSummary**
> ModelsStorageTypeSummaryResponse getStorageTypeSummary()

Get aggregated cost and usage summary by storage type

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiGetStorageTypeSummaryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiGetStorageTypeSummaryRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Filter by billing type (billable|non_billable) (optional)
  billingType: "billing_type_example",
    // Filter to specific pipeline (optional)
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.getStorageTypeSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **billingType** | [**string**] | Filter by billing type (billable|non_billable) | (optional) defaults to undefined
 **pipelineId** | [**string**] | Filter to specific pipeline | (optional) defaults to undefined


### Return type

**ModelsStorageTypeSummaryResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type cost summary |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setStorageTypeCost**
> ModelsStorageTypeCostConfig setStorageTypeCost(setStorageTypeCostRequest)

Update per-organization cost configuration for storage types

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiSetStorageTypeCostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiSetStorageTypeCostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Cost configuration
  setStorageTypeCostRequest: null,
};

const data = await apiInstance.setStorageTypeCost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setStorageTypeCostRequest** | **SetStorageTypeCostRequest**| Cost configuration |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsStorageTypeCostConfig**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated storage type cost |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**
> RoutesV2StorageTypeDetailsResponse v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet()

Get detailed metrics for each individual output of a specific storage type

### Example


```typescript
import { createConfiguration, OrganizationsStorageCostApi } from '';
import type { OrganizationsStorageCostApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsStorageCostApi(configuration);

const request: OrganizationsStorageCostApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Storage type (e.g., s3, dev-null, bigquery)
  storageType: "storage_type_example",
    // ISO3339 start time, default 6 hours ago (optional)
  start: "start_example",
    // ISO3339 end time, default now (optional)
  end: "end_example",
    // Filter by billing type (billable|non_billable) (optional)
  billingType: "billing_type_example",
    // Filter to specific pipeline (optional)
  pipelineId: "pipeline_id_example",
};

const data = await apiInstance.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **storageType** | [**string**] | Storage type (e.g., s3, dev-null, bigquery) | defaults to undefined
 **start** | [**string**] | ISO3339 start time, default 6 hours ago | (optional) defaults to undefined
 **end** | [**string**] | ISO3339 end time, default now | (optional) defaults to undefined
 **billingType** | [**string**] | Filter by billing type (billable|non_billable) | (optional) defaults to undefined
 **pipelineId** | [**string**] | Filter to specific pipeline | (optional) defaults to undefined


### Return type

**RoutesV2StorageTypeDetailsResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type output details |  -  |
**400** | Bad request |  -  |
**404** | Organization or storage type not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


