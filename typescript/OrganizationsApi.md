# .OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationsGet**](OrganizationsApi.md#v1OrganizationsGet) | **GET** /v1/organizations | List organizations for user
[**v1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#v1OrganizationsOrganizationIdDelete) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**v1OrganizationsOrganizationIdPatch**](OrganizationsApi.md#v1OrganizationsOrganizationIdPatch) | **PATCH** /v1/organizations/{organization_id} | Update organization
[**v1OrganizationsPost**](OrganizationsApi.md#v1OrganizationsPost) | **POST** /v1/organizations | Create organization
[**v2OrganizationIdMetricsGet**](OrganizationsApi.md#v2OrganizationIdMetricsGet) | **GET** /v2/{organization_id}/metrics | Get organization metrics


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


