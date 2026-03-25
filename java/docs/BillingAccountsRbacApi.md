# BillingAccountsRbacApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBillingAccountRole**](BillingAccountsRbacApi.md#createBillingAccountRole) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role |
| [**createBillingAccountUserRole**](BillingAccountsRbacApi.md#createBillingAccountUserRole) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role |
| [**deleteBillingAccountRole**](BillingAccountsRbacApi.md#deleteBillingAccountRole) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role |
| [**deleteBillingAccountUserRole**](BillingAccountsRbacApi.md#deleteBillingAccountUserRole) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role |
| [**getBillingAccountRole**](BillingAccountsRbacApi.md#getBillingAccountRole) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role |
| [**getBillingAccountRoles**](BillingAccountsRbacApi.md#getBillingAccountRoles) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles |
| [**getBillingPermissions**](BillingAccountsRbacApi.md#getBillingPermissions) | **GET** /v2/billing/permissions | Get Billing Permissions |
| [**updateBillingAccountRole**](BillingAccountsRbacApi.md#updateBillingAccountRole) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role |


<a id="createBillingAccountRole"></a>
# **createBillingAccountRole**
> ModelsBillingAccountRole createBillingAccountRole(billingAccountId, routesV2CreateBillingAccountRoleRequest)

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
      ModelsBillingAccountRole result = apiInstance.createBillingAccountRole(billingAccountId, routesV2CreateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#createBillingAccountRole");
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

<a id="createBillingAccountUserRole"></a>
# **createBillingAccountUserRole**
> String createBillingAccountUserRole(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest)

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
      String result = apiInstance.createBillingAccountUserRole(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#createBillingAccountUserRole");
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

<a id="deleteBillingAccountRole"></a>
# **deleteBillingAccountRole**
> String deleteBillingAccountRole(billingAccountId, roleId)

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
    try {
      String result = apiInstance.deleteBillingAccountRole(billingAccountId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#deleteBillingAccountRole");
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
| **202** | delete billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account Role |  -  |

<a id="deleteBillingAccountUserRole"></a>
# **deleteBillingAccountUserRole**
> String deleteBillingAccountUserRole(billingAccountId, roleId, userId)

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
    try {
      String result = apiInstance.deleteBillingAccountUserRole(billingAccountId, roleId, userId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#deleteBillingAccountUserRole");
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
| **204** | delete billing account user role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account User Role |  -  |

<a id="getBillingAccountRole"></a>
# **getBillingAccountRole**
> ModelsBillingAccountRole getBillingAccountRole(billingAccountId, roleId)

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
    try {
      ModelsBillingAccountRole result = apiInstance.getBillingAccountRole(billingAccountId, roleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#getBillingAccountRole");
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

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account role successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Role |  -  |

<a id="getBillingAccountRoles"></a>
# **getBillingAccountRoles**
> List&lt;ModelsBillingAccountRole&gt; getBillingAccountRoles(billingAccountId)

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
    try {
      List<ModelsBillingAccountRole> result = apiInstance.getBillingAccountRoles(billingAccountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#getBillingAccountRoles");
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

### Return type

[**List&lt;ModelsBillingAccountRole&gt;**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account roles successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Roles |  -  |

<a id="getBillingPermissions"></a>
# **getBillingPermissions**
> List&lt;ModelsBillingAccountPermission&gt; getBillingPermissions()

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
    try {
      List<ModelsBillingAccountPermission> result = apiInstance.getBillingPermissions();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#getBillingPermissions");
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

[**List&lt;ModelsBillingAccountPermission&gt;**](ModelsBillingAccountPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account permissions successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account Permissions |  -  |

<a id="updateBillingAccountRole"></a>
# **updateBillingAccountRole**
> ModelsBillingAccountRole updateBillingAccountRole(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest)

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
      ModelsBillingAccountRole result = apiInstance.updateBillingAccountRole(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsRbacApi#updateBillingAccountRole");
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

