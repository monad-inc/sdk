# TransformSandboxApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applyTransformation**](TransformSandboxApi.md#applyTransformation) | **POST** /v2/{organization_id}/sandbox/transform | Apply transformation to record |
| [**applyTransformationV2**](TransformSandboxApi.md#applyTransformationV2) | **POST** /v2/sandbox/transform | Apply transformation to record |
| [**generateRecord**](TransformSandboxApi.md#generateRecord) | **POST** /v2/sandbox/template | Generate sample record |
| [**listTemplates**](TransformSandboxApi.md#listTemplates) | **GET** /v2/sandbox/template | List available templates |


<a id="applyTransformation"></a>
# **applyTransformation**
> RoutesV2ApplyTransformationResponse applyTransformation(organizationId, applyTransformationV2Request)

Apply transformation to record

Apply a transformation configuration to a JSON record, resolving secret references from the organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformSandboxApi;

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

    TransformSandboxApi apiInstance = new TransformSandboxApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    ApplyTransformationV2Request applyTransformationV2Request = new ApplyTransformationV2Request(); // ApplyTransformationV2Request | Transform configuration and record
    try {
      RoutesV2ApplyTransformationResponse result = apiInstance.applyTransformation(organizationId, applyTransformationV2Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformSandboxApi#applyTransformation");
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
| **applyTransformationV2Request** | [**ApplyTransformationV2Request**](ApplyTransformationV2Request.md)| Transform configuration and record | |

### Return type

[**RoutesV2ApplyTransformationResponse**](RoutesV2ApplyTransformationResponse.md)

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

<a id="applyTransformationV2"></a>
# **applyTransformationV2**
> RoutesV2ApplyTransformationResponse applyTransformationV2(applyTransformationV2Request)

Apply transformation to record

Apply a transformation configuration to a JSON record

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformSandboxApi;

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

    TransformSandboxApi apiInstance = new TransformSandboxApi(defaultClient);
    ApplyTransformationV2Request applyTransformationV2Request = new ApplyTransformationV2Request(); // ApplyTransformationV2Request | Transform configuration and record
    try {
      RoutesV2ApplyTransformationResponse result = apiInstance.applyTransformationV2(applyTransformationV2Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformSandboxApi#applyTransformationV2");
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
| **applyTransformationV2Request** | [**ApplyTransformationV2Request**](ApplyTransformationV2Request.md)| Transform configuration and record | |

### Return type

[**RoutesV2ApplyTransformationResponse**](RoutesV2ApplyTransformationResponse.md)

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

<a id="generateRecord"></a>
# **generateRecord**
> RoutesV2GenerateRecordResponse generateRecord(generateRecordRequest)

Generate sample record

Generate a sample record using the specified template type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformSandboxApi;

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

    TransformSandboxApi apiInstance = new TransformSandboxApi(defaultClient);
    GenerateRecordRequest generateRecordRequest = new GenerateRecordRequest(); // GenerateRecordRequest | Record generation parameters
    try {
      RoutesV2GenerateRecordResponse result = apiInstance.generateRecord(generateRecordRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformSandboxApi#generateRecord");
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
| **generateRecordRequest** | [**GenerateRecordRequest**](GenerateRecordRequest.md)| Record generation parameters | |

### Return type

[**RoutesV2GenerateRecordResponse**](RoutesV2GenerateRecordResponse.md)

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

<a id="listTemplates"></a>
# **listTemplates**
> RoutesV2ListTemplatesResponse listTemplates(body)

List available templates

Get a list of all valid record type templates

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TransformSandboxApi;

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

    TransformSandboxApi apiInstance = new TransformSandboxApi(defaultClient);
    Object body = null; // Object | 
    try {
      RoutesV2ListTemplatesResponse result = apiInstance.listTemplates(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransformSandboxApi#listTemplates");
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
| **body** | **Object**|  | [optional] |

### Return type

[**RoutesV2ListTemplatesResponse**](RoutesV2ListTemplatesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of template names |  -  |

