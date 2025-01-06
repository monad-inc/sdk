# \InputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1InputsGet**](InputsAPI.md#V1InputsGet) | **Get** /v1/inputs | List inputs
[**V1InputsInputTypeIdGet**](InputsAPI.md#V1InputsInputTypeIdGet) | **Get** /v1/inputs/{input_type_id} | Get input config meta



## V1InputsGet

> []InputsConnectorMeta V1InputsGet(ctx).Execute()

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
	resp, r, err := apiClient.InputsAPI.V1InputsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InputsAPI.V1InputsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1InputsGet`: []InputsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `InputsAPI.V1InputsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1InputsGetRequest struct via the builder pattern


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


## V1InputsInputTypeIdGet

> ModelsConnectorMeta V1InputsInputTypeIdGet(ctx, inputTypeId).Execute()

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
	resp, r, err := apiClient.InputsAPI.V1InputsInputTypeIdGet(context.Background(), inputTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InputsAPI.V1InputsInputTypeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1InputsInputTypeIdGet`: ModelsConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `InputsAPI.V1InputsInputTypeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inputTypeId** | **string** | Input type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InputsInputTypeIdGetRequest struct via the builder pattern


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

