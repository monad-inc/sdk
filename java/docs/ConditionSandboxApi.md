# ConditionSandboxApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyConditionV2**](ConditionSandboxApi.md#applyConditionV2) | **POST** /v2/sandbox/condition | Apply condition to record |


<a id="applyConditionV2"></a>
# **applyConditionV2**
> RoutesV2ApplyConditionResponse applyConditionV2(applyConditionV2Request)

Apply condition to record

Apply a condition to a JSON record

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ConditionSandboxApi;

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

    ConditionSandboxApi apiInstance = new ConditionSandboxApi(defaultClient);
    ApplyConditionV2Request applyConditionV2Request = new ApplyConditionV2Request(); // ApplyConditionV2Request | Condition and record
    try {
      RoutesV2ApplyConditionResponse result = apiInstance.applyConditionV2(applyConditionV2Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConditionSandboxApi#applyConditionV2");
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
| **applyConditionV2Request** | [**ApplyConditionV2Request**](ApplyConditionV2Request.md)| Condition and record | |

### Return type

[**RoutesV2ApplyConditionResponse**](RoutesV2ApplyConditionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Invalid request parameters |  -  |
| **500** | Internal server error |  -  |

