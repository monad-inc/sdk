# \LogsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdLogsApiGet**](LogsAPI.md#V1OrganizationIdLogsApiGet) | **Get** /v1/{organization_id}/logs/api | Stream organization api logs
[**V1OrganizationIdLogsGet**](LogsAPI.md#V1OrganizationIdLogsGet) | **Get** /v1/{organization_id}/logs | Stream organization logs
[**V1OrganizationIdLogsPipelinesGet**](LogsAPI.md#V1OrganizationIdLogsPipelinesGet) | **Get** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**V1OrganizationIdLogsPipelinesPipelineIdGet**](LogsAPI.md#V1OrganizationIdLogsPipelinesPipelineIdGet) | **Get** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs
[**V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet**](LogsAPI.md#V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet) | **Get** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs



## V1OrganizationIdLogsApiGet

> string V1OrganizationIdLogsApiGet(ctx, organizationId).Since(since).Execute()

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
	resp, r, err := apiClient.LogsAPI.V1OrganizationIdLogsApiGet(context.Background(), organizationId).Since(since).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.V1OrganizationIdLogsApiGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdLogsApiGet`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.V1OrganizationIdLogsApiGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdLogsApiGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdLogsGet

> string V1OrganizationIdLogsGet(ctx, organizationId).Since(since).Last(last).Execute()

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
	resp, r, err := apiClient.LogsAPI.V1OrganizationIdLogsGet(context.Background(), organizationId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.V1OrganizationIdLogsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdLogsGet`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.V1OrganizationIdLogsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdLogsGetRequest struct via the builder pattern


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
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdLogsPipelinesGet

> string V1OrganizationIdLogsPipelinesGet(ctx, organizationId).Since(since).Execute()

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
	resp, r, err := apiClient.LogsAPI.V1OrganizationIdLogsPipelinesGet(context.Background(), organizationId).Since(since).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.V1OrganizationIdLogsPipelinesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdLogsPipelinesGet`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.V1OrganizationIdLogsPipelinesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdLogsPipelinesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **since** | **string** | RFC3339 timestamp to start streaming from | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdLogsPipelinesPipelineIdGet

> string V1OrganizationIdLogsPipelinesPipelineIdGet(ctx, organizationId, pipelineId).Since(since).Last(last).Execute()

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
	resp, r, err := apiClient.LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdGet(context.Background(), organizationId, pipelineId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdLogsPipelinesPipelineIdGet`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**pipelineId** | **string** | Pipeline ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdLogsPipelinesPipelineIdGetRequest struct via the builder pattern


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
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet

> string V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(ctx, organizationId, pipelineId, nodeId).Since(since).Last(last).Execute()

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
	resp, r, err := apiClient.LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(context.Background(), organizationId, pipelineId, nodeId).Since(since).Last(last).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet`: string
	fmt.Fprintf(os.Stdout, "Response from `LogsAPI.V1OrganizationIdLogsPipelinesPipelineIdNodeIdGet`: %v\n", resp)
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

Other parameters are passed through a pointer to a apiV1OrganizationIdLogsPipelinesPipelineIdNodeIdGetRequest struct via the builder pattern


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
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

