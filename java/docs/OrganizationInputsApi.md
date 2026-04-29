# OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInput**](OrganizationInputsApi.md#createInput) | **POST** /v2/{organization_id}/inputs | Create input |
| [**deleteOrganizationInput**](OrganizationInputsApi.md#deleteOrganizationInput) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input |
| [**getOrganizationInput**](OrganizationInputsApi.md#getOrganizationInput) | **GET** /v1/{organization_id}/inputs/{input_id} | Get organization input |
| [**listOrganizationInputs**](OrganizationInputsApi.md#listOrganizationInputs) | **GET** /v1/{organization_id}/inputs | List organization inputs |
| [**replaceInput**](OrganizationInputsApi.md#replaceInput) | **PUT** /v2/{organization_id}/inputs/{input_id} | Replace input |
| [**testInputConnection**](OrganizationInputsApi.md#testInputConnection) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection |
| [**updateInput**](OrganizationInputsApi.md#updateInput) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input |


<a id="createInput"></a>
# **createInput**
> ModelsInput createInput(organizationId, createInputRequest, testConnection)

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
    CreateInputRequest createInputRequest = new CreateInputRequest(); // CreateInputRequest | Input configuration
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.createInput(organizationId, createInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#createInput");
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
| **createInputRequest** | [**CreateInputRequest**](CreateInputRequest.md)| Input configuration | |
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

<a id="deleteOrganizationInput"></a>
# **deleteOrganizationInput**
> Object deleteOrganizationInput(organizationId, inputId)

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
      Object result = apiInstance.deleteOrganizationInput(organizationId, inputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#deleteOrganizationInput");
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

<a id="getOrganizationInput"></a>
# **getOrganizationInput**
> RoutesGetInputResponse getOrganizationInput(organizationId, inputId)

Get organization input

Get a configured input in organization

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
      RoutesGetInputResponse result = apiInstance.getOrganizationInput(organizationId, inputId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#getOrganizationInput");
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

<a id="listOrganizationInputs"></a>
# **listOrganizationInputs**
> ModelsInputList listOrganizationInputs(organizationId, limit, offset)

List organization inputs

List configured inputs in organization

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
      ModelsInputList result = apiInstance.listOrganizationInputs(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#listOrganizationInputs");
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

<a id="replaceInput"></a>
# **replaceInput**
> ModelsInput replaceInput(organizationId, inputId, replaceInputRequest, testConnection)

Replace input

Replace an existing input with new configuration including secrets handling

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
    ReplaceInputRequest replaceInputRequest = new ReplaceInputRequest(); // ReplaceInputRequest | Input configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.replaceInput(organizationId, inputId, replaceInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#replaceInput");
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
| **replaceInputRequest** | [**ReplaceInputRequest**](ReplaceInputRequest.md)| Input configuration update | |
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

<a id="testInputConnection"></a>
# **testInputConnection**
> RoutesV2SuccessResponse testInputConnection(organizationId, testInputConnectionRequest)

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
    TestInputConnectionRequest testInputConnectionRequest = new TestInputConnectionRequest(); // TestInputConnectionRequest | Input configuration to test
    try {
      RoutesV2SuccessResponse result = apiInstance.testInputConnection(organizationId, testInputConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#testInputConnection");
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
| **testInputConnectionRequest** | [**TestInputConnectionRequest**](TestInputConnectionRequest.md)| Input configuration to test | |

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

<a id="updateInput"></a>
# **updateInput**
> ModelsInput updateInput(organizationId, inputId, updateInputRequest, testConnection)

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
    UpdateInputRequest updateInputRequest = new UpdateInputRequest(); // UpdateInputRequest | Input configuration update
    Boolean testConnection = true; // Boolean | Test connection before creating the input
    try {
      ModelsInput result = apiInstance.updateInput(organizationId, inputId, updateInputRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInputsApi#updateInput");
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
| **updateInputRequest** | [**UpdateInputRequest**](UpdateInputRequest.md)| Input configuration update | |
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

