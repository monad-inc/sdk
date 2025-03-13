# BillingAccountsRbacApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2BillingAccountsBillingAccountIdRolesGet**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles |
| [**v2BillingAccountsBillingAccountIdRolesPost**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdDelete**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdGet**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdPatch**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role |
| [**v2BillingPermissionsGet**](BillingAccountsRbacApi.md#v2BillingPermissionsGet) | **GET** /v2/billing/permissions | Get Billing Permissions |


<a id="v2BillingAccountsBillingAccountIdRolesGet"></a>
# **v2BillingAccountsBillingAccountIdRolesGet**
> List&lt;ModelsBillingAccountRole&gt; v2BillingAccountsBillingAccountIdRolesGet(billingAccountId, body)

Get Billing Account Roles

Get Billing Account Roles

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    Object body = null; // Object | 
    try {
      List<ModelsBillingAccountRole> result = apiInstance.v2BillingAccountsBillingAccountIdRolesGet(billingAccountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesGet");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **body** | **Object**|  | [optional] |

### Return type

[**List&lt;ModelsBillingAccountRole&gt;**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account roles successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Roles |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesPost"></a>
# **v2BillingAccountsBillingAccountIdRolesPost**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesPost(billingAccountId, routesV2CreateBillingAccountRoleRequest)

Create Billing Account Role

Create Billing Account Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    RoutesV2CreateBillingAccountRoleRequest routesV2CreateBillingAccountRoleRequest = new RoutesV2CreateBillingAccountRoleRequest(); // RoutesV2CreateBillingAccountRoleRequest | Create Billing Account Role Request
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesPost(billingAccountId, routesV2CreateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesPost");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **routesV2CreateBillingAccountRoleRequest** | [**RoutesV2CreateBillingAccountRoleRequest**](RoutesV2CreateBillingAccountRoleRequest.md)| Create Billing Account Role Request | |

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | create billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create Billing Account Role |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesRoleIdDelete"></a>
# **v2BillingAccountsBillingAccountIdRolesRoleIdDelete**
> String v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId, roleId, body)

Delete Billing Account Role

Delete Billing Account Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    Object body = null; // Object | 
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId, roleId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesRoleIdDelete");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **roleId** | **String**| Role ID | |
| **body** | **Object**|  | [optional] |

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
| **202** | delete billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account Role |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesRoleIdGet"></a>
# **v2BillingAccountsBillingAccountIdRolesRoleIdGet**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId, roleId, body)

Get Billing Account Role

Get Billing Account Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    Object body = null; // Object | 
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId, roleId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesRoleIdGet");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **roleId** | **String**| Role ID | |
| **body** | **Object**|  | [optional] |

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Role |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesRoleIdPatch"></a>
# **v2BillingAccountsBillingAccountIdRolesRoleIdPatch**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest)

Update Billing Account Role

Update Billing Account Role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV2UpdateBillingAccountRoleRequest routesV2UpdateBillingAccountRoleRequest = new RoutesV2UpdateBillingAccountRoleRequest(); // RoutesV2UpdateBillingAccountRoleRequest | Update Billing Account Role Request
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesRoleIdPatch");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **roleId** | **String**| Role ID | |
| **routesV2UpdateBillingAccountRoleRequest** | [**RoutesV2UpdateBillingAccountRoleRequest**](RoutesV2UpdateBillingAccountRoleRequest.md)| Update Billing Account Role Request | |

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | update billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update Billing Account Role |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost"></a>
# **v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**
> String v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest)

Create Billing Account User Role

Add a user to a billing account role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV2CreatebillingAccountUserRoleRequest routesV2CreatebillingAccountUserRoleRequest = new RoutesV2CreatebillingAccountUserRoleRequest(); // RoutesV2CreatebillingAccountUserRoleRequest | Create Billing Account User Role Request
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **roleId** | **String**| Role ID | |
| **routesV2CreatebillingAccountUserRoleRequest** | [**RoutesV2CreatebillingAccountUserRoleRequest**](RoutesV2CreatebillingAccountUserRoleRequest.md)| Create Billing Account User Role Request | |

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
| **201** | create billing account user role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create Billing Account User Role |  -  |

<a id="v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete"></a>
# **v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**
> String v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId, roleId, userId, body)

Delete Billing Account User Role

Remove a user to a billing account role

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    String userId = "userId_example"; // String | User ID
    Object body = null; // Object | 
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId, roleId, userId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete");
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
| **billingAccountId** | **String**| Billing Account ID | |
| **roleId** | **String**| Role ID | |
| **userId** | **String**| User ID | |
| **body** | **Object**|  | [optional] |

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
| **204** | delete billing account user role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account User Role |  -  |

<a id="v2BillingPermissionsGet"></a>
# **v2BillingPermissionsGet**
> List&lt;ModelsBillingAccountPermission&gt; v2BillingPermissionsGet(body)

Get Billing Permissions

Get Billing Permissions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsRbacApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsRbacApi apiInstance = new BillingAccountsRbacApi(defaultClient);
    Object body = null; // Object | 
    try {
      List<ModelsBillingAccountPermission> result = apiInstance.v2BillingPermissionsGet(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#v2BillingPermissionsGet");
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
| **body** | **Object**|  | [optional] |

### Return type

[**List&lt;ModelsBillingAccountPermission&gt;**](ModelsBillingAccountPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account permissions successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Permissions |  -  |

