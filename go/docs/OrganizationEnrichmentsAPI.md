# \OrganizationEnrichmentsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateEnrichment**](OrganizationEnrichmentsAPI.md#CreateEnrichment) | **Post** /v3/{organization_id}/enrichments | Create enrichment
[**DeleteEnrichment**](OrganizationEnrichmentsAPI.md#DeleteEnrichment) | **Delete** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**GetEnrichment**](OrganizationEnrichmentsAPI.md#GetEnrichment) | **Get** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**ListEnrichments**](OrganizationEnrichmentsAPI.md#ListEnrichments) | **Get** /v3/{organization_id}/enrichments | List enrichments
[**ReplaceEnrichment**](OrganizationEnrichmentsAPI.md#ReplaceEnrichment) | **Put** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment
[**TestEnrichmentConnection**](OrganizationEnrichmentsAPI.md#TestEnrichmentConnection) | **Post** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection
[**UpdateEnrichment**](OrganizationEnrichmentsAPI.md#UpdateEnrichment) | **Patch** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment



## CreateEnrichment

> ModelsEnrichment CreateEnrichment(ctx, organizationId).CreateEnrichmentRequest(createEnrichmentRequest).TestConnection(testConnection).Execute()

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
	createEnrichmentRequest := openapiclient.CreateEnrichment_request{RoutesV3CreateEnrichmentRequest: openapiclient.NewRoutesV3CreateEnrichmentRequest()} // CreateEnrichmentRequest | Enrichment configuration
	testConnection := true // bool | Test connection before creating the enrichment (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.CreateEnrichment(context.Background(), organizationId).CreateEnrichmentRequest(createEnrichmentRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.CreateEnrichment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateEnrichment`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.CreateEnrichment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateEnrichmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createEnrichmentRequest** | [**CreateEnrichmentRequest**](CreateEnrichmentRequest.md) | Enrichment configuration | 
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


## DeleteEnrichment

> RoutesV3SuccessResponse DeleteEnrichment(ctx, organizationId, enrichmentId).Execute()

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
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.DeleteEnrichment(context.Background(), organizationId, enrichmentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.DeleteEnrichment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteEnrichment`: RoutesV3SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.DeleteEnrichment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEnrichmentRequest struct via the builder pattern


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


## GetEnrichment

> RoutesV3GetEnrichmentResponse GetEnrichment(ctx, organizationId, enrichmentId).Execute()

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
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.GetEnrichment(context.Background(), organizationId, enrichmentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.GetEnrichment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEnrichment`: RoutesV3GetEnrichmentResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.GetEnrichment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnrichmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**RoutesV3GetEnrichmentResponse**](RoutesV3GetEnrichmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListEnrichments

> ModelsEnrichmentList ListEnrichments(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.ListEnrichments(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.ListEnrichments``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListEnrichments`: ModelsEnrichmentList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.ListEnrichments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEnrichmentsRequest struct via the builder pattern


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


## ReplaceEnrichment

> ModelsEnrichment ReplaceEnrichment(ctx, organizationId, enrichmentId).ReplaceEnrichmentRequest(replaceEnrichmentRequest).TestConnection(testConnection).Execute()

Replace enrichment



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
	replaceEnrichmentRequest := openapiclient.ReplaceEnrichment_request{RoutesV3PutEnrichmentRequest: openapiclient.NewRoutesV3PutEnrichmentRequest()} // ReplaceEnrichmentRequest | Enrichment configuration update
	testConnection := true // bool | Test connection before updating the enrichment (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.ReplaceEnrichment(context.Background(), organizationId, enrichmentId).ReplaceEnrichmentRequest(replaceEnrichmentRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.ReplaceEnrichment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplaceEnrichment`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.ReplaceEnrichment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplaceEnrichmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **replaceEnrichmentRequest** | [**ReplaceEnrichmentRequest**](ReplaceEnrichmentRequest.md) | Enrichment configuration update | 
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


## TestEnrichmentConnection

> RoutesV3SuccessResponse TestEnrichmentConnection(ctx, organizationId).TestEnrichmentConnectionRequest(testEnrichmentConnectionRequest).Execute()

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
	testEnrichmentConnectionRequest := openapiclient.TestEnrichmentConnection_request{RoutesV3TestEnrichmentConnectionRequest: openapiclient.NewRoutesV3TestEnrichmentConnectionRequest()} // TestEnrichmentConnectionRequest | Enrichment configuration to test

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.TestEnrichmentConnection(context.Background(), organizationId).TestEnrichmentConnectionRequest(testEnrichmentConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.TestEnrichmentConnection``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestEnrichmentConnection`: RoutesV3SuccessResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.TestEnrichmentConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestEnrichmentConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **testEnrichmentConnectionRequest** | [**TestEnrichmentConnectionRequest**](TestEnrichmentConnectionRequest.md) | Enrichment configuration to test | 

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


## UpdateEnrichment

> ModelsEnrichment UpdateEnrichment(ctx, organizationId, enrichmentId).UpdateEnrichmentRequest(updateEnrichmentRequest).TestConnection(testConnection).Execute()

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
	updateEnrichmentRequest := openapiclient.UpdateEnrichment_request{RoutesV3UpdateEnrichmentRequest: openapiclient.NewRoutesV3UpdateEnrichmentRequest()} // UpdateEnrichmentRequest | Enrichment configuration update
	testConnection := true // bool | Test connection before updating the enrichment (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationEnrichmentsAPI.UpdateEnrichment(context.Background(), organizationId, enrichmentId).UpdateEnrichmentRequest(updateEnrichmentRequest).TestConnection(testConnection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationEnrichmentsAPI.UpdateEnrichment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateEnrichment`: ModelsEnrichment
	fmt.Fprintf(os.Stdout, "Response from `OrganizationEnrichmentsAPI.UpdateEnrichment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentId** | **string** | Enrichment ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateEnrichmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateEnrichmentRequest** | [**UpdateEnrichmentRequest**](UpdateEnrichmentRequest.md) | Enrichment configuration update | 
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

