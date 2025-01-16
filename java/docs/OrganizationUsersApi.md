# OrganizationUsersApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdUsersGet**](OrganizationUsersApi.md#v1OrganizationIdUsersGet) | **GET** /v1/{organization_id}/users | List organization users |
| [**v1OrganizationIdUsersPost**](OrganizationUsersApi.md#v1OrganizationIdUsersPost) | **POST** /v1/{organization_id}/users | Add user to organization |
| [**v1OrganizationIdUsersUserIdDelete**](OrganizationUsersApi.md#v1OrganizationIdUsersUserIdDelete) | **DELETE** /v1/{organization_id}/users/{user_id} | Remove user from organization |
| [**v1OrganizationIdUsersUserIdPatch**](OrganizationUsersApi.md#v1OrganizationIdUsersUserIdPatch) | **PATCH** /v1/{organization_id}/users/{user_id} | Update user in organization |


<a id="v1OrganizationIdUsersGet"></a>
# **v1OrganizationIdUsersGet**
> ModelsOrganizationUserList v1OrganizationIdUsersGet(organizationId, limit, offset)

List organization users

List organization users

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationUsersApi;

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

    OrganizationUsersApi apiInstance = new OrganizationUsersApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsOrganizationUserList result = apiInstance.v1OrganizationIdUsersGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationUsersApi#v1OrganizationIdUsersGet");
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

[**ModelsOrganizationUserList**](ModelsOrganizationUserList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of organization users |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1OrganizationIdUsersPost"></a>
# **v1OrganizationIdUsersPost**
> ModelsOrganizationUser v1OrganizationIdUsersPost(organizationId, routesAddUserToOrganizationRequest)

Add user to organization

Add user to organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationUsersApi;

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

    OrganizationUsersApi apiInstance = new OrganizationUsersApi(defaultClient);
    String organizationId = "organizationId_example"; // String | organization ID
    RoutesAddUserToOrganizationRequest routesAddUserToOrganizationRequest = new RoutesAddUserToOrganizationRequest(); // RoutesAddUserToOrganizationRequest | Request body for adding a user to an organization
    try {
      ModelsOrganizationUser result = apiInstance.v1OrganizationIdUsersPost(organizationId, routesAddUserToOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationUsersApi#v1OrganizationIdUsersPost");
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
| **organizationId** | **String**| organization ID | |
| **routesAddUserToOrganizationRequest** | [**RoutesAddUserToOrganizationRequest**](RoutesAddUserToOrganizationRequest.md)| Request body for adding a user to an organization | |

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for adding a user to an organization |  -  |
| **400** | Bad request |  -  |
| **500** | Internal Server Error |  -  |

<a id="v1OrganizationIdUsersUserIdDelete"></a>
# **v1OrganizationIdUsersUserIdDelete**
> Object v1OrganizationIdUsersUserIdDelete(organizationId, userId)

Remove user from organization

Remove user from organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationUsersApi;

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

    OrganizationUsersApi apiInstance = new OrganizationUsersApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String userId = "userId_example"; // String | User ID
    try {
      Object result = apiInstance.v1OrganizationIdUsersUserIdDelete(organizationId, userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationUsersApi#v1OrganizationIdUsersUserIdDelete");
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
| **userId** | **String**| User ID | |

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
| **500** | Internal Server Error |  -  |

<a id="v1OrganizationIdUsersUserIdPatch"></a>
# **v1OrganizationIdUsersUserIdPatch**
> ModelsOrganizationUser v1OrganizationIdUsersUserIdPatch(organizationId, userId, routesUpdateUserInOrganizationRequest)

Update user in organization

Update user in organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationUsersApi;

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

    OrganizationUsersApi apiInstance = new OrganizationUsersApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String userId = "userId_example"; // String | User ID
    RoutesUpdateUserInOrganizationRequest routesUpdateUserInOrganizationRequest = new RoutesUpdateUserInOrganizationRequest(); // RoutesUpdateUserInOrganizationRequest | Request body for updating a user in an organization
    try {
      ModelsOrganizationUser result = apiInstance.v1OrganizationIdUsersUserIdPatch(organizationId, userId, routesUpdateUserInOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationUsersApi#v1OrganizationIdUsersUserIdPatch");
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
| **userId** | **String**| User ID | |
| **routesUpdateUserInOrganizationRequest** | [**RoutesUpdateUserInOrganizationRequest**](RoutesUpdateUserInOrganizationRequest.md)| Request body for updating a user in an organization | |

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for updating a user in an organization |  -  |
| **400** | Bad request |  -  |
| **500** | Internal Server Error |  -  |

