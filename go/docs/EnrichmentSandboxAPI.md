# \EnrichmentSandboxAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EnrichmentSandbox**](EnrichmentSandboxAPI.md#EnrichmentSandbox) | **Post** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record



## EnrichmentSandbox

> RoutesV3EnrichmentSandboxResponse EnrichmentSandbox(ctx, organizationId).EnrichmentSandboxRequest(enrichmentSandboxRequest).Execute()

Apply enrichment to record



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
	enrichmentSandboxRequest := openapiclient.EnrichmentSandbox_request{RoutesV3EnrichmentSandboxRequest: openapiclient.NewRoutesV3EnrichmentSandboxRequest()} // EnrichmentSandboxRequest | Enrichment configuration and record

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EnrichmentSandboxAPI.EnrichmentSandbox(context.Background(), organizationId).EnrichmentSandboxRequest(enrichmentSandboxRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EnrichmentSandboxAPI.EnrichmentSandbox``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EnrichmentSandbox`: RoutesV3EnrichmentSandboxResponse
	fmt.Fprintf(os.Stdout, "Response from `EnrichmentSandboxAPI.EnrichmentSandbox`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnrichmentSandboxRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **enrichmentSandboxRequest** | [**EnrichmentSandboxRequest**](EnrichmentSandboxRequest.md) | Enrichment configuration and record | 

### Return type

[**RoutesV3EnrichmentSandboxResponse**](RoutesV3EnrichmentSandboxResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

