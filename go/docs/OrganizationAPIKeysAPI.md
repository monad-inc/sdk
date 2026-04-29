# \OrganizationAPIKeysAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAPIKey**](OrganizationAPIKeysAPI.md#CreateAPIKey) | **Post** /v2/{organization_id}/api_keys | Create API key
[**DeleteAPIKey**](OrganizationAPIKeysAPI.md#DeleteAPIKey) | **Delete** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key
[**GetAPIKey**](OrganizationAPIKeysAPI.md#GetAPIKey) | **Get** /v2/{organization_id}/api_keys/{api_key_id} | Get API key
[**ListAPIKeys**](OrganizationAPIKeysAPI.md#ListAPIKeys) | **Get** /v2/{organization_id}/api_keys | List API keys
[**RegenerateAPIKey**](OrganizationAPIKeysAPI.md#RegenerateAPIKey) | **Post** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key
[**UpdateAPIKey**](OrganizationAPIKeysAPI.md#UpdateAPIKey) | **Patch** /v2/{organization_id}/api_keys/{api_key_id} | Update API key



## CreateAPIKey

> ModelsAPIKeyWithToken CreateAPIKey(ctx, organizationId).CreateAPIKeyRequest(createAPIKeyRequest).Execute()

Create API key



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
	createAPIKeyRequest := openapiclient.CreateAPIKey_request{RoutesV2CreateAPIKeyRequest: openapiclient.NewRoutesV2CreateAPIKeyRequest("ExpirationTime_example", "Name_example", "RoleId_example")} // CreateAPIKeyRequest | Request body for creating an API key

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationAPIKeysAPI.CreateAPIKey(context.Background(), organizationId).CreateAPIKeyRequest(createAPIKeyRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.CreateAPIKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAPIKey`: ModelsAPIKeyWithToken
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.CreateAPIKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAPIKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createAPIKeyRequest** | [**CreateAPIKeyRequest**](CreateAPIKeyRequest.md) | Request body for creating an API key | 

### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAPIKey

> string DeleteAPIKey(ctx, organizationId, apiKeyId).Execute()

Delete API key



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
	apiKeyId := "apiKeyId_example" // string | API Key ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationAPIKeysAPI.DeleteAPIKey(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.DeleteAPIKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteAPIKey`: string
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.DeleteAPIKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAPIKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAPIKey

> ModelsAPIKey GetAPIKey(ctx, organizationId, apiKeyId).Execute()

Get API key



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
	apiKeyId := "apiKeyId_example" // string | API Key ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationAPIKeysAPI.GetAPIKey(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.GetAPIKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAPIKey`: ModelsAPIKey
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.GetAPIKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAPIKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListAPIKeys

> ModelsAPIKeyList ListAPIKeys(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List API keys



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
	resp, r, err := apiClient.OrganizationAPIKeysAPI.ListAPIKeys(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.ListAPIKeys``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAPIKeys`: ModelsAPIKeyList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.ListAPIKeys`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAPIKeysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsAPIKeyList**](ModelsAPIKeyList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RegenerateAPIKey

> ModelsAPIKeyWithToken RegenerateAPIKey(ctx, organizationId, apiKeyId).Execute()

Regenerate API key



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
	apiKeyId := "apiKeyId_example" // string | API Key ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationAPIKeysAPI.RegenerateAPIKey(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.RegenerateAPIKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RegenerateAPIKey`: ModelsAPIKeyWithToken
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.RegenerateAPIKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiRegenerateAPIKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAPIKey

> ModelsAPIKey UpdateAPIKey(ctx, organizationId, apiKeyId).UpdateAPIKeyRequest(updateAPIKeyRequest).Execute()

Update API key



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
	apiKeyId := "apiKeyId_example" // string | API Key ID
	updateAPIKeyRequest := openapiclient.UpdateAPIKey_request{RoutesV2UpdateAPIKeyRequest: openapiclient.NewRoutesV2UpdateAPIKeyRequest("Name_example")} // UpdateAPIKeyRequest | Request body for updating an API key

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationAPIKeysAPI.UpdateAPIKey(context.Background(), organizationId, apiKeyId).UpdateAPIKeyRequest(updateAPIKeyRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationAPIKeysAPI.UpdateAPIKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateAPIKey`: ModelsAPIKey
	fmt.Fprintf(os.Stdout, "Response from `OrganizationAPIKeysAPI.UpdateAPIKey`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAPIKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateAPIKeyRequest** | [**UpdateAPIKeyRequest**](UpdateAPIKeyRequest.md) | Request body for updating an API key | 

### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

