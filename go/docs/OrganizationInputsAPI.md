# \OrganizationInputsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInput**](OrganizationInputsAPI.md#CreateInput) | **Post** /v2/{organization_id}/inputs | Create input
[**DeleteOrganizationInput**](OrganizationInputsAPI.md#DeleteOrganizationInput) | **Delete** /v1/{organization_id}/inputs/{input_id} | Delete input
[**GetOrganizationInput**](OrganizationInputsAPI.md#GetOrganizationInput) | **Get** /v1/{organization_id}/inputs/{input_id} | Get organization input
[**ListOrganizationInputs**](OrganizationInputsAPI.md#ListOrganizationInputs) | **Get** /v1/{organization_id}/inputs | List organization inputs
[**ReplaceInput**](OrganizationInputsAPI.md#ReplaceInput) | **Put** /v2/{organization_id}/inputs/{input_id} | Replace input
[**TestInputConnection**](OrganizationInputsAPI.md#TestInputConnection) | **Post** /v2/{organization_id}/inputs/test-connection | Test input connection
[**UpdateInput**](OrganizationInputsAPI.md#UpdateInput) | **Patch** /v2/{organization_id}/inputs/{input_id} | Update input



## CreateInput

> ModelsInput CreateInput(ctx, organizationId).RoutesV2CreateInputRequest(routesV2CreateInputRequest).TestConnection(testConnection).Execute()

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
	resp, r, err := apiClient.OrganizationInputsAPI.CreateInput(context.Background(), organizationId).RoutesV2CreateInputRequest(routesV2CreateInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.CreateInput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateInput`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.CreateInput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateInputRequest struct via the builder pattern


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


## DeleteOrganizationInput

> map[string]interface{} DeleteOrganizationInput(ctx, organizationId, inputId).Execute()

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
	resp, r, err := apiClient.OrganizationInputsAPI.DeleteOrganizationInput(context.Background(), organizationId, inputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.DeleteOrganizationInput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteOrganizationInput`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.DeleteOrganizationInput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOrganizationInputRequest struct via the builder pattern


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


## GetOrganizationInput

> RoutesGetInputResponse GetOrganizationInput(ctx, organizationId, inputId).Execute()

Get organization input



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
	resp, r, err := apiClient.OrganizationInputsAPI.GetOrganizationInput(context.Background(), organizationId, inputId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.GetOrganizationInput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationInput`: RoutesGetInputResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.GetOrganizationInput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationInputRequest struct via the builder pattern


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


## ListOrganizationInputs

> ModelsInputList ListOrganizationInputs(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List organization inputs



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
	resp, r, err := apiClient.OrganizationInputsAPI.ListOrganizationInputs(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.ListOrganizationInputs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationInputs`: ModelsInputList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.ListOrganizationInputs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationInputsRequest struct via the builder pattern


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


## ReplaceInput

> ModelsInput ReplaceInput(ctx, organizationId, inputId).RoutesV2PutInputRequest(routesV2PutInputRequest).TestConnection(testConnection).Execute()

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
	resp, r, err := apiClient.OrganizationInputsAPI.ReplaceInput(context.Background(), organizationId, inputId).RoutesV2PutInputRequest(routesV2PutInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.ReplaceInput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceInput`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.ReplaceInput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceInputRequest struct via the builder pattern


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


## TestInputConnection

> RoutesV2SuccessResponse TestInputConnection(ctx, organizationId).RoutesV2TestInputConnectionRequest(routesV2TestInputConnectionRequest).Execute()

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
	resp, r, err := apiClient.OrganizationInputsAPI.TestInputConnection(context.Background(), organizationId).RoutesV2TestInputConnectionRequest(routesV2TestInputConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.TestInputConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestInputConnection`: RoutesV2SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.TestInputConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestInputConnectionRequest struct via the builder pattern


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


## UpdateInput

> ModelsInput UpdateInput(ctx, organizationId, inputId).RoutesV2UpdateInputRequest(routesV2UpdateInputRequest).TestConnection(testConnection).Execute()

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
	resp, r, err := apiClient.OrganizationInputsAPI.UpdateInput(context.Background(), organizationId, inputId).RoutesV2UpdateInputRequest(routesV2UpdateInputRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInputsAPI.UpdateInput``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateInput`: ModelsInput
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInputsAPI.UpdateInput`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**inputId** | **string** | Input ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInputRequest struct via the builder pattern


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

