# OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdInputsBulkPost**](OrganizationInputsApi.md#v1OrganizationIdInputsBulkPost) | **POST** /v1/{organization_id}/inputs/bulk | Bulk create inputs |
| [**v1OrganizationIdInputsGet**](OrganizationInputsApi.md#v1OrganizationIdInputsGet) | **GET** /v1/{organization_id}/inputs | List inputs |
| [**v1OrganizationIdInputsInputIdDelete**](OrganizationInputsApi.md#v1OrganizationIdInputsInputIdDelete) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input |
| [**v1OrganizationIdInputsInputIdGet**](OrganizationInputsApi.md#v1OrganizationIdInputsInputIdGet) | **GET** /v1/{organization_id}/inputs/{input_id} | Get input |
| [**v1OrganizationIdInputsInputIdPatch**](OrganizationInputsApi.md#v1OrganizationIdInputsInputIdPatch) | **PATCH** /v1/{organization_id}/inputs/{input_id} | Update input |
| [**v1OrganizationIdInputsPost**](OrganizationInputsApi.md#v1OrganizationIdInputsPost) | **POST** /v1/{organization_id}/inputs | Create input |
| [**v2OrganizationIdInputsInputIdPatch**](OrganizationInputsApi.md#v2OrganizationIdInputsInputIdPatch) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input |
| [**v2OrganizationIdInputsPost**](OrganizationInputsApi.md#v2OrganizationIdInputsPost) | **POST** /v2/{organization_id}/inputs | Create input |
| [**v2OrganizationIdInputsTestConnectionPost**](OrganizationInputsApi.md#v2OrganizationIdInputsTestConnectionPost) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection |


<a id="v1OrganizationIdInputsBulkPost"></a>
# **v1OrganizationIdInputsBulkPost**
> List&lt;ModelsInput&gt; v1OrganizationIdInputsBulkPost(organizationId, routesBulkCreateInputRequest, testConnection)

Bulk create inputs

Create multiple inputs in a single request

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesBulkCreateInputRequest routesBulkCreateInputRequest = new RoutesBulkCreateInputRequest(); // RoutesBulkCreateInputRequest | Request body for creating multiple inputs
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      List<ModelsInput> result = apiInstance.v1OrganizationIdInputsBulkPost(organizationId, routesBulkCreateInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsBulkPost");
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
| **routesBulkCreateInputRequest** | [**RoutesBulkCreateInputRequest**](RoutesBulkCreateInputRequest.md)| Request body for creating multiple inputs | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**List&lt;ModelsInput&gt;**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inputs created successfully |  -  |
| **400** | Validation error |  -  |
| **500** | Failed to create inputs |  -  |

<a id="v1OrganizationIdInputsGet"></a>
# **v1OrganizationIdInputsGet**
> ModelsInputList v1OrganizationIdInputsGet(organizationId, limit, offset)

List inputs

List inputs

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit the number of organizations returned (default: DefaultLimit)
    Integer offset = 56; // Integer | Offset the organizations returned (default: 0)
    try {
      ModelsInputList result = apiInstance.v1OrganizationIdInputsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsGet");
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
| **limit** | **Integer**| Limit the number of organizations returned (default: DefaultLimit) | [optional] |
| **offset** | **Integer**| Offset the organizations returned (default: 0) | [optional] |

### Return type

[**ModelsInputList**](ModelsInputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Inputs retrieved successfully |  -  |

<a id="v1OrganizationIdInputsInputIdDelete"></a>
# **v1OrganizationIdInputsInputIdDelete**
> Object v1OrganizationIdInputsInputIdDelete(organizationId, inputId)

Delete input

Delete input

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String inputId = "inputId_example"; // String | Input ID
    try {
      Object result = apiInstance.v1OrganizationIdInputsInputIdDelete(organizationId, inputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsInputIdDelete");
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
| **inputId** | **String**| Input ID | |

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | Failed to delete input |  -  |

<a id="v1OrganizationIdInputsInputIdGet"></a>
# **v1OrganizationIdInputsInputIdGet**
> RoutesGetInputResponse v1OrganizationIdInputsInputIdGet(organizationId, inputId)

Get input

Get input

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String inputId = "inputId_example"; // String | Input ID
    try {
      RoutesGetInputResponse result = apiInstance.v1OrganizationIdInputsInputIdGet(organizationId, inputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsInputIdGet");
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
| **inputId** | **String**| Input ID | |

### Return type

[**RoutesGetInputResponse**](RoutesGetInputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Input retrieved successfully |  -  |

<a id="v1OrganizationIdInputsInputIdPatch"></a>
# **v1OrganizationIdInputsInputIdPatch**
> ModelsInput v1OrganizationIdInputsInputIdPatch(organizationId, inputId, routesUpdateInputRequest, testConnection)

Update input

Update input

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String inputId = "inputId_example"; // String | Input ID
    RoutesUpdateInputRequest routesUpdateInputRequest = new RoutesUpdateInputRequest(); // RoutesUpdateInputRequest | Request body for updating an input
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.v1OrganizationIdInputsInputIdPatch(organizationId, inputId, routesUpdateInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsInputIdPatch");
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
| **inputId** | **String**| Input ID | |
| **routesUpdateInputRequest** | [**RoutesUpdateInputRequest**](RoutesUpdateInputRequest.md)| Request body for updating an input | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Input updated successfully |  -  |
| **400** | Invalid JSON config in body |  -  |
| **500** | Failed to update input |  -  |

<a id="v1OrganizationIdInputsPost"></a>
# **v1OrganizationIdInputsPost**
> ModelsInput v1OrganizationIdInputsPost(organizationId, routesCreateInputRequest, testConnection)

Create input

Create input

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesCreateInputRequest routesCreateInputRequest = new RoutesCreateInputRequest(); // RoutesCreateInputRequest | Request body for creating an input
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.v1OrganizationIdInputsPost(organizationId, routesCreateInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v1OrganizationIdInputsPost");
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
| **routesCreateInputRequest** | [**RoutesCreateInputRequest**](RoutesCreateInputRequest.md)| Request body for creating an input | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Input created successfully |  -  |
| **400** | Failed to create input |  -  |

<a id="v2OrganizationIdInputsInputIdPatch"></a>
# **v2OrganizationIdInputsInputIdPatch**
> ModelsInput v2OrganizationIdInputsInputIdPatch(organizationId, inputId, routesV2UpdateInputRequest, testConnection)

Update input

Update an existing input with new configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String inputId = "inputId_example"; // String | Input ID
    RoutesV2UpdateInputRequest routesV2UpdateInputRequest = new RoutesV2UpdateInputRequest(); // RoutesV2UpdateInputRequest | Input configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.v2OrganizationIdInputsInputIdPatch(organizationId, inputId, routesV2UpdateInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v2OrganizationIdInputsInputIdPatch");
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
| **inputId** | **String**| Input ID | |
| **routesV2UpdateInputRequest** | [**RoutesV2UpdateInputRequest**](RoutesV2UpdateInputRequest.md)| Input configuration update | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Input updated successfully |  -  |
| **400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
| **404** | Input not found |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdInputsPost"></a>
# **v2OrganizationIdInputsPost**
> ModelsInput v2OrganizationIdInputsPost(organizationId, body, testConnection)

Create input

Create a new input with configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Object body = null; // Object | Input configuration
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.v2OrganizationIdInputsPost(organizationId, body, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v2OrganizationIdInputsPost");
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
| **body** | **Object**| Input configuration | |
| **testConnection** | **Boolean**| Test connection before creating the input | [optional] |

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Input created successfully |  -  |
| **400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdInputsTestConnectionPost"></a>
# **v2OrganizationIdInputsTestConnectionPost**
> RoutesV2SuccessResponse v2OrganizationIdInputsTestConnectionPost(organizationId, routesV2TestInputConnectionRequest)

Test input connection

Tests the connection for a given input type and configuration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInputsApi;

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

    OrganizationInputsApi apiInstance = new OrganizationInputsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV2TestInputConnectionRequest routesV2TestInputConnectionRequest = new RoutesV2TestInputConnectionRequest(); // RoutesV2TestInputConnectionRequest | Input configuration to test
    try {
      RoutesV2SuccessResponse result = apiInstance.v2OrganizationIdInputsTestConnectionPost(organizationId, routesV2TestInputConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#v2OrganizationIdInputsTestConnectionPost");
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
| **routesV2TestInputConnectionRequest** | [**RoutesV2TestInputConnectionRequest**](RoutesV2TestInputConnectionRequest.md)| Input configuration to test | |

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
| **400** | Invalid request body, input type, or configuration |  -  |
| **500** | Internal server error |  -  |

