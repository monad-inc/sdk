# \OrganizationTransformsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdTransformsGet**](OrganizationTransformsAPI.md#V1OrganizationIdTransformsGet) | **Get** /v1/{organization_id}/transforms | List transforms
[**V1OrganizationIdTransformsPost**](OrganizationTransformsAPI.md#V1OrganizationIdTransformsPost) | **Post** /v1/{organization_id}/transforms | Create transform
[**V1OrganizationIdTransformsTransformIdDelete**](OrganizationTransformsAPI.md#V1OrganizationIdTransformsTransformIdDelete) | **Delete** /v1/{organization_id}/transforms/{transform_id} | Delete transform
[**V1OrganizationIdTransformsTransformIdGet**](OrganizationTransformsAPI.md#V1OrganizationIdTransformsTransformIdGet) | **Get** /v1/{organization_id}/transforms/{transform_id} | Get transform
[**V1OrganizationIdTransformsTransformIdPatch**](OrganizationTransformsAPI.md#V1OrganizationIdTransformsTransformIdPatch) | **Patch** /v1/{organization_id}/transforms/{transform_id} | Update transform



## V1OrganizationIdTransformsGet

> ModelsTransformList V1OrganizationIdTransformsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List transforms



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
	resp, r, err := apiClient.OrganizationTransformsAPI.V1OrganizationIdTransformsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.V1OrganizationIdTransformsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdTransformsGet`: ModelsTransformList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.V1OrganizationIdTransformsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdTransformsGetRequest struct via the builder pattern


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


## V1OrganizationIdTransformsPost

> ModelsTransform V1OrganizationIdTransformsPost(ctx, organizationId).RoutesCreateTransformRequest(routesCreateTransformRequest).Execute()

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
	resp, r, err := apiClient.OrganizationTransformsAPI.V1OrganizationIdTransformsPost(context.Background(), organizationId).RoutesCreateTransformRequest(routesCreateTransformRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.V1OrganizationIdTransformsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdTransformsPost`: ModelsTransform
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.V1OrganizationIdTransformsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdTransformsPostRequest struct via the builder pattern


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


## V1OrganizationIdTransformsTransformIdDelete

> map[string]interface{} V1OrganizationIdTransformsTransformIdDelete(ctx, organizationId, transformId).Execute()

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
	resp, r, err := apiClient.OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdDelete(context.Background(), organizationId, transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdTransformsTransformIdDelete`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdTransformsTransformIdDeleteRequest struct via the builder pattern


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


## V1OrganizationIdTransformsTransformIdGet

> RoutesGetTransformResponse V1OrganizationIdTransformsTransformIdGet(ctx, transformId, organizationId).Execute()

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
	resp, r, err := apiClient.OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdGet(context.Background(), transformId, organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdTransformsTransformIdGet`: RoutesGetTransformResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdTransformsTransformIdGetRequest struct via the builder pattern


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


## V1OrganizationIdTransformsTransformIdPatch

> ModelsTransform V1OrganizationIdTransformsTransformIdPatch(ctx, organizationId, transformId).RoutesUpdateTransformRequest(routesUpdateTransformRequest).Execute()

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
	resp, r, err := apiClient.OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdPatch(context.Background(), organizationId, transformId).RoutesUpdateTransformRequest(routesUpdateTransformRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdTransformsTransformIdPatch`: ModelsTransform
	fmt.Fprintf(os.Stdout, "Response from `OrganizationTransformsAPI.V1OrganizationIdTransformsTransformIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdTransformsTransformIdPatchRequest struct via the builder pattern


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

