# TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2TransformsRepositoryGet**](TransformsRepositoryApi.md#v2TransformsRepositoryGet) | **GET** /v2/transforms/repository | List transforms |
| [**v2TransformsRepositoryTransformIdGet**](TransformsRepositoryApi.md#v2TransformsRepositoryTransformIdGet) | **GET** /v2/transforms/repository/{transform_id} | Get transform details |


<a id="v2TransformsRepositoryGet"></a>
# **v2TransformsRepositoryGet**
> ModelsTransformsRepositoryList v2TransformsRepositoryGet(limit, offset)

List transforms

List transforms from repository with pagination

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformsRepositoryApi;

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

    TransformsRepositoryApi apiInstance = new TransformsRepositoryApi(defaultClient);
    Integer limit = 56; // Integer | Number of items to return (default: 10)
    Integer offset = 56; // Integer | Number of items to skip (default: 0)
    try {
      ModelsTransformsRepositoryList result = apiInstance.v2TransformsRepositoryGet(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#v2TransformsRepositoryGet");
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
| **limit** | **Integer**| Number of items to return (default: 10) | [optional] |
| **offset** | **Integer**| Number of items to skip (default: 0) | [optional] |

### Return type

[**ModelsTransformsRepositoryList**](ModelsTransformsRepositoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transforms retrieved successfully |  -  |
| **500** | Failed to list transforms |  -  |

<a id="v2TransformsRepositoryTransformIdGet"></a>
# **v2TransformsRepositoryTransformIdGet**
> ModelsTransformsRepositoryTransform v2TransformsRepositoryTransformIdGet(transformId)

Get transform details

Get detailed information about a specific transform from repository

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformsRepositoryApi;

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

    TransformsRepositoryApi apiInstance = new TransformsRepositoryApi(defaultClient);
    String transformId = "transformId_example"; // String | Transform ID
    try {
      ModelsTransformsRepositoryTransform result = apiInstance.v2TransformsRepositoryTransformIdGet(transformId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#v2TransformsRepositoryTransformIdGet");
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
| **transformId** | **String**| Transform ID | |

### Return type

[**ModelsTransformsRepositoryTransform**](ModelsTransformsRepositoryTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform details retrieved successfully |  -  |
| **500** | Failed to get transform details |  -  |

