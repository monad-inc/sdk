# \ConnectionsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3OrganizationIdConnectionsConnectionIdDelete**](ConnectionsAPI.md#V3OrganizationIdConnectionsConnectionIdDelete) | **Delete** /v3/{organization_id}/connections/{connection_id} | Delete connection
[**V3OrganizationIdConnectionsConnectionIdGet**](ConnectionsAPI.md#V3OrganizationIdConnectionsConnectionIdGet) | **Get** /v3/{organization_id}/connections/{connection_id} | Get connection by ID
[**V3OrganizationIdConnectionsConnectionIdPatch**](ConnectionsAPI.md#V3OrganizationIdConnectionsConnectionIdPatch) | **Patch** /v3/{organization_id}/connections/{connection_id} | Update connection
[**V3OrganizationIdConnectionsGet**](ConnectionsAPI.md#V3OrganizationIdConnectionsGet) | **Get** /v3/{organization_id}/connections | Get all connections
[**V3OrganizationIdConnectionsPost**](ConnectionsAPI.md#V3OrganizationIdConnectionsPost) | **Post** /v3/{organization_id}/connections | Create a new connection



## V3OrganizationIdConnectionsConnectionIdDelete

> V3OrganizationIdConnectionsConnectionIdDelete(ctx, organizationId, connectionId).Execute()

Delete connection



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
	connectionId := "connectionId_example" // string | Connection ID to delete

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdDelete(context.Background(), organizationId, connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**connectionId** | **string** | Connection ID to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdConnectionsConnectionIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdConnectionsConnectionIdGet

> ModelsConnection V3OrganizationIdConnectionsConnectionIdGet(ctx, organizationId, connectionId).Execute()

Get connection by ID



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
	connectionId := "connectionId_example" // string | Connection ID to retrieve

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdGet(context.Background(), organizationId, connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdConnectionsConnectionIdGet`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**connectionId** | **string** | Connection ID to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdConnectionsConnectionIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdConnectionsConnectionIdPatch

> ModelsConnection V3OrganizationIdConnectionsConnectionIdPatch(ctx, organizationId, connectionId).RoutesV3UpdateConnectionRequest(routesV3UpdateConnectionRequest).Execute()

Update connection



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
	connectionId := "connectionId_example" // string | Connection ID to update
	routesV3UpdateConnectionRequest := *openapiclient.NewRoutesV3UpdateConnectionRequest() // RoutesV3UpdateConnectionRequest | Request body for updating a connection

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdPatch(context.Background(), organizationId, connectionId).RoutesV3UpdateConnectionRequest(routesV3UpdateConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdConnectionsConnectionIdPatch`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3OrganizationIdConnectionsConnectionIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**connectionId** | **string** | Connection ID to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdConnectionsConnectionIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3UpdateConnectionRequest** | [**RoutesV3UpdateConnectionRequest**](RoutesV3UpdateConnectionRequest.md) | Request body for updating a connection | 

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdConnectionsGet

> ModelsConnectionList V3OrganizationIdConnectionsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

Get all connections



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3OrganizationIdConnectionsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3OrganizationIdConnectionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdConnectionsGet`: ModelsConnectionList
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3OrganizationIdConnectionsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdConnectionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsConnectionList**](ModelsConnectionList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdConnectionsPost

> ModelsConnection V3OrganizationIdConnectionsPost(ctx, organizationId).RoutesV3CreateConnectionRequest(routesV3CreateConnectionRequest).Execute()

Create a new connection



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
	routesV3CreateConnectionRequest := *openapiclient.NewRoutesV3CreateConnectionRequest() // RoutesV3CreateConnectionRequest | Request body for creating a connection

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3OrganizationIdConnectionsPost(context.Background(), organizationId).RoutesV3CreateConnectionRequest(routesV3CreateConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3OrganizationIdConnectionsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdConnectionsPost`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3OrganizationIdConnectionsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdConnectionsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3CreateConnectionRequest** | [**RoutesV3CreateConnectionRequest**](RoutesV3CreateConnectionRequest.md) | Request body for creating a connection | 

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

