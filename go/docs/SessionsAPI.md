# \SessionsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateSession**](SessionsAPI.md#CreateSession) | **Post** /v3/sessions | Mint a short-lived API token, optionally scoped to a single org



## CreateSession

> RoutesV3CreateSessionResponse CreateSession(ctx).CreateSessionRequest(createSessionRequest).Execute()

Mint a short-lived API token, optionally scoped to a single org



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
	createSessionRequest := openapiclient.CreateSession_request{RoutesV3CreateSessionRequest: openapiclient.NewRoutesV3CreateSessionRequest()} // CreateSessionRequest | Session options (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SessionsAPI.CreateSession(context.Background()).CreateSessionRequest(createSessionRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SessionsAPI.CreateSession``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSession`: RoutesV3CreateSessionResponse
	fmt.Fprintf(os.Stdout, "Response from `SessionsAPI.CreateSession`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSessionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSessionRequest** | [**CreateSessionRequest**](CreateSessionRequest.md) | Session options | 

### Return type

[**RoutesV3CreateSessionResponse**](RoutesV3CreateSessionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

