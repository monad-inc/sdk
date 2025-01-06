# \OrganizationApiKeysAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganizationIdApiKeysApiKeyIdDelete**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysApiKeyIdDelete) | **Delete** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key
[**V2OrganizationIdApiKeysApiKeyIdGet**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysApiKeyIdGet) | **Get** /v2/{organization_id}/api_keys/{api_key_id} | Get API key
[**V2OrganizationIdApiKeysApiKeyIdPatch**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysApiKeyIdPatch) | **Patch** /v2/{organization_id}/api_keys/{api_key_id} | Update API key
[**V2OrganizationIdApiKeysApiKeyIdRegeneratePost**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysApiKeyIdRegeneratePost) | **Post** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key
[**V2OrganizationIdApiKeysGet**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysGet) | **Get** /v2/{organization_id}/api_keys | List API keys
[**V2OrganizationIdApiKeysPost**](OrganizationApiKeysAPI.md#V2OrganizationIdApiKeysPost) | **Post** /v2/{organization_id}/api_keys | Create API key



## V2OrganizationIdApiKeysApiKeyIdDelete

> string V2OrganizationIdApiKeysApiKeyIdDelete(ctx, organizationId, apiKeyId).Execute()

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
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdDelete(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysApiKeyIdDelete`: string
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysApiKeyIdDeleteRequest struct via the builder pattern


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


## V2OrganizationIdApiKeysApiKeyIdGet

> ModelsAPIKey V2OrganizationIdApiKeysApiKeyIdGet(ctx, organizationId, apiKeyId).Execute()

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
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdGet(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysApiKeyIdGet`: ModelsAPIKey
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysApiKeyIdGetRequest struct via the builder pattern


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


## V2OrganizationIdApiKeysApiKeyIdPatch

> ModelsAPIKey V2OrganizationIdApiKeysApiKeyIdPatch(ctx, organizationId, apiKeyId).RoutesV2UpdateAPIKeyRequest(routesV2UpdateAPIKeyRequest).Execute()

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
	routesV2UpdateAPIKeyRequest := *openapiclient.NewRoutesV2UpdateAPIKeyRequest("Name_example") // RoutesV2UpdateAPIKeyRequest | Request body for updating an API key

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdPatch(context.Background(), organizationId, apiKeyId).RoutesV2UpdateAPIKeyRequest(routesV2UpdateAPIKeyRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysApiKeyIdPatch`: ModelsAPIKey
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysApiKeyIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2UpdateAPIKeyRequest** | [**RoutesV2UpdateAPIKeyRequest**](RoutesV2UpdateAPIKeyRequest.md) | Request body for updating an API key | 

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


## V2OrganizationIdApiKeysApiKeyIdRegeneratePost

> ModelsAPIKeyWithToken V2OrganizationIdApiKeysApiKeyIdRegeneratePost(ctx, organizationId, apiKeyId).Execute()

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
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdRegeneratePost(context.Background(), organizationId, apiKeyId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdRegeneratePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysApiKeyIdRegeneratePost`: ModelsAPIKeyWithToken
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysApiKeyIdRegeneratePost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**apiKeyId** | **string** | API Key ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysApiKeyIdRegeneratePostRequest struct via the builder pattern


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


## V2OrganizationIdApiKeysGet

> ModelsAPIKeyList V2OrganizationIdApiKeysGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysGet`: ModelsAPIKeyList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysGetRequest struct via the builder pattern


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


## V2OrganizationIdApiKeysPost

> ModelsAPIKeyWithToken V2OrganizationIdApiKeysPost(ctx, organizationId).RoutesV2CreateAPIKeyRequest(routesV2CreateAPIKeyRequest).Execute()

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
	routesV2CreateAPIKeyRequest := *openapiclient.NewRoutesV2CreateAPIKeyRequest("ExpirationTime_example", "Name_example", "RoleId_example") // RoutesV2CreateAPIKeyRequest | Request body for creating an API key

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationApiKeysAPI.V2OrganizationIdApiKeysPost(context.Background(), organizationId).RoutesV2CreateAPIKeyRequest(routesV2CreateAPIKeyRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationApiKeysAPI.V2OrganizationIdApiKeysPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdApiKeysPost`: ModelsAPIKeyWithToken
	fmt.Fprintf(os.Stdout, "Response from `OrganizationApiKeysAPI.V2OrganizationIdApiKeysPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdApiKeysPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateAPIKeyRequest** | [**RoutesV2CreateAPIKeyRequest**](RoutesV2CreateAPIKeyRequest.md) | Request body for creating an API key | 

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

