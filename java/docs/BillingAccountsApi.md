# BillingAccountsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2BillingAccountsBillingAccountIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account |
| [**v2BillingAccountsBillingAccountIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdGet) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account |
| [**v2BillingAccountsBillingAccountIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account |
| [**v2BillingAccountsGet**](BillingAccountsApi.md#v2BillingAccountsGet) | **GET** /v2/billing/accounts | List Billing Accounts |
| [**v2BillingAccountsPost**](BillingAccountsApi.md#v2BillingAccountsPost) | **POST** /v2/billing/accounts | Create Billing Account |


<a id="v2BillingAccountsBillingAccountIdDelete"></a>
# **v2BillingAccountsBillingAccountIdDelete**
> v2BillingAccountsBillingAccountIdDelete(billingAccountId)

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
      apiInstance.v2BillingAccountsBillingAccountIdDelete(billingAccountId);
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

<a id="v2BillingAccountsBillingAccountIdGet"></a>
# **v2BillingAccountsBillingAccountIdGet**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdGet(billingAccountId)

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
      ModelsBillingAccount result = apiInstance.v2BillingAccountsBillingAccountIdGet(billingAccountId);
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

<a id="v2BillingAccountsGet"></a>
# **v2BillingAccountsGet**
> ModelsBillingAccountList v2BillingAccountsGet(limit, offset)

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
      ModelsBillingAccountList result = apiInstance.v2BillingAccountsGet(limit, offset);
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

