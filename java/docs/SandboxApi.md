# SandboxApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2SandboxTemplateGet**](SandboxApi.md#v2SandboxTemplateGet) | **GET** /v2/sandbox/template | List available templates |
| [**v2SandboxTemplatePost**](SandboxApi.md#v2SandboxTemplatePost) | **POST** /v2/sandbox/template | Generate sample record |
| [**v2SandboxTransformPost**](SandboxApi.md#v2SandboxTransformPost) | **POST** /v2/sandbox/transform | Apply transformation to record |
| [**v3OrganizationIdEnrichmentsSandboxPost**](SandboxApi.md#v3OrganizationIdEnrichmentsSandboxPost) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record |


<a id="v2SandboxTemplateGet"></a>
# **v2SandboxTemplateGet**
> RoutesV2ListTemplatesResponse v2SandboxTemplateGet(body)

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
import org.openapitools.client.api.SandboxApi;

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

    SandboxApi apiInstance = new SandboxApi(defaultClient);
    Object body = null; // Object | 
    try {
      RoutesV2ListTemplatesResponse result = apiInstance.v2SandboxTemplateGet(body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxApi#v2SandboxTemplateGet");
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

<a id="v2SandboxTemplatePost"></a>
# **v2SandboxTemplatePost**
> RoutesV2GenerateRecordResponse v2SandboxTemplatePost(routesV2GenerateRecordRequest)

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
import org.openapitools.client.api.SandboxApi;

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

    SandboxApi apiInstance = new SandboxApi(defaultClient);
    RoutesV2GenerateRecordRequest routesV2GenerateRecordRequest = new RoutesV2GenerateRecordRequest(); // RoutesV2GenerateRecordRequest | Record generation parameters
    try {
      RoutesV2GenerateRecordResponse result = apiInstance.v2SandboxTemplatePost(routesV2GenerateRecordRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxApi#v2SandboxTemplatePost");
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
| **routesV2GenerateRecordRequest** | [**RoutesV2GenerateRecordRequest**](RoutesV2GenerateRecordRequest.md)| Record generation parameters | |

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

<a id="v2SandboxTransformPost"></a>
# **v2SandboxTransformPost**
> RoutesV2ApplyTransformationResponse v2SandboxTransformPost(routesV2ApplyTransformationRequest)

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
import org.openapitools.client.api.SandboxApi;

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

    SandboxApi apiInstance = new SandboxApi(defaultClient);
    RoutesV2ApplyTransformationRequest routesV2ApplyTransformationRequest = new RoutesV2ApplyTransformationRequest(); // RoutesV2ApplyTransformationRequest | Transform configuration and record
    try {
      RoutesV2ApplyTransformationResponse result = apiInstance.v2SandboxTransformPost(routesV2ApplyTransformationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxApi#v2SandboxTransformPost");
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
| **routesV2ApplyTransformationRequest** | [**RoutesV2ApplyTransformationRequest**](RoutesV2ApplyTransformationRequest.md)| Transform configuration and record | |

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

<a id="v3OrganizationIdEnrichmentsSandboxPost"></a>
# **v3OrganizationIdEnrichmentsSandboxPost**
> RoutesV3EnrichmentSandboxResponse v3OrganizationIdEnrichmentsSandboxPost(organizationId, routesV3EnrichmentSandboxRequest)

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
import org.openapitools.client.api.SandboxApi;

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

    SandboxApi apiInstance = new SandboxApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV3EnrichmentSandboxRequest routesV3EnrichmentSandboxRequest = new RoutesV3EnrichmentSandboxRequest(); // RoutesV3EnrichmentSandboxRequest | Enrichment configuration and record
    try {
      RoutesV3EnrichmentSandboxResponse result = apiInstance.v3OrganizationIdEnrichmentsSandboxPost(organizationId, routesV3EnrichmentSandboxRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SandboxApi#v3OrganizationIdEnrichmentsSandboxPost");
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
| **routesV3EnrichmentSandboxRequest** | [**RoutesV3EnrichmentSandboxRequest**](RoutesV3EnrichmentSandboxRequest.md)| Enrichment configuration and record | |

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

