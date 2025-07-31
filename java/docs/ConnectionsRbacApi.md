# ConnectionsRbacApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v3ConnectionsConnectionIdRolesGet**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesGet) | **GET** /v3/connections/{connection_id}/roles | Get Connection Roles |
| [**v3ConnectionsConnectionIdRolesPost**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesPost) | **POST** /v3/connections/{connection_id}/roles | Create Connection Role |
| [**v3ConnectionsConnectionIdRolesRoleIdDelete**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdDelete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id} | Delete Connection Role |
| [**v3ConnectionsConnectionIdRolesRoleIdGet**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdGet) | **GET** /v3/connections/{connection_id}/roles/{role_id} | Get Connection Role |
| [**v3ConnectionsConnectionIdRolesRoleIdPatch**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdPatch) | **PATCH** /v3/connections/{connection_id}/roles/{role_id} | Update Connection Role |
| [**v3ConnectionsConnectionIdRolesRoleIdUsersPost**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdUsersPost) | **POST** /v3/connections/{connection_id}/roles/{role_id}/users | Create Connection User Role |
| [**v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id}/users/{user_id} | Delete Connection User Role |
| [**v3ConnectionsPermissionsGet**](ConnectionsRbacApi.md#v3ConnectionsPermissionsGet) | **GET** /v3/connections/permissions | Get Connection Permissions |


<a id="v3ConnectionsConnectionIdRolesGet"></a>
# **v3ConnectionsConnectionIdRolesGet**
> List&lt;ModelsConnectionRole&gt; v3ConnectionsConnectionIdRolesGet(connectionId)

Get Connection Roles

Get Connection Roles

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    try {
      List<ModelsConnectionRole> result = apiInstance.v3ConnectionsConnectionIdRolesGet(connectionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesGet");
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
| **connectionId** | **String**| Connection ID | |

### Return type

[**List&lt;ModelsConnectionRole&gt;**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get connection roles successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Connection Roles |  -  |

<a id="v3ConnectionsConnectionIdRolesPost"></a>
# **v3ConnectionsConnectionIdRolesPost**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesPost(connectionId, routesV3CreateConnectionRoleRequest)

Create Connection Role

Create Connection Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    RoutesV3CreateConnectionRoleRequest routesV3CreateConnectionRoleRequest = new RoutesV3CreateConnectionRoleRequest(); // RoutesV3CreateConnectionRoleRequest | Create Connection Role Request
    try {
      ModelsConnectionRole result = apiInstance.v3ConnectionsConnectionIdRolesPost(connectionId, routesV3CreateConnectionRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesPost");
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
| **connectionId** | **String**| Connection ID | |
| **routesV3CreateConnectionRoleRequest** | [**RoutesV3CreateConnectionRoleRequest**](RoutesV3CreateConnectionRoleRequest.md)| Create Connection Role Request | |

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | create connection role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create Connection Role |  -  |

<a id="v3ConnectionsConnectionIdRolesRoleIdDelete"></a>
# **v3ConnectionsConnectionIdRolesRoleIdDelete**
> String v3ConnectionsConnectionIdRolesRoleIdDelete(connectionId, roleId)

Delete Connection Role

Delete Connection Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    String roleId = "roleId_example"; // String | Role ID
    try {
      String result = apiInstance.v3ConnectionsConnectionIdRolesRoleIdDelete(connectionId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesRoleIdDelete");
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
| **connectionId** | **String**| Connection ID | |
| **roleId** | **String**| Role ID | |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | delete connection role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Connection Role |  -  |

<a id="v3ConnectionsConnectionIdRolesRoleIdGet"></a>
# **v3ConnectionsConnectionIdRolesRoleIdGet**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesRoleIdGet(connectionId, roleId)

Get Connection Role

Get Connection Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    String roleId = "roleId_example"; // String | Role ID
    try {
      ModelsConnectionRole result = apiInstance.v3ConnectionsConnectionIdRolesRoleIdGet(connectionId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesRoleIdGet");
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
| **connectionId** | **String**| Connection ID | |
| **roleId** | **String**| Role ID | |

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get connection role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Connection Role |  -  |

<a id="v3ConnectionsConnectionIdRolesRoleIdPatch"></a>
# **v3ConnectionsConnectionIdRolesRoleIdPatch**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesRoleIdPatch(connectionId, roleId, routesV3UpdateConnectionRoleRequest)

Update Connection Role

Update Connection Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV3UpdateConnectionRoleRequest routesV3UpdateConnectionRoleRequest = new RoutesV3UpdateConnectionRoleRequest(); // RoutesV3UpdateConnectionRoleRequest | Update Connection Role Request
    try {
      ModelsConnectionRole result = apiInstance.v3ConnectionsConnectionIdRolesRoleIdPatch(connectionId, roleId, routesV3UpdateConnectionRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesRoleIdPatch");
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
| **connectionId** | **String**| Connection ID | |
| **roleId** | **String**| Role ID | |
| **routesV3UpdateConnectionRoleRequest** | [**RoutesV3UpdateConnectionRoleRequest**](RoutesV3UpdateConnectionRoleRequest.md)| Update Connection Role Request | |

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | update connection role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update Connection Role |  -  |

<a id="v3ConnectionsConnectionIdRolesRoleIdUsersPost"></a>
# **v3ConnectionsConnectionIdRolesRoleIdUsersPost**
> String v3ConnectionsConnectionIdRolesRoleIdUsersPost(connectionId, roleId, routesV3CreateConnectionUserRoleRequest)

Create Connection User Role

Add a user to a connection role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV3CreateConnectionUserRoleRequest routesV3CreateConnectionUserRoleRequest = new RoutesV3CreateConnectionUserRoleRequest(); // RoutesV3CreateConnectionUserRoleRequest | Create Connection User Role Request
    try {
      String result = apiInstance.v3ConnectionsConnectionIdRolesRoleIdUsersPost(connectionId, roleId, routesV3CreateConnectionUserRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesRoleIdUsersPost");
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
| **connectionId** | **String**| Connection ID | |
| **roleId** | **String**| Role ID | |
| **routesV3CreateConnectionUserRoleRequest** | [**RoutesV3CreateConnectionUserRoleRequest**](RoutesV3CreateConnectionUserRoleRequest.md)| Create Connection User Role Request | |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | create connection user role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create Connection User Role |  -  |

<a id="v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete"></a>
# **v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete**
> String v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete(connectionId, roleId, userId)

Delete Connection User Role

Remove a user to a connection role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    String connectionId = "connectionId_example"; // String | Connection ID
    String roleId = "roleId_example"; // String | Role ID
    String userId = "userId_example"; // String | User ID
    try {
      String result = apiInstance.v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete(connectionId, roleId, userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete");
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
| **connectionId** | **String**| Connection ID | |
| **roleId** | **String**| Role ID | |
| **userId** | **String**| User ID | |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | delete connection user role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Connection User Role |  -  |

<a id="v3ConnectionsPermissionsGet"></a>
# **v3ConnectionsPermissionsGet**
> List&lt;ModelsConnectionPermission&gt; v3ConnectionsPermissionsGet()

Get Connection Permissions

Get Connection Permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConnectionsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    ConnectionsRbacApi apiInstance = new ConnectionsRbacApi(defaultClient);
    try {
      List<ModelsConnectionPermission> result = apiInstance.v3ConnectionsPermissionsGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsRbacApi#v3ConnectionsPermissionsGet");
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

[**List&lt;ModelsConnectionPermission&gt;**](ModelsConnectionPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get connection permissions successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Connection Permissions |  -  |

