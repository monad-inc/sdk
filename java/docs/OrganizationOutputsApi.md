# OrganizationOutputsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdOutputsGet**](OrganizationOutputsApi.md#v1OrganizationIdOutputsGet) | **GET** /v1/{organization_id}/outputs | List outputs |
| [**v1OrganizationIdOutputsOutputIdDelete**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdDelete) | **DELETE** /v1/{organization_id}/outputs/{output_id} | Delete output |
| [**v1OrganizationIdOutputsOutputIdGet**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdGet) | **GET** /v1/{organization_id}/outputs/{output_id} | Get output |
| [**v1OrganizationIdOutputsOutputIdPatch**](OrganizationOutputsApi.md#v1OrganizationIdOutputsOutputIdPatch) | **PATCH** /v1/{organization_id}/outputs/{output_id} | Update output |
| [**v1OrganizationIdOutputsPost**](OrganizationOutputsApi.md#v1OrganizationIdOutputsPost) | **POST** /v1/{organization_id}/outputs | Create output |
| [**v2OrganizationIdOutputsOutputIdPatch**](OrganizationOutputsApi.md#v2OrganizationIdOutputsOutputIdPatch) | **PATCH** /v2/{organization_id}/outputs/{output_id} | Update output |
| [**v2OrganizationIdOutputsPost**](OrganizationOutputsApi.md#v2OrganizationIdOutputsPost) | **POST** /v2/{organization_id}/outputs | Create output |
| [**v2OrganizationIdOutputsTestConnectionPost**](OrganizationOutputsApi.md#v2OrganizationIdOutputsTestConnectionPost) | **POST** /v2/{organization_id}/outputs/test-connection | Test output connection |


<a id="v1OrganizationIdOutputsGet"></a>
# **v1OrganizationIdOutputsGet**
> ModelsOutputList v1OrganizationIdOutputsGet(organizationId, limit, offset)

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
      ModelsOutputList result = apiInstance.v1OrganizationIdOutputsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v1OrganizationIdOutputsGet");
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

<a id="v1OrganizationIdOutputsOutputIdDelete"></a>
# **v1OrganizationIdOutputsOutputIdDelete**
> String v1OrganizationIdOutputsOutputIdDelete(organizationId, outputId)

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
      String result = apiInstance.v1OrganizationIdOutputsOutputIdDelete(organizationId, outputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v1OrganizationIdOutputsOutputIdDelete");
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

<a id="v1OrganizationIdOutputsOutputIdGet"></a>
# **v1OrganizationIdOutputsOutputIdGet**
> RoutesGetOutputResponse v1OrganizationIdOutputsOutputIdGet(organizationId, outputId)

Get output

Get output

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
      RoutesGetOutputResponse result = apiInstance.v1OrganizationIdOutputsOutputIdGet(organizationId, outputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v1OrganizationIdOutputsOutputIdGet");
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

<a id="v1OrganizationIdOutputsOutputIdPatch"></a>
# **v1OrganizationIdOutputsOutputIdPatch**
> ModelsOutput v1OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesUpdateOutputRequest)

Update output

Update output

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
    RoutesUpdateOutputRequest routesUpdateOutputRequest = new RoutesUpdateOutputRequest(); // RoutesUpdateOutputRequest | Request body for updating an output
    try {
      ModelsOutput result = apiInstance.v1OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesUpdateOutputRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v1OrganizationIdOutputsOutputIdPatch");
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
| **routesUpdateOutputRequest** | [**RoutesUpdateOutputRequest**](RoutesUpdateOutputRequest.md)| Request body for updating an output | |

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
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update output |  -  |

<a id="v1OrganizationIdOutputsPost"></a>
# **v1OrganizationIdOutputsPost**
> ModelsOutput v1OrganizationIdOutputsPost(organizationId, routesCreateOutputRequest)

Create output

Create output

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
    RoutesCreateOutputRequest routesCreateOutputRequest = new RoutesCreateOutputRequest(); // RoutesCreateOutputRequest | Request body for creating an output
    try {
      ModelsOutput result = apiInstance.v1OrganizationIdOutputsPost(organizationId, routesCreateOutputRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v1OrganizationIdOutputsPost");
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
| **routesCreateOutputRequest** | [**RoutesCreateOutputRequest**](RoutesCreateOutputRequest.md)| Request body for creating an output | |

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
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create output |  -  |

<a id="v2OrganizationIdOutputsOutputIdPatch"></a>
# **v2OrganizationIdOutputsOutputIdPatch**
> ModelsOutput v2OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesV2UpdateOutputRequest, testConnection)

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
    RoutesV2UpdateOutputRequest routesV2UpdateOutputRequest = new RoutesV2UpdateOutputRequest(); // RoutesV2UpdateOutputRequest | Output configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsOutput result = apiInstance.v2OrganizationIdOutputsOutputIdPatch(organizationId, outputId, routesV2UpdateOutputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v2OrganizationIdOutputsOutputIdPatch");
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
| **routesV2UpdateOutputRequest** | [**RoutesV2UpdateOutputRequest**](RoutesV2UpdateOutputRequest.md)| Output configuration update | |
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

<a id="v2OrganizationIdOutputsPost"></a>
# **v2OrganizationIdOutputsPost**
> ModelsOutput v2OrganizationIdOutputsPost(organizationId, routesV2CreateOutputRequest, testConnection)

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
    RoutesV2CreateOutputRequest routesV2CreateOutputRequest = new RoutesV2CreateOutputRequest(); // RoutesV2CreateOutputRequest | Output configuration
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsOutput result = apiInstance.v2OrganizationIdOutputsPost(organizationId, routesV2CreateOutputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v2OrganizationIdOutputsPost");
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
| **routesV2CreateOutputRequest** | [**RoutesV2CreateOutputRequest**](RoutesV2CreateOutputRequest.md)| Output configuration | |
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

<a id="v2OrganizationIdOutputsTestConnectionPost"></a>
# **v2OrganizationIdOutputsTestConnectionPost**
> RoutesV2SuccessResponse v2OrganizationIdOutputsTestConnectionPost(organizationId, body)

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
    Object body = null; // Object | Output configuration to test
    try {
      RoutesV2SuccessResponse result = apiInstance.v2OrganizationIdOutputsTestConnectionPost(organizationId, body);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationOutputsApi#v2OrganizationIdOutputsTestConnectionPost");
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
| **body** | **Object**| Output configuration to test | |

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

