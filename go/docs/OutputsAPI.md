# \OutputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OutputsGet**](OutputsAPI.md#V1OutputsGet) | **Get** /v1/outputs | List outputs
[**V1OutputsOutputTypeIdGet**](OutputsAPI.md#V1OutputsOutputTypeIdGet) | **Get** /v1/outputs/{output_type_id} | Get output config meta



## V1OutputsGet

> []OutputsConnectorMeta V1OutputsGet(ctx).Execute()

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
	resp, r, err := apiClient.OutputsAPI.V1OutputsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OutputsAPI.V1OutputsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OutputsGet`: []OutputsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `OutputsAPI.V1OutputsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1OutputsGetRequest struct via the builder pattern


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


## V1OutputsOutputTypeIdGet

> ModelsConnectorMeta V1OutputsOutputTypeIdGet(ctx, outputTypeId).Execute()

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
	resp, r, err := apiClient.OutputsAPI.V1OutputsOutputTypeIdGet(context.Background(), outputTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OutputsAPI.V1OutputsOutputTypeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OutputsOutputTypeIdGet`: ModelsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `OutputsAPI.V1OutputsOutputTypeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**outputTypeId** | **string** | Output type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OutputsOutputTypeIdGetRequest struct via the builder pattern


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

