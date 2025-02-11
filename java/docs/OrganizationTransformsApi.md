# OrganizationTransformsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdTransformsGet**](OrganizationTransformsApi.md#v1OrganizationIdTransformsGet) | **GET** /v1/{organization_id}/transforms | List transforms |
| [**v1OrganizationIdTransformsPost**](OrganizationTransformsApi.md#v1OrganizationIdTransformsPost) | **POST** /v1/{organization_id}/transforms | Create transform |
| [**v1OrganizationIdTransformsTransformIdDelete**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdDelete) | **DELETE** /v1/{organization_id}/transforms/{transform_id} | Delete transform |
| [**v1OrganizationIdTransformsTransformIdGet**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdGet) | **GET** /v1/{organization_id}/transforms/{transform_id} | Get transform |
| [**v1OrganizationIdTransformsTransformIdPatch**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdPatch) | **PATCH** /v1/{organization_id}/transforms/{transform_id} | Update transform |


<a id="v1OrganizationIdTransformsGet"></a>
# **v1OrganizationIdTransformsGet**
> ModelsTransformList v1OrganizationIdTransformsGet(organizationId, limit, offset)

List transforms

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
      ModelsTransformList result = apiInstance.v1OrganizationIdTransformsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#v1OrganizationIdTransformsGet");
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

<a id="v1OrganizationIdTransformsPost"></a>
# **v1OrganizationIdTransformsPost**
> ModelsTransform v1OrganizationIdTransformsPost(organizationId, body)

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
    Object body = null; // Object | Request body for creating a transform
    try {
      ModelsTransform result = apiInstance.v1OrganizationIdTransformsPost(organizationId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#v1OrganizationIdTransformsPost");
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
| **body** | **Object**| Request body for creating a transform | |

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

<a id="v1OrganizationIdTransformsTransformIdDelete"></a>
# **v1OrganizationIdTransformsTransformIdDelete**
> Object v1OrganizationIdTransformsTransformIdDelete(organizationId, transformId)

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
      Object result = apiInstance.v1OrganizationIdTransformsTransformIdDelete(organizationId, transformId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#v1OrganizationIdTransformsTransformIdDelete");
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

<a id="v1OrganizationIdTransformsTransformIdGet"></a>
# **v1OrganizationIdTransformsTransformIdGet**
> RoutesGetTransformResponse v1OrganizationIdTransformsTransformIdGet(transformId, organizationId)

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
      RoutesGetTransformResponse result = apiInstance.v1OrganizationIdTransformsTransformIdGet(transformId, organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#v1OrganizationIdTransformsTransformIdGet");
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

<a id="v1OrganizationIdTransformsTransformIdPatch"></a>
# **v1OrganizationIdTransformsTransformIdPatch**
> ModelsTransform v1OrganizationIdTransformsTransformIdPatch(organizationId, transformId, routesUpdateTransformRequest)

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
      ModelsTransform result = apiInstance.v1OrganizationIdTransformsTransformIdPatch(organizationId, transformId, routesUpdateTransformRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationTransformsApi#v1OrganizationIdTransformsTransformIdPatch");
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

