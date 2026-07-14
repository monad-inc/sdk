# \ResourceSharesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateResourceShares**](ResourceSharesAPI.md#CreateResourceShares) | **Post** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Share a resource
[**ListResourceShareTargets**](ResourceSharesAPI.md#ListResourceShareTargets) | **Get** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/organizations | List a resource&#39;s share targets (all direct child orgs)
[**ListResourceShares**](ResourceSharesAPI.md#ListResourceShares) | **Get** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | List a resource&#39;s shares
[**ListResourceUsage**](ResourceSharesAPI.md#ListResourceUsage) | **Get** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/usage | List a shared resource&#39;s consumers in other orgs
[**ListSharedResources**](ResourceSharesAPI.md#ListSharedResources) | **Get** /v3/{organization_id}/resource_shares | List shared resources
[**UnshareResource**](ResourceSharesAPI.md#UnshareResource) | **Delete** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Unshare a resource
[**UpdateResourceShares**](ResourceSharesAPI.md#UpdateResourceShares) | **Patch** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Update a resource&#39;s shares



## CreateResourceShares

> ModelsResourceShareChangeSet CreateResourceShares(ctx, organizationId, resourceType, resourceId).CreateResourceSharesRequest(createResourceSharesRequest).Execute()

Share a resource



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID
	createResourceSharesRequest := openapiclient.CreateResourceShares_request{RoutesV3ShareChangesRequest: openapiclient.NewRoutesV3ShareChangesRequest()} // CreateResourceSharesRequest | Share request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.CreateResourceShares(context.Background(), organizationId, resourceType, resourceId).CreateResourceSharesRequest(createResourceSharesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.CreateResourceShares``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateResourceShares`: ModelsResourceShareChangeSet
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.CreateResourceShares`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateResourceSharesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **createResourceSharesRequest** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md) | Share request | 

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListResourceShareTargets

> ModelsResourceShareTargetList ListResourceShareTargets(ctx, organizationId, resourceType, resourceId).Search(search).Shared(shared).SortBy(sortBy).Order(order).Limit(limit).Offset(offset).Execute()

List a resource's share targets (all direct child orgs)



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID
	search := "search_example" // string | Case-insensitive substring filter on child org name, slug, or id (optional)
	shared := true // bool | Filter by share state: true = only shared, false = only not shared (optional)
	sortBy := "sortBy_example" // string | Column to sort by; default puts shared rows first (optional)
	order := "order_example" // string | Sort direction (used with sort_by) (optional) (default to "asc")
	limit := int32(56) // int32 | Page size (optional) (default to 10)
	offset := int32(56) // int32 | Rows to skip (optional) (default to 0)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.ListResourceShareTargets(context.Background(), organizationId, resourceType, resourceId).Search(search).Shared(shared).SortBy(sortBy).Order(order).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.ListResourceShareTargets``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListResourceShareTargets`: ModelsResourceShareTargetList
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.ListResourceShareTargets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListResourceShareTargetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **search** | **string** | Case-insensitive substring filter on child org name, slug, or id | 
 **shared** | **bool** | Filter by share state: true &#x3D; only shared, false &#x3D; only not shared | 
 **sortBy** | **string** | Column to sort by; default puts shared rows first | 
 **order** | **string** | Sort direction (used with sort_by) | [default to &quot;asc&quot;]
 **limit** | **int32** | Page size | [default to 10]
 **offset** | **int32** | Rows to skip | [default to 0]

### Return type

[**ModelsResourceShareTargetList**](ModelsResourceShareTargetList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListResourceShares

> ModelsResourceShareWithUsageList ListResourceShares(ctx, organizationId, resourceType, resourceId).Execute()

List a resource's shares



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.ListResourceShares(context.Background(), organizationId, resourceType, resourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.ListResourceShares``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListResourceShares`: ModelsResourceShareWithUsageList
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.ListResourceShares`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListResourceSharesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**ModelsResourceShareWithUsageList**](ModelsResourceShareWithUsageList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListResourceUsage

> ModelsResourceUsageList ListResourceUsage(ctx, organizationId, resourceType, resourceId).Limit(limit).Offset(offset).Execute()

List a shared resource's consumers in other orgs



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID
	limit := int32(56) // int32 | Page size (optional) (default to 10)
	offset := int32(56) // int32 | Rows to skip (optional) (default to 0)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.ListResourceUsage(context.Background(), organizationId, resourceType, resourceId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.ListResourceUsage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListResourceUsage`: ModelsResourceUsageList
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.ListResourceUsage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListResourceUsageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **int32** | Page size | [default to 10]
 **offset** | **int32** | Rows to skip | [default to 0]

### Return type

[**ModelsResourceUsageList**](ModelsResourceUsageList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListSharedResources

> ModelsSharedResourceList ListSharedResources(ctx, organizationId).Limit(limit).Offset(offset).ResourceType(resourceType).Execute()

List shared resources



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
	organizationId := "organizationId_example" // string | Owner organization ID
	limit := int32(56) // int32 | Page size (default: 10) (optional)
	offset := int32(56) // int32 | Offset (default: 0) (optional)
	resourceType := "resourceType_example" // string | Filter by resource type (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.ListSharedResources(context.Background(), organizationId).Limit(limit).Offset(offset).ResourceType(resourceType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.ListSharedResources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSharedResources`: ModelsSharedResourceList
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.ListSharedResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListSharedResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Page size (default: 10) | 
 **offset** | **int32** | Offset (default: 0) | 
 **resourceType** | **string** | Filter by resource type | 

### Return type

[**ModelsSharedResourceList**](ModelsSharedResourceList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnshareResource

> ModelsResourceShareChangeSet UnshareResource(ctx, organizationId, resourceType, resourceId).Execute()

Unshare a resource



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.UnshareResource(context.Background(), organizationId, resourceType, resourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.UnshareResource``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnshareResource`: ModelsResourceShareChangeSet
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.UnshareResource`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnshareResourceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateResourceShares

> ModelsResourceShareChangeSet UpdateResourceShares(ctx, organizationId, resourceType, resourceId).CreateResourceSharesRequest(createResourceSharesRequest).Execute()

Update a resource's shares



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
	organizationId := "organizationId_example" // string | Owner organization ID
	resourceType := "resourceType_example" // string | Resource type
	resourceId := "resourceId_example" // string | Resource ID
	createResourceSharesRequest := openapiclient.CreateResourceShares_request{RoutesV3ShareChangesRequest: openapiclient.NewRoutesV3ShareChangesRequest()} // CreateResourceSharesRequest | Share delta request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResourceSharesAPI.UpdateResourceShares(context.Background(), organizationId, resourceType, resourceId).CreateResourceSharesRequest(createResourceSharesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResourceSharesAPI.UpdateResourceShares``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateResourceShares`: ModelsResourceShareChangeSet
	fmt.Fprintf(os.Stdout, "Response from `ResourceSharesAPI.UpdateResourceShares`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Owner organization ID | 
**resourceType** | **string** | Resource type | 
**resourceId** | **string** | Resource ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateResourceSharesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **createResourceSharesRequest** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md) | Share delta request | 

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

