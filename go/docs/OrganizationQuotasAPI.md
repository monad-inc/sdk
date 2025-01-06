# \OrganizationQuotasAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganizationIdQuotasGet**](OrganizationQuotasAPI.md#V2OrganizationIdQuotasGet) | **Get** /v2/{organization_id}/quotas | Get Organization Quotas



## V2OrganizationIdQuotasGet

> ModelsQuotaList V2OrganizationIdQuotasGet(ctx, organizationId).Limit(limit).Offset(offset).Body(body).Execute()

Get Organization Quotas



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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationQuotasAPI.V2OrganizationIdQuotasGet(context.Background(), organizationId).Limit(limit).Offset(offset).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationQuotasAPI.V2OrganizationIdQuotasGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdQuotasGet`: ModelsQuotaList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationQuotasAPI.V2OrganizationIdQuotasGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdQuotasGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 
 **body** | **map[string]interface{}** |  | 

### Return type

[**ModelsQuotaList**](ModelsQuotaList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

