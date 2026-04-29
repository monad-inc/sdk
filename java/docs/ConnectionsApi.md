# ConnectionsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConnection**](ConnectionsApi.md#createConnection) | **POST** /v3/{organization_id}/connections | Create a new connection |
| [**deleteConnection**](ConnectionsApi.md#deleteConnection) | **DELETE** /v3/{organization_id}/connections/{connection_id} | Delete connection |
| [**getConnectionByID**](ConnectionsApi.md#getConnectionByID) | **GET** /v3/{organization_id}/connections/{connection_id} | Get connection by ID |
| [**listConnections**](ConnectionsApi.md#listConnections) | **GET** /v3/{organization_id}/connections | Get all connections |
| [**updateConnection**](ConnectionsApi.md#updateConnection) | **PATCH** /v3/{organization_id}/connections/{connection_id} | Update connection |


<a id="createConnection"></a>
# **createConnection**
> ModelsConnection createConnection(organizationId, createConnectionRequest)

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
    String organizationId = "organizationId_example"; // String | Organization ID
    CreateConnectionRequest createConnectionRequest = new CreateConnectionRequest(); // CreateConnectionRequest | Request body for creating a connection
    try {
      ModelsConnection result = apiInstance.createConnection(organizationId, createConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#createConnection");
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
| **createConnectionRequest** | [**CreateConnectionRequest**](CreateConnectionRequest.md)| Request body for creating a connection | |

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

<a id="deleteConnection"></a>
# **deleteConnection**
> deleteConnection(organizationId, connectionId)

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
    String organizationId = "organizationId_example"; // String | Organization ID
    String connectionId = "connectionId_example"; // String | Connection ID to delete
    try {
      apiInstance.deleteConnection(organizationId, connectionId);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#deleteConnection");
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
| **connectionId** | **String**| Connection ID to delete | |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Connection deleted successfully |  -  |
| **400** | Invalid request |  -  |
| **500** | Internal server error |  -  |

<a id="getConnectionByID"></a>
# **getConnectionByID**
> ModelsConnection getConnectionByID(organizationId, connectionId)

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
    String organizationId = "organizationId_example"; // String | Organization ID
    String connectionId = "connectionId_example"; // String | Connection ID to retrieve
    try {
      ModelsConnection result = apiInstance.getConnectionByID(organizationId, connectionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#getConnectionByID");
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
| **connectionId** | **String**| Connection ID to retrieve | |

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection retrieved successfully |  -  |
| **400** | Invalid request |  -  |
| **404** | Connection not found |  -  |
| **500** | Internal server error |  -  |

<a id="listConnections"></a>
# **listConnections**
> ModelsConnectionList listConnections(organizationId, limit, offset)

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
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsConnectionList result = apiInstance.listConnections(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#listConnections");
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

[**ModelsConnectionList**](ModelsConnectionList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of connections retrieved successfully |  -  |
| **500** | Internal server error |  -  |

<a id="updateConnection"></a>
# **updateConnection**
> ModelsConnection updateConnection(organizationId, connectionId, updateConnectionRequest)

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
    String organizationId = "organizationId_example"; // String | Organization ID
    String connectionId = "connectionId_example"; // String | Connection ID to update
    UpdateConnectionRequest updateConnectionRequest = new UpdateConnectionRequest(); // UpdateConnectionRequest | Request body for updating a connection
    try {
      ModelsConnection result = apiInstance.updateConnection(organizationId, connectionId, updateConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#updateConnection");
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
| **connectionId** | **String**| Connection ID to update | |
| **updateConnectionRequest** | [**UpdateConnectionRequest**](UpdateConnectionRequest.md)| Request body for updating a connection | |

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

