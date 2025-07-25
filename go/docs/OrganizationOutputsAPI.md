# \OrganizationOutputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdOutputsGet**](OrganizationOutputsAPI.md#V1OrganizationIdOutputsGet) | **Get** /v1/{organization_id}/outputs | List outputs
[**V1OrganizationIdOutputsOutputIdDelete**](OrganizationOutputsAPI.md#V1OrganizationIdOutputsOutputIdDelete) | **Delete** /v1/{organization_id}/outputs/{output_id} | Delete output
[**V1OrganizationIdOutputsOutputIdGet**](OrganizationOutputsAPI.md#V1OrganizationIdOutputsOutputIdGet) | **Get** /v1/{organization_id}/outputs/{output_id} | Get output
[**V2OrganizationIdOutputsOutputIdPatch**](OrganizationOutputsAPI.md#V2OrganizationIdOutputsOutputIdPatch) | **Patch** /v2/{organization_id}/outputs/{output_id} | Update output
[**V2OrganizationIdOutputsOutputIdPut**](OrganizationOutputsAPI.md#V2OrganizationIdOutputsOutputIdPut) | **Put** /v2/{organization_id}/outputs/{output_id} | Replace output
[**V2OrganizationIdOutputsPost**](OrganizationOutputsAPI.md#V2OrganizationIdOutputsPost) | **Post** /v2/{organization_id}/outputs | Create output
[**V2OrganizationIdOutputsTestConnectionPost**](OrganizationOutputsAPI.md#V2OrganizationIdOutputsTestConnectionPost) | **Post** /v2/{organization_id}/outputs/test-connection | Test output connection



## V1OrganizationIdOutputsGet

> ModelsOutputList V1OrganizationIdOutputsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	organizationId := "organizationId_example" // string | Organization ID
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.V1OrganizationIdOutputsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V1OrganizationIdOutputsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdOutputsGet`: ModelsOutputList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V1OrganizationIdOutputsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdOutputsGetRequest struct via the builder pattern


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


## V1OrganizationIdOutputsOutputIdDelete

> string V1OrganizationIdOutputsOutputIdDelete(ctx, organizationId, outputId).Execute()

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
	resp, r, err := apiClient.OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdDelete(context.Background(), organizationId, outputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdOutputsOutputIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdOutputsOutputIdDeleteRequest struct via the builder pattern


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


## V1OrganizationIdOutputsOutputIdGet

> RoutesGetOutputResponse V1OrganizationIdOutputsOutputIdGet(ctx, organizationId, outputId).Execute()

Get output



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
	resp, r, err := apiClient.OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdGet(context.Background(), organizationId, outputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdOutputsOutputIdGet`: RoutesGetOutputResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V1OrganizationIdOutputsOutputIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdOutputsOutputIdGetRequest struct via the builder pattern


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


## V2OrganizationIdOutputsOutputIdPatch

> ModelsOutput V2OrganizationIdOutputsOutputIdPatch(ctx, organizationId, outputId).RoutesV2UpdateOutputRequest(routesV2UpdateOutputRequest).TestConnection(testConnection).Execute()

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
	routesV2UpdateOutputRequest := *openapiclient.NewRoutesV2UpdateOutputRequest() // RoutesV2UpdateOutputRequest | Output configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPatch(context.Background(), organizationId, outputId).RoutesV2UpdateOutputRequest(routesV2UpdateOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdOutputsOutputIdPatch`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdOutputsOutputIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdateOutputRequest** | [**RoutesV2UpdateOutputRequest**](RoutesV2UpdateOutputRequest.md) | Output configuration update | 
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


## V2OrganizationIdOutputsOutputIdPut

> ModelsOutput V2OrganizationIdOutputsOutputIdPut(ctx, organizationId, outputId).RoutesV2PutOutputRequest(routesV2PutOutputRequest).TestConnection(testConnection).Execute()

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
	routesV2PutOutputRequest := *openapiclient.NewRoutesV2PutOutputRequest() // RoutesV2PutOutputRequest | Output configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPut(context.Background(), organizationId, outputId).RoutesV2PutOutputRequest(routesV2PutOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdOutputsOutputIdPut`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V2OrganizationIdOutputsOutputIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**outputId** | **string** | Output ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdOutputsOutputIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2PutOutputRequest** | [**RoutesV2PutOutputRequest**](RoutesV2PutOutputRequest.md) | Output configuration update | 
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


## V2OrganizationIdOutputsPost

> ModelsOutput V2OrganizationIdOutputsPost(ctx, organizationId).RoutesV2CreateOutputRequest(routesV2CreateOutputRequest).TestConnection(testConnection).Execute()

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
	routesV2CreateOutputRequest := *openapiclient.NewRoutesV2CreateOutputRequest() // RoutesV2CreateOutputRequest | Output configuration
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.V2OrganizationIdOutputsPost(context.Background(), organizationId).RoutesV2CreateOutputRequest(routesV2CreateOutputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V2OrganizationIdOutputsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdOutputsPost`: ModelsOutput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V2OrganizationIdOutputsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdOutputsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateOutputRequest** | [**RoutesV2CreateOutputRequest**](RoutesV2CreateOutputRequest.md) | Output configuration | 
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


## V2OrganizationIdOutputsTestConnectionPost

> RoutesV2SuccessResponse V2OrganizationIdOutputsTestConnectionPost(ctx, organizationId).RoutesV2TestOutputConnectionRequest(routesV2TestOutputConnectionRequest).Execute()

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
	routesV2TestOutputConnectionRequest := *openapiclient.NewRoutesV2TestOutputConnectionRequest() // RoutesV2TestOutputConnectionRequest | Output configuration to test

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationOutputsAPI.V2OrganizationIdOutputsTestConnectionPost(context.Background(), organizationId).RoutesV2TestOutputConnectionRequest(routesV2TestOutputConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationOutputsAPI.V2OrganizationIdOutputsTestConnectionPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdOutputsTestConnectionPost`: RoutesV2SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationOutputsAPI.V2OrganizationIdOutputsTestConnectionPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdOutputsTestConnectionPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2TestOutputConnectionRequest** | [**RoutesV2TestOutputConnectionRequest**](RoutesV2TestOutputConnectionRequest.md) | Output configuration to test | 

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

