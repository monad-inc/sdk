# \PipelinesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdPipelinesGet**](PipelinesAPI.md#V1OrganizationIdPipelinesGet) | **Get** /v1/{organization_id}/pipelines | List pipelines
[**V1OrganizationIdPipelinesPipelineIdDelete**](PipelinesAPI.md#V1OrganizationIdPipelinesPipelineIdDelete) | **Delete** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**V1OrganizationIdPipelinesPipelineIdGet**](PipelinesAPI.md#V1OrganizationIdPipelinesPipelineIdGet) | **Get** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**V1OrganizationIdPipelinesPipelineIdPatch**](PipelinesAPI.md#V1OrganizationIdPipelinesPipelineIdPatch) | **Patch** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**V2OrganizationIdPipelineSummaryGet**](PipelinesAPI.md#V2OrganizationIdPipelineSummaryGet) | **Get** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**V2OrganizationIdPipelinesGet**](PipelinesAPI.md#V2OrganizationIdPipelinesGet) | **Get** /v2/{organization_id}/pipelines | List pipelines
[**V2OrganizationIdPipelinesPipelineIdDelete**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdDelete) | **Delete** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**V2OrganizationIdPipelinesPipelineIdGet**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdGet) | **Get** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**V2OrganizationIdPipelinesPipelineIdPatch**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdPatch) | **Patch** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**V2OrganizationIdPipelinesPipelineIdStatusGet**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdStatusGet) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet**](PipelinesAPI.md#V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**V2OrganizationIdPipelinesPost**](PipelinesAPI.md#V2OrganizationIdPipelinesPost) | **Post** /v2/{organization_id}/pipelines | Create pipeline
[**V2OrganizationIdPipelinesStatusesGet**](PipelinesAPI.md#V2OrganizationIdPipelinesStatusesGet) | **Get** /v2/{organization_id}/pipelines/statuses | Get pipeline status



## V1OrganizationIdPipelinesGet

> ModelsPipelineList V1OrganizationIdPipelinesGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List pipelines



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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V1OrganizationIdPipelinesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V1OrganizationIdPipelinesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdPipelinesGet`: ModelsPipelineList
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V1OrganizationIdPipelinesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdPipelinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdPipelinesPipelineIdDelete

> string V1OrganizationIdPipelinesPipelineIdDelete(ctx, organizationId, pipelineId).Execute()

Delete pipeline



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
	pipelineId := "pipelineId_example" // string | Pipeline ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V1OrganizationIdPipelinesPipelineIdDelete(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdPipelinesPipelineIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdPipelinesPipelineIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdPipelinesPipelineIdGet

> ModelsPipeline V1OrganizationIdPipelinesPipelineIdGet(ctx, organizationId, pipelineId).Execute()

Get pipeline



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
	pipelineId := "pipelineId_example" // string | Pipeline ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V1OrganizationIdPipelinesPipelineIdGet(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdPipelinesPipelineIdGet`: ModelsPipeline
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdPipelinesPipelineIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdPipelinesPipelineIdPatch

> ModelsPipeline V1OrganizationIdPipelinesPipelineIdPatch(ctx, organizationId, pipelineId).RoutesUpdatePipelineRequest(routesUpdatePipelineRequest).Execute()

Update pipeline



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
	pipelineId := "pipelineId_example" // string | Pipeline ID
	routesUpdatePipelineRequest := *openapiclient.NewRoutesUpdatePipelineRequest("Name_example") // RoutesUpdatePipelineRequest | Request body for updating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V1OrganizationIdPipelinesPipelineIdPatch(context.Background(), organizationId, pipelineId).RoutesUpdatePipelineRequest(routesUpdatePipelineRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdPipelinesPipelineIdPatch`: ModelsPipeline
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V1OrganizationIdPipelinesPipelineIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdPipelinesPipelineIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesUpdatePipelineRequest** | [**RoutesUpdatePipelineRequest**](RoutesUpdatePipelineRequest.md) | Request body for updating a pipeline | 

### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelineSummaryGet

> RoutesV2GetOrganizationSummaryResponse V2OrganizationIdPipelineSummaryGet(ctx, organizationId).Start(start).End(end).Execute()

Get status of all pipelines for an organization



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
	start := "start_example" // string | ISO3339 start time, default 24 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelineSummaryGet(context.Background(), organizationId).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelineSummaryGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelineSummaryGet`: RoutesV2GetOrganizationSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelineSummaryGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelineSummaryGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **start** | **string** | ISO3339 start time, default 24 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 

### Return type

[**RoutesV2GetOrganizationSummaryResponse**](RoutesV2GetOrganizationSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesGet

> ModelsPipelineList V2OrganizationIdPipelinesGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List pipelines



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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesGet`: ModelsPipelineList
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdDelete

> string V2OrganizationIdPipelinesPipelineIdDelete(ctx, organizationId, pipelineId).Execute()

Delete pipeline



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
	pipelineId := "pipelineId_example" // string | Pipeline ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdDelete(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdGet

> ModelsPipelineConfigV2 V2OrganizationIdPipelinesPipelineIdGet(ctx, organizationId, pipelineId).Execute()

Get pipeline configuration



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
	pipelineId := "pipelineId_example" // string | Pipeline ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdGet(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdGet`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet

> ModelsPipelineNodeMetrics V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(ctx, organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

Get pipeline node metrics



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
	pipelineId := "pipelineId_example" // string | Pipeline ID
	nodeId := "nodeId_example" // string | Node ID
	metric := "metric_example" // string | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default 15m (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(context.Background(), organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet`: ModelsPipelineNodeMetrics
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 
**nodeId** | **string** | Node ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdNodeIdMetricsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **metric** | **string** | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records) | 
 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **resolution** | **string** | Resolution of the data, default 15m | 

### Return type

[**ModelsPipelineNodeMetrics**](ModelsPipelineNodeMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdPatch

> ModelsPipelineConfigV2 V2OrganizationIdPipelinesPipelineIdPatch(ctx, organizationId, pipelineId).RoutesV2UpdatePipelineRequest(routesV2UpdatePipelineRequest).Execute()

Update pipeline



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
	pipelineId := "pipelineId_example" // string | Pipeline ID
	routesV2UpdatePipelineRequest := *openapiclient.NewRoutesV2UpdatePipelineRequest([]openapiclient.RoutesV2PipelineRequestEdge{*openapiclient.NewRoutesV2PipelineRequestEdge("FromNodeInstanceId_example", "ToNodeInstanceId_example")}, false, "Name_example", []openapiclient.RoutesV2PipelineRequestNode{*openapiclient.NewRoutesV2PipelineRequestNode("ComponentId_example", "ComponentType_example", false)}) // RoutesV2UpdatePipelineRequest | Request body for updating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdPatch(context.Background(), organizationId, pipelineId).RoutesV2UpdatePipelineRequest(routesV2UpdatePipelineRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdPatch`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdatePipelineRequest** | [**RoutesV2UpdatePipelineRequest**](RoutesV2UpdatePipelineRequest.md) | Request body for updating a pipeline | 

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdStatusGet

> ModelsPipelineStatus V2OrganizationIdPipelinesPipelineIdStatusGet(ctx, organizationId, pipelineId).Metrics(metrics).Start(start).End(end).Execute()

Get pipeline status



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
	pipelineId := "pipelineId_example" // string | Pipeline ID
	metrics := []string{"Inner_example"} // []string | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
	start := "start_example" // string | ISO3339 start time, default 24 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusGet(context.Background(), organizationId, pipelineId).Metrics(metrics).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdStatusGet`: ModelsPipelineStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdStatusGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **metrics** | **[]string** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | 
 **start** | **string** | ISO3339 start time, default 24 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 

### Return type

[**ModelsPipelineStatus**](ModelsPipelineStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet

> ModelsPipelineNodeStatus V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(ctx, organizationId, pipelineId, nodeId).Metrics(metrics).Start(start).End(end).Execute()

Get pipeline node status



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
	pipelineId := "pipelineId_example" // string | Pipeline ID
	nodeId := "nodeId_example" // string | Node ID
	metrics := []string{"Inner_example"} // []string | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
	start := "start_example" // string | ISO3339 start time, default 24 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(context.Background(), organizationId, pipelineId, nodeId).Metrics(metrics).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet`: ModelsPipelineNodeStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPipelineIdStatusNodeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 
**nodeId** | **string** | Node ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPipelineIdStatusNodeIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **metrics** | **[]string** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | 
 **start** | **string** | ISO3339 start time, default 24 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 

### Return type

[**ModelsPipelineNodeStatus**](ModelsPipelineNodeStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesPost

> ModelsPipelineConfigV2 V2OrganizationIdPipelinesPost(ctx, organizationId).RoutesV2CreatePipelineRequest(routesV2CreatePipelineRequest).Execute()

Create pipeline



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
	routesV2CreatePipelineRequest := *openapiclient.NewRoutesV2CreatePipelineRequest([]openapiclient.RoutesV2PipelineRequestEdge{*openapiclient.NewRoutesV2PipelineRequestEdge("FromNodeInstanceId_example", "ToNodeInstanceId_example")}, false, "Name_example", []openapiclient.RoutesV2PipelineRequestNode{*openapiclient.NewRoutesV2PipelineRequestNode("ComponentId_example", "ComponentType_example", false)}) // RoutesV2CreatePipelineRequest | Request body for creating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesPost(context.Background(), organizationId).RoutesV2CreatePipelineRequest(routesV2CreatePipelineRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesPost`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreatePipelineRequest** | [**RoutesV2CreatePipelineRequest**](RoutesV2CreatePipelineRequest.md) | Request body for creating a pipeline | 

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdPipelinesStatusesGet

> []RoutesV2PipelineWithStatus V2OrganizationIdPipelinesStatusesGet(ctx, organizationId).Limit(limit).Offset(offset).Start(start).End(end).Execute()

Get pipeline status



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
	limit := int32(56) // int32 | Maximum number of pipelines to return (default is 10) (optional)
	offset := int32(56) // int32 | Offset for pagination (default is 0) (optional)
	start := "start_example" // string | Start time (RFC3339 format) for status metrics (default: 24 hours ago) (optional)
	end := "end_example" // string | End time (RFC3339 format) for status metrics (default: now) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.V2OrganizationIdPipelinesStatusesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.V2OrganizationIdPipelinesStatusesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdPipelinesStatusesGet`: []RoutesV2PipelineWithStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.V2OrganizationIdPipelinesStatusesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdPipelinesStatusesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Maximum number of pipelines to return (default is 10) | 
 **offset** | **int32** | Offset for pagination (default is 0) | 
 **start** | **string** | Start time (RFC3339 format) for status metrics (default: 24 hours ago) | 
 **end** | **string** | End time (RFC3339 format) for status metrics (default: now) | 

### Return type

[**[]RoutesV2PipelineWithStatus**](RoutesV2PipelineWithStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

