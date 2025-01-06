# \OrganizationInvitesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OrganizationIdInvitesPost**](OrganizationInvitesAPI.md#V1OrganizationIdInvitesPost) | **Post** /v1/{organization_id}/invites | Invite user to organization



## V1OrganizationIdInvitesPost

> string V1OrganizationIdInvitesPost(ctx, organizationId).RoutesInviteUserToOrganizationRequest(routesInviteUserToOrganizationRequest).Execute()

Invite user to organization



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
	routesInviteUserToOrganizationRequest := *openapiclient.NewRoutesInviteUserToOrganizationRequest("Email_example", "RoleId_example") // RoutesInviteUserToOrganizationRequest | Request body for inviting a user to an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationInvitesAPI.V1OrganizationIdInvitesPost(context.Background(), organizationId).RoutesInviteUserToOrganizationRequest(routesInviteUserToOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationInvitesAPI.V1OrganizationIdInvitesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OrganizationIdInvitesPost`: string
	fmt.Fprintf(os.Stdout, "Response from `OrganizationInvitesAPI.V1OrganizationIdInvitesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OrganizationIdInvitesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesInviteUserToOrganizationRequest** | [**RoutesInviteUserToOrganizationRequest**](RoutesInviteUserToOrganizationRequest.md) | Request body for inviting a user to an organization | 

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

