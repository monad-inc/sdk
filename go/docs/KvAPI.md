# \KvAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3OrganizationIdKvLookupMetadataGet**](KvAPI.md#V3OrganizationIdKvLookupMetadataGet) | **Get** /v3/{organization_id}/kv_lookup/metadata | Get KV lookup metadata
[**V3OrganizationIdKvLookupSampleGet**](KvAPI.md#V3OrganizationIdKvLookupSampleGet) | **Get** /v3/{organization_id}/kv_lookup/sample | Get KV lookup sample entries
[**V3OrganizationIdKvLookupValueGet**](KvAPI.md#V3OrganizationIdKvLookupValueGet) | **Get** /v3/{organization_id}/kv_lookup/value | Get value by key from KV lookup



## V3OrganizationIdKvLookupMetadataGet

> KvlookupGetMetadataResponse V3OrganizationIdKvLookupMetadataGet(ctx, organizationId).ComponentId(componentId).Execute()

Get KV lookup metadata



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
	componentId := "componentId_example" // string | Component ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KvAPI.V3OrganizationIdKvLookupMetadataGet(context.Background(), organizationId).ComponentId(componentId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KvAPI.V3OrganizationIdKvLookupMetadataGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdKvLookupMetadataGet`: KvlookupGetMetadataResponse
	fmt.Fprintf(os.Stdout, "Response from `KvAPI.V3OrganizationIdKvLookupMetadataGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdKvLookupMetadataGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **componentId** | **string** | Component ID | 

### Return type

[**KvlookupGetMetadataResponse**](KvlookupGetMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdKvLookupSampleGet

> []KvlookupKVEntry V3OrganizationIdKvLookupSampleGet(ctx, organizationId).ComponentId(componentId).NumEntries(numEntries).Execute()

Get KV lookup sample entries



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
	componentId := "componentId_example" // string | Component ID
	numEntries := int32(56) // int32 | Number of sample entries to return

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KvAPI.V3OrganizationIdKvLookupSampleGet(context.Background(), organizationId).ComponentId(componentId).NumEntries(numEntries).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KvAPI.V3OrganizationIdKvLookupSampleGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdKvLookupSampleGet`: []KvlookupKVEntry
	fmt.Fprintf(os.Stdout, "Response from `KvAPI.V3OrganizationIdKvLookupSampleGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdKvLookupSampleGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **componentId** | **string** | Component ID | 
 **numEntries** | **int32** | Number of sample entries to return | 

### Return type

[**[]KvlookupKVEntry**](KvlookupKVEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdKvLookupValueGet

> KvlookupKVEntry V3OrganizationIdKvLookupValueGet(ctx, organizationId).ComponentId(componentId).Key(key).Execute()

Get value by key from KV lookup



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
	componentId := "componentId_example" // string | Component ID
	key := "key_example" // string | Key to look up

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KvAPI.V3OrganizationIdKvLookupValueGet(context.Background(), organizationId).ComponentId(componentId).Key(key).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KvAPI.V3OrganizationIdKvLookupValueGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdKvLookupValueGet`: KvlookupKVEntry
	fmt.Fprintf(os.Stdout, "Response from `KvAPI.V3OrganizationIdKvLookupValueGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdKvLookupValueGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **componentId** | **string** | Component ID | 
 **key** | **string** | Key to look up | 

### Return type

[**KvlookupKVEntry**](KvlookupKVEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

