# \OrganizationsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateChildOrganization**](OrganizationsAPI.md#CreateChildOrganization) | **Post** /v3/{organization_id}/organizations | Create child organization
[**CreateOrganization**](OrganizationsAPI.md#CreateOrganization) | **Post** /v1/organizations | Create organization
[**DeleteChildOrganization**](OrganizationsAPI.md#DeleteChildOrganization) | **Delete** /v3/{organization_id}/organizations/{child_organization_id} | Delete child organization
[**DeleteOrganization**](OrganizationsAPI.md#DeleteOrganization) | **Delete** /v1/organizations/{organization_id} | Delete organization
[**GetStorageTypeSummaryByType**](OrganizationsAPI.md#GetStorageTypeSummaryByType) | **Get** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**ListChildOrganizations**](OrganizationsAPI.md#ListChildOrganizations) | **Get** /v3/{organization_id}/organizations | List child organizations
[**ListUserOrganizations**](OrganizationsAPI.md#ListUserOrganizations) | **Get** /v1/organizations | List organizations for user
[**UpdateChildOrganization**](OrganizationsAPI.md#UpdateChildOrganization) | **Patch** /v3/{organization_id}/organizations/{child_organization_id} | Update child organization
[**UpdateOrganization**](OrganizationsAPI.md#UpdateOrganization) | **Patch** /v1/organizations/{organization_id} | Update organization



## CreateChildOrganization

> GithubComMonadIncCorePkgTypesModelsOrganization CreateChildOrganization(ctx, organizationId).RoutesV3CreateChildOrganizationRequest(routesV3CreateChildOrganizationRequest).Execute()

Create child organization



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
	organizationId := "organizationId_example" // string | Parent Organization ID
	routesV3CreateChildOrganizationRequest := *openapiclient.NewRoutesV3CreateChildOrganizationRequest() // RoutesV3CreateChildOrganizationRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.CreateChildOrganization(context.Background(), organizationId).RoutesV3CreateChildOrganizationRequest(routesV3CreateChildOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.CreateChildOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateChildOrganization`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.CreateChildOrganization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Parent Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateChildOrganizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3CreateChildOrganizationRequest** | [**RoutesV3CreateChildOrganizationRequest**](RoutesV3CreateChildOrganizationRequest.md) | Request body | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateOrganization

> GithubComMonadIncCorePkgTypesModelsOrganization CreateOrganization(ctx).RoutesCreateOrganizationRequest(routesCreateOrganizationRequest).Execute()

Create organization



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
	routesCreateOrganizationRequest := *openapiclient.NewRoutesCreateOrganizationRequest("Name_example") // RoutesCreateOrganizationRequest | Request body for creating an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.CreateOrganization(context.Background()).RoutesCreateOrganizationRequest(routesCreateOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.CreateOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateOrganization`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.CreateOrganization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateOrganizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateOrganizationRequest** | [**RoutesCreateOrganizationRequest**](RoutesCreateOrganizationRequest.md) | Request body for creating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteChildOrganization

> DeleteChildOrganization(ctx, organizationId, childOrganizationId).Execute()

Delete child organization



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
	organizationId := "organizationId_example" // string | Parent Organization ID
	childOrganizationId := "childOrganizationId_example" // string | Child Organization ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.OrganizationsAPI.DeleteChildOrganization(context.Background(), organizationId, childOrganizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.DeleteChildOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Parent Organization ID | 
**childOrganizationId** | **string** | Child Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChildOrganizationRequest struct via the builder pattern


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


## DeleteOrganization

> map[string]interface{} DeleteOrganization(ctx, organizationId).Execute()

Delete organization



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.DeleteOrganization(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.DeleteOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteOrganization`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.DeleteOrganization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOrganizationRequest struct via the builder pattern


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


## GetStorageTypeSummaryByType

> ModelsStorageTypeSummaryResponse GetStorageTypeSummaryByType(ctx, organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()

Get storage type cost summary by type



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
	storageType := "storageType_example" // string | Storage type (e.g., s3, dev-null, bigquery)
	start := "start_example" // string | ISO3339 start time, default 6 hours ago (optional)
	end := "end_example" // string | ISO3339 end time, default now (optional)
	billingType := "billingType_example" // string | Filter by billing type (billable|non_billable) (optional)
	pipelineId := "pipelineId_example" // string | Filter to specific pipeline (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.GetStorageTypeSummaryByType(context.Background(), organizationId, storageType).Start(start).End(end).BillingType(billingType).PipelineId(pipelineId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.GetStorageTypeSummaryByType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStorageTypeSummaryByType`: ModelsStorageTypeSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.GetStorageTypeSummaryByType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**storageType** | **string** | Storage type (e.g., s3, dev-null, bigquery) | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStorageTypeSummaryByTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **start** | **string** | ISO3339 start time, default 6 hours ago | 
 **end** | **string** | ISO3339 end time, default now | 
 **billingType** | **string** | Filter by billing type (billable|non_billable) | 
 **pipelineId** | **string** | Filter to specific pipeline | 

### Return type

[**ModelsStorageTypeSummaryResponse**](ModelsStorageTypeSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListChildOrganizations

> ModelsUserOrganizationList ListChildOrganizations(ctx, organizationId).Limit(limit).Offset(offset).NameSearch(nameSearch).Execute()

List child organizations



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
	organizationId := "organizationId_example" // string | Parent Organization ID
	limit := int32(56) // int32 | Limit the number of organizations returned (default: 10) (optional)
	offset := int32(56) // int32 | Offset the organizations returned (default: 0) (optional)
	nameSearch := "nameSearch_example" // string | If provided, only return organizations with names that contain the search string (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.ListChildOrganizations(context.Background(), organizationId).Limit(limit).Offset(offset).NameSearch(nameSearch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.ListChildOrganizations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListChildOrganizations`: ModelsUserOrganizationList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.ListChildOrganizations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Parent Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListChildOrganizationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of organizations returned (default: 10) | 
 **offset** | **int32** | Offset the organizations returned (default: 0) | 
 **nameSearch** | **string** | If provided, only return organizations with names that contain the search string | 

### Return type

[**ModelsUserOrganizationList**](ModelsUserOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListUserOrganizations

> ModelsOrganizationList ListUserOrganizations(ctx).Limit(limit).Offset(offset).NoChildren(noChildren).ParentOrganizationId(parentOrganizationId).NameSearch(nameSearch).Execute()

List organizations for user



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
	limit := int32(56) // int32 | Limit the number of organizations returned (default: 10) (optional)
	offset := int32(56) // int32 | Offset the organizations returned (default: 0) (optional)
	noChildren := true // bool | If true, only return organizations that are directly associated with the user, not child organizations (default: false) (optional)
	parentOrganizationId := "parentOrganizationId_example" // string | If provided, only return organizations that are children of the specified parent organization (optional)
	nameSearch := "nameSearch_example" // string | If provided, only return organizations with names that contain the search string (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.ListUserOrganizations(context.Background()).Limit(limit).Offset(offset).NoChildren(noChildren).ParentOrganizationId(parentOrganizationId).NameSearch(nameSearch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.ListUserOrganizations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUserOrganizations`: ModelsOrganizationList
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.ListUserOrganizations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserOrganizationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Limit the number of organizations returned (default: 10) | 
 **offset** | **int32** | Offset the organizations returned (default: 0) | 
 **noChildren** | **bool** | If true, only return organizations that are directly associated with the user, not child organizations (default: false) | 
 **parentOrganizationId** | **string** | If provided, only return organizations that are children of the specified parent organization | 
 **nameSearch** | **string** | If provided, only return organizations with names that contain the search string | 

### Return type

[**ModelsOrganizationList**](ModelsOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateChildOrganization

> GithubComMonadIncCorePkgTypesModelsOrganization UpdateChildOrganization(ctx, organizationId, childOrganizationId).RoutesV3UpdateChildOrganizationRequest(routesV3UpdateChildOrganizationRequest).Execute()

Update child organization



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
	organizationId := "organizationId_example" // string | Parent Organization ID
	childOrganizationId := "childOrganizationId_example" // string | Child Organization ID
	routesV3UpdateChildOrganizationRequest := *openapiclient.NewRoutesV3UpdateChildOrganizationRequest() // RoutesV3UpdateChildOrganizationRequest | Request body

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.UpdateChildOrganization(context.Background(), organizationId, childOrganizationId).RoutesV3UpdateChildOrganizationRequest(routesV3UpdateChildOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.UpdateChildOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateChildOrganization`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.UpdateChildOrganization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Parent Organization ID | 
**childOrganizationId** | **string** | Child Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateChildOrganizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3UpdateChildOrganizationRequest** | [**RoutesV3UpdateChildOrganizationRequest**](RoutesV3UpdateChildOrganizationRequest.md) | Request body | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOrganization

> GithubComMonadIncCorePkgTypesModelsOrganization UpdateOrganization(ctx, organizationId).RoutesUpdateOrganizationRequest(routesUpdateOrganizationRequest).Execute()

Update organization



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
	routesUpdateOrganizationRequest := *openapiclient.NewRoutesUpdateOrganizationRequest("Name_example") // RoutesUpdateOrganizationRequest | Request body for updating an organization

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OrganizationsAPI.UpdateOrganization(context.Background(), organizationId).RoutesUpdateOrganizationRequest(routesUpdateOrganizationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OrganizationsAPI.UpdateOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateOrganization`: GithubComMonadIncCorePkgTypesModelsOrganization
	fmt.Fprintf(os.Stdout, "Response from `OrganizationsAPI.UpdateOrganization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOrganizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesUpdateOrganizationRequest** | [**RoutesUpdateOrganizationRequest**](RoutesUpdateOrganizationRequest.md) | Request body for updating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

