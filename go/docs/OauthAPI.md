# \OauthAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1OauthTypeIdCallbackGet**](OauthAPI.md#V1OauthTypeIdCallbackGet) | **Get** /v1/oauth/{type_id}/callback | Oauth callback
[**V1OauthTypeIdOrganizationIdGet**](OauthAPI.md#V1OauthTypeIdOrganizationIdGet) | **Get** /v1/oauth/{type_id}/{organization_id} | Get oauth redirect



## V1OauthTypeIdCallbackGet

> map[string]interface{} V1OauthTypeIdCallbackGet(ctx, typeId).Execute()

Oauth callback



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
	typeId := "typeId_example" // string | component type ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OauthAPI.V1OauthTypeIdCallbackGet(context.Background(), typeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OauthAPI.V1OauthTypeIdCallbackGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OauthTypeIdCallbackGet`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OauthAPI.V1OauthTypeIdCallbackGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**typeId** | **string** | component type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OauthTypeIdCallbackGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

**map[string]interface{}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1OauthTypeIdOrganizationIdGet

> map[string]interface{} V1OauthTypeIdOrganizationIdGet(ctx, typeId, organizationId).Execute()

Get oauth redirect



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
	typeId := "typeId_example" // string | component type ID
	organizationId := "organizationId_example" // string | organization ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OauthAPI.V1OauthTypeIdOrganizationIdGet(context.Background(), typeId, organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OauthAPI.V1OauthTypeIdOrganizationIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V1OauthTypeIdOrganizationIdGet`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OauthAPI.V1OauthTypeIdOrganizationIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**typeId** | **string** | component type ID | 
**organizationId** | **string** | organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1OauthTypeIdOrganizationIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**map[string]interface{}**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

