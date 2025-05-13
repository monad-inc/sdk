# \EnrichmentsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet**](EnrichmentsAPI.md#V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet) | **Get** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta
[**V3OrganizationIdEnrichmentsMetaGet**](EnrichmentsAPI.md#V3OrganizationIdEnrichmentsMetaGet) | **Get** /v3/{organization_id}/enrichments_meta | List enrichments



## V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet

> EnrichmentConnectorMeta V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(ctx, organizationId, enrichmentTypeId).Execute()

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
	resp, r, err := apiClient.EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(context.Background(), organizationId, enrichmentTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet`: EnrichmentConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**enrichmentTypeId** | **string** | Enrichment type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetRequest struct via the builder pattern


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


## V3OrganizationIdEnrichmentsMetaGet

> []EnrichmentConnectorMeta V3OrganizationIdEnrichmentsMetaGet(ctx, organizationId).Execute()

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
	resp, r, err := apiClient.EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaGet(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdEnrichmentsMetaGet`: []EnrichmentConnectorMeta
	fmt.Fprintf(os.Stdout, "Response from `EnrichmentsAPI.V3OrganizationIdEnrichmentsMetaGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdEnrichmentsMetaGetRequest struct via the builder pattern


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

