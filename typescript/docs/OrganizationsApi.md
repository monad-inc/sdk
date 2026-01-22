# .OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationsGet**](OrganizationsApi.md#v1OrganizationsGet) | **GET** /v1/organizations | List organizations for user
[**v1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#v1OrganizationsOrganizationIdDelete) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**v1OrganizationsOrganizationIdPatch**](OrganizationsApi.md#v1OrganizationsOrganizationIdPatch) | **PATCH** /v1/organizations/{organization_id} | Update organization
[**v1OrganizationsPost**](OrganizationsApi.md#v1OrganizationsPost) | **POST** /v1/organizations | Create organization
[**v2OrganizationIdMetricsGet**](OrganizationsApi.md#v2OrganizationIdMetricsGet) | **GET** /v2/{organization_id}/metrics | Get organization metrics
[**v2OrganizationIdMetricsStorageTypesDetailsGet**](OrganizationsApi.md#v2OrganizationIdMetricsStorageTypesDetailsGet) | **GET** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**v2OrganizationIdMetricsStorageTypesGet**](OrganizationsApi.md#v2OrganizationIdMetricsStorageTypesGet) | **GET** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**](OrganizationsApi.md#v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type
[**v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet**](OrganizationsApi.md#v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**v2OrganizationIdMetricsStorageTypesSummaryGet**](OrganizationsApi.md#v2OrganizationIdMetricsStorageTypesSummaryGet) | **GET** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**v2OrganizationIdStorageTypeCostGet**](OrganizationsApi.md#v2OrganizationIdStorageTypeCostGet) | **GET** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**v2OrganizationIdStorageTypeCostPut**](OrganizationsApi.md#v2OrganizationIdStorageTypeCostPut) | **PUT** /v2/{organization_id}/storage-type-cost | Set storage type cost


# **v1OrganizationsGet**
> ModelsOrganizationList v1OrganizationsGet()

List organizations for user

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsGetRequest = {
    // Limit the number of organizations returned (default: 10) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit the number of organizations returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the organizations returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsOrganizationList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for listing organizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsOrganizationIdDelete**
> any v1OrganizationsOrganizationIdDelete()

Delete organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v1OrganizationsOrganizationIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**any**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsOrganizationIdPatch**
> GithubComMonadIncCorePkgTypesModelsOrganization v1OrganizationsOrganizationIdPatch(routesUpdateOrganizationRequest)

Update organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsOrganizationIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsOrganizationIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for updating an organization
  routesUpdateOrganizationRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationsOrganizationIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateOrganizationRequest** | **RoutesUpdateOrganizationRequest**| Request body for updating an organization |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**GithubComMonadIncCorePkgTypesModelsOrganization**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating an organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsPost**
> GithubComMonadIncCorePkgTypesModelsOrganization v1OrganizationsPost(routesCreateOrganizationRequest)

Create organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsPostRequest = {
    // Request body for creating an organization
  routesCreateOrganizationRequest: {
    billingAccountId: "billingAccountId_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateOrganizationRequest** | **RoutesCreateOrganizationRequest**| Request body for creating an organization |


### Return type

**GithubComMonadIncCorePkgTypesModelsOrganization**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for creating an organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdMetricsGet**
> ModelsPipelineMetrics v2OrganizationIdMetricsGet()

Get time series metrics for an organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsGetRequest = {
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

const data = await apiInstance.v2OrganizationIdMetricsGet(request);
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

# **v2OrganizationIdMetricsStorageTypesDetailsGet**
> RoutesV2StorageTypeDetailsResponse v2OrganizationIdMetricsStorageTypesDetailsGet()

Get detailed metrics for each individual output, including egress and associated input

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsStorageTypesDetailsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsStorageTypesDetailsGetRequest = {
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

const data = await apiInstance.v2OrganizationIdMetricsStorageTypesDetailsGet(request);
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

# **v2OrganizationIdMetricsStorageTypesGet**
> ModelsStorageTypeTimeSeriesResponse v2OrganizationIdMetricsStorageTypesGet()

Get time series metrics grouped by storage type for an organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsStorageTypesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsStorageTypesGetRequest = {
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

const data = await apiInstance.v2OrganizationIdMetricsStorageTypesGet(request);
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

# **v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**
> RoutesV2StorageTypeDetailsResponse v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet()

Get detailed metrics for each individual output of a specific storage type

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest = {
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

# **v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet**
> ModelsStorageTypeSummaryResponse v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet()

Get aggregated cost and usage summary for a specific storage type

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsStorageTypesStorageTypeSummaryGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsStorageTypesStorageTypeSummaryGetRequest = {
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

const data = await apiInstance.v2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet(request);
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
**404** | Organization or storage type not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdMetricsStorageTypesSummaryGet**
> ModelsStorageTypeSummaryResponse v2OrganizationIdMetricsStorageTypesSummaryGet()

Get aggregated cost and usage summary by storage type

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdMetricsStorageTypesSummaryGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdMetricsStorageTypesSummaryGetRequest = {
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

const data = await apiInstance.v2OrganizationIdMetricsStorageTypesSummaryGet(request);
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

# **v2OrganizationIdStorageTypeCostGet**
> ModelsStorageTypeCostConfig v2OrganizationIdStorageTypeCostGet()

Get per-organization cost configuration for storage types

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdStorageTypeCostGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdStorageTypeCostGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v2OrganizationIdStorageTypeCostGet(request);
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

# **v2OrganizationIdStorageTypeCostPut**
> ModelsStorageTypeCostConfig v2OrganizationIdStorageTypeCostPut(routesV2SetStorageTypeCostRequest)

Update per-organization cost configuration for storage types

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV2OrganizationIdStorageTypeCostPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV2OrganizationIdStorageTypeCostPutRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Cost configuration
  routesV2SetStorageTypeCostRequest: {
    costs: {
      "key": {
        costPerByte: 3.14,
        costPerGb: 3.14,
      },
    },
  },
};

const data = await apiInstance.v2OrganizationIdStorageTypeCostPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2SetStorageTypeCostRequest** | **RoutesV2SetStorageTypeCostRequest**| Cost configuration |
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


