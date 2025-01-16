# OutputsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OutputsGet**](OutputsApi.md#v1OutputsGet) | **GET** /v1/outputs | List outputs |
| [**v1OutputsOutputTypeIdGet**](OutputsApi.md#v1OutputsOutputTypeIdGet) | **GET** /v1/outputs/{output_type_id} | Get output config meta |


<a id="v1OutputsGet"></a>
# **v1OutputsGet**
> List&lt;OutputsConnectorMeta&gt; v1OutputsGet()

List outputs

List outputs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OutputsApi;

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

    OutputsApi apiInstance = new OutputsApi(defaultClient);
    try {
      List<OutputsConnectorMeta> result = apiInstance.v1OutputsGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OutputsApi#v1OutputsGet");
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

[**List&lt;OutputsConnectorMeta&gt;**](OutputsConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Outputs retrieved successfully |  -  |

<a id="v1OutputsOutputTypeIdGet"></a>
# **v1OutputsOutputTypeIdGet**
> ModelsConnectorMeta v1OutputsOutputTypeIdGet(outputTypeId)

Get output config meta

Get output config meta

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OutputsApi;

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

    OutputsApi apiInstance = new OutputsApi(defaultClient);
    String outputTypeId = "outputTypeId_example"; // String | Output type ID
    try {
      ModelsConnectorMeta result = apiInstance.v1OutputsOutputTypeIdGet(outputTypeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OutputsApi#v1OutputsOutputTypeIdGet");
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
| **outputTypeId** | **String**| Output type ID | |

### Return type

[**ModelsConnectorMeta**](ModelsConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output config meta retrieved successfully |  -  |
| **404** | Output type not found |  -  |

