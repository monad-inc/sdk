# QuotasApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2QuotasGet**](QuotasApi.md#v2QuotasGet) | **GET** /v2/quotas | List quotas |


<a id="v2QuotasGet"></a>
# **v2QuotasGet**
> ModelsQuotaList v2QuotasGet(billingAccountId, organizationId, limit, offset, body)

List quotas

List quotas for a given billing account or organization id.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.QuotasApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    QuotasApi apiInstance = new QuotasApi(defaultClient);
    String billingAccountId = "billingAccountId_example"; // String | Billing Account ID
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    Object body = null; // Object | 
    try {
      ModelsQuotaList result = apiInstance.v2QuotasGet(billingAccountId, organizationId, limit, offset, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling QuotasApi#v2QuotasGet");
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
| **billingAccountId** | **String**| Billing Account ID | [optional] |
| **organizationId** | **String**| Organization ID | [optional] |
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |
| **body** | **Object**|  | [optional] |

### Return type

[**ModelsQuotaList**](ModelsQuotaList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | list quotas successful |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to list quotas |  -  |

