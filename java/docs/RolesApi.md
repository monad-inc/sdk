# RolesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganizationIdRolesGet**](RolesApi.md#v2OrganizationIdRolesGet) | **GET** /v2/{organization_id}/roles | List roles |
| [**v2OrganizationIdRolesPost**](RolesApi.md#v2OrganizationIdRolesPost) | **POST** /v2/{organization_id}/roles | Create role |
| [**v2OrganizationIdRolesRoleIdDelete**](RolesApi.md#v2OrganizationIdRolesRoleIdDelete) | **DELETE** /v2/{organization_id}/roles/{role_id} | Delete role |
| [**v2OrganizationIdRolesRoleIdGet**](RolesApi.md#v2OrganizationIdRolesRoleIdGet) | **GET** /v2/{organization_id}/roles/{role_id} | Get role |
| [**v2OrganizationIdRolesRoleIdPatch**](RolesApi.md#v2OrganizationIdRolesRoleIdPatch) | **PATCH** /v2/{organization_id}/roles/{role_id} | Update role |


<a id="v2OrganizationIdRolesGet"></a>
# **v2OrganizationIdRolesGet**
> ModelsRoleWithPermissionsList v2OrganizationIdRolesGet(organizationId, limit, offset)

List roles

List roles with their associated permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RolesApi;

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

    RolesApi apiInstance = new RolesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit the number of roles returned (default: 10)
    Integer offset = 56; // Integer | Offset the roles returned (default: 0)
    try {
      ModelsRoleWithPermissionsList result = apiInstance.v2OrganizationIdRolesGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RolesApi#v2OrganizationIdRolesGet");
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
| **limit** | **Integer**| Limit the number of roles returned (default: 10) | [optional] |
| **offset** | **Integer**| Offset the roles returned (default: 0) | [optional] |

### Return type

[**ModelsRoleWithPermissionsList**](ModelsRoleWithPermissionsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Roles retrieved successfully |  -  |
| **500** | Error listing roles |  -  |

<a id="v2OrganizationIdRolesPost"></a>
# **v2OrganizationIdRolesPost**
> ModelsRoleWithPermissions v2OrganizationIdRolesPost(organizationId, routesV2CreateRoleV2Request)

Create role

Create a new role with permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RolesApi;

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

    RolesApi apiInstance = new RolesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV2CreateRoleV2Request routesV2CreateRoleV2Request = new RoutesV2CreateRoleV2Request(); // RoutesV2CreateRoleV2Request | Request body for creating a role
    try {
      ModelsRoleWithPermissions result = apiInstance.v2OrganizationIdRolesPost(organizationId, routesV2CreateRoleV2Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RolesApi#v2OrganizationIdRolesPost");
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
| **routesV2CreateRoleV2Request** | [**RoutesV2CreateRoleV2Request**](RoutesV2CreateRoleV2Request.md)| Request body for creating a role | |

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Role created successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create role |  -  |

<a id="v2OrganizationIdRolesRoleIdDelete"></a>
# **v2OrganizationIdRolesRoleIdDelete**
> Object v2OrganizationIdRolesRoleIdDelete(organizationId, roleId)

Delete role

Delete a role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RolesApi;

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

    RolesApi apiInstance = new RolesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String roleId = "roleId_example"; // String | Role ID
    try {
      Object result = apiInstance.v2OrganizationIdRolesRoleIdDelete(organizationId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RolesApi#v2OrganizationIdRolesRoleIdDelete");
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
| **roleId** | **String**| Role ID | |

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
| **500** | Failed to delete role |  -  |

<a id="v2OrganizationIdRolesRoleIdGet"></a>
# **v2OrganizationIdRolesRoleIdGet**
> ModelsRoleWithPermissions v2OrganizationIdRolesRoleIdGet(organizationId, roleId)

Get role

Get a role with its associated permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RolesApi;

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

    RolesApi apiInstance = new RolesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String roleId = "roleId_example"; // String | Role ID
    try {
      ModelsRoleWithPermissions result = apiInstance.v2OrganizationIdRolesRoleIdGet(organizationId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RolesApi#v2OrganizationIdRolesRoleIdGet");
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
| **roleId** | **String**| Role ID | |

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Role retrieved successfully |  -  |
| **500** | Error getting role |  -  |

<a id="v2OrganizationIdRolesRoleIdPatch"></a>
# **v2OrganizationIdRolesRoleIdPatch**
> ModelsRoleWithPermissions v2OrganizationIdRolesRoleIdPatch(organizationId, roleId, routesV2UpdateRoleV2Request)

Update role

Update a role and its permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.RolesApi;

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

    RolesApi apiInstance = new RolesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV2UpdateRoleV2Request routesV2UpdateRoleV2Request = new RoutesV2UpdateRoleV2Request(); // RoutesV2UpdateRoleV2Request | Request body for updating a role
    try {
      ModelsRoleWithPermissions result = apiInstance.v2OrganizationIdRolesRoleIdPatch(organizationId, roleId, routesV2UpdateRoleV2Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RolesApi#v2OrganizationIdRolesRoleIdPatch");
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
| **roleId** | **String**| Role ID | |
| **routesV2UpdateRoleV2Request** | [**RoutesV2UpdateRoleV2Request**](RoutesV2UpdateRoleV2Request.md)| Request body for updating a role | |

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Role updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update role |  -  |

