# .OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChildOrganization**](OrganizationsApi.md#createChildOrganization) | **POST** /v3/{organization_id}/organizations | Create child organization (team)
[**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /v1/organizations | Create organization
[**deleteChildOrganization**](OrganizationsApi.md#deleteChildOrganization) | **DELETE** /v3/{organization_id}/organizations/{child_organization_id} | Delete child organization (team)
[**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**getStorageTypeSummaryByType**](OrganizationsApi.md#getStorageTypeSummaryByType) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**listChildOrganizations**](OrganizationsApi.md#listChildOrganizations) | **GET** /v3/{organization_id}/organizations | List child organizations (teams)
[**listUserOrganizations**](OrganizationsApi.md#listUserOrganizations) | **GET** /v1/organizations | List organizations for user
[**updateChildOrganization**](OrganizationsApi.md#updateChildOrganization) | **PATCH** /v3/{organization_id}/organizations/{child_organization_id} | Update child organization (team)
[**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PATCH** /v1/organizations/{organization_id} | Update organization


# **createChildOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization createChildOrganization(routesV3CreateChildOrganizationRequest)

Create a new child organization under the given parent organization. Known as a \"team\" in the UI.

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiCreateChildOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiCreateChildOrganizationRequest = {
    // Parent Organization ID
  organizationId: "organization_id_example",
    // Request body
  routesV3CreateChildOrganizationRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createChildOrganization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateChildOrganizationRequest** | **RoutesV3CreateChildOrganizationRequest**| Request body |
 **organizationId** | [**string**] | Parent Organization ID | defaults to undefined


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
**200** | Created child organization |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization createOrganization(routesCreateOrganizationRequest)

Create organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiCreateOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiCreateOrganizationRequest = {
    // Request body for creating an organization
  routesCreateOrganizationRequest: {
    billingAccountId: "billingAccountId_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createOrganization(request);
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

# **deleteChildOrganization**
> void deleteChildOrganization()

Delete a child organization under the given parent organization. Known as a \"team\" in the UI.

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiDeleteChildOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiDeleteChildOrganizationRequest = {
    // Parent Organization ID
  organizationId: "organization_id_example",
    // Child Organization ID
  childOrganizationId: "child_organization_id_example",
};

const data = await apiInstance.deleteChildOrganization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Parent Organization ID | defaults to undefined
 **childOrganizationId** | [**string**] | Child Organization ID | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Child organization deleted successfully |  -  |
**404** | Child organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrganization**
> any deleteOrganization()

Delete organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiDeleteOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiDeleteOrganizationRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.deleteOrganization(request);
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

# **getStorageTypeSummaryByType**
> ModelsStorageTypeSummaryResponse getStorageTypeSummaryByType()

Get aggregated cost and usage summary for a specific storage type

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiGetStorageTypeSummaryByTypeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiGetStorageTypeSummaryByTypeRequest = {
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

const data = await apiInstance.getStorageTypeSummaryByType(request);
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

# **listChildOrganizations**
> ModelsUserOrganizationList listChildOrganizations()

List child organizations for the given parent organization. These are surfaced as \"teams\" in the UI.

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiListChildOrganizationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiListChildOrganizationsRequest = {
    // Parent Organization ID
  organizationId: "organization_id_example",
    // Limit the number of organizations returned (default: 10) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
    // If provided, only return organizations with names that contain the search string (optional)
  nameSearch: "name_search_example",
};

const data = await apiInstance.listChildOrganizations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Parent Organization ID | defaults to undefined
 **limit** | [**number**] | Limit the number of organizations returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the organizations returned (default: 0) | (optional) defaults to undefined
 **nameSearch** | [**string**] | If provided, only return organizations with names that contain the search string | (optional) defaults to undefined


### Return type

**ModelsUserOrganizationList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of child organizations |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUserOrganizations**
> ModelsOrganizationList listUserOrganizations()

List organizations for user

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiListUserOrganizationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiListUserOrganizationsRequest = {
    // Limit the number of organizations returned (default: 10) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
    // If true, only return organizations that are directly associated with the user, not child organizations (default: false) (optional)
  noChildren: true,
    // If provided, only return organizations that are children of the specified parent organization (optional)
  parentOrganizationId: "parent_organization_id_example",
    // If provided, only return organizations with names that contain the search string (optional)
  nameSearch: "name_search_example",
};

const data = await apiInstance.listUserOrganizations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit the number of organizations returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the organizations returned (default: 0) | (optional) defaults to undefined
 **noChildren** | [**boolean**] | If true, only return organizations that are directly associated with the user, not child organizations (default: false) | (optional) defaults to undefined
 **parentOrganizationId** | [**string**] | If provided, only return organizations that are children of the specified parent organization | (optional) defaults to undefined
 **nameSearch** | [**string**] | If provided, only return organizations with names that contain the search string | (optional) defaults to undefined


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

# **updateChildOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization updateChildOrganization(routesV3UpdateChildOrganizationRequest)

Update a child organization under the given parent organization. Known as a \"team\" in the UI.

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiUpdateChildOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiUpdateChildOrganizationRequest = {
    // Parent Organization ID
  organizationId: "organization_id_example",
    // Child Organization ID
  childOrganizationId: "child_organization_id_example",
    // Request body
  routesV3UpdateChildOrganizationRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateChildOrganization(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateChildOrganizationRequest** | **RoutesV3UpdateChildOrganizationRequest**| Request body |
 **organizationId** | [**string**] | Parent Organization ID | defaults to undefined
 **childOrganizationId** | [**string**] | Child Organization ID | defaults to undefined


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
**200** | Updated child organization |  -  |
**400** | Invalid request body |  -  |
**404** | Child organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization updateOrganization(routesUpdateOrganizationRequest)

Update organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiUpdateOrganizationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiUpdateOrganizationRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for updating an organization
  routesUpdateOrganizationRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateOrganization(request);
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


