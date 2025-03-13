# BillingAccountsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2BillingAccountsBillingAccountIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account |
| [**v2BillingAccountsBillingAccountIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdGet) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account |
| [**v2BillingAccountsBillingAccountIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account |
| [**v2BillingAccountsBillingAccountIdRolesGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles |
| [**v2BillingAccountsBillingAccountIdRolesPost**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role |
| [**v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role |
| [**v2BillingAccountsGet**](BillingAccountsApi.md#v2BillingAccountsGet) | **GET** /v2/billing/accounts | List Billing Accounts |
| [**v2BillingAccountsPost**](BillingAccountsApi.md#v2BillingAccountsPost) | **POST** /v2/billing/accounts | Create Billing Account |
| [**v2BillingPermissionsGet**](BillingAccountsApi.md#v2BillingPermissionsGet) | **GET** /v2/billing/permissions | Get Billing Permissions |


<a id="v2BillingAccountsBillingAccountIdDelete"></a>
# **v2BillingAccountsBillingAccountIdDelete**
> v2BillingAccountsBillingAccountIdDelete(billingAccountId, body)

Delete Billing Account

Delete Billing Account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    Object body = null; // Object | 
    try {
      apiInstance.v2BillingAccountsBillingAccountIdDelete(billingAccountId, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdDelete");
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing account deleted successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account |  -  |

<a id="v2BillingAccountsBillingAccountIdGet"></a>
# **v2BillingAccountsBillingAccountIdGet**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdGet(billingAccountId, body)

Get Billing Account

Get Billing Account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    Object body = null; // Object | 
    try {
      ModelsBillingAccount result = apiInstance.v2BillingAccountsBillingAccountIdGet(billingAccountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdGet");
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

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account |  -  |

<a id="v2BillingAccountsBillingAccountIdPatch"></a>
# **v2BillingAccountsBillingAccountIdPatch**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdPatch(billingAccountId, routesV2UpdateBillingAccountRequest)

Update Billing Account

Update Billing Account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    RoutesV2UpdateBillingAccountRequest routesV2UpdateBillingAccountRequest = new RoutesV2UpdateBillingAccountRequest(); // RoutesV2UpdateBillingAccountRequest | Request body for updating a billing account
    try {
      ModelsBillingAccount result = apiInstance.v2BillingAccountsBillingAccountIdPatch(billingAccountId, routesV2UpdateBillingAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdPatch");
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
| **routesV2UpdateBillingAccountRequest** | [**RoutesV2UpdateBillingAccountRequest**](RoutesV2UpdateBillingAccountRequest.md)| Request body for updating a billing account | |

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | billing account updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update Billing Account |  -  |

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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    Object body = null; // Object | 
    try {
      List<ModelsBillingAccountRole> result = apiInstance.v2BillingAccountsBillingAccountIdRolesGet(billingAccountId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesGet");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    RoutesV2CreateBillingAccountRoleRequest routesV2CreateBillingAccountRoleRequest = new RoutesV2CreateBillingAccountRoleRequest(); // RoutesV2CreateBillingAccountRoleRequest | Create Billing Account Role Request
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesPost(billingAccountId, routesV2CreateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesPost");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    Object body = null; // Object | 
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(billingAccountId, roleId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesRoleIdDelete");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    Object body = null; // Object | 
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdGet(billingAccountId, roleId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesRoleIdGet");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV2UpdateBillingAccountRoleRequest routesV2UpdateBillingAccountRoleRequest = new RoutesV2UpdateBillingAccountRoleRequest(); // RoutesV2UpdateBillingAccountRoleRequest | Update Billing Account Role Request
    try {
      ModelsBillingAccountRole result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdPatch(billingAccountId, roleId, routesV2UpdateBillingAccountRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesRoleIdPatch");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    RoutesV2CreatebillingAccountUserRoleRequest routesV2CreatebillingAccountUserRoleRequest = new RoutesV2CreatebillingAccountUserRoleRequest(); // RoutesV2CreatebillingAccountUserRoleRequest | Create Billing Account User Role Request
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(billingAccountId, roleId, routesV2CreatebillingAccountUserRoleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost");
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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String roleId = "roleId_example"; // String | Role ID
    String userId = "userId_example"; // String | User ID
    Object body = null; // Object | 
    try {
      String result = apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(billingAccountId, roleId, userId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete");
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

<a id="v2BillingAccountsGet"></a>
# **v2BillingAccountsGet**
> ModelsBillingAccount v2BillingAccountsGet(billingAccountId, limit, offset)

List Billing Accounts

List Billing Accounts

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsBillingAccount result = apiInstance.v2BillingAccountsGet(billingAccountId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsGet");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | list billing accounts successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to list Billing Accounts |  -  |

<a id="v2BillingAccountsPost"></a>
# **v2BillingAccountsPost**
> ModelsBillingAccount v2BillingAccountsPost(routesV2CreateBillingAccountRequest)

Create Billing Account

Create Billing Account

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    RoutesV2CreateBillingAccountRequest routesV2CreateBillingAccountRequest = new RoutesV2CreateBillingAccountRequest(); // RoutesV2CreateBillingAccountRequest | Request body for creating a billing account
    try {
      ModelsBillingAccount result = apiInstance.v2BillingAccountsPost(routesV2CreateBillingAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingAccountsPost");
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
| **routesV2CreateBillingAccountRequest** | [**RoutesV2CreateBillingAccountRequest**](RoutesV2CreateBillingAccountRequest.md)| Request body for creating a billing account | |

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | billing account created successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create Billing Account |  -  |

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
import org.openapitools.client.api.BillingAccountsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingAccountsApi apiInstance = new BillingAccountsApi(defaultClient);
    Object body = null; // Object | 
    try {
      List<ModelsBillingAccountPermission> result = apiInstance.v2BillingPermissionsGet(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#v2BillingPermissionsGet");
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

