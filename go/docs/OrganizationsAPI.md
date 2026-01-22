# \OrganizationsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationsGet**](OrganizationsAPI.md#V1OrganizationsGet) | **Get** /v1/organizations | List organizations for user
[**V1OrganizationsOrganizationIdDelete**](OrganizationsAPI.md#V1OrganizationsOrganizationIdDelete) | **Delete** /v1/organizations/{organization_id} | Delete organization
[**V1OrganizationsOrganizationIdPatch**](OrganizationsAPI.md#V1OrganizationsOrganizationIdPatch) | **Patch** /v1/organizations/{organization_id} | Update organization
[**V1OrganizationsPost**](OrganizationsAPI.md#V1OrganizationsPost) | **Post** /v1/organizations | Create organization
[**V2OrganizationIdMetricsGet**](OrganizationsAPI.md#V2OrganizationIdMetricsGet) | **Get** /v2/{organization_id}/metrics | Get organization metrics
[**V2OrganizationIdMetricsStorageTypesDetailsGet**](OrganizationsAPI.md#V2OrganizationIdMetricsStorageTypesDetailsGet) | **Get** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**V2OrganizationIdMetricsStorageTypesGet**](OrganizationsAPI.md#V2OrganizationIdMetricsStorageTypesGet) | **Get** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**](OrganizationsAPI.md#V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet) | **Get** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type
[**V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet**](OrganizationsAPI.md#V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet) | **Get** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**V2OrganizationIdMetricsStorageTypesSummaryGet**](OrganizationsAPI.md#V2OrganizationIdMetricsStorageTypesSummaryGet) | **Get** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**V2OrganizationIdStorageTypeCostGet**](OrganizationsAPI.md#V2OrganizationIdStorageTypeCostGet) | **Get** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**V2OrganizationIdStorageTypeCostPut**](OrganizationsAPI.md#V2OrganizationIdStorageTypeCostPut) | **Put** /v2/{organization_id}/storage-type-cost | Set storage type cost



## V1OrganizationsGet

> ModelsOrganizationList V1OrganizationsGet(ctx).Limit(limit).Offset(offset).Execute()

List organizations for user



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
	limit := int32(56) // int32 | Limit the number of organizations returned (default: 10) (optional)
	offset := int32(56) // int32 | Offset the organizations returned (default: 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.V1OrganizationsGet(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V1OrganizationsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationsGet`: ModelsOrganizationList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V1OrganizationsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Limit the number of organizations returned (default: 10) | 
 **offset** | **int32** | Offset the organizations returned (default: 0) | 

### Return type

[**ModelsOrganizationList**](ModelsOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationsOrganizationIdDelete

> map[string]interface{} V1OrganizationsOrganizationIdDelete(ctx, organizationId).Execute()

Delete organization



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
	resp, r, err := apiClient.OrganizationsAPI.V1OrganizationsOrganizationIdDelete(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V1OrganizationsOrganizationIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationsOrganizationIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V1OrganizationsOrganizationIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationsOrganizationIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationsOrganizationIdPatch

> GithubComMonadIncCorePkgTypesModelsOrganization V1OrganizationsOrganizationIdPatch(ctx, organizationId).RoutesUpdateOrganizationRequest(routesUpdateOrganizationRequest).Execute()

Update organization



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
	routesUpdateOrganizationRequest := *openapiclient.NewRoutesUpdateOrganizationRequest("Name_example") // RoutesUpdateOrganizationRequest | Request body for updating an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.V1OrganizationsOrganizationIdPatch(context.Background(), organizationId).RoutesUpdateOrganizationRequest(routesUpdateOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V1OrganizationsOrganizationIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationsOrganizationIdPatch`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V1OrganizationsOrganizationIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationsOrganizationIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesUpdateOrganizationRequest** | [**RoutesUpdateOrganizationRequest**](RoutesUpdateOrganizationRequest.md) | Request body for updating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationsPost

> GithubComMonadIncCorePkgTypesModelsOrganization V1OrganizationsPost(ctx).RoutesCreateOrganizationRequest(routesCreateOrganizationRequest).Execute()

Create organization



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
	routesCreateOrganizationRequest := *openapiclient.NewRoutesCreateOrganizationRequest("Name_example") // RoutesCreateOrganizationRequest | Request body for creating an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.V1OrganizationsPost(context.Background()).RoutesCreateOrganizationRequest(routesCreateOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V1OrganizationsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationsPost`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V1OrganizationsPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateOrganizationRequest** | [**RoutesCreateOrganizationRequest**](RoutesCreateOrganizationRequest.md) | Request body for creating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdMetricsGet

> ModelsPipelineMetrics V2OrganizationIdMetricsGet(ctx, organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsGet(context.Background(), organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsGet`: ModelsPipelineMetrics
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsGetRequest struct via the builder pattern


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


## V2OrganizationIdMetricsStorageTypesDetailsGet

> RoutesV2StorageTypeDetailsResponse V2OrganizationIdMetricsStorageTypesDetailsGet(ctx, organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsStorageTypesDetailsGet(context.Background(), organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesDetailsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesDetailsGet`: RoutesV2StorageTypeDetailsResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesDetailsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsStorageTypesDetailsGetRequest struct via the builder pattern


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


## V2OrganizationIdMetricsStorageTypesGet

> ModelsStorageTypeTimeSeriesResponse V2OrganizationIdMetricsStorageTypesGet(ctx, organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).BillingType(billingType).PipelineId(pipelineId).Execute()

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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsStorageTypesGet(context.Background(), organizationId).Metric(metric).Start(start).End(end).Resolution(resolution).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesGet`: ModelsStorageTypeTimeSeriesResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsStorageTypesGetRequest struct via the builder pattern


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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(context.Background(), organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet`: RoutesV2StorageTypeDetailsResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet`: %v\n", resp)
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


## V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet

> ModelsStorageTypeSummaryResponse V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet(ctx, organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type cost summary by type



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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet(context.Background(), organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet`: ModelsStorageTypeSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesStorageTypeSummaryGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**storageType** | **string** | Storage type (e.g., s3, dev-null, bigquery) | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsStorageTypesStorageTypeSummaryGetRequest struct via the builder pattern


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


## V2OrganizationIdMetricsStorageTypesSummaryGet

> ModelsStorageTypeSummaryResponse V2OrganizationIdMetricsStorageTypesSummaryGet(ctx, organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdMetricsStorageTypesSummaryGet(context.Background(), organizationId).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesSummaryGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdMetricsStorageTypesSummaryGet`: ModelsStorageTypeSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdMetricsStorageTypesSummaryGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdMetricsStorageTypesSummaryGetRequest struct via the builder pattern


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


## V2OrganizationIdStorageTypeCostGet

> ModelsStorageTypeCostConfig V2OrganizationIdStorageTypeCostGet(ctx, organizationId).Execute()

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
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdStorageTypeCostGet(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdStorageTypeCostGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdStorageTypeCostGet`: ModelsStorageTypeCostConfig
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdStorageTypeCostGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdStorageTypeCostGetRequest struct via the builder pattern


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


## V2OrganizationIdStorageTypeCostPut

> ModelsStorageTypeCostConfig V2OrganizationIdStorageTypeCostPut(ctx, organizationId).RoutesV2SetStorageTypeCostRequest(routesV2SetStorageTypeCostRequest).Execute()

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
	routesV2SetStorageTypeCostRequest := *openapiclient.NewRoutesV2SetStorageTypeCostRequest() // RoutesV2SetStorageTypeCostRequest | Cost configuration

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.V2OrganizationIdStorageTypeCostPut(context.Background(), organizationId).RoutesV2SetStorageTypeCostRequest(routesV2SetStorageTypeCostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.V2OrganizationIdStorageTypeCostPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdStorageTypeCostPut`: ModelsStorageTypeCostConfig
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.V2OrganizationIdStorageTypeCostPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdStorageTypeCostPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2SetStorageTypeCostRequest** | [**RoutesV2SetStorageTypeCostRequest**](RoutesV2SetStorageTypeCostRequest.md) | Cost configuration | 

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

