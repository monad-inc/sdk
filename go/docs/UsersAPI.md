# \UsersAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1UsersGet**](UsersAPI.md#V1UsersGet) | **Get** /v1/users | Get your current user
[**V1UsersPost**](UsersAPI.md#V1UsersPost) | **Post** /v1/users | Create user
[**V3UsersMfaGet**](UsersAPI.md#V3UsersMfaGet) | **Get** /v3/users/mfa | Get MFA status
[**V3UsersMfaPost**](UsersAPI.md#V3UsersMfaPost) | **Post** /v3/users/mfa | Enable MFA



## V1UsersGet

> RoutesUserWithRoles V1UsersGet(ctx).Execute()

Get your current user



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
	resp, r, err := apiClient.UsersAPI.V1UsersGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UsersAPI.V1UsersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1UsersGet`: RoutesUserWithRoles
	fmt.Fprintf(os.Stdout, "Response from `UsersAPI.V1UsersGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersGetRequest struct via the builder pattern


### Return type

[**RoutesUserWithRoles**](RoutesUserWithRoles.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1UsersPost

> GithubComMonadIncCorePkgTypesModelsUser V1UsersPost(ctx).Body(body).Execute()

Create user



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
	body := map[string]interface{}{ ... } // map[string]interface{} |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.UsersAPI.V1UsersPost(context.Background()).Body(body).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UsersAPI.V1UsersPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1UsersPost`: GithubComMonadIncCorePkgTypesModelsUser
	fmt.Fprintf(os.Stdout, "Response from `UsersAPI.V1UsersPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV1UsersPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **map[string]interface{}** |  | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsUser**](GithubComMonadIncCorePkgTypesModelsUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3UsersMfaGet

> RoutesV3MFAStatusResponse V3UsersMfaGet(ctx).Execute()

Get MFA status



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
	resp, r, err := apiClient.UsersAPI.V3UsersMfaGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UsersAPI.V3UsersMfaGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3UsersMfaGet`: RoutesV3MFAStatusResponse
	fmt.Fprintf(os.Stdout, "Response from `UsersAPI.V3UsersMfaGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3UsersMfaGetRequest struct via the builder pattern


### Return type

[**RoutesV3MFAStatusResponse**](RoutesV3MFAStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3UsersMfaPost

> AuthenticationtypesMFAEnrollmentTicket V3UsersMfaPost(ctx).Execute()

Enable MFA



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
	resp, r, err := apiClient.UsersAPI.V3UsersMfaPost(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UsersAPI.V3UsersMfaPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3UsersMfaPost`: AuthenticationtypesMFAEnrollmentTicket
	fmt.Fprintf(os.Stdout, "Response from `UsersAPI.V3UsersMfaPost`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3UsersMfaPostRequest struct via the builder pattern


### Return type

[**AuthenticationtypesMFAEnrollmentTicket**](AuthenticationtypesMFAEnrollmentTicket.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

