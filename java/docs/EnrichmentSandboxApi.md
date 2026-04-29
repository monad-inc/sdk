# EnrichmentSandboxApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**enrichmentSandbox**](EnrichmentSandboxApi.md#enrichmentSandbox) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record |


<a id="enrichmentSandbox"></a>
# **enrichmentSandbox**
> RoutesV3EnrichmentSandboxResponse enrichmentSandbox(organizationId, enrichmentSandboxRequest)

Apply enrichment to record

Apply a enrichment configuration to a JSON record

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EnrichmentSandboxApi;

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

    EnrichmentSandboxApi apiInstance = new EnrichmentSandboxApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    EnrichmentSandboxRequest enrichmentSandboxRequest = new EnrichmentSandboxRequest(); // EnrichmentSandboxRequest | Enrichment configuration and record
    try {
      RoutesV3EnrichmentSandboxResponse result = apiInstance.enrichmentSandbox(organizationId, enrichmentSandboxRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EnrichmentSandboxApi#enrichmentSandbox");
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
| **enrichmentSandboxRequest** | [**EnrichmentSandboxRequest**](EnrichmentSandboxRequest.md)| Enrichment configuration and record | |

### Return type

[**RoutesV3EnrichmentSandboxResponse**](RoutesV3EnrichmentSandboxResponse.md)

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

