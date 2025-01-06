# \DataAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdDataNodeIdGet**](DataAPI.md#V1OrganizationIdDataNodeIdGet) | **Get** /v1/{organization_id}/data/{node_id} | Stream node data



## V1OrganizationIdDataNodeIdGet

> string V1OrganizationIdDataNodeIdGet(ctx, organizationId, nodeId).Execute()

Stream node data



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
	nodeId := "nodeId_example" // string | Node ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DataAPI.V1OrganizationIdDataNodeIdGet(context.Background(), organizationId, nodeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DataAPI.V1OrganizationIdDataNodeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdDataNodeIdGet`: string
	fmt.Fprintf(os.Stdout, "Response from `DataAPI.V1OrganizationIdDataNodeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**nodeId** | **string** | Node ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdDataNodeIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/event-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

