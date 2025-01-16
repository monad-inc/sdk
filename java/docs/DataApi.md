# DataApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdDataNodeIdGet**](DataApi.md#v1OrganizationIdDataNodeIdGet) | **GET** /v1/{organization_id}/data/{node_id} | Stream node data |


<a id="v1OrganizationIdDataNodeIdGet"></a>
# **v1OrganizationIdDataNodeIdGet**
> String v1OrganizationIdDataNodeIdGet(organizationId, nodeId)

Stream node data

Stream data for a specific node within an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DataApi;

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

    DataApi apiInstance = new DataApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String nodeId = "nodeId_example"; // String | Node ID
    try {
      String result = apiInstance.v1OrganizationIdDataNodeIdGet(organizationId, nodeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DataApi#v1OrganizationIdDataNodeIdGet");
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
| **nodeId** | **String**| Node ID | |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Data stream |  -  |
| **400** | Failed to enable node watching |  -  |
| **500** | Failed to create consumer |  -  |

