# \TransformsRepositoryAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2TransformsRepositoryGet**](TransformsRepositoryAPI.md#V2TransformsRepositoryGet) | **Get** /v2/transforms/repository | List transforms
[**V2TransformsRepositoryTransformIdGet**](TransformsRepositoryAPI.md#V2TransformsRepositoryTransformIdGet) | **Get** /v2/transforms/repository/{transform_id} | Get transform details



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

