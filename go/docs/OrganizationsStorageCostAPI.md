# \OrganizationsStorageCostAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetStorageTypeCost**](OrganizationsStorageCostAPI.md#GetStorageTypeCost) | **Get** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**GetStorageTypeDetails**](OrganizationsStorageCostAPI.md#GetStorageTypeDetails) | **Get** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**GetStorageTypeMetrics**](OrganizationsStorageCostAPI.md#GetStorageTypeMetrics) | **Get** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**GetStorageTypeSummary**](OrganizationsStorageCostAPI.md#GetStorageTypeSummary) | **Get** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**SetStorageTypeCost**](OrganizationsStorageCostAPI.md#SetStorageTypeCost) | **Put** /v2/{organization_id}/storage-type-cost | Set storage type cost
[**V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**](OrganizationsStorageCostAPI.md#V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet) | **Get** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type



## GetStorageTypeCost

> ModelsStorageTypeCostConfig GetStorageTypeCost(ctx, organizationId).Execute()

Get storage type cost



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.GetStorageTypeCost(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.GetStorageTypeCost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStorageTypeCost`: ModelsStorageTypeCostConfig
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.GetStorageTypeCost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStorageTypeCostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStorageTypeDetails

> RoutesV2StorageTypeDetailsResponse GetStorageTypeDetails(ctx, organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type output details



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
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	billingType := "billingType_example" // string | Filter by billing type (billable|non_billable) (optional)
	pipelineId := "pipelineId_example" // string | Filter to specific pipeline (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.GetStorageTypeDetails(context.Background(), organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.GetStorageTypeDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStorageTypeDetails`: RoutesV2StorageTypeDetailsResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.GetStorageTypeDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStorageTypeDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **billingType** | **string** | Filter by billing type (billable|non_billable) | 
 **pipelineId** | **string** | Filter to specific pipeline | 

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStorageTypeMetrics

> ModelsStorageTypeTimeSeriesResponse GetStorageTypeMetrics(ctx, organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type metrics



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
	metric := "metric_example" // string | Metric to retrieve (egress_bytes|egress_records|errors)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default determined by time window (optional)
	billingType := "billingType_example" // string | Filter by billing type (billable|non_billable) (optional)
	pipelineId := "pipelineId_example" // string | Filter to specific pipeline (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.GetStorageTypeMetrics(context.Background(), organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.GetStorageTypeMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStorageTypeMetrics`: ModelsStorageTypeTimeSeriesResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.GetStorageTypeMetrics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStorageTypeMetricsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **metric** | **string** | Metric to retrieve (egress_bytes|egress_records|errors) | 
 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **resolution** | **string** | Resolution of the data, default determined by time window | 
 **billingType** | **string** | Filter by billing type (billable|non_billable) | 
 **pipelineId** | **string** | Filter to specific pipeline | 

### Return type

[**ModelsStorageTypeTimeSeriesResponse**](ModelsStorageTypeTimeSeriesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStorageTypeSummary

> ModelsStorageTypeSummaryResponse GetStorageTypeSummary(ctx, organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type cost summary



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
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	billingType := "billingType_example" // string | Filter by billing type (billable|non_billable) (optional)
	pipelineId := "pipelineId_example" // string | Filter to specific pipeline (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.GetStorageTypeSummary(context.Background(), organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.GetStorageTypeSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStorageTypeSummary`: ModelsStorageTypeSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.GetStorageTypeSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStorageTypeSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **billingType** | **string** | Filter by billing type (billable|non_billable) | 
 **pipelineId** | **string** | Filter to specific pipeline | 

### Return type

[**ModelsStorageTypeSummaryResponse**](ModelsStorageTypeSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetStorageTypeCost

> ModelsStorageTypeCostConfig SetStorageTypeCost(ctx, organizationId).SetStorageTypeCostRequest(setStorageTypeCostRequest).Execute()

Set storage type cost



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
	setStorageTypeCostRequest := openapiclient.SetStorageTypeCost_request{RoutesV2SetStorageTypeCostRequest: openapiclient.NewRoutesV2SetStorageTypeCostRequest()} // SetStorageTypeCostRequest | Cost configuration

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.SetStorageTypeCost(context.Background(), organizationId).SetStorageTypeCostRequest(setStorageTypeCostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.SetStorageTypeCost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetStorageTypeCost`: ModelsStorageTypeCostConfig
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.SetStorageTypeCost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetStorageTypeCostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **setStorageTypeCostRequest** | [**SetStorageTypeCostRequest**](SetStorageTypeCostRequest.md) | Cost configuration | 

### Return type

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet

> RoutesV2StorageTypeDetailsResponse V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(ctx, organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type output details by type



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
	storageType := "storageType_example" // string | Storage type (e.g., s3, dev-null, bigquery)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	billingType := "billingType_example" // string | Filter by billing type (billable|non_billable) (optional)
	pipelineId := "pipelineId_example" // string | Filter to specific pipeline (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsStorageCostAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(context.Background(), organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsStorageCostAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet`: RoutesV2StorageTypeDetailsResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsStorageCostAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**storageType** | **string** | Storage type (e.g., s3, dev-null, bigquery) | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsStorageTypesStorageTypeDetailsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **billingType** | **string** | Filter by billing type (billable|non_billable) | 
 **pipelineId** | **string** | Filter to specific pipeline | 

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

