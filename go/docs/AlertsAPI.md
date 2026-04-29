# \AlertsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListAlerts**](AlertsAPI.md#ListAlerts) | **Get** /v3/{organization_id}/alerts | List alerts with pagination
[**StreamAlerts**](AlertsAPI.md#StreamAlerts) | **Get** /v3/{organization_id}/alerts/stream | Stream alerts in real-time



## ListAlerts

> RoutesV3AlertList ListAlerts(ctx, organizationId).RuleIds(ruleIds).Severities(severities).PipelineIds(pipelineIds).ResourceType(resourceType).ResourceId(resourceId).Since(since).Until(until).Execute()

List alerts with pagination



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
	ruleIds := "ruleIds_example" // string | Comma-separated alert rule IDs (optional)
	severities := "severities_example" // string | Comma-separated severity levels (optional)
	pipelineIds := "pipelineIds_example" // string | Comma-separated pipeline IDs (optional)
	resourceType := "resourceType_example" // string | Resource type filter (optional)
	resourceId := "resourceId_example" // string | Specific resource ID (optional)
	since := "since_example" // string | RFC3339 timestamp for start time (optional)
	until := "until_example" // string | RFC3339 timestamp for end time (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertsAPI.ListAlerts(context.Background(), organizationId).RuleIds(ruleIds).Severities(severities).PipelineIds(pipelineIds).ResourceType(resourceType).ResourceId(resourceId).Since(since).Until(until).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertsAPI.ListAlerts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAlerts`: RoutesV3AlertList
	fmt.Fprintf(os.Stdout, "Response from `AlertsAPI.ListAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ruleIds** | **string** | Comma-separated alert rule IDs | 
 **severities** | **string** | Comma-separated severity levels | 
 **pipelineIds** | **string** | Comma-separated pipeline IDs | 
 **resourceType** | **string** | Resource type filter | 
 **resourceId** | **string** | Specific resource ID | 
 **since** | **string** | RFC3339 timestamp for start time | 
 **until** | **string** | RFC3339 timestamp for end time | 

### Return type

[**RoutesV3AlertList**](RoutesV3AlertList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamAlerts

> string StreamAlerts(ctx, organizationId).Since(since).Last(last).RuleIds(ruleIds).Severities(severities).ResourceIds(resourceIds).ResourceType(resourceType).Execute()

Stream alerts in real-time



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
	since := "since_example" // string | RFC3339 timestamp to start streaming from (optional)
	last := "last_example" // string | Duration to start streaming from (e.g., '5m', '1h', '24h') (optional)
	ruleIds := "ruleIds_example" // string | Comma-separated alert rule IDs (optional)
	severities := "severities_example" // string | Comma-separated severity levels (optional)
	resourceIds := "resourceIds_example" // string | Comma-separated resource IDs (optional)
	resourceType := "resourceType_example" // string | Resource type filter (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertsAPI.StreamAlerts(context.Background(), organizationId).Since(since).Last(last).RuleIds(ruleIds).Severities(severities).ResourceIds(resourceIds).ResourceType(resourceType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertsAPI.StreamAlerts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamAlerts`: string
	fmt.Fprintf(os.Stdout, "Response from `AlertsAPI.StreamAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 
 **last** | **string** | Duration to start streaming from (e.g., &#39;5m&#39;, &#39;1h&#39;, &#39;24h&#39;) | 
 **ruleIds** | **string** | Comma-separated alert rule IDs | 
 **severities** | **string** | Comma-separated severity levels | 
 **resourceIds** | **string** | Comma-separated resource IDs | 
 **resourceType** | **string** | Resource type filter | 

### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

