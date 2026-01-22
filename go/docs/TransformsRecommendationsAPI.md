# \TransformsRecommendationsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3OrganizationIdTransformRecommendationsOptimizersGet**](TransformsRecommendationsAPI.md#V3OrganizationIdTransformRecommendationsOptimizersGet) | **Get** /v3/{organization_id}/transform_recommendations/optimizers | List available transform optimizers
[**V3OrganizationIdTransformRecommendationsPost**](TransformsRecommendationsAPI.md#V3OrganizationIdTransformRecommendationsPost) | **Post** /v3/{organization_id}/transform_recommendations | Create transform recommendation



## V3OrganizationIdTransformRecommendationsOptimizersGet

> []RoutesV3OptimizerType V3OrganizationIdTransformRecommendationsOptimizersGet(ctx, organizationId).Execute()

List available transform optimizers



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
	resp, r, err := apiClient.TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsOptimizersGet(context.Background(), organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsOptimizersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdTransformRecommendationsOptimizersGet`: []RoutesV3OptimizerType
	fmt.Fprintf(os.Stdout, "Response from `TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsOptimizersGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdTransformRecommendationsOptimizersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]RoutesV3OptimizerType**](RoutesV3OptimizerType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V3OrganizationIdTransformRecommendationsPost

> RoutesV3SecurityDataAnalysis V3OrganizationIdTransformRecommendationsPost(ctx, organizationId).RoutesV3TransformRecommendationRequest(routesV3TransformRecommendationRequest).Execute()

Create transform recommendation



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
	routesV3TransformRecommendationRequest := *openapiclient.NewRoutesV3TransformRecommendationRequest() // RoutesV3TransformRecommendationRequest | Security data to analyze

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsPost(context.Background(), organizationId).RoutesV3TransformRecommendationRequest(routesV3TransformRecommendationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdTransformRecommendationsPost`: RoutesV3SecurityDataAnalysis
	fmt.Fprintf(os.Stdout, "Response from `TransformsRecommendationsAPI.V3OrganizationIdTransformRecommendationsPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdTransformRecommendationsPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3TransformRecommendationRequest** | [**RoutesV3TransformRecommendationRequest**](RoutesV3TransformRecommendationRequest.md) | Security data to analyze | 

### Return type

[**RoutesV3SecurityDataAnalysis**](RoutesV3SecurityDataAnalysis.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

