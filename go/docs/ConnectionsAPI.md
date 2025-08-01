# \ConnectionsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3ConnectionsConnectionIdDelete**](ConnectionsAPI.md#V3ConnectionsConnectionIdDelete) | **Delete** /v3/connections/{connection_id} | Delete connection
[**V3ConnectionsConnectionIdGet**](ConnectionsAPI.md#V3ConnectionsConnectionIdGet) | **Get** /v3/connections/{connection_id} | Get connection by ID
[**V3ConnectionsConnectionIdPatch**](ConnectionsAPI.md#V3ConnectionsConnectionIdPatch) | **Patch** /v3/connections/{connection_id} | Update connection
[**V3ConnectionsGet**](ConnectionsAPI.md#V3ConnectionsGet) | **Get** /v3/connections | Get all connections
[**V3ConnectionsPost**](ConnectionsAPI.md#V3ConnectionsPost) | **Post** /v3/connections | Create a new connection



## V3ConnectionsConnectionIdDelete

> V3ConnectionsConnectionIdDelete(ctx, connectionId).Execute()

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
	connectionId := "connectionId_example" // string | Connection ID to delete

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ConnectionsAPI.V3ConnectionsConnectionIdDelete(context.Background(), connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3ConnectionsConnectionIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdDeleteRequest struct via the builder pattern


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


## V3ConnectionsConnectionIdGet

> ModelsConnection V3ConnectionsConnectionIdGet(ctx, connectionId).Execute()

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
	connectionId := "connectionId_example" // string | Connection ID to retrieve

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3ConnectionsConnectionIdGet(context.Background(), connectionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3ConnectionsConnectionIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdGet`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3ConnectionsConnectionIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdGetRequest struct via the builder pattern


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


## V3ConnectionsConnectionIdPatch

> ModelsConnection V3ConnectionsConnectionIdPatch(ctx, connectionId).RoutesV3UpdateConnectionRequest(routesV3UpdateConnectionRequest).Execute()

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
	connectionId := "connectionId_example" // string | Connection ID to update
	routesV3UpdateConnectionRequest := *openapiclient.NewRoutesV3UpdateConnectionRequest() // RoutesV3UpdateConnectionRequest | Request body for updating a connection

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3ConnectionsConnectionIdPatch(context.Background(), connectionId).RoutesV3UpdateConnectionRequest(routesV3UpdateConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3ConnectionsConnectionIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsConnectionIdPatch`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3ConnectionsConnectionIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionId** | **string** | Connection ID to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsConnectionIdPatchRequest struct via the builder pattern


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


## V3ConnectionsGet

> ModelsConnectionList V3ConnectionsGet(ctx).Limit(limit).Offset(offset).Execute()

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
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3ConnectionsGet(context.Background()).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3ConnectionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsGet`: ModelsConnectionList
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3ConnectionsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsGetRequest struct via the builder pattern


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


## V3ConnectionsPost

> ModelsConnection V3ConnectionsPost(ctx).RoutesV3CreateConnectionRequest(routesV3CreateConnectionRequest).Execute()

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
	routesV3CreateConnectionRequest := *openapiclient.NewRoutesV3CreateConnectionRequest() // RoutesV3CreateConnectionRequest | Request body for creating a connection

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConnectionsAPI.V3ConnectionsPost(context.Background()).RoutesV3CreateConnectionRequest(routesV3CreateConnectionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConnectionsAPI.V3ConnectionsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3ConnectionsPost`: ModelsConnection
	fmt.Fprintf(os.Stdout, "Response from `ConnectionsAPI.V3ConnectionsPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV3ConnectionsPostRequest struct via the builder pattern


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

