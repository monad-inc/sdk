# \OrganizationMCPRegistrationsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListMCPClientRegistrations**](OrganizationMCPRegistrationsAPI.md#ListMCPClientRegistrations) | **Get** /v2/{organization_id}/mcp/registrations | List MCP client registrations
[**RevokeMCPClientRegistration**](OrganizationMCPRegistrationsAPI.md#RevokeMCPClientRegistration) | **Delete** /v2/{organization_id}/mcp/registrations/{client_id} | Revoke an MCP client registration



## ListMCPClientRegistrations

> ModelsMCPClientRegistrationList ListMCPClientRegistrations(ctx, organizationId).OwnedBy(ownedBy).Limit(limit).Offset(offset).Execute()

List MCP client registrations



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
	ownedBy := "ownedBy_example" // string | Set to `me` to scope to the caller's own registrations (optional)
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationMCPRegistrationsAPI.ListMCPClientRegistrations(context.Background(), organizationId).OwnedBy(ownedBy).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationMCPRegistrationsAPI.ListMCPClientRegistrations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMCPClientRegistrations`: ModelsMCPClientRegistrationList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationMCPRegistrationsAPI.ListMCPClientRegistrations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMCPClientRegistrationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ownedBy** | **string** | Set to &#x60;me&#x60; to scope to the caller&#39;s own registrations | 
 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsMCPClientRegistrationList**](ModelsMCPClientRegistrationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RevokeMCPClientRegistration

> RevokeMCPClientRegistration(ctx, organizationId, clientId).Execute()

Revoke an MCP client registration



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
	clientId := "clientId_example" // string | MCP client registration ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.OrganizationMCPRegistrationsAPI.RevokeMCPClientRegistration(context.Background(), organizationId, clientId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationMCPRegistrationsAPI.RevokeMCPClientRegistration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**clientId** | **string** | MCP client registration ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiRevokeMCPClientRegistrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

