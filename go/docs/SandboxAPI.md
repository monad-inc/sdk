# \SandboxAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2SandboxTemplateGet**](SandboxAPI.md#V2SandboxTemplateGet) | **Get** /v2/sandbox/template | List available templates
[**V2SandboxTemplatePost**](SandboxAPI.md#V2SandboxTemplatePost) | **Post** /v2/sandbox/template | Generate sample record
[**V2SandboxTransformPost**](SandboxAPI.md#V2SandboxTransformPost) | **Post** /v2/sandbox/transform | Apply transformation to record



## V2SandboxTemplateGet

> RoutesV2ListTemplatesResponse V2SandboxTemplateGet(ctx).Body(body).Execute()

List available templates



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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SandboxAPI.V2SandboxTemplateGet(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SandboxAPI.V2SandboxTemplateGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2SandboxTemplateGet`: RoutesV2ListTemplatesResponse
	fmt.Fprintf(os.Stdout, "Response from `SandboxAPI.V2SandboxTemplateGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2SandboxTemplateGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

[**RoutesV2ListTemplatesResponse**](RoutesV2ListTemplatesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2SandboxTemplatePost

> RoutesV2GenerateRecordResponse V2SandboxTemplatePost(ctx).RoutesV2GenerateRecordRequest(routesV2GenerateRecordRequest).Execute()

Generate sample record



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
	routesV2GenerateRecordRequest := *openapiclient.NewRoutesV2GenerateRecordRequest() // RoutesV2GenerateRecordRequest | Record generation parameters

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SandboxAPI.V2SandboxTemplatePost(context.Background()).RoutesV2GenerateRecordRequest(routesV2GenerateRecordRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SandboxAPI.V2SandboxTemplatePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2SandboxTemplatePost`: RoutesV2GenerateRecordResponse
	fmt.Fprintf(os.Stdout, "Response from `SandboxAPI.V2SandboxTemplatePost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2SandboxTemplatePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2GenerateRecordRequest** | [**RoutesV2GenerateRecordRequest**](RoutesV2GenerateRecordRequest.md) | Record generation parameters | 

### Return type

[**RoutesV2GenerateRecordResponse**](RoutesV2GenerateRecordResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2SandboxTransformPost

> RoutesV2ApplyTransformationResponse V2SandboxTransformPost(ctx).RoutesV2ApplyTransformationRequest(routesV2ApplyTransformationRequest).Execute()

Apply transformation to record



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
	routesV2ApplyTransformationRequest := *openapiclient.NewRoutesV2ApplyTransformationRequest() // RoutesV2ApplyTransformationRequest | Transform configuration and record

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SandboxAPI.V2SandboxTransformPost(context.Background()).RoutesV2ApplyTransformationRequest(routesV2ApplyTransformationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SandboxAPI.V2SandboxTransformPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2SandboxTransformPost`: RoutesV2ApplyTransformationResponse
	fmt.Fprintf(os.Stdout, "Response from `SandboxAPI.V2SandboxTransformPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2SandboxTransformPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2ApplyTransformationRequest** | [**RoutesV2ApplyTransformationRequest**](RoutesV2ApplyTransformationRequest.md) | Transform configuration and record | 

### Return type

[**RoutesV2ApplyTransformationResponse**](RoutesV2ApplyTransformationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

