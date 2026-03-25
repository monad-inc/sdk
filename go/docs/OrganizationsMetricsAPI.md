# \OrganizationsMetricsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetOrganizationMetrics**](OrganizationsMetricsAPI.md#GetOrganizationMetrics) | **Get** /v2/{organization_id}/metrics | Get organization metrics



## GetOrganizationMetrics

> ModelsPipelineMetrics GetOrganizationMetrics(ctx, organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

Get organization metrics



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
	metric := "metric_example" // string | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default determined by time window (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsMetricsAPI.GetOrganizationMetrics(context.Background(), organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsMetricsAPI.GetOrganizationMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationMetrics`: ModelsPipelineMetrics
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsMetricsAPI.GetOrganizationMetrics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationMetricsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **metric** | **string** | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | 
 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **resolution** | **string** | Resolution of the data, default determined by time window | 

### Return type

[**ModelsPipelineMetrics**](ModelsPipelineMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

