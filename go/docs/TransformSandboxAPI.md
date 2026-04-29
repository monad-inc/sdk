# \TransformSandboxAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApplyTransformation**](TransformSandboxAPI.md#ApplyTransformation) | **Post** /v2/{organization_id}/sandbox/transform | Apply transformation to record
[**ApplyTransformationV2**](TransformSandboxAPI.md#ApplyTransformationV2) | **Post** /v2/sandbox/transform | Apply transformation to record
[**GenerateRecord**](TransformSandboxAPI.md#GenerateRecord) | **Post** /v2/sandbox/template | Generate sample record
[**ListTemplates**](TransformSandboxAPI.md#ListTemplates) | **Get** /v2/sandbox/template | List available templates



## ApplyTransformation

> RoutesV2ApplyTransformationResponse ApplyTransformation(ctx, organizationId).ApplyTransformationV2Request(applyTransformationV2Request).Execute()

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
	organizationId := "organizationId_example" // string | Organization ID
	applyTransformationV2Request := openapiclient.ApplyTransformationV2_request{RoutesV2ApplyTransformationRequest: openapiclient.NewRoutesV2ApplyTransformationRequest()} // ApplyTransformationV2Request | Transform configuration and record

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformSandboxAPI.ApplyTransformation(context.Background(), organizationId).ApplyTransformationV2Request(applyTransformationV2Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformSandboxAPI.ApplyTransformation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyTransformation`: RoutesV2ApplyTransformationResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformSandboxAPI.ApplyTransformation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyTransformationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **applyTransformationV2Request** | [**ApplyTransformationV2Request**](ApplyTransformationV2Request.md) | Transform configuration and record | 

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


## ApplyTransformationV2

> RoutesV2ApplyTransformationResponse ApplyTransformationV2(ctx).ApplyTransformationV2Request(applyTransformationV2Request).Execute()

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
	applyTransformationV2Request := openapiclient.ApplyTransformationV2_request{RoutesV2ApplyTransformationRequest: openapiclient.NewRoutesV2ApplyTransformationRequest()} // ApplyTransformationV2Request | Transform configuration and record

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformSandboxAPI.ApplyTransformationV2(context.Background()).ApplyTransformationV2Request(applyTransformationV2Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformSandboxAPI.ApplyTransformationV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyTransformationV2`: RoutesV2ApplyTransformationResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformSandboxAPI.ApplyTransformationV2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApplyTransformationV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyTransformationV2Request** | [**ApplyTransformationV2Request**](ApplyTransformationV2Request.md) | Transform configuration and record | 

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


## GenerateRecord

> RoutesV2GenerateRecordResponse GenerateRecord(ctx).GenerateRecordRequest(generateRecordRequest).Execute()

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
	generateRecordRequest := openapiclient.GenerateRecord_request{RoutesV2GenerateRecordRequest: openapiclient.NewRoutesV2GenerateRecordRequest()} // GenerateRecordRequest | Record generation parameters

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformSandboxAPI.GenerateRecord(context.Background()).GenerateRecordRequest(generateRecordRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformSandboxAPI.GenerateRecord``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GenerateRecord`: RoutesV2GenerateRecordResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformSandboxAPI.GenerateRecord`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenerateRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateRecordRequest** | [**GenerateRecordRequest**](GenerateRecordRequest.md) | Record generation parameters | 

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


## ListTemplates

> RoutesV2ListTemplatesResponse ListTemplates(ctx).Body(body).Execute()

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
	resp, r, err := apiClient.TransformSandboxAPI.ListTemplates(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformSandboxAPI.ListTemplates``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTemplates`: RoutesV2ListTemplatesResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformSandboxAPI.ListTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTemplatesRequest struct via the builder pattern


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

