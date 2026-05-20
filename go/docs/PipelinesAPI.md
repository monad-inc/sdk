# \PipelinesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePipeline**](PipelinesAPI.md#CreatePipeline) | **Post** /v2/{organization_id}/pipelines | Create pipeline
[**DeletePipeline**](PipelinesAPI.md#DeletePipeline) | **Delete** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**DeletePipelineV1**](PipelinesAPI.md#DeletePipelineV1) | **Delete** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**GetMetricsForPipelines**](PipelinesAPI.md#GetMetricsForPipelines) | **Get** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines
[**GetOrganizationSummary**](PipelinesAPI.md#GetOrganizationSummary) | **Get** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**GetPipeline**](PipelinesAPI.md#GetPipeline) | **Get** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**GetPipelineConfig**](PipelinesAPI.md#GetPipelineConfig) | **Get** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**GetPipelineEdgeConditionOperatorTypes**](PipelinesAPI.md#GetPipelineEdgeConditionOperatorTypes) | **Get** /v3/pipeline_edges/edge_condition_operator_types | Conditional types for edge conditions
[**GetPipelineEdgeConditionRules**](PipelinesAPI.md#GetPipelineEdgeConditionRules) | **Get** /v3/pipeline_edges/edge_condition_rules | Rules for edge conditions
[**GetPipelineMetrics**](PipelinesAPI.md#GetPipelineMetrics) | **Get** /v2/{organization_id}/metrics/pipelines/{pipeline_id} | Get pipeline metrics
[**GetPipelineNodeMetrics**](PipelinesAPI.md#GetPipelineNodeMetrics) | **Get** /v2/{organization_id}/metrics/pipelines/{pipeline_id}/{node_id} | Get pipeline node metrics
[**GetPipelineNodeMetricsV2**](PipelinesAPI.md#GetPipelineNodeMetricsV2) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**GetPipelineNodeStatus**](PipelinesAPI.md#GetPipelineNodeStatus) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**GetPipelineStatus**](PipelinesAPI.md#GetPipelineStatus) | **Get** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**GetPipelinesStatuses**](PipelinesAPI.md#GetPipelinesStatuses) | **Get** /v2/{organization_id}/pipelines/statuses | Get pipeline status
[**ListPipelines**](PipelinesAPI.md#ListPipelines) | **Get** /v2/{organization_id}/pipelines | List pipelines
[**ListPipelinesV1**](PipelinesAPI.md#ListPipelinesV1) | **Get** /v1/{organization_id}/pipelines | List pipelines
[**PurgePipeline**](PipelinesAPI.md#PurgePipeline) | **Post** /v3/{organization_id}/pipelines/{pipeline_id}/purge | Purge pipeline data
[**PurgePipelineNode**](PipelinesAPI.md#PurgePipelineNode) | **Post** /v3/{organization_id}/pipelines/{pipeline_id}/nodes/{node_id}/purge | Purge pipeline node data
[**TriggerPipeline**](PipelinesAPI.md#TriggerPipeline) | **Post** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually
[**UpdatePipeline**](PipelinesAPI.md#UpdatePipeline) | **Patch** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**UpdatePipelineEdge**](PipelinesAPI.md#UpdatePipelineEdge) | **Patch** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id} | Update pipeline edge
[**UpdatePipelineV1**](PipelinesAPI.md#UpdatePipelineV1) | **Patch** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline



## CreatePipeline

> ModelsPipelineConfigV2 CreatePipeline(ctx, organizationId).CreatePipelineRequest(createPipelineRequest).Execute()

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
	createPipelineRequest := openapiclient.CreatePipeline_request{RoutesV2CreatePipelineRequest: openapiclient.NewRoutesV2CreatePipelineRequest([]openapiclient.RoutesV2PipelineRequestEdge{*openapiclient.NewRoutesV2PipelineRequestEdge("FromNodeInstanceId_example", "ToNodeInstanceId_example")}, false, "Name_example", []openapiclient.RoutesV2PipelineRequestNode{*openapiclient.NewRoutesV2PipelineRequestNode("ComponentId_example", openapiclient.models.ComponentType("transform"), false)})} // CreatePipelineRequest | Request body for creating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.CreatePipeline(context.Background(), organizationId).CreatePipelineRequest(createPipelineRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.CreatePipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePipeline`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.CreatePipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreatePipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md) | Request body for creating a pipeline | 

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


## DeletePipeline

> string DeletePipeline(ctx, organizationId, pipelineId).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.DeletePipeline(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.DeletePipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeletePipeline`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.DeletePipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePipelineRequest struct via the builder pattern


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


## DeletePipelineV1

> string DeletePipelineV1(ctx, organizationId, pipelineId).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.DeletePipelineV1(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.DeletePipelineV1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeletePipelineV1`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.DeletePipelineV1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePipelineV1Request struct via the builder pattern


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


## GetMetricsForPipelines

> RoutesV2MetricsResponse GetMetricsForPipelines(ctx, organizationId).PipelineIds(pipelineIds).Resolution(resolution).Execute()

Get metrics for specific pipelines



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
	pipelineIds := "pipelineIds_example" // string | Comma-separated list of pipeline IDs
	resolution := "resolution_example" // string | Resolution for metrics (default: 5m) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetMetricsForPipelines(context.Background(), organizationId).PipelineIds(pipelineIds).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetMetricsForPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMetricsForPipelines`: RoutesV2MetricsResponse
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetMetricsForPipelines`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMetricsForPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pipelineIds** | **string** | Comma-separated list of pipeline IDs | 
 **resolution** | **string** | Resolution for metrics (default: 5m) | 

### Return type

[**RoutesV2MetricsResponse**](RoutesV2MetricsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOrganizationSummary

> RoutesV2GetOrganizationSummaryResponse GetOrganizationSummary(ctx, organizationId).Start(start).End(end).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.GetOrganizationSummary(context.Background(), organizationId).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetOrganizationSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationSummary`: RoutesV2GetOrganizationSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetOrganizationSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationSummaryRequest struct via the builder pattern


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


## GetPipeline

> ModelsPipeline GetPipeline(ctx, organizationId, pipelineId).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.GetPipeline(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipeline`: ModelsPipeline
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineRequest struct via the builder pattern


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


## GetPipelineConfig

> ModelsPipelineConfigV2 GetPipelineConfig(ctx, organizationId, pipelineId).IncludeStatus(includeStatus).Execute()

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
	includeStatus := true // bool | Include the status of the pipeline nodes (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineConfig(context.Background(), organizationId, pipelineId).IncludeStatus(includeStatus).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineConfig`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **includeStatus** | **bool** | Include the status of the pipeline nodes | 

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


## GetPipelineEdgeConditionOperatorTypes

> string GetPipelineEdgeConditionOperatorTypes(ctx).Execute()

Conditional types for edge conditions



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineEdgeConditionOperatorTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineEdgeConditionOperatorTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineEdgeConditionOperatorTypes`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineEdgeConditionOperatorTypes`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineEdgeConditionOperatorTypesRequest struct via the builder pattern


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


## GetPipelineEdgeConditionRules

> string GetPipelineEdgeConditionRules(ctx).Execute()

Rules for edge conditions



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineEdgeConditionRules(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineEdgeConditionRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineEdgeConditionRules`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineEdgeConditionRules`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineEdgeConditionRulesRequest struct via the builder pattern


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


## GetPipelineMetrics

> ModelsPipelineMetrics GetPipelineMetrics(ctx, organizationId, pipelineId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

Get pipeline metrics



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
	metric := "metric_example" // string | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default determined by time window (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineMetrics(context.Background(), organizationId, pipelineId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineMetrics`: ModelsPipelineMetrics
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineMetrics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineMetricsRequest struct via the builder pattern


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


## GetPipelineNodeMetrics

> ModelsPipelineMetrics GetPipelineNodeMetrics(ctx, organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

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
	metric := "metric_example" // string | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default determined by time window (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineNodeMetrics(context.Background(), organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineNodeMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineNodeMetrics`: ModelsPipelineMetrics
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineNodeMetrics`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetPipelineNodeMetricsRequest struct via the builder pattern


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


## GetPipelineNodeMetricsV2

> ModelsPipelineMetrics GetPipelineNodeMetricsV2(ctx, organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()

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
	metric := "metric_example" // string | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	resolution := "resolution_example" // string | Resolution of the data, default determined by time window (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineNodeMetricsV2(context.Background(), organizationId, pipelineId, nodeId).Metric(metric).Start(start).End(end).Resolution(resolution).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineNodeMetricsV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineNodeMetricsV2`: ModelsPipelineMetrics
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineNodeMetricsV2`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetPipelineNodeMetricsV2Request struct via the builder pattern


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


## GetPipelineNodeStatus

> ModelsPipelineNodeStatus GetPipelineNodeStatus(ctx, organizationId, pipelineId, nodeId).Metrics(metrics).Start(start).End(end).Execute()

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
	metrics := []string{"Inner_example"} // []string | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
	start := "start_example" // string | ISO3339 start time, default 24 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineNodeStatus(context.Background(), organizationId, pipelineId, nodeId).Metrics(metrics).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineNodeStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineNodeStatus`: ModelsPipelineNodeStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineNodeStatus`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiGetPipelineNodeStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **metrics** | **[]string** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | 
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


## GetPipelineStatus

> ModelsPipelineStatus GetPipelineStatus(ctx, organizationId, pipelineId).Metrics(metrics).Start(start).End(end).Execute()

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
	metrics := []string{"Inner_example"} // []string | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
	start := "start_example" // string | ISO3339 start time, default 24 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.GetPipelineStatus(context.Background(), organizationId, pipelineId).Metrics(metrics).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelineStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelineStatus`: ModelsPipelineStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelineStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelineStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **metrics** | **[]string** | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | 
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


## GetPipelinesStatuses

> []RoutesV2PipelineWithStatus GetPipelinesStatuses(ctx, organizationId).Limit(limit).Offset(offset).Start(start).End(end).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.GetPipelinesStatuses(context.Background(), organizationId).Limit(limit).Offset(offset).Start(start).End(end).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.GetPipelinesStatuses``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPipelinesStatuses`: []RoutesV2PipelineWithStatus
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.GetPipelinesStatuses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPipelinesStatusesRequest struct via the builder pattern


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


## ListPipelines

> ModelsPipelineList ListPipelines(ctx, organizationId).Limit(limit).Offset(offset).IncludeStatus(includeStatus).Execute()

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
	includeStatus := true // bool | Include the status of the pipeline nodes (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.ListPipelines(context.Background(), organizationId).Limit(limit).Offset(offset).IncludeStatus(includeStatus).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.ListPipelines``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPipelines`: ModelsPipelineList
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.ListPipelines`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListPipelinesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 
 **includeStatus** | **bool** | Include the status of the pipeline nodes | 

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


## ListPipelinesV1

> ModelsPipelineList ListPipelinesV1(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.PipelinesAPI.ListPipelinesV1(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.ListPipelinesV1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPipelinesV1`: ModelsPipelineList
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.ListPipelinesV1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListPipelinesV1Request struct via the builder pattern


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


## PurgePipeline

> ModelsPipelinePurgeResponse PurgePipeline(ctx, organizationId, pipelineId).Execute()

Purge pipeline data



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
	resp, r, err := apiClient.PipelinesAPI.PurgePipeline(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.PurgePipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PurgePipeline`: ModelsPipelinePurgeResponse
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.PurgePipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPurgePipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsPipelinePurgeResponse**](ModelsPipelinePurgeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PurgePipelineNode

> ModelsPipelinePurgeResponse PurgePipelineNode(ctx, organizationId, pipelineId, nodeId).Execute()

Purge pipeline node data



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.PurgePipelineNode(context.Background(), organizationId, pipelineId, nodeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.PurgePipelineNode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PurgePipelineNode`: ModelsPipelinePurgeResponse
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.PurgePipelineNode`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiPurgePipelineNodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**ModelsPipelinePurgeResponse**](ModelsPipelinePurgeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TriggerPipeline

> string TriggerPipeline(ctx, organizationId, pipelineId).Execute()

Trigger pipeline manually



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
	resp, r, err := apiClient.PipelinesAPI.TriggerPipeline(context.Background(), organizationId, pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.TriggerPipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TriggerPipeline`: string
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.TriggerPipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiTriggerPipelineRequest struct via the builder pattern


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


## UpdatePipeline

> ModelsPipelineConfigV2 UpdatePipeline(ctx, organizationId, pipelineId).UpdatePipelineRequest(updatePipelineRequest).Execute()

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
	updatePipelineRequest := openapiclient.UpdatePipeline_request{RoutesV2UpdatePipelineRequest: openapiclient.NewRoutesV2UpdatePipelineRequest([]openapiclient.RoutesV2PipelineRequestEdge{*openapiclient.NewRoutesV2PipelineRequestEdge("FromNodeInstanceId_example", "ToNodeInstanceId_example")}, false, "Name_example", []openapiclient.RoutesV2PipelineRequestNode{*openapiclient.NewRoutesV2PipelineRequestNode("ComponentId_example", openapiclient.models.ComponentType("transform"), false)})} // UpdatePipelineRequest | Request body for updating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.UpdatePipeline(context.Background(), organizationId, pipelineId).UpdatePipelineRequest(updatePipelineRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.UpdatePipeline``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePipeline`: ModelsPipelineConfigV2
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.UpdatePipeline`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePipelineRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md) | Request body for updating a pipeline | 

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


## UpdatePipelineEdge

> UpdatePipelineEdge(ctx, organizationId, pipelineId, edgeId).UpdatePipelineEdgeRequest(updatePipelineEdgeRequest).Execute()

Update pipeline edge



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
	edgeId := "edgeId_example" // string | Edge ID
	updatePipelineEdgeRequest := openapiclient.UpdatePipelineEdge_request{RoutesV2PatchPipelineEdgeRequest: openapiclient.NewRoutesV2PatchPipelineEdgeRequest()} // UpdatePipelineEdgeRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.PipelinesAPI.UpdatePipelineEdge(context.Background(), organizationId, pipelineId, edgeId).UpdatePipelineEdgeRequest(updatePipelineEdgeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.UpdatePipelineEdge``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 
**edgeId** | **string** | Edge ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePipelineEdgeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **updatePipelineEdgeRequest** | [**UpdatePipelineEdgeRequest**](UpdatePipelineEdgeRequest.md) | Request body | 

### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePipelineV1

> ModelsPipeline UpdatePipelineV1(ctx, organizationId, pipelineId).UpdatePipelineV1Request(updatePipelineV1Request).Execute()

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
	updatePipelineV1Request := openapiclient.UpdatePipelineV1_request{RoutesUpdatePipelineRequest: openapiclient.NewRoutesUpdatePipelineRequest("Name_example")} // UpdatePipelineV1Request | Request body for updating a pipeline

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PipelinesAPI.UpdatePipelineV1(context.Background(), organizationId, pipelineId).UpdatePipelineV1Request(updatePipelineV1Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PipelinesAPI.UpdatePipelineV1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePipelineV1`: ModelsPipeline
	fmt.Fprintf(os.Stdout, "Response from `PipelinesAPI.UpdatePipelineV1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePipelineV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updatePipelineV1Request** | [**UpdatePipelineV1Request**](UpdatePipelineV1Request.md) | Request body for updating a pipeline | 

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

