# .TransformsRecommendationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransformRecommendation**](TransformsRecommendationsApi.md#createTransformRecommendation) | **POST** /v3/{organization_id}/transform_recommendations | Create transform recommendation
[**listAvailableOptimizers**](TransformsRecommendationsApi.md#listAvailableOptimizers) | **GET** /v3/{organization_id}/transform_recommendations/optimizers | List available transform optimizers


# **createTransformRecommendation**
> RoutesV3SecurityDataAnalysis createTransformRecommendation(createTransformRecommendationRequest)

Analyze security data and provide transformation recommendations

### Example


```typescript
import { createConfiguration, TransformsRecommendationsApi } from '';
import type { TransformsRecommendationsApiCreateTransformRecommendationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRecommendationsApi(configuration);

const request: TransformsRecommendationsApiCreateTransformRecommendationRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Security data to analyze
  createTransformRecommendationRequest: null,
};

const data = await apiInstance.createTransformRecommendation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTransformRecommendationRequest** | **CreateTransformRecommendationRequest**| Security data to analyze |
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

# **listAvailableOptimizers**
> Array<RoutesV3OptimizerType> listAvailableOptimizers()

List available transform optimizers

### Example


```typescript
import { createConfiguration, TransformsRecommendationsApi } from '';
import type { TransformsRecommendationsApiListAvailableOptimizersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsRecommendationsApi(configuration);

const request: TransformsRecommendationsApiListAvailableOptimizersRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.listAvailableOptimizers(request);
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


