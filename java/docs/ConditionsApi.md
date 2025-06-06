# ConditionsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ConditionsGet**](ConditionsApi.md#v2ConditionsGet) | **GET** /v2/conditions | List conditions |


<a id="v2ConditionsGet"></a>
# **v2ConditionsGet**
> List&lt;ConditionInfo&gt; v2ConditionsGet()

List conditions

List conditions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConditionsApi;

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

    ConditionsApi apiInstance = new ConditionsApi(defaultClient);
    try {
      List<ConditionInfo> result = apiInstance.v2ConditionsGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConditionsApi#v2ConditionsGet");
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

[**List&lt;ConditionInfo&gt;**](ConditionInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conditions information |  -  |

