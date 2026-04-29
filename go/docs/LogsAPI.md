# \LogsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StreamNodeData**](LogsAPI.md#StreamNodeData) | **Get** /v1/{organization_id}/data/{node_id} | Stream node data
[**StreamNodeLogs**](LogsAPI.md#StreamNodeLogs) | **Get** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs
[**StreamOrganizationAPILogs**](LogsAPI.md#StreamOrganizationAPILogs) | **Get** /v1/{organization_id}/logs/api | Stream organization api logs
[**StreamOrganizationLogs**](LogsAPI.md#StreamOrganizationLogs) | **Get** /v1/{organization_id}/logs | Stream organization logs
[**StreamOrganizationPipelinesLogs**](LogsAPI.md#StreamOrganizationPipelinesLogs) | **Get** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**StreamPipelineLogs**](LogsAPI.md#StreamPipelineLogs) | **Get** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs



## StreamNodeData

> string StreamNodeData(ctx, organizationId, nodeId).Execute()

Stream node data



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
	nodeId := "nodeId_example" // string | Node ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamNodeData(context.Background(), organizationId, nodeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamNodeData``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamNodeData`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamNodeData`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**nodeId** | **string** | Node ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamNodeDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamNodeLogs

> string StreamNodeLogs(ctx, organizationId, pipelineId, nodeId).Since(since).Last(last).Execute()

Stream node logs



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
	since := "since_example" // string | RFC3339 timestamp to start streaming from (optional)
	last := "last_example" // string | Duration to start streaming from (e.g., '5h' or '30m') (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamNodeLogs(context.Background(), organizationId, pipelineId, nodeId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamNodeLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamNodeLogs`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamNodeLogs`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiStreamNodeLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **since** | **string** | RFC3339 timestamp to start streaming from | 
 **last** | **string** | Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamOrganizationAPILogs

> string StreamOrganizationAPILogs(ctx, organizationId).Since(since).Execute()

Stream organization api logs



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamOrganizationAPILogs(context.Background(), organizationId).Since(since).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamOrganizationAPILogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamOrganizationAPILogs`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamOrganizationAPILogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamOrganizationAPILogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamOrganizationLogs

> string StreamOrganizationLogs(ctx, organizationId).Since(since).Last(last).Execute()

Stream organization logs



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
	last := "last_example" // string | Duration to start streaming from (e.g., '5h' or '30m') (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamOrganizationLogs(context.Background(), organizationId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamOrganizationLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamOrganizationLogs`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamOrganizationLogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamOrganizationLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 
 **last** | **string** | Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamOrganizationPipelinesLogs

> string StreamOrganizationPipelinesLogs(ctx, organizationId).Since(since).Execute()

Stream organization pipeline logs



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamOrganizationPipelinesLogs(context.Background(), organizationId).Since(since).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamOrganizationPipelinesLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamOrganizationPipelinesLogs`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamOrganizationPipelinesLogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamOrganizationPipelinesLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StreamPipelineLogs

> string StreamPipelineLogs(ctx, organizationId, pipelineId).Since(since).Last(last).Execute()

Stream pipeline logs



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
	since := "since_example" // string | RFC3339 timestamp to start streaming from (optional)
	last := "last_example" // string | Duration to start streaming from (e.g., '5h' or '30m') (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LogsAPI.StreamPipelineLogs(context.Background(), organizationId, pipelineId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.StreamPipelineLogs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `StreamPipelineLogs`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.StreamPipelineLogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiStreamPipelineLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **since** | **string** | RFC3339 timestamp to start streaming from | 
 **last** | **string** | Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

