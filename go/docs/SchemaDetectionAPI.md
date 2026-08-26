# \SchemaDetectionAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetOrganizationSchemaTrackingSummary**](SchemaDetectionAPI.md#GetOrganizationSchemaTrackingSummary) | **Get** /v3/{organization_id}/schema_detection/summary | Schema tracking summary
[**ListOrganizationPipelinesWithSchema**](SchemaDetectionAPI.md#ListOrganizationPipelinesWithSchema) | **Get** /v3/{organization_id}/schema_detection/pipelines | List pipelines with tracked schema
[**ListOrganizationSchemaChangeEvents**](SchemaDetectionAPI.md#ListOrganizationSchemaChangeEvents) | **Get** /v3/{organization_id}/schema_detection/events | List organization schema change events



## GetOrganizationSchemaTrackingSummary

> ModelsSchemaTrackingSummary GetOrganizationSchemaTrackingSummary(ctx, organizationId).Execute()

Schema tracking summary



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
	resp, r, err := apiClient.SchemaDetectionAPI.GetOrganizationSchemaTrackingSummary(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SchemaDetectionAPI.GetOrganizationSchemaTrackingSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationSchemaTrackingSummary`: ModelsSchemaTrackingSummary
	fmt.Fprintf(os.Stdout, "Response from `SchemaDetectionAPI.GetOrganizationSchemaTrackingSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationSchemaTrackingSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModelsSchemaTrackingSummary**](ModelsSchemaTrackingSummary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrganizationPipelinesWithSchema

> []ModelsPipelineWithSchemaTracked ListOrganizationPipelinesWithSchema(ctx, organizationId).Execute()

List pipelines with tracked schema



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
	resp, r, err := apiClient.SchemaDetectionAPI.ListOrganizationPipelinesWithSchema(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SchemaDetectionAPI.ListOrganizationPipelinesWithSchema``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationPipelinesWithSchema`: []ModelsPipelineWithSchemaTracked
	fmt.Fprintf(os.Stdout, "Response from `SchemaDetectionAPI.ListOrganizationPipelinesWithSchema`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationPipelinesWithSchemaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]ModelsPipelineWithSchemaTracked**](ModelsPipelineWithSchemaTracked.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrganizationSchemaChangeEvents

> ModelsSchemaHistoryList ListOrganizationSchemaChangeEvents(ctx, organizationId).Limit(limit).Offset(offset).From(from).Execute()

List organization schema change events



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
	limit := int32(56) // int32 | Page size (default 10) (optional)
	offset := int32(56) // int32 | Row offset for pagination (default 0) (optional)
	from := "from_example" // string | Only events strictly after this RFC3339 timestamp (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SchemaDetectionAPI.ListOrganizationSchemaChangeEvents(context.Background(), organizationId).Limit(limit).Offset(offset).From(from).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SchemaDetectionAPI.ListOrganizationSchemaChangeEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationSchemaChangeEvents`: ModelsSchemaHistoryList
	fmt.Fprintf(os.Stdout, "Response from `SchemaDetectionAPI.ListOrganizationSchemaChangeEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationSchemaChangeEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Page size (default 10) | 
 **offset** | **int32** | Row offset for pagination (default 0) | 
 **from** | **string** | Only events strictly after this RFC3339 timestamp | 

### Return type

[**ModelsSchemaHistoryList**](ModelsSchemaHistoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

