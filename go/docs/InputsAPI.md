# \InputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInputTypeMeta**](InputsAPI.md#GetInputTypeMeta) | **Get** /v1/inputs/{input_type_id} | Get input config meta
[**ListInputTypes**](InputsAPI.md#ListInputTypes) | **Get** /v1/inputs | List inputs



## GetInputTypeMeta

> ModelsConnectorMeta GetInputTypeMeta(ctx, inputTypeId).Execute()

Get input config meta



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
	inputTypeId := "inputTypeId_example" // string | Input type ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InputsAPI.GetInputTypeMeta(context.Background(), inputTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InputsAPI.GetInputTypeMeta``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInputTypeMeta`: ModelsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `InputsAPI.GetInputTypeMeta`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inputTypeId** | **string** | Input type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInputTypeMetaRequest struct via the builder pattern


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


## ListInputTypes

> []InputsConnectorMeta ListInputTypes(ctx).Execute()

List inputs



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
	resp, r, err := apiClient.InputsAPI.ListInputTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InputsAPI.ListInputTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListInputTypes`: []InputsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `InputsAPI.ListInputTypes`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListInputTypesRequest struct via the builder pattern


### Return type

[**[]InputsConnectorMeta**](InputsConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

