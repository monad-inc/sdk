# \SecretsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganizationIdSecretsGet**](SecretsAPI.md#V2OrganizationIdSecretsGet) | **Get** /v2/{organization_id}/secrets | List secrets with components
[**V2OrganizationIdSecretsPost**](SecretsAPI.md#V2OrganizationIdSecretsPost) | **Post** /v2/{organization_id}/secrets | Create secret
[**V2OrganizationIdSecretsSecretIdDelete**](SecretsAPI.md#V2OrganizationIdSecretsSecretIdDelete) | **Delete** /v2/{organization_id}/secrets/{secret_id} | Delete secret
[**V2OrganizationIdSecretsSecretIdGet**](SecretsAPI.md#V2OrganizationIdSecretsSecretIdGet) | **Get** /v2/{organization_id}/secrets/{secret_id} | Get secret with components
[**V2OrganizationIdSecretsSecretIdPatch**](SecretsAPI.md#V2OrganizationIdSecretsSecretIdPatch) | **Patch** /v2/{organization_id}/secrets/{secret_id} | Update secret



## V2OrganizationIdSecretsGet

> ModelsSecretWithComponentsList V2OrganizationIdSecretsGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

List secrets with components



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
	limit := int32(56) // int32 | Limit number of results (optional)
	offset := int32(56) // int32 | Offset results (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SecretsAPI.V2OrganizationIdSecretsGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SecretsAPI.V2OrganizationIdSecretsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdSecretsGet`: ModelsSecretWithComponentsList
	fmt.Fprintf(os.Stdout, "Response from `SecretsAPI.V2OrganizationIdSecretsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdSecretsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit number of results | 
 **offset** | **int32** | Offset results | 

### Return type

[**ModelsSecretWithComponentsList**](ModelsSecretWithComponentsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdSecretsPost

> RoutesV2SecretResponse V2OrganizationIdSecretsPost(ctx, organizationId).RoutesV2CreateOrUpdateSecretRequest(routesV2CreateOrUpdateSecretRequest).Execute()

Create secret



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
	routesV2CreateOrUpdateSecretRequest := *openapiclient.NewRoutesV2CreateOrUpdateSecretRequest() // RoutesV2CreateOrUpdateSecretRequest | Secret to create

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SecretsAPI.V2OrganizationIdSecretsPost(context.Background(), organizationId).RoutesV2CreateOrUpdateSecretRequest(routesV2CreateOrUpdateSecretRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SecretsAPI.V2OrganizationIdSecretsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdSecretsPost`: RoutesV2SecretResponse
	fmt.Fprintf(os.Stdout, "Response from `SecretsAPI.V2OrganizationIdSecretsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdSecretsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV2CreateOrUpdateSecretRequest** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md) | Secret to create | 

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdSecretsSecretIdDelete

> V2OrganizationIdSecretsSecretIdDelete(ctx, organizationId, secretId).Execute()

Delete secret



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
	secretId := "secretId_example" // string | Secret ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SecretsAPI.V2OrganizationIdSecretsSecretIdDelete(context.Background(), organizationId, secretId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SecretsAPI.V2OrganizationIdSecretsSecretIdDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**secretId** | **string** | Secret ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdSecretsSecretIdDeleteRequest struct via the builder pattern


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


## V2OrganizationIdSecretsSecretIdGet

> ModelsSecretWithComponents V2OrganizationIdSecretsSecretIdGet(ctx, organizationId, secretId).Execute()

Get secret with components



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
	secretId := "secretId_example" // string | Secret ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SecretsAPI.V2OrganizationIdSecretsSecretIdGet(context.Background(), organizationId, secretId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SecretsAPI.V2OrganizationIdSecretsSecretIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdSecretsSecretIdGet`: ModelsSecretWithComponents
	fmt.Fprintf(os.Stdout, "Response from `SecretsAPI.V2OrganizationIdSecretsSecretIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**secretId** | **string** | Secret ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdSecretsSecretIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsSecretWithComponents**](ModelsSecretWithComponents.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganizationIdSecretsSecretIdPatch

> RoutesV2SecretResponse V2OrganizationIdSecretsSecretIdPatch(ctx, organizationId, secretId).RoutesV2CreateOrUpdateSecretRequest(routesV2CreateOrUpdateSecretRequest).Execute()

Update secret



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
	secretId := "secretId_example" // string | Secret ID
	routesV2CreateOrUpdateSecretRequest := *openapiclient.NewRoutesV2CreateOrUpdateSecretRequest() // RoutesV2CreateOrUpdateSecretRequest | Secret updates

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SecretsAPI.V2OrganizationIdSecretsSecretIdPatch(context.Background(), organizationId, secretId).RoutesV2CreateOrUpdateSecretRequest(routesV2CreateOrUpdateSecretRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SecretsAPI.V2OrganizationIdSecretsSecretIdPatch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganizationIdSecretsSecretIdPatch`: RoutesV2SecretResponse
	fmt.Fprintf(os.Stdout, "Response from `SecretsAPI.V2OrganizationIdSecretsSecretIdPatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**secretId** | **string** | Secret ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganizationIdSecretsSecretIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV2CreateOrUpdateSecretRequest** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md) | Secret updates | 

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

