# \OrganizationOutputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateOutput**](OrganizationOutputsAPI.md#CreateOutput) | **Post** /v2/{organization_id}/outputs | Create output
[**DeleteOrganizationOutput**](OrganizationOutputsAPI.md#DeleteOrganizationOutput) | **Delete** /v1/{organization_id}/outputs/{output_id} | Delete output
[**GetOrganizationOutput**](OrganizationOutputsAPI.md#GetOrganizationOutput) | **Get** /v1/{organization_id}/outputs/{output_id} | Get a output
[**ListOrganizationOutputs**](OrganizationOutputsAPI.md#ListOrganizationOutputs) | **Get** /v1/{organization_id}/outputs | List configured outputs in organization
[**ReplaceOutput**](OrganizationOutputsAPI.md#ReplaceOutput) | **Put** /v2/{organization_id}/outputs/{output_id} | Replace output
[**TestOutputConnection**](OrganizationOutputsAPI.md#TestOutputConnection) | **Post** /v2/{organization_id}/outputs/test-connection | Test output connection
[**UpdateOutput**](OrganizationOutputsAPI.md#UpdateOutput) | **Patch** /v2/{organization_id}/outputs/{output_id} | Update output



## CreateOutput

> ModelsOutput CreateOutput(ctx, organizationId).CreateOutputRequest(createOutputRequest).TestConnection(testConnection).Execute()

Create output



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
	createOutputRequest := openapiclient.CreateOutput_request{RoutesV2CreateOutputRequest: openapiclient.NewRoutesV2CreateOutputRequest()} // CreateOutputRequest | Output configuration
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.CreateOutput(context.Background(), organizationId).CreateOutputRequest(createOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.CreateOutput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateOutput`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.CreateOutput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateOutputRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createOutputRequest** | [**CreateOutputRequest**](CreateOutputRequest.md) | Output configuration | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteOrganizationOutput

> string DeleteOrganizationOutput(ctx, organizationId, outputId).Execute()

Delete output



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
	outputId := "outputId_example" // string | Output ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.DeleteOrganizationOutput(context.Background(), organizationId, outputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.DeleteOrganizationOutput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteOrganizationOutput`: string
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.DeleteOrganizationOutput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOrganizationOutputRequest struct via the builder pattern


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


## GetOrganizationOutput

> RoutesGetOutputResponse GetOrganizationOutput(ctx, organizationId, outputId).Execute()

Get a output



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
	outputId := "outputId_example" // string | Output ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.GetOrganizationOutput(context.Background(), organizationId, outputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.GetOrganizationOutput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationOutput`: RoutesGetOutputResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.GetOrganizationOutput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationOutputRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoutesGetOutputResponse**](RoutesGetOutputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrganizationOutputs

> ModelsOutputList ListOrganizationOutputs(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List configured outputs in organization



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
	resp, r, err := apiClient.OrganizationOutputsAPI.ListOrganizationOutputs(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.ListOrganizationOutputs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationOutputs`: ModelsOutputList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.ListOrganizationOutputs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationOutputsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsOutputList**](ModelsOutputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplaceOutput

> ModelsOutput ReplaceOutput(ctx, organizationId, outputId).ReplaceOutputRequest(replaceOutputRequest).TestConnection(testConnection).Execute()

Replace output



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
	outputId := "outputId_example" // string | Output ID
	replaceOutputRequest := openapiclient.ReplaceOutput_request{RoutesV2PutOutputRequest: openapiclient.NewRoutesV2PutOutputRequest()} // ReplaceOutputRequest | Output configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.ReplaceOutput(context.Background(), organizationId, outputId).ReplaceOutputRequest(replaceOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.ReplaceOutput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceOutput`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.ReplaceOutput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceOutputRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **replaceOutputRequest** | [**ReplaceOutputRequest**](ReplaceOutputRequest.md) | Output configuration update | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TestOutputConnection

> RoutesV2SuccessResponse TestOutputConnection(ctx, organizationId).TestOutputConnectionRequest(testOutputConnectionRequest).Execute()

Test output connection



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
	testOutputConnectionRequest := openapiclient.TestOutputConnection_request{RoutesV2TestOutputConnectionRequest: openapiclient.NewRoutesV2TestOutputConnectionRequest()} // TestOutputConnectionRequest | Output configuration to test

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.TestOutputConnection(context.Background(), organizationId).TestOutputConnectionRequest(testOutputConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.TestOutputConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestOutputConnection`: RoutesV2SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.TestOutputConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestOutputConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testOutputConnectionRequest** | [**TestOutputConnectionRequest**](TestOutputConnectionRequest.md) | Output configuration to test | 

### Return type

[**RoutesV2SuccessResponse**](RoutesV2SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOutput

> ModelsOutput UpdateOutput(ctx, organizationId, outputId).UpdateOutputRequest(updateOutputRequest).TestConnection(testConnection).Execute()

Update output



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
	outputId := "outputId_example" // string | Output ID
	updateOutputRequest := openapiclient.UpdateOutput_request{RoutesV2UpdateOutputRequest: openapiclient.NewRoutesV2UpdateOutputRequest()} // UpdateOutputRequest | Output configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.UpdateOutput(context.Background(), organizationId, outputId).UpdateOutputRequest(updateOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.UpdateOutput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateOutput`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.UpdateOutput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOutputRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateOutputRequest** | [**UpdateOutputRequest**](UpdateOutputRequest.md) | Output configuration update | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

