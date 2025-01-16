# OrganizationQuotasApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganizationIdQuotasGet**](OrganizationQuotasApi.md#v2OrganizationIdQuotasGet) | **GET** /v2/{organization_id}/quotas | Get Organization Quotas |


<a id="v2OrganizationIdQuotasGet"></a>
# **v2OrganizationIdQuotasGet**
> ModelsQuotaList v2OrganizationIdQuotasGet(organizationId, limit, offset, body)

Get Organization Quotas

Returns a paginated list of quotas with their latest usage for a given organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationQuotasApi;

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

    OrganizationQuotasApi apiInstance = new OrganizationQuotasApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    Object body = null; // Object | 
    try {
      ModelsQuotaList result = apiInstance.v2OrganizationIdQuotasGet(organizationId, limit, offset, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationQuotasApi#v2OrganizationIdQuotasGet");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |
| **body** | **Object**|  | [optional] |

### Return type

[**ModelsQuotaList**](ModelsQuotaList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of quotas |  -  |
| **400** | Invalid limit or offset |  -  |
| **500** | Failed to list quotas |  -  |

