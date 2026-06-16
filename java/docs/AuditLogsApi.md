# AuditLogsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationAuditLogHistogram**](AuditLogsApi.md#getOrganizationAuditLogHistogram) | **GET** /v3/{organization_id}/audit_logs/histogram | Audit log change histogram |
| [**listOrganizationAuditLogs**](AuditLogsApi.md#listOrganizationAuditLogs) | **GET** /v3/{organization_id}/audit_logs | List organization audit logs |


<a id="getOrganizationAuditLogHistogram"></a>
# **getOrganizationAuditLogHistogram**
> ModelsOrganizationAuditLogHistogram getOrganizationAuditLogHistogram(organizationId, from, to, buckets, resourceType, resourceId, actorId, action)

Audit log change histogram

Bucketed change counts over [from, to) for the audit timeline. For resource_type&#x3D;pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuditLogsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AuditLogsApi apiInstance = new AuditLogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String from = "from_example"; // String | Bucket window start (inclusive), RFC3339
    String to = "to_example"; // String | Bucket window end (exclusive), RFC3339
    Integer buckets = 56; // Integer | Number of equal-width buckets (default 100, max 500)
    String resourceType = "resourceType_example"; // String | Filter by resource type; with resource_id selects the merged feed
    String resourceId = "resourceId_example"; // String | Filter by resource ID; requires resource_type
    String actorId = "actorId_example"; // String | Filter by actor ID
    String action = "action_example"; // String | Filter by action (insert, update, delete)
    try {
      ModelsOrganizationAuditLogHistogram result = apiInstance.getOrganizationAuditLogHistogram(organizationId, from, to, buckets, resourceType, resourceId, actorId, action);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuditLogsApi#getOrganizationAuditLogHistogram");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **from** | **String**| Bucket window start (inclusive), RFC3339 | |
| **to** | **String**| Bucket window end (exclusive), RFC3339 | |
| **buckets** | **Integer**| Number of equal-width buckets (default 100, max 500) | [optional] |
| **resourceType** | **String**| Filter by resource type; with resource_id selects the merged feed | [optional] |
| **resourceId** | **String**| Filter by resource ID; requires resource_type | [optional] |
| **actorId** | **String**| Filter by actor ID | [optional] |
| **action** | **String**| Filter by action (insert, update, delete) | [optional] |

### Return type

[**ModelsOrganizationAuditLogHistogram**](ModelsOrganizationAuditLogHistogram.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bucketed change counts |  -  |
| **400** | Invalid query parameters |  -  |
| **403** | Missing organization:logs:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="listOrganizationAuditLogs"></a>
# **listOrganizationAuditLogs**
> ModelsOrganizationAuditLogList listOrganizationAuditLogs(organizationId, limit, cursor, resourceType, resourceId, actorId, action, from, to)

List organization audit logs

List the organization&#39;s audit log, newest first, with cursor pagination. Filtering by resource_type&#x3D;pipeline with a resource_id returns the pipeline&#39;s merged history: the pipeline&#39;s own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuditLogsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AuditLogsApi apiInstance = new AuditLogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Page size (default 50, max 100)
    String cursor = "cursor_example"; // String | Opaque cursor from a previous response; filters are carried by the cursor
    String resourceType = "resourceType_example"; // String | Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type
    String resourceId = "resourceId_example"; // String | Filter by resource ID; requires resource_type
    String actorId = "actorId_example"; // String | Filter by actor ID
    String action = "action_example"; // String | Filter by action (insert, update, delete)
    String from = "from_example"; // String | Only rows at or after this RFC3339 timestamp
    String to = "to_example"; // String | Only rows before this RFC3339 timestamp
    try {
      ModelsOrganizationAuditLogList result = apiInstance.listOrganizationAuditLogs(organizationId, limit, cursor, resourceType, resourceId, actorId, action, from, to);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuditLogsApi#listOrganizationAuditLogs");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **limit** | **Integer**| Page size (default 50, max 100) | [optional] |
| **cursor** | **String**| Opaque cursor from a previous response; filters are carried by the cursor | [optional] |
| **resourceType** | **String**| Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type | [optional] |
| **resourceId** | **String**| Filter by resource ID; requires resource_type | [optional] |
| **actorId** | **String**| Filter by actor ID | [optional] |
| **action** | **String**| Filter by action (insert, update, delete) | [optional] |
| **from** | **String**| Only rows at or after this RFC3339 timestamp | [optional] |
| **to** | **String**| Only rows before this RFC3339 timestamp | [optional] |

### Return type

[**ModelsOrganizationAuditLogList**](ModelsOrganizationAuditLogList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | One page of audit logs |  -  |
| **400** | Invalid query parameters or cursor |  -  |
| **403** | Missing organization:logs:read permission |  -  |
| **500** | Internal server error |  -  |

