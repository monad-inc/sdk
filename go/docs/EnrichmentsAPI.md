# \EnrichmentsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetEnrichmentTypeMeta**](EnrichmentsAPI.md#GetEnrichmentTypeMeta) | **Get** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta
[**ListEnrichmentTypes**](EnrichmentsAPI.md#ListEnrichmentTypes) | **Get** /v3/{organization_id}/enrichments_meta | List enrichments



## GetEnrichmentTypeMeta

> EnrichmentConnectorMeta GetEnrichmentTypeMeta(ctx, organizationId, enrichmentTypeId).Execute()

Get enrichment config meta



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
	enrichmentTypeId := "enrichmentTypeId_example" // string | Enrichment type ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EnrichmentsAPI.GetEnrichmentTypeMeta(context.Background(), organizationId, enrichmentTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EnrichmentsAPI.GetEnrichmentTypeMeta``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEnrichmentTypeMeta`: EnrichmentConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `EnrichmentsAPI.GetEnrichmentTypeMeta`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentTypeId** | **string** | Enrichment type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEnrichmentTypeMetaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**EnrichmentConnectorMeta**](EnrichmentConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListEnrichmentTypes

> []EnrichmentConnectorMeta ListEnrichmentTypes(ctx, organizationId).Execute()

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EnrichmentsAPI.ListEnrichmentTypes(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EnrichmentsAPI.ListEnrichmentTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListEnrichmentTypes`: []EnrichmentConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `EnrichmentsAPI.ListEnrichmentTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListEnrichmentTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]EnrichmentConnectorMeta**](EnrichmentConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

