# \OrganizationEnrichmentsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3OrganizationIdEnrichmentsEnrichmentIdDelete**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsEnrichmentIdDelete) | **Delete** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**V3OrganizationIdEnrichmentsEnrichmentIdGet**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsEnrichmentIdGet) | **Get** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**V3OrganizationIdEnrichmentsEnrichmentIdPatch**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsEnrichmentIdPatch) | **Patch** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment
[**V3OrganizationIdEnrichmentsGet**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsGet) | **Get** /v3/{organization_id}/enrichments | List enrichments
[**V3OrganizationIdEnrichmentsPost**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsPost) | **Post** /v3/{organization_id}/enrichments | Create enrichment
[**V3OrganizationIdEnrichmentsTestConnectionPost**](OrganizationEnrichmentsAPI.md#V3OrganizationIdEnrichmentsTestConnectionPost) | **Post** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection



## V3OrganizationIdEnrichmentsEnrichmentIdDelete

> RoutesV3SuccessResponse V3OrganizationIdEnrichmentsEnrichmentIdDelete(ctx, organizationId, enrichmentId).Execute()

Delete enrichment



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
	enrichmentId := "enrichmentId_example" // string | Enrichment ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdDelete(context.Background(), organizationId, enrichmentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsEnrichmentIdDelete`: RoutesV3SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsEnrichmentIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdEnrichmentsEnrichmentIdGet

> ModelsEnrichment V3OrganizationIdEnrichmentsEnrichmentIdGet(ctx, organizationId, enrichmentId).Execute()

Get enrichment



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
	enrichmentId := "enrichmentId_example" // string | Enrichment ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdGet(context.Background(), organizationId, enrichmentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsEnrichmentIdGet`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsEnrichmentIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdEnrichmentsEnrichmentIdPatch

> ModelsEnrichment V3OrganizationIdEnrichmentsEnrichmentIdPatch(ctx, organizationId, enrichmentId).RoutesV3UpdateEnrichmentRequest(routesV3UpdateEnrichmentRequest).TestConnection(testConnection).Execute()

Update enrichment



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
	enrichmentId := "enrichmentId_example" // string | Enrichment ID
	routesV3UpdateEnrichmentRequest := *openapiclient.NewRoutesV3UpdateEnrichmentRequest() // RoutesV3UpdateEnrichmentRequest | Enrichment configuration update
	testConnection := true // bool | Test connection before updating the enrichment (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdPatch(context.Background(), organizationId, enrichmentId).RoutesV3UpdateEnrichmentRequest(routesV3UpdateEnrichmentRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsEnrichmentIdPatch`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsEnrichmentIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsEnrichmentIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3UpdateEnrichmentRequest** | [**RoutesV3UpdateEnrichmentRequest**](RoutesV3UpdateEnrichmentRequest.md) | Enrichment configuration update | 
 **testConnection** | **bool** | Test connection before updating the enrichment | 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdEnrichmentsGet

> ModelsEnrichmentList V3OrganizationIdEnrichmentsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List enrichments



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
	limit := int32(56) // int32 | Number of results to return (default 100) (optional)
	offset := int32(56) // int32 | Number of results to skip (default 0) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsGet`: ModelsEnrichmentList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Number of results to return (default 100) | 
 **offset** | **int32** | Number of results to skip (default 0) | 

### Return type

[**ModelsEnrichmentList**](ModelsEnrichmentList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdEnrichmentsPost

> ModelsEnrichment V3OrganizationIdEnrichmentsPost(ctx, organizationId).RoutesV3CreateEnrichmentRequest(routesV3CreateEnrichmentRequest).TestConnection(testConnection).Execute()

Create enrichment



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
	routesV3CreateEnrichmentRequest := *openapiclient.NewRoutesV3CreateEnrichmentRequest() // RoutesV3CreateEnrichmentRequest | Enrichment configuration
	testConnection := true // bool | Test connection before creating the enrichment (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsPost(context.Background(), organizationId).RoutesV3CreateEnrichmentRequest(routesV3CreateEnrichmentRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsPost`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3CreateEnrichmentRequest** | [**RoutesV3CreateEnrichmentRequest**](RoutesV3CreateEnrichmentRequest.md) | Enrichment configuration | 
 **testConnection** | **bool** | Test connection before creating the enrichment | 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdEnrichmentsTestConnectionPost

> RoutesV3SuccessResponse V3OrganizationIdEnrichmentsTestConnectionPost(ctx, organizationId).RoutesV3TestEnrichmentConnectionRequest(routesV3TestEnrichmentConnectionRequest).Execute()

Test enrichment connection



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
	routesV3TestEnrichmentConnectionRequest := *openapiclient.NewRoutesV3TestEnrichmentConnectionRequest() // RoutesV3TestEnrichmentConnectionRequest | Enrichment configuration to test

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsTestConnectionPost(context.Background(), organizationId).RoutesV3TestEnrichmentConnectionRequest(routesV3TestEnrichmentConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsTestConnectionPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsTestConnectionPost`: RoutesV3SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.V3OrganizationIdEnrichmentsTestConnectionPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsTestConnectionPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3TestEnrichmentConnectionRequest** | [**RoutesV3TestEnrichmentConnectionRequest**](RoutesV3TestEnrichmentConnectionRequest.md) | Enrichment configuration to test | 

### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

