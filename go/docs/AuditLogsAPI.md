# \AuditLogsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetOrganizationAuditLogHistogram**](AuditLogsAPI.md#GetOrganizationAuditLogHistogram) | **Get** /v3/{organization_id}/audit_logs/histogram | Audit log change histogram
[**ListOrganizationAuditLogs**](AuditLogsAPI.md#ListOrganizationAuditLogs) | **Get** /v3/{organization_id}/audit_logs | List organization audit logs



## GetOrganizationAuditLogHistogram

> ModelsOrganizationAuditLogHistogram GetOrganizationAuditLogHistogram(ctx, organizationId).From(from).To(to).Buckets(buckets).ResourceType(resourceType).ResourceId(resourceId).ActorId(actorId).Action(action).Execute()

Audit log change histogram



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	from := "from_example" // string | Bucket window start (inclusive), RFC3339
	to := "to_example" // string | Bucket window end (exclusive), RFC3339
	buckets := int32(56) // int32 | Number of equal-width buckets (default 100, max 500) (optional)
	resourceType := "resourceType_example" // string | Filter by resource type; with resource_id selects the merged feed (optional)
	resourceId := "resourceId_example" // string | Filter by resource ID; requires resource_type (optional)
	actorId := "actorId_example" // string | Filter by actor ID (optional)
	action := "action_example" // string | Filter by action (insert, update, delete) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuditLogsAPI.GetOrganizationAuditLogHistogram(context.Background(), organizationId).From(from).To(to).Buckets(buckets).ResourceType(resourceType).ResourceId(resourceId).ActorId(actorId).Action(action).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuditLogsAPI.GetOrganizationAuditLogHistogram``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationAuditLogHistogram`: ModelsOrganizationAuditLogHistogram
	fmt.Fprintf(os.Stdout, "Response from `AuditLogsAPI.GetOrganizationAuditLogHistogram`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationAuditLogHistogramRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **from** | **string** | Bucket window start (inclusive), RFC3339 | 
 **to** | **string** | Bucket window end (exclusive), RFC3339 | 
 **buckets** | **int32** | Number of equal-width buckets (default 100, max 500) | 
 **resourceType** | **string** | Filter by resource type; with resource_id selects the merged feed | 
 **resourceId** | **string** | Filter by resource ID; requires resource_type | 
 **actorId** | **string** | Filter by actor ID | 
 **action** | **string** | Filter by action (insert, update, delete) | 

### Return type

[**ModelsOrganizationAuditLogHistogram**](ModelsOrganizationAuditLogHistogram.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrganizationAuditLogs

> ModelsOrganizationAuditLogList ListOrganizationAuditLogs(ctx, organizationId).Limit(limit).Cursor(cursor).ResourceType(resourceType).ResourceId(resourceId).ActorId(actorId).Action(action).From(from).To(to).Execute()

List organization audit logs



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	limit := int32(56) // int32 | Page size (default 50, max 100) (optional)
	cursor := "cursor_example" // string | Opaque cursor from a previous response; filters are carried by the cursor (optional)
	resourceType := "resourceType_example" // string | Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type (optional)
	resourceId := "resourceId_example" // string | Filter by resource ID; requires resource_type (optional)
	actorId := "actorId_example" // string | Filter by actor ID (optional)
	action := "action_example" // string | Filter by action (insert, update, delete) (optional)
	from := "from_example" // string | Only rows at or after this RFC3339 timestamp (optional)
	to := "to_example" // string | Only rows before this RFC3339 timestamp (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuditLogsAPI.ListOrganizationAuditLogs(context.Background(), organizationId).Limit(limit).Cursor(cursor).ResourceType(resourceType).ResourceId(resourceId).ActorId(actorId).Action(action).From(from).To(to).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuditLogsAPI.ListOrganizationAuditLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationAuditLogs`: ModelsOrganizationAuditLogList
	fmt.Fprintf(os.Stdout, "Response from `AuditLogsAPI.ListOrganizationAuditLogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationAuditLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Page size (default 50, max 100) | 
 **cursor** | **string** | Opaque cursor from a previous response; filters are carried by the cursor | 
 **resourceType** | **string** | Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type | 
 **resourceId** | **string** | Filter by resource ID; requires resource_type | 
 **actorId** | **string** | Filter by actor ID | 
 **action** | **string** | Filter by action (insert, update, delete) | 
 **from** | **string** | Only rows at or after this RFC3339 timestamp | 
 **to** | **string** | Only rows before this RFC3339 timestamp | 

### Return type

[**ModelsOrganizationAuditLogList**](ModelsOrganizationAuditLogList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

