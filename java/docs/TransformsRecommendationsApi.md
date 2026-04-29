# TransformsRecommendationsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTransformRecommendation**](TransformsRecommendationsApi.md#createTransformRecommendation) | **POST** /v3/{organization_id}/transform_recommendations | Create transform recommendation |
| [**listAvailableOptimizers**](TransformsRecommendationsApi.md#listAvailableOptimizers) | **GET** /v3/{organization_id}/transform_recommendations/optimizers | List available transform optimizers |


<a id="createTransformRecommendation"></a>
# **createTransformRecommendation**
> RoutesV3SecurityDataAnalysis createTransformRecommendation(organizationId, createTransformRecommendationRequest)

Create transform recommendation

Analyze security data and provide transformation recommendations

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformsRecommendationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TransformsRecommendationsApi apiInstance = new TransformsRecommendationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    CreateTransformRecommendationRequest createTransformRecommendationRequest = new CreateTransformRecommendationRequest(); // CreateTransformRecommendationRequest | Security data to analyze
    try {
      RoutesV3SecurityDataAnalysis result = apiInstance.createTransformRecommendation(organizationId, createTransformRecommendationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRecommendationsApi#createTransformRecommendation");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **createTransformRecommendationRequest** | [**CreateTransformRecommendationRequest**](CreateTransformRecommendationRequest.md)| Security data to analyze | |

### Return type

[**RoutesV3SecurityDataAnalysis**](RoutesV3SecurityDataAnalysis.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform recommendation created successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable (API key not configured) |  -  |

<a id="listAvailableOptimizers"></a>
# **listAvailableOptimizers**
> List&lt;RoutesV3OptimizerType&gt; listAvailableOptimizers(organizationId)

List available transform optimizers

List available transform optimizers

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformsRecommendationsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TransformsRecommendationsApi apiInstance = new TransformsRecommendationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      List<RoutesV3OptimizerType> result = apiInstance.listAvailableOptimizers(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRecommendationsApi#listAvailableOptimizers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |

### Return type

[**List&lt;RoutesV3OptimizerType&gt;**](RoutesV3OptimizerType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform recommendation created successfully |  -  |

