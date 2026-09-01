# \TagsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateTag**](TagsAPI.md#CreateTag) | **Post** /v3/{organization_id}/tags | Create a tag
[**DeleteTag**](TagsAPI.md#DeleteTag) | **Delete** /v3/{organization_id}/tags/{tag_id} | Delete a tag
[**ListTags**](TagsAPI.md#ListTags) | **Get** /v3/{organization_id}/tags | List tags
[**UpdateTag**](TagsAPI.md#UpdateTag) | **Patch** /v3/{organization_id}/tags/{tag_id} | Update a tag



## CreateTag

> RoutesV3TagResponse CreateTag(ctx, organizationId).CreateTagRequest(createTagRequest).Execute()

Create a tag



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
	createTagRequest := openapiclient.CreateTag_request{RoutesV3CreateTagRequest: openapiclient.NewRoutesV3CreateTagRequest()} // CreateTagRequest | Request body for creating a tag

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TagsAPI.CreateTag(context.Background(), organizationId).CreateTagRequest(createTagRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TagsAPI.CreateTag``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTag`: RoutesV3TagResponse
	fmt.Fprintf(os.Stdout, "Response from `TagsAPI.CreateTag`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateTagRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createTagRequest** | [**CreateTagRequest**](CreateTagRequest.md) | Request body for creating a tag | 

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTag

> DeleteTag(ctx, organizationId, tagId).Execute()

Delete a tag



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
	tagId := "tagId_example" // string | Tag ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.TagsAPI.DeleteTag(context.Background(), organizationId, tagId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TagsAPI.DeleteTag``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**tagId** | **string** | Tag ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTagRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListTags

> RoutesV3TagListResponse ListTags(ctx, organizationId).Search(search).Limit(limit).Offset(offset).Execute()

List tags



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
	search := "search_example" // string | Prefix match on tag name (optional)
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TagsAPI.ListTags(context.Background(), organizationId).Search(search).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TagsAPI.ListTags``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTags`: RoutesV3TagListResponse
	fmt.Fprintf(os.Stdout, "Response from `TagsAPI.ListTags`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListTagsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **search** | **string** | Prefix match on tag name | 
 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**RoutesV3TagListResponse**](RoutesV3TagListResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateTag

> RoutesV3TagResponse UpdateTag(ctx, organizationId, tagId).UpdateTagRequest(updateTagRequest).Execute()

Update a tag



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
	tagId := "tagId_example" // string | Tag ID
	updateTagRequest := openapiclient.UpdateTag_request{RoutesV3UpdateTagRequest: openapiclient.NewRoutesV3UpdateTagRequest()} // UpdateTagRequest | Request body for updating a tag

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TagsAPI.UpdateTag(context.Background(), organizationId, tagId).UpdateTagRequest(updateTagRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TagsAPI.UpdateTag``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTag`: RoutesV3TagResponse
	fmt.Fprintf(os.Stdout, "Response from `TagsAPI.UpdateTag`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**tagId** | **string** | Tag ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTagRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateTagRequest** | [**UpdateTagRequest**](UpdateTagRequest.md) | Request body for updating a tag | 

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

