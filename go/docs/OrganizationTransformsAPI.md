# \OrganizationTransformsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTransform**](OrganizationTransformsAPI.md#CreateTransform) | **Post** /v1/{organization_id}/transforms | Create transform
[**DeleteOrganizationTransform**](OrganizationTransformsAPI.md#DeleteOrganizationTransform) | **Delete** /v1/{organization_id}/transforms/{transform_id} | Delete transform
[**GetOrganizationTransform**](OrganizationTransformsAPI.md#GetOrganizationTransform) | **Get** /v1/{organization_id}/transforms/{transform_id} | Get transform
[**ListOrganizationTransforms**](OrganizationTransformsAPI.md#ListOrganizationTransforms) | **Get** /v1/{organization_id}/transforms | List configured transforms in a transform
[**UpdateOrganizationTransform**](OrganizationTransformsAPI.md#UpdateOrganizationTransform) | **Patch** /v1/{organization_id}/transforms/{transform_id} | Update transform



## CreateTransform

> ModelsTransform CreateTransform(ctx, organizationId).RoutesCreateTransformRequest(routesCreateTransformRequest).Execute()

Create transform



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
	routesCreateTransformRequest := *openapiclient.NewRoutesCreateTransformRequest("Name_example") // RoutesCreateTransformRequest | Request body for creating a transform

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationTransformsAPI.CreateTransform(context.Background(), organizationId).RoutesCreateTransformRequest(routesCreateTransformRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.CreateTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTransform`: ModelsTransform
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.CreateTransform`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesCreateTransformRequest** | [**RoutesCreateTransformRequest**](RoutesCreateTransformRequest.md) | Request body for creating a transform | 

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteOrganizationTransform

> map[string]interface{} DeleteOrganizationTransform(ctx, organizationId, transformId).Execute()

Delete transform



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
	transformId := "transformId_example" // string | Transform ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationTransformsAPI.DeleteOrganizationTransform(context.Background(), organizationId, transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.DeleteOrganizationTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteOrganizationTransform`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.DeleteOrganizationTransform`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOrganizationTransformRequest struct via the builder pattern


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


## GetOrganizationTransform

> RoutesGetTransformResponse GetOrganizationTransform(ctx, transformId, organizationId).Execute()

Get transform



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
	transformId := "transformId_example" // string | Transform ID
	organizationId := "organizationId_example" // string | Organization ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationTransformsAPI.GetOrganizationTransform(context.Background(), transformId, organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.GetOrganizationTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrganizationTransform`: RoutesGetTransformResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.GetOrganizationTransform`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrganizationTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoutesGetTransformResponse**](RoutesGetTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrganizationTransforms

> ModelsTransformList ListOrganizationTransforms(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List configured transforms in a transform



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
	resp, r, err := apiClient.OrganizationTransformsAPI.ListOrganizationTransforms(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.ListOrganizationTransforms``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrganizationTransforms`: ModelsTransformList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.ListOrganizationTransforms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrganizationTransformsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsTransformList**](ModelsTransformList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOrganizationTransform

> ModelsTransform UpdateOrganizationTransform(ctx, organizationId, transformId).RoutesUpdateTransformRequest(routesUpdateTransformRequest).Execute()

Update transform



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
	transformId := "transformId_example" // string | Transform ID
	routesUpdateTransformRequest := *openapiclient.NewRoutesUpdateTransformRequest("Name_example") // RoutesUpdateTransformRequest | Request body for updating a transform

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationTransformsAPI.UpdateOrganizationTransform(context.Background(), organizationId, transformId).RoutesUpdateTransformRequest(routesUpdateTransformRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.UpdateOrganizationTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateOrganizationTransform`: ModelsTransform
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.UpdateOrganizationTransform`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOrganizationTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesUpdateTransformRequest** | [**RoutesUpdateTransformRequest**](RoutesUpdateTransformRequest.md) | Request body for updating a transform | 

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

