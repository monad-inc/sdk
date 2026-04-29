# OrganizationOutputsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOutput**](OrganizationOutputsApi.md#createOutput) | **POST** /v2/{organization_id}/outputs | Create output |
| [**deleteOrganizationOutput**](OrganizationOutputsApi.md#deleteOrganizationOutput) | **DELETE** /v1/{organization_id}/outputs/{output_id} | Delete output |
| [**getOrganizationOutput**](OrganizationOutputsApi.md#getOrganizationOutput) | **GET** /v1/{organization_id}/outputs/{output_id} | Get a output |
| [**listOrganizationOutputs**](OrganizationOutputsApi.md#listOrganizationOutputs) | **GET** /v1/{organization_id}/outputs | List configured outputs in organization |
| [**replaceOutput**](OrganizationOutputsApi.md#replaceOutput) | **PUT** /v2/{organization_id}/outputs/{output_id} | Replace output |
| [**testOutputConnection**](OrganizationOutputsApi.md#testOutputConnection) | **POST** /v2/{organization_id}/outputs/test-connection | Test output connection |
| [**updateOutput**](OrganizationOutputsApi.md#updateOutput) | **PATCH** /v2/{organization_id}/outputs/{output_id} | Update output |


<a id="createOutput"></a>
# **createOutput**
> ModelsOutput createOutput(organizationId, createOutputRequest, testConnection)

Create output

Create a new output with configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    CreateOutputRequest createOutputRequest = new CreateOutputRequest(); // CreateOutputRequest | Output configuration
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsOutput result = apiInstance.createOutput(organizationId, createOutputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#createOutput");
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
| **createOutputRequest** | [**CreateOutputRequest**](CreateOutputRequest.md)| Output configuration | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output created successfully |  -  |
| **400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
| **500** | Internal server error |  -  |

<a id="deleteOrganizationOutput"></a>
# **deleteOrganizationOutput**
> String deleteOrganizationOutput(organizationId, outputId)

Delete output

Delete output

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String outputId = "outputId_example"; // String | Output ID
    try {
      String result = apiInstance.deleteOrganizationOutput(organizationId, outputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#deleteOrganizationOutput");
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
| **outputId** | **String**| Output ID | |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output deleted successfully |  -  |
| **500** | Failed to delete output |  -  |

<a id="getOrganizationOutput"></a>
# **getOrganizationOutput**
> RoutesGetOutputResponse getOrganizationOutput(organizationId, outputId)

Get a output

Get a configured output in organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String outputId = "outputId_example"; // String | Output ID
    try {
      RoutesGetOutputResponse result = apiInstance.getOrganizationOutput(organizationId, outputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#getOrganizationOutput");
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
| **outputId** | **String**| Output ID | |

### Return type

[**RoutesGetOutputResponse**](RoutesGetOutputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output retrieved successfully |  -  |
| **500** | Failed to get output |  -  |

<a id="listOrganizationOutputs"></a>
# **listOrganizationOutputs**
> ModelsOutputList listOrganizationOutputs(organizationId, limit, offset)

List configured outputs in organization

List outputs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsOutputList result = apiInstance.listOrganizationOutputs(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#listOrganizationOutputs");
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

### Return type

[**ModelsOutputList**](ModelsOutputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of outputs |  -  |
| **500** | Failed to marshal outputs |  -  |

<a id="replaceOutput"></a>
# **replaceOutput**
> ModelsOutput replaceOutput(organizationId, outputId, replaceOutputRequest, testConnection)

Replace output

Replace an existing output with new configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String outputId = "outputId_example"; // String | Output ID
    ReplaceOutputRequest replaceOutputRequest = new ReplaceOutputRequest(); // ReplaceOutputRequest | Output configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsOutput result = apiInstance.replaceOutput(organizationId, outputId, replaceOutputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#replaceOutput");
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
| **outputId** | **String**| Output ID | |
| **replaceOutputRequest** | [**ReplaceOutputRequest**](ReplaceOutputRequest.md)| Output configuration update | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output updated successfully |  -  |
| **400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
| **404** | Output not found |  -  |
| **500** | Internal server error |  -  |

<a id="testOutputConnection"></a>
# **testOutputConnection**
> RoutesV2SuccessResponse testOutputConnection(organizationId, testOutputConnectionRequest)

Test output connection

Tests the connection for a given output type and configuration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    TestOutputConnectionRequest testOutputConnectionRequest = new TestOutputConnectionRequest(); // TestOutputConnectionRequest | Output configuration to test
    try {
      RoutesV2SuccessResponse result = apiInstance.testOutputConnection(organizationId, testOutputConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#testOutputConnection");
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
| **testOutputConnectionRequest** | [**TestOutputConnectionRequest**](TestOutputConnectionRequest.md)| Output configuration to test | |

### Return type

[**RoutesV2SuccessResponse**](RoutesV2SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection test successful |  -  |
| **400** | Invalid request body, output type, or configuration |  -  |
| **500** | Internal server error |  -  |

<a id="updateOutput"></a>
# **updateOutput**
> ModelsOutput updateOutput(organizationId, outputId, updateOutputRequest, testConnection)

Update output

Update an existing output with new configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationOutputsApi;

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

    OrganizationOutputsApi apiInstance = new OrganizationOutputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String outputId = "outputId_example"; // String | Output ID
    UpdateOutputRequest updateOutputRequest = new UpdateOutputRequest(); // UpdateOutputRequest | Output configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsOutput result = apiInstance.updateOutput(organizationId, outputId, updateOutputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#updateOutput");
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
| **outputId** | **String**| Output ID | |
| **updateOutputRequest** | [**UpdateOutputRequest**](UpdateOutputRequest.md)| Output configuration update | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Output updated successfully |  -  |
| **400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
| **404** | Output not found |  -  |
| **500** | Internal server error |  -  |

