# \AuthenticationAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1LoginCallbackGet**](AuthenticationAPI.md#V1LoginCallbackGet) | **Get** /v1/login/callback | Handle login callback
[**V1LoginGet**](AuthenticationAPI.md#V1LoginGet) | **Get** /v1/login | Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
[**V1LoginResendVerificationPost**](AuthenticationAPI.md#V1LoginResendVerificationPost) | **Post** /v1/login/resend-verification | Resend email verification
[**V1LoginTokenPost**](AuthenticationAPI.md#V1LoginTokenPost) | **Post** /v1/login/token | Get Authentication token



## V1LoginCallbackGet

> string V1LoginCallbackGet(ctx).Execute()

Handle login callback



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.V1LoginCallbackGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.V1LoginCallbackGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1LoginCallbackGet`: string
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.V1LoginCallbackGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1LoginCallbackGetRequest struct via the builder pattern


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1LoginGet

> V1LoginGet(ctx).Execute()

Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AuthenticationAPI.V1LoginGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.V1LoginGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1LoginGetRequest struct via the builder pattern


### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1LoginResendVerificationPost

> string V1LoginResendVerificationPost(ctx).RoutesResendVerificationRequest(routesResendVerificationRequest).Execute()

Resend email verification



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
	routesResendVerificationRequest := *openapiclient.NewRoutesResendVerificationRequest() // RoutesResendVerificationRequest | Resend verification request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.V1LoginResendVerificationPost(context.Background()).RoutesResendVerificationRequest(routesResendVerificationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.V1LoginResendVerificationPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1LoginResendVerificationPost`: string
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.V1LoginResendVerificationPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1LoginResendVerificationPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesResendVerificationRequest** | [**RoutesResendVerificationRequest**](RoutesResendVerificationRequest.md) | Resend verification request | 

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


## V1LoginTokenPost

> AuthenticationtypesTokenResponse V1LoginTokenPost(ctx).RoutesLoginRequest(routesLoginRequest).Execute()

Get Authentication token



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
	routesLoginRequest := *openapiclient.NewRoutesLoginRequest() // RoutesLoginRequest | Login request

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.V1LoginTokenPost(context.Background()).RoutesLoginRequest(routesLoginRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.V1LoginTokenPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1LoginTokenPost`: AuthenticationtypesTokenResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.V1LoginTokenPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1LoginTokenPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesLoginRequest** | [**RoutesLoginRequest**](RoutesLoginRequest.md) | Login request | 

### Return type

[**AuthenticationtypesTokenResponse**](AuthenticationtypesTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

