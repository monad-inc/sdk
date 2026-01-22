# .TransformsRecommendationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdTransformRecommendationsOptimizersGet**](TransformsRecommendationsApi.md#v3OrganizationIdTransformRecommendationsOptimizersGet) | **GET** /v3/{organization_id}/transform_recommendations/optimizers | List available transform optimizers
[**v3OrganizationIdTransformRecommendationsPost**](TransformsRecommendationsApi.md#v3OrganizationIdTransformRecommendationsPost) | **POST** /v3/{organization_id}/transform_recommendations | Create transform recommendation


# **v3OrganizationIdTransformRecommendationsOptimizersGet**
> Array<RoutesV3OptimizerType> v3OrganizationIdTransformRecommendationsOptimizersGet()

List available transform optimizers

### Example


```typescript
import { createConfiguration, TransformsRecommendationsApi } from '';
import type { TransformsRecommendationsApiV3OrganizationIdTransformRecommendationsOptimizersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRecommendationsApi(configuration);

const request: TransformsRecommendationsApiV3OrganizationIdTransformRecommendationsOptimizersGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v3OrganizationIdTransformRecommendationsOptimizersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**Array<RoutesV3OptimizerType>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform recommendation created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdTransformRecommendationsPost**
> RoutesV3SecurityDataAnalysis v3OrganizationIdTransformRecommendationsPost(routesV3TransformRecommendationRequest)

Analyze security data and provide transformation recommendations

### Example


```typescript
import { createConfiguration, TransformsRecommendationsApi } from '';
import type { TransformsRecommendationsApiV3OrganizationIdTransformRecommendationsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRecommendationsApi(configuration);

const request: TransformsRecommendationsApiV3OrganizationIdTransformRecommendationsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Security data to analyze
  routesV3TransformRecommendationRequest: {
    optimizerType: "optimizerType_example",
    securityData: [
      1,
    ],
  },
};

const data = await apiInstance.v3OrganizationIdTransformRecommendationsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3TransformRecommendationRequest** | **RoutesV3TransformRecommendationRequest**| Security data to analyze |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV3SecurityDataAnalysis**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform recommendation created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |
**503** | Service unavailable (API key not configured) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


