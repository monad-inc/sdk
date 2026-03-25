# \OutputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetOutputTypeMeta**](OutputsAPI.md#GetOutputTypeMeta) | **Get** /v1/outputs/{output_type_id} | Get output config meta
[**ListOutputTypes**](OutputsAPI.md#ListOutputTypes) | **Get** /v1/outputs | List outputs



## GetOutputTypeMeta

> ModelsConnectorMeta GetOutputTypeMeta(ctx, outputTypeId).Execute()

Get output config meta



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
	outputTypeId := "outputTypeId_example" // string | Output type ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OutputsAPI.GetOutputTypeMeta(context.Background(), outputTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OutputsAPI.GetOutputTypeMeta``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOutputTypeMeta`: ModelsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `OutputsAPI.GetOutputTypeMeta`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**outputTypeId** | **string** | Output type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutputTypeMetaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModelsConnectorMeta**](ModelsConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOutputTypes

> []OutputsConnectorMeta ListOutputTypes(ctx).Execute()

List outputs



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
	resp, r, err := apiClient.OutputsAPI.ListOutputTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OutputsAPI.ListOutputTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOutputTypes`: []OutputsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `OutputsAPI.ListOutputTypes`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListOutputTypesRequest struct via the builder pattern


### Return type

[**[]OutputsConnectorMeta**](OutputsConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

