# .AuditLogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationAuditLogHistogram**](AuditLogsApi.md#getOrganizationAuditLogHistogram) | **GET** /v3/{organization_id}/audit_logs/histogram | Audit log change histogram
[**listOrganizationAuditLogs**](AuditLogsApi.md#listOrganizationAuditLogs) | **GET** /v3/{organization_id}/audit_logs | List organization audit logs


# **getOrganizationAuditLogHistogram**
> ModelsOrganizationAuditLogHistogram getOrganizationAuditLogHistogram()

Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.

### Example


```typescript
import { createConfiguration, AuditLogsApi } from '';
import type { AuditLogsApiGetOrganizationAuditLogHistogramRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuditLogsApi(configuration);

const request: AuditLogsApiGetOrganizationAuditLogHistogramRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Bucket window start (inclusive), RFC3339
  _from: "from_example",
    // Bucket window end (exclusive), RFC3339
  to: "to_example",
    // Number of equal-width buckets (default 100, max 500) (optional)
  buckets: 1,
    // Filter by resource type; with resource_id selects the merged feed (optional)
  resourceType: "resource_type_example",
    // Filter by resource ID; requires resource_type (optional)
  resourceId: "resource_id_example",
    // Filter by actor ID (optional)
  actorId: "actor_id_example",
    // Filter by action (insert, update, delete) (optional)
  action: "action_example",
};

const data = await apiInstance.getOrganizationAuditLogHistogram(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **_from** | [**string**] | Bucket window start (inclusive), RFC3339 | defaults to undefined
 **to** | [**string**] | Bucket window end (exclusive), RFC3339 | defaults to undefined
 **buckets** | [**number**] | Number of equal-width buckets (default 100, max 500) | (optional) defaults to undefined
 **resourceType** | [**string**] | Filter by resource type; with resource_id selects the merged feed | (optional) defaults to undefined
 **resourceId** | [**string**] | Filter by resource ID; requires resource_type | (optional) defaults to undefined
 **actorId** | [**string**] | Filter by actor ID | (optional) defaults to undefined
 **action** | [**string**] | Filter by action (insert, update, delete) | (optional) defaults to undefined


### Return type

**ModelsOrganizationAuditLogHistogram**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucketed change counts |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing organization:logs:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationAuditLogs**
> ModelsOrganizationAuditLogList listOrganizationAuditLogs()

List the organization\'s audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline\'s merged history: the pipeline\'s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.

### Example


```typescript
import { createConfiguration, AuditLogsApi } from '';
import type { AuditLogsApiListOrganizationAuditLogsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuditLogsApi(configuration);

const request: AuditLogsApiListOrganizationAuditLogsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Page size (default 50, max 100) (optional)
  limit: 1,
    // Opaque cursor from a previous response; filters are carried by the cursor (optional)
  cursor: "cursor_example",
    // Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type (optional)
  resourceType: "resource_type_example",
    // Filter by resource ID; requires resource_type (optional)
  resourceId: "resource_id_example",
    // Filter by actor ID (optional)
  actorId: "actor_id_example",
    // Filter by action (insert, update, delete) (optional)
  action: "action_example",
    // Only rows at or after this RFC3339 timestamp (optional)
  _from: "from_example",
    // Only rows before this RFC3339 timestamp (optional)
  to: "to_example",
};

const data = await apiInstance.listOrganizationAuditLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Page size (default 50, max 100) | (optional) defaults to undefined
 **cursor** | [**string**] | Opaque cursor from a previous response; filters are carried by the cursor | (optional) defaults to undefined
 **resourceType** | [**string**] | Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type | (optional) defaults to undefined
 **resourceId** | [**string**] | Filter by resource ID; requires resource_type | (optional) defaults to undefined
 **actorId** | [**string**] | Filter by actor ID | (optional) defaults to undefined
 **action** | [**string**] | Filter by action (insert, update, delete) | (optional) defaults to undefined
 **_from** | [**string**] | Only rows at or after this RFC3339 timestamp | (optional) defaults to undefined
 **to** | [**string**] | Only rows before this RFC3339 timestamp | (optional) defaults to undefined


### Return type

**ModelsOrganizationAuditLogList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | One page of audit logs |  -  |
**400** | Invalid query parameters or cursor |  -  |
**403** | Missing organization:logs:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


