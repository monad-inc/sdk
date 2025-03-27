# BillingProductsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2BillingAccountsBillingAccountIdSubscriptionDelete**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription |
| [**v2BillingAccountsBillingAccountIdSubscriptionGet**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionGet) | **GET** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription |
| [**v2BillingAccountsBillingAccountIdSubscriptionPost**](BillingProductsApi.md#v2BillingAccountsBillingAccountIdSubscriptionPost) | **POST** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription |
| [**v2BillingProductsGet**](BillingProductsApi.md#v2BillingProductsGet) | **GET** /v2/billing/products | List Billing Products |


<a id="v2BillingAccountsBillingAccountIdSubscriptionDelete"></a>
# **v2BillingAccountsBillingAccountIdSubscriptionDelete**
> v2BillingAccountsBillingAccountIdSubscriptionDelete(billingAccountId)

Cancel Billing Account Subscription

Cancel Billing Account Subscription

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingProductsApi apiInstance = new BillingProductsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    try {
      apiInstance.v2BillingAccountsBillingAccountIdSubscriptionDelete(billingAccountId);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingProductsApi#v2BillingAccountsBillingAccountIdSubscriptionDelete");
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
| **204** | Billing subscription cancelled successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to cancel billing account subscription |  -  |

<a id="v2BillingAccountsBillingAccountIdSubscriptionGet"></a>
# **v2BillingAccountsBillingAccountIdSubscriptionGet**
> ModelsBillingProduct v2BillingAccountsBillingAccountIdSubscriptionGet(billingAccountId)

Get Billing Account Subscription

Get Billing Account Subscription

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingProductsApi apiInstance = new BillingProductsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    try {
      ModelsBillingProduct result = apiInstance.v2BillingAccountsBillingAccountIdSubscriptionGet(billingAccountId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingProductsApi#v2BillingAccountsBillingAccountIdSubscriptionGet");
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

[**ModelsBillingProduct**](ModelsBillingProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | billing subscription retrieved successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to get billing account subscription |  -  |

<a id="v2BillingAccountsBillingAccountIdSubscriptionPost"></a>
# **v2BillingAccountsBillingAccountIdSubscriptionPost**
> RoutesV2CreateBillingAccountSubscriptionResponse v2BillingAccountsBillingAccountIdSubscriptionPost(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest)

Create Billing Account Subscription

Create Billing Account Subscription

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingProductsApi apiInstance = new BillingProductsApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    RoutesV2CreateBillingAccountSubscriptionRequest routesV2CreateBillingAccountSubscriptionRequest = new RoutesV2CreateBillingAccountSubscriptionRequest(); // RoutesV2CreateBillingAccountSubscriptionRequest | Request body for creating a billing subscription
    try {
      RoutesV2CreateBillingAccountSubscriptionResponse result = apiInstance.v2BillingAccountsBillingAccountIdSubscriptionPost(billingAccountId, routesV2CreateBillingAccountSubscriptionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingProductsApi#v2BillingAccountsBillingAccountIdSubscriptionPost");
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
| **routesV2CreateBillingAccountSubscriptionRequest** | [**RoutesV2CreateBillingAccountSubscriptionRequest**](RoutesV2CreateBillingAccountSubscriptionRequest.md)| Request body for creating a billing subscription | |

### Return type

[**RoutesV2CreateBillingAccountSubscriptionResponse**](RoutesV2CreateBillingAccountSubscriptionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | billing subscription intialized successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to created billing account subscription |  -  |

<a id="v2BillingProductsGet"></a>
# **v2BillingProductsGet**
> ModelsBillingProductList v2BillingProductsGet(limit, offset)

List Billing Products

List Billing Products

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.BillingProductsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    BillingProductsApi apiInstance = new BillingProductsApi(defaultClient);
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsBillingProductList result = apiInstance.v2BillingProductsGet(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling BillingProductsApi#v2BillingProductsGet");
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

[**ModelsBillingProductList**](ModelsBillingProductList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | billing product listed successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to list billing products |  -  |

