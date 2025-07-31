# ConnectionsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v3ConnectionsConnectionIdDelete**](ConnectionsApi.md#v3ConnectionsConnectionIdDelete) | **DELETE** /v3/connections/{connection_id} | Delete connection |
| [**v3ConnectionsConnectionIdGet**](ConnectionsApi.md#v3ConnectionsConnectionIdGet) | **GET** /v3/connections/{connection_id} | Get connection by ID |
| [**v3ConnectionsConnectionIdPatch**](ConnectionsApi.md#v3ConnectionsConnectionIdPatch) | **PATCH** /v3/connections/{connection_id} | Update connection |
| [**v3ConnectionsGet**](ConnectionsApi.md#v3ConnectionsGet) | **GET** /v3/connections | Get all connections |
| [**v3ConnectionsPost**](ConnectionsApi.md#v3ConnectionsPost) | **POST** /v3/connections | Create a new connection |


<a id="v3ConnectionsConnectionIdDelete"></a>
# **v3ConnectionsConnectionIdDelete**
> v3ConnectionsConnectionIdDelete(connectionId, body)

Delete connection

Delete an existing connection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID to delete
    Object body = null; // Object | 
    try {
      apiInstance.v3ConnectionsConnectionIdDelete(connectionId, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#v3ConnectionsConnectionIdDelete");
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
| **connectionId** | **String**| Connection ID to delete | |
| **body** | **Object**|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Connection deleted successfully |  -  |
| **400** | Invalid request |  -  |
| **500** | Internal server error |  -  |

<a id="v3ConnectionsConnectionIdGet"></a>
# **v3ConnectionsConnectionIdGet**
> ModelsConnection v3ConnectionsConnectionIdGet(connectionId, body)

Get connection by ID

Retrieve a connection by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID to retrieve
    Object body = null; // Object | 
    try {
      ModelsConnection result = apiInstance.v3ConnectionsConnectionIdGet(connectionId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#v3ConnectionsConnectionIdGet");
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
| **connectionId** | **String**| Connection ID to retrieve | |
| **body** | **Object**|  | [optional] |

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection retrieved successfully |  -  |
| **400** | Invalid request |  -  |
| **404** | Connection not found |  -  |
| **500** | Internal server error |  -  |

<a id="v3ConnectionsConnectionIdPatch"></a>
# **v3ConnectionsConnectionIdPatch**
> ModelsConnection v3ConnectionsConnectionIdPatch(connectionId, routesV3UpdateConnectionRequest)

Update connection

Update an existing connection

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID to update
    RoutesV3UpdateConnectionRequest routesV3UpdateConnectionRequest = new RoutesV3UpdateConnectionRequest(); // RoutesV3UpdateConnectionRequest | Request body for updating a connection
    try {
      ModelsConnection result = apiInstance.v3ConnectionsConnectionIdPatch(connectionId, routesV3UpdateConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#v3ConnectionsConnectionIdPatch");
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
| **connectionId** | **String**| Connection ID to update | |
| **routesV3UpdateConnectionRequest** | [**RoutesV3UpdateConnectionRequest**](RoutesV3UpdateConnectionRequest.md)| Request body for updating a connection | |

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection updated successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

<a id="v3ConnectionsGet"></a>
# **v3ConnectionsGet**
> List&lt;ModelsConnection&gt; v3ConnectionsGet(limit, offset, body)

Get all connections

Retrieve all connections

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    Object body = null; // Object | 
    try {
      List<ModelsConnection> result = apiInstance.v3ConnectionsGet(limit, offset, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#v3ConnectionsGet");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |
| **body** | **Object**|  | [optional] |

### Return type

[**List&lt;ModelsConnection&gt;**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of connections retrieved successfully |  -  |
| **500** | Internal server error |  -  |

<a id="v3ConnectionsPost"></a>
# **v3ConnectionsPost**
> ModelsConnection v3ConnectionsPost(routesV3CreateConnectionRequest)

Create a new connection

Create a new connection with the provided details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsApi apiInstance = new ConnectionsApi(defaultClient);
    RoutesV3CreateConnectionRequest routesV3CreateConnectionRequest = new RoutesV3CreateConnectionRequest(); // RoutesV3CreateConnectionRequest | Request body for creating a connection
    try {
      ModelsConnection result = apiInstance.v3ConnectionsPost(routesV3CreateConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#v3ConnectionsPost");
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
| **routesV3CreateConnectionRequest** | [**RoutesV3CreateConnectionRequest**](RoutesV3CreateConnectionRequest.md)| Request body for creating a connection | |

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection created successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

