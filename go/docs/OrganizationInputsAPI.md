# \OrganizationInputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdInputsGet**](OrganizationInputsAPI.md#V1OrganizationIdInputsGet) | **Get** /v1/{organization_id}/inputs | List inputs
[**V1OrganizationIdInputsInputIdDelete**](OrganizationInputsAPI.md#V1OrganizationIdInputsInputIdDelete) | **Delete** /v1/{organization_id}/inputs/{input_id} | Delete input
[**V1OrganizationIdInputsInputIdGet**](OrganizationInputsAPI.md#V1OrganizationIdInputsInputIdGet) | **Get** /v1/{organization_id}/inputs/{input_id} | Get input
[**V2OrganizationIdInputsInputIdPatch**](OrganizationInputsAPI.md#V2OrganizationIdInputsInputIdPatch) | **Patch** /v2/{organization_id}/inputs/{input_id} | Update input
[**V2OrganizationIdInputsInputIdPut**](OrganizationInputsAPI.md#V2OrganizationIdInputsInputIdPut) | **Put** /v2/{organization_id}/inputs/{input_id} | Replace input
[**V2OrganizationIdInputsPost**](OrganizationInputsAPI.md#V2OrganizationIdInputsPost) | **Post** /v2/{organization_id}/inputs | Create input
[**V2OrganizationIdInputsTestConnectionPost**](OrganizationInputsAPI.md#V2OrganizationIdInputsTestConnectionPost) | **Post** /v2/{organization_id}/inputs/test-connection | Test input connection



## V1OrganizationIdInputsGet

> ModelsInputList V1OrganizationIdInputsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	organizationId := "organizationId_example" // string | Organization ID
	limit := int32(56) // int32 | Limit the number of organizations returned (default: DefaultLimit) (optional)
	offset := int32(56) // int32 | Offset the organizations returned (default: 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V1OrganizationIdInputsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V1OrganizationIdInputsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdInputsGet`: ModelsInputList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V1OrganizationIdInputsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdInputsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of organizations returned (default: DefaultLimit) | 
 **offset** | **int32** | Offset the organizations returned (default: 0) | 

### Return type

[**ModelsInputList**](ModelsInputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdInputsInputIdDelete

> map[string]interface{} V1OrganizationIdInputsInputIdDelete(ctx, organizationId, inputId).Execute()

Delete input



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
	inputId := "inputId_example" // string | Input ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V1OrganizationIdInputsInputIdDelete(context.Background(), organizationId, inputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V1OrganizationIdInputsInputIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdInputsInputIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V1OrganizationIdInputsInputIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdInputsInputIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**map[string]interface{}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OrganizationIdInputsInputIdGet

> RoutesGetInputResponse V1OrganizationIdInputsInputIdGet(ctx, organizationId, inputId).Execute()

Get input



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
	inputId := "inputId_example" // string | Input ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V1OrganizationIdInputsInputIdGet(context.Background(), organizationId, inputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V1OrganizationIdInputsInputIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdInputsInputIdGet`: RoutesGetInputResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V1OrganizationIdInputsInputIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdInputsInputIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoutesGetInputResponse**](RoutesGetInputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdInputsInputIdPatch

> ModelsInput V2OrganizationIdInputsInputIdPatch(ctx, organizationId, inputId).RoutesV2UpdateInputRequest(routesV2UpdateInputRequest).TestConnection(testConnection).Execute()

Update input



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
	inputId := "inputId_example" // string | Input ID
	routesV2UpdateInputRequest := *openapiclient.NewRoutesV2UpdateInputRequest() // RoutesV2UpdateInputRequest | Input configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V2OrganizationIdInputsInputIdPatch(context.Background(), organizationId, inputId).RoutesV2UpdateInputRequest(routesV2UpdateInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V2OrganizationIdInputsInputIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdInputsInputIdPatch`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V2OrganizationIdInputsInputIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdInputsInputIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdateInputRequest** | [**RoutesV2UpdateInputRequest**](RoutesV2UpdateInputRequest.md) | Input configuration update | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdInputsInputIdPut

> ModelsInput V2OrganizationIdInputsInputIdPut(ctx, organizationId, inputId).RoutesV2PutInputRequest(routesV2PutInputRequest).TestConnection(testConnection).Execute()

Replace input



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
	inputId := "inputId_example" // string | Input ID
	routesV2PutInputRequest := *openapiclient.NewRoutesV2PutInputRequest() // RoutesV2PutInputRequest | Input configuration update
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V2OrganizationIdInputsInputIdPut(context.Background(), organizationId, inputId).RoutesV2PutInputRequest(routesV2PutInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V2OrganizationIdInputsInputIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdInputsInputIdPut`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V2OrganizationIdInputsInputIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdInputsInputIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2PutInputRequest** | [**RoutesV2PutInputRequest**](RoutesV2PutInputRequest.md) | Input configuration update | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdInputsPost

> ModelsInput V2OrganizationIdInputsPost(ctx, organizationId).RoutesV2CreateInputRequest(routesV2CreateInputRequest).TestConnection(testConnection).Execute()

Create input



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
	routesV2CreateInputRequest := *openapiclient.NewRoutesV2CreateInputRequest() // RoutesV2CreateInputRequest | Input configuration
	testConnection := true // bool | Test connection before creating the input (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V2OrganizationIdInputsPost(context.Background(), organizationId).RoutesV2CreateInputRequest(routesV2CreateInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V2OrganizationIdInputsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdInputsPost`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V2OrganizationIdInputsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdInputsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateInputRequest** | [**RoutesV2CreateInputRequest**](RoutesV2CreateInputRequest.md) | Input configuration | 
 **testConnection** | **bool** | Test connection before creating the input | 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdInputsTestConnectionPost

> RoutesV2SuccessResponse V2OrganizationIdInputsTestConnectionPost(ctx, organizationId).RoutesV2TestInputConnectionRequest(routesV2TestInputConnectionRequest).Execute()

Test input connection



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
	routesV2TestInputConnectionRequest := *openapiclient.NewRoutesV2TestInputConnectionRequest() // RoutesV2TestInputConnectionRequest | Input configuration to test

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInputsAPI.V2OrganizationIdInputsTestConnectionPost(context.Background(), organizationId).RoutesV2TestInputConnectionRequest(routesV2TestInputConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.V2OrganizationIdInputsTestConnectionPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdInputsTestConnectionPost`: RoutesV2SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.V2OrganizationIdInputsTestConnectionPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdInputsTestConnectionPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2TestInputConnectionRequest** | [**RoutesV2TestInputConnectionRequest**](RoutesV2TestInputConnectionRequest.md) | Input configuration to test | 

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

