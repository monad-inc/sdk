# .ResourceSharesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResourceShares**](ResourceSharesApi.md#createResourceShares) | **POST** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Share a resource
[**listResourceShareTargets**](ResourceSharesApi.md#listResourceShareTargets) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/organizations | List a resource\&#39;s share targets (all direct child orgs)
[**listResourceShares**](ResourceSharesApi.md#listResourceShares) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | List a resource\&#39;s shares
[**listResourceUsage**](ResourceSharesApi.md#listResourceUsage) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/usage | List a shared resource\&#39;s consumers in other orgs
[**listSharedResources**](ResourceSharesApi.md#listSharedResources) | **GET** /v3/{organization_id}/resource_shares | List shared resources
[**unshareResource**](ResourceSharesApi.md#unshareResource) | **DELETE** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Unshare a resource
[**updateResourceShares**](ResourceSharesApi.md#updateResourceShares) | **PATCH** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Update a resource\&#39;s shares


# **createResourceShares**
> ModelsResourceShareChangeSet createResourceShares(createResourceSharesRequest)

Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource\'s auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiCreateResourceSharesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiCreateResourceSharesRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
    // Share request
  createResourceSharesRequest: null,
};

const data = await apiInstance.createResourceShares(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createResourceSharesRequest** | **CreateResourceSharesRequest**| Share request |
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined


### Return type

**ModelsResourceShareChangeSet**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created and revoked shares |  -  |
**400** | Invalid request |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A revoked share is in use by the target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listResourceShareTargets**
> ModelsResourceShareTargetList listResourceShareTargets()

List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI\'s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiListResourceShareTargetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiListResourceShareTargetsRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
    // Case-insensitive substring filter on child org name, slug, or id (optional)
  search: "search_example",
    // Filter by share state: true = only shared, false = only not shared (optional)
  shared: true,
    // Column to sort by; default puts shared rows first (optional)
  sortBy: "name",
    // Sort direction (used with sort_by) (optional)
  order: "asc",
    // Page size (optional)
  limit: 10,
    // Rows to skip (optional)
  offset: 0,
};

const data = await apiInstance.listResourceShareTargets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined
 **search** | [**string**] | Case-insensitive substring filter on child org name, slug, or id | (optional) defaults to undefined
 **shared** | [**boolean**] | Filter by share state: true &#x3D; only shared, false &#x3D; only not shared | (optional) defaults to undefined
 **sortBy** | [**&#39;name&#39; | &#39;shared&#39; | &#39;shared_at&#39; | &#39;in_use&#39;**]**Array<&#39;name&#39; &#124; &#39;shared&#39; &#124; &#39;shared_at&#39; &#124; &#39;in_use&#39;>** | Column to sort by; default puts shared rows first | (optional) defaults to undefined
 **order** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort direction (used with sort_by) | (optional) defaults to 'asc'
 **limit** | [**number**] | Page size | (optional) defaults to 10
 **offset** | [**number**] | Rows to skip | (optional) defaults to 0


### Return type

**ModelsResourceShareTargetList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Direct child orgs annotated with share state |  -  |
**400** | Invalid resource_type, sort_by, order, or shared value |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listResourceShares**
> ModelsResourceShareWithUsageList listResourceShares()

List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource\'s policy auto-shares it with new children.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiListResourceSharesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiListResourceSharesRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
};

const data = await apiInstance.listResourceShares(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined


### Return type

**ModelsResourceShareWithUsageList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource\&#39;s shares |  -  |
**400** | Invalid resource_type |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listResourceUsage**
> RoutesV3ResourceUsageListResponse listResourceUsage()

List, paginated, everywhere a shared secret or component owned by this org is consumed by OTHER (child) organizations — the remediation view. For a secret, consumers are the child-org components referencing it; for a component, the child-org pipelines binding it. Each row carries the child org and the consuming resource; rows are ordered so an org\'s usages are contiguous.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiListResourceUsageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiListResourceUsageRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
    // Page size (optional)
  limit: 10,
    // Rows to skip (optional)
  offset: 0,
};

const data = await apiInstance.listResourceUsage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined
 **limit** | [**number**] | Page size | (optional) defaults to 10
 **offset** | [**number**] | Rows to skip | (optional) defaults to 0


### Return type

**RoutesV3ResourceUsageListResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cross-org consumers of the shared resource |  -  |
**400** | Invalid resource_type |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSharedResources**
> RoutesV3SharedResourceListResponse listSharedResources()

List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiListSharedResourcesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiListSharedResourcesRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Page size (default: 10) (optional)
  limit: 1,
    // Offset (default: 0) (optional)
  offset: 1,
    // Filter by resource type (optional)
  resourceType: "secret",
};

const data = await apiInstance.listSharedResources(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **limit** | [**number**] | Page size (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset (default: 0) | (optional) defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Filter by resource type | (optional) defaults to undefined


### Return type

**RoutesV3SharedResourceListResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of shared resources |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unshareResource**
> ModelsResourceShareChangeSet unshareResource()

Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiUnshareResourceRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiUnshareResourceRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
};

const data = await apiInstance.unshareResource(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined


### Return type

**ModelsResourceShareChangeSet**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The revoked shares |  -  |
**400** | Invalid resource_type |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A share is in use by a target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateResourceShares**
> ModelsResourceShareChangeSet updateResourceShares(createResourceSharesRequest)

Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a named share (revoke_organization_ids) that the target organization is actively using is rejected with 409. Set revoke_all_not_in_use to instead revoke every current share the target is NOT using and leave the in-use ones in place (returned in skipped_in_use).

### Example


```typescript
import { createConfiguration, ResourceSharesApi } from '';
import type { ResourceSharesApiUpdateResourceSharesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ResourceSharesApi(configuration);

const request: ResourceSharesApiUpdateResourceSharesRequest = {
    // Owner organization ID
  organizationId: "organization_id_example",
    // Resource type
  resourceType: "secret",
    // Resource ID
  resourceId: "resource_id_example",
    // Share delta request
  createResourceSharesRequest: null,
};

const data = await apiInstance.updateResourceShares(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createResourceSharesRequest** | **CreateResourceSharesRequest**| Share delta request |
 **organizationId** | [**string**] | Owner organization ID | defaults to undefined
 **resourceType** | [**&#39;secret&#39; | &#39;component&#39;**]**Array<&#39;secret&#39; &#124; &#39;component&#39;>** | Resource type | defaults to undefined
 **resourceId** | [**string**] | Resource ID | defaults to undefined


### Return type

**ModelsResourceShareChangeSet**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created and revoked shares |  -  |
**400** | Invalid request |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A revoked share is in use by the target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


