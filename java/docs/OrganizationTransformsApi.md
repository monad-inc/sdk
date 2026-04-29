# OrganizationTransformsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTransform**](OrganizationTransformsApi.md#createTransform) | **POST** /v1/{organization_id}/transforms | Create transform |
| [**deleteOrganizationTransform**](OrganizationTransformsApi.md#deleteOrganizationTransform) | **DELETE** /v1/{organization_id}/transforms/{transform_id} | Delete transform |
| [**getOrganizationTransform**](OrganizationTransformsApi.md#getOrganizationTransform) | **GET** /v1/{organization_id}/transforms/{transform_id} | Get transform |
| [**listOrganizationTransforms**](OrganizationTransformsApi.md#listOrganizationTransforms) | **GET** /v1/{organization_id}/transforms | List configured transforms in a transform |
| [**updateOrganizationTransform**](OrganizationTransformsApi.md#updateOrganizationTransform) | **PATCH** /v1/{organization_id}/transforms/{transform_id} | Update transform |


<a id="createTransform"></a>
# **createTransform**
> ModelsTransform createTransform(organizationId, createTransformRequest)

Create transform

Create transform

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationTransformsApi;

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

    OrganizationTransformsApi apiInstance = new OrganizationTransformsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    CreateTransformRequest createTransformRequest = new CreateTransformRequest(); // CreateTransformRequest | Request body for creating a transform
    try {
      ModelsTransform result = apiInstance.createTransform(organizationId, createTransformRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#createTransform");
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
| **createTransformRequest** | [**CreateTransformRequest**](CreateTransformRequest.md)| Request body for creating a transform | |

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform created successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create transform |  -  |

<a id="deleteOrganizationTransform"></a>
# **deleteOrganizationTransform**
> Object deleteOrganizationTransform(organizationId, transformId)

Delete transform

Delete transform

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationTransformsApi;

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

    OrganizationTransformsApi apiInstance = new OrganizationTransformsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String transformId = "transformId_example"; // String | Transform ID
    try {
      Object result = apiInstance.deleteOrganizationTransform(organizationId, transformId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#deleteOrganizationTransform");
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
| **transformId** | **String**| Transform ID | |

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | Failed to delete transform |  -  |

<a id="getOrganizationTransform"></a>
# **getOrganizationTransform**
> RoutesGetTransformResponse getOrganizationTransform(transformId, organizationId)

Get transform

Get transform

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationTransformsApi;

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

    OrganizationTransformsApi apiInstance = new OrganizationTransformsApi(defaultClient);
    String transformId = "transformId_example"; // String | Transform ID
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      RoutesGetTransformResponse result = apiInstance.getOrganizationTransform(transformId, organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#getOrganizationTransform");
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
| **organizationId** | **String**| Organization ID | |

### Return type

[**RoutesGetTransformResponse**](RoutesGetTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform retrieved successfully |  -  |
| **500** | Failed to get transform |  -  |

<a id="listOrganizationTransforms"></a>
# **listOrganizationTransforms**
> ModelsTransformList listOrganizationTransforms(organizationId, limit, offset)

List configured transforms in a transform

List transforms

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationTransformsApi;

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

    OrganizationTransformsApi apiInstance = new OrganizationTransformsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsTransformList result = apiInstance.listOrganizationTransforms(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#listOrganizationTransforms");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**ModelsTransformList**](ModelsTransformList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of transforms |  -  |
| **500** | Failed to marshal transforms |  -  |

<a id="updateOrganizationTransform"></a>
# **updateOrganizationTransform**
> ModelsTransform updateOrganizationTransform(organizationId, transformId, routesUpdateTransformRequest)

Update transform

Update transform

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationTransformsApi;

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

    OrganizationTransformsApi apiInstance = new OrganizationTransformsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String transformId = "transformId_example"; // String | Transform ID
    RoutesUpdateTransformRequest routesUpdateTransformRequest = new RoutesUpdateTransformRequest(); // RoutesUpdateTransformRequest | Request body for updating a transform
    try {
      ModelsTransform result = apiInstance.updateOrganizationTransform(organizationId, transformId, routesUpdateTransformRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#updateOrganizationTransform");
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
| **transformId** | **String**| Transform ID | |
| **routesUpdateTransformRequest** | [**RoutesUpdateTransformRequest**](RoutesUpdateTransformRequest.md)| Request body for updating a transform | |

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transform updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update transform |  -  |

