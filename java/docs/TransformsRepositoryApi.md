# TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportTransform**](TransformsRepositoryApi.md#exportTransform) | **POST** /v3/transforms/repository/export | Export transform to YAML |
| [**getTransformDetailsFromRepository**](TransformsRepositoryApi.md#getTransformDetailsFromRepository) | **GET** /v3/transforms/repository/{transform_id} | Get transform details |
| [**getTransformRepositoryDetails**](TransformsRepositoryApi.md#getTransformRepositoryDetails) | **GET** /v2/transforms/repository/{transform_id} | Get transform details |
| [**importTransform**](TransformsRepositoryApi.md#importTransform) | **POST** /v3/transforms/repository/import | Import transform from YAML |
| [**listCommunityTransforms**](TransformsRepositoryApi.md#listCommunityTransforms) | **GET** /v3/transforms/repository | List community transforms |
| [**listTransformRepository**](TransformsRepositoryApi.md#listTransformRepository) | **GET** /v2/transforms/repository | List transforms |


<a id="exportTransform"></a>
# **exportTransform**
> String exportTransform(communityTransformsInternalTransformConfig)

Export transform to YAML

Export transform to YAML format

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
    CommunityTransformsInternalTransformConfig communityTransformsInternalTransformConfig = new CommunityTransformsInternalTransformConfig(); // CommunityTransformsInternalTransformConfig | Transform to export and optional metadata
    try {
      String result = apiInstance.exportTransform(communityTransformsInternalTransformConfig);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#exportTransform");
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
| **communityTransformsInternalTransformConfig** | [**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md)| Transform to export and optional metadata | |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | YAML-formatted transform |  -  |
| **400** | Invalid request |  -  |
| **500** | Failed to export transform |  -  |

<a id="getTransformDetailsFromRepository"></a>
# **getTransformDetailsFromRepository**
> CommunityTransformsInternalTransformConfig getTransformDetailsFromRepository(transformId)

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
      CommunityTransformsInternalTransformConfig result = apiInstance.getTransformDetailsFromRepository(transformId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#getTransformDetailsFromRepository");
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

[**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform details retrieved successfully |  -  |
| **404** | Transform not found |  -  |
| **500** | Failed to get transform details |  -  |

<a id="getTransformRepositoryDetails"></a>
# **getTransformRepositoryDetails**
> ModelsTransformsRepositoryTransform getTransformRepositoryDetails(transformId)

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
      ModelsTransformsRepositoryTransform result = apiInstance.getTransformRepositoryDetails(transformId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#getTransformRepositoryDetails");
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

<a id="importTransform"></a>
# **importTransform**
> RoutesV3ImportTransformResponse importTransform(body)

Import transform from YAML

Import transform from YAML file

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
    String body = "body_example"; // String | YAML transform definition
    try {
      RoutesV3ImportTransformResponse result = apiInstance.importTransform(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#importTransform");
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
| **body** | **String**| YAML transform definition | |

### Return type

[**RoutesV3ImportTransformResponse**](RoutesV3ImportTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform imported successfully |  -  |
| **400** | Invalid YAML or transform validation failed |  -  |
| **500** | Failed to import transform |  -  |

<a id="listCommunityTransforms"></a>
# **listCommunityTransforms**
> CommunityTransformsInternalTransformsIndex listCommunityTransforms()

List community transforms

List transforms from repository index

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
    try {
      CommunityTransformsInternalTransformsIndex result = apiInstance.listCommunityTransforms();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#listCommunityTransforms");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CommunityTransformsInternalTransformsIndex**](CommunityTransformsInternalTransformsIndex.md)

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

<a id="listTransformRepository"></a>
# **listTransformRepository**
> ModelsTransformsRepositoryList listTransformRepository(limit, offset)

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
      ModelsTransformsRepositoryList result = apiInstance.listTransformRepository(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformsRepositoryApi#listTransformRepository");
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

