# BillingAccountsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBillingAccount**](BillingAccountsApi.md#createBillingAccount) | **POST** /v2/billing/accounts | Create Billing Account |
| [**deleteBillingAccount**](BillingAccountsApi.md#deleteBillingAccount) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account |
| [**getBillingAccount**](BillingAccountsApi.md#getBillingAccount) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account |
| [**getBillingAccounts**](BillingAccountsApi.md#getBillingAccounts) | **GET** /v2/billing/accounts | List Billing Accounts |
| [**updateBillingAccount**](BillingAccountsApi.md#updateBillingAccount) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account |


<a id="createBillingAccount"></a>
# **createBillingAccount**
> ModelsBillingAccount createBillingAccount(routesV2CreateBillingAccountRequest)

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
      ModelsBillingAccount result = apiInstance.createBillingAccount(routesV2CreateBillingAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#createBillingAccount");
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

<a id="deleteBillingAccount"></a>
# **deleteBillingAccount**
> deleteBillingAccount(billingAccountId)

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
    try {
      apiInstance.deleteBillingAccount(billingAccountId);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#deleteBillingAccount");
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

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Billing account deleted successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to delete Billing Account |  -  |

<a id="getBillingAccount"></a>
# **getBillingAccount**
> ModelsBillingAccount getBillingAccount(billingAccountId)

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
    try {
      ModelsBillingAccount result = apiInstance.getBillingAccount(billingAccountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#getBillingAccount");
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

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | get billing account successfull |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get Billing Account |  -  |

<a id="getBillingAccounts"></a>
# **getBillingAccounts**
> ModelsBillingAccountList getBillingAccounts(limit, offset)

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
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsBillingAccountList result = apiInstance.getBillingAccounts(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#getBillingAccounts");
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

### Return type

[**ModelsBillingAccountList**](ModelsBillingAccountList.md)

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

<a id="updateBillingAccount"></a>
# **updateBillingAccount**
> ModelsBillingAccount updateBillingAccount(billingAccountId, routesV2UpdateBillingAccountRequest)

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
      ModelsBillingAccount result = apiInstance.updateBillingAccount(billingAccountId, routesV2UpdateBillingAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingAccountsApi#updateBillingAccount");
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

