# \TransformsRepositoryAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2TransformsRepositoryGet**](TransformsRepositoryAPI.md#V2TransformsRepositoryGet) | **Get** /v2/transforms/repository | List transforms
[**V2TransformsRepositoryTransformIdGet**](TransformsRepositoryAPI.md#V2TransformsRepositoryTransformIdGet) | **Get** /v2/transforms/repository/{transform_id} | Get transform details
[**V3TransformsRepositoryExportPost**](TransformsRepositoryAPI.md#V3TransformsRepositoryExportPost) | **Post** /v3/transforms/repository/export | Export transform to YAML
[**V3TransformsRepositoryGet**](TransformsRepositoryAPI.md#V3TransformsRepositoryGet) | **Get** /v3/transforms/repository | List community transforms
[**V3TransformsRepositoryImportPost**](TransformsRepositoryAPI.md#V3TransformsRepositoryImportPost) | **Post** /v3/transforms/repository/import | Import transform from YAML
[**V3TransformsRepositoryTransformIdGet**](TransformsRepositoryAPI.md#V3TransformsRepositoryTransformIdGet) | **Get** /v3/transforms/repository/{transform_id} | Get transform details



## V2TransformsRepositoryGet

> ModelsTransformsRepositoryList V2TransformsRepositoryGet(ctx).Limit(limit).Offset(offset).Execute()

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
	limit := int32(56) // int32 | Number of items to return (default: 10) (optional)
	offset := int32(56) // int32 | Number of items to skip (default: 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRepositoryAPI.V2TransformsRepositoryGet(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V2TransformsRepositoryGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2TransformsRepositoryGet`: ModelsTransformsRepositoryList
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V2TransformsRepositoryGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2TransformsRepositoryGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Number of items to return (default: 10) | 
 **offset** | **int32** | Number of items to skip (default: 0) | 

### Return type

[**ModelsTransformsRepositoryList**](ModelsTransformsRepositoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2TransformsRepositoryTransformIdGet

> ModelsTransformsRepositoryTransform V2TransformsRepositoryTransformIdGet(ctx, transformId).Execute()

Get transform details



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRepositoryAPI.V2TransformsRepositoryTransformIdGet(context.Background(), transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V2TransformsRepositoryTransformIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2TransformsRepositoryTransformIdGet`: ModelsTransformsRepositoryTransform
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V2TransformsRepositoryTransformIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2TransformsRepositoryTransformIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ModelsTransformsRepositoryTransform**](ModelsTransformsRepositoryTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3TransformsRepositoryExportPost

> string V3TransformsRepositoryExportPost(ctx).CommunityTransformsInternalTransformConfig(communityTransformsInternalTransformConfig).Execute()

Export transform to YAML



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
	communityTransformsInternalTransformConfig := *openapiclient.NewCommunityTransformsInternalTransformConfig() // CommunityTransformsInternalTransformConfig | Transform to export and optional metadata

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRepositoryAPI.V3TransformsRepositoryExportPost(context.Background()).CommunityTransformsInternalTransformConfig(communityTransformsInternalTransformConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V3TransformsRepositoryExportPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3TransformsRepositoryExportPost`: string
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V3TransformsRepositoryExportPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV3TransformsRepositoryExportPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityTransformsInternalTransformConfig** | [**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md) | Transform to export and optional metadata | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3TransformsRepositoryGet

> CommunityTransformsInternalTransformsIndex V3TransformsRepositoryGet(ctx).Execute()

List community transforms



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
	resp, r, err := apiClient.TransformsRepositoryAPI.V3TransformsRepositoryGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V3TransformsRepositoryGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3TransformsRepositoryGet`: CommunityTransformsInternalTransformsIndex
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V3TransformsRepositoryGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3TransformsRepositoryGetRequest struct via the builder pattern


### Return type

[**CommunityTransformsInternalTransformsIndex**](CommunityTransformsInternalTransformsIndex.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3TransformsRepositoryImportPost

> RoutesV3ImportTransformResponse V3TransformsRepositoryImportPost(ctx).Body(body).Execute()

Import transform from YAML



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
	body := "body_example" // string | YAML transform definition

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRepositoryAPI.V3TransformsRepositoryImportPost(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V3TransformsRepositoryImportPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3TransformsRepositoryImportPost`: RoutesV3ImportTransformResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V3TransformsRepositoryImportPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV3TransformsRepositoryImportPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** | YAML transform definition | 

### Return type

[**RoutesV3ImportTransformResponse**](RoutesV3ImportTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3TransformsRepositoryTransformIdGet

> CommunityTransformsInternalTransformConfig V3TransformsRepositoryTransformIdGet(ctx, transformId).Execute()

Get transform details



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRepositoryAPI.V3TransformsRepositoryTransformIdGet(context.Background(), transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.V3TransformsRepositoryTransformIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3TransformsRepositoryTransformIdGet`: CommunityTransformsInternalTransformConfig
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.V3TransformsRepositoryTransformIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3TransformsRepositoryTransformIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

