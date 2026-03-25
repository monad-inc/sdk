# \TransformsRepositoryAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExportTransform**](TransformsRepositoryAPI.md#ExportTransform) | **Post** /v3/transforms/repository/export | Export transform to YAML
[**GetTransformDetailsFromRepository**](TransformsRepositoryAPI.md#GetTransformDetailsFromRepository) | **Get** /v3/transforms/repository/{transform_id} | Get transform details
[**GetTransformRepositoryDetails**](TransformsRepositoryAPI.md#GetTransformRepositoryDetails) | **Get** /v2/transforms/repository/{transform_id} | Get transform details
[**ImportTransform**](TransformsRepositoryAPI.md#ImportTransform) | **Post** /v3/transforms/repository/import | Import transform from YAML
[**ListCommunityTransforms**](TransformsRepositoryAPI.md#ListCommunityTransforms) | **Get** /v3/transforms/repository | List community transforms
[**ListTransformRepository**](TransformsRepositoryAPI.md#ListTransformRepository) | **Get** /v2/transforms/repository | List transforms



## ExportTransform

> string ExportTransform(ctx).CommunityTransformsInternalTransformConfig(communityTransformsInternalTransformConfig).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.ExportTransform(context.Background()).CommunityTransformsInternalTransformConfig(communityTransformsInternalTransformConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.ExportTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ExportTransform`: string
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.ExportTransform`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiExportTransformRequest struct via the builder pattern


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


## GetTransformDetailsFromRepository

> CommunityTransformsInternalTransformConfig GetTransformDetailsFromRepository(ctx, transformId).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.GetTransformDetailsFromRepository(context.Background(), transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.GetTransformDetailsFromRepository``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTransformDetailsFromRepository`: CommunityTransformsInternalTransformConfig
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.GetTransformDetailsFromRepository`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransformDetailsFromRepositoryRequest struct via the builder pattern


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


## GetTransformRepositoryDetails

> ModelsTransformsRepositoryTransform GetTransformRepositoryDetails(ctx, transformId).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.GetTransformRepositoryDetails(context.Background(), transformId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.GetTransformRepositoryDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTransformRepositoryDetails`: ModelsTransformsRepositoryTransform
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.GetTransformRepositoryDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transformId** | **string** | Transform ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransformRepositoryDetailsRequest struct via the builder pattern


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


## ImportTransform

> RoutesV3ImportTransformResponse ImportTransform(ctx).Body(body).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.ImportTransform(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.ImportTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImportTransform`: RoutesV3ImportTransformResponse
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.ImportTransform`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImportTransformRequest struct via the builder pattern


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


## ListCommunityTransforms

> CommunityTransformsInternalTransformsIndex ListCommunityTransforms(ctx).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.ListCommunityTransforms(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.ListCommunityTransforms``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCommunityTransforms`: CommunityTransformsInternalTransformsIndex
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.ListCommunityTransforms`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListCommunityTransformsRequest struct via the builder pattern


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


## ListTransformRepository

> ModelsTransformsRepositoryList ListTransformRepository(ctx).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.TransformsRepositoryAPI.ListTransformRepository(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRepositoryAPI.ListTransformRepository``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTransformRepository`: ModelsTransformsRepositoryList
	fmt.Fprintf(os.Stdout, "Response from `TransformsRepositoryAPI.ListTransformRepository`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTransformRepositoryRequest struct via the builder pattern


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

