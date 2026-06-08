# .AuditLogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOrganizationAuditLogs**](AuditLogsApi.md#listOrganizationAuditLogs) | **GET** /v3/{organization_id}/audit_logs | List organization audit logs


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


