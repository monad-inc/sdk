# OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEnrichment**](OrganizationEnrichmentsApi.md#createEnrichment) | **POST** /v3/{organization_id}/enrichments | Create enrichment |
| [**deleteEnrichment**](OrganizationEnrichmentsApi.md#deleteEnrichment) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment |
| [**getEnrichment**](OrganizationEnrichmentsApi.md#getEnrichment) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment |
| [**listEnrichments**](OrganizationEnrichmentsApi.md#listEnrichments) | **GET** /v3/{organization_id}/enrichments | List enrichments |
| [**replaceEnrichment**](OrganizationEnrichmentsApi.md#replaceEnrichment) | **PUT** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment |
| [**testEnrichmentConnection**](OrganizationEnrichmentsApi.md#testEnrichmentConnection) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection |
| [**updateEnrichment**](OrganizationEnrichmentsApi.md#updateEnrichment) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment |


<a id="createEnrichment"></a>
# **createEnrichment**
> ModelsEnrichment createEnrichment(organizationId, routesV3CreateEnrichmentRequest, testConnection)

Create enrichment

Create a new enrichment with configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV3CreateEnrichmentRequest routesV3CreateEnrichmentRequest = new RoutesV3CreateEnrichmentRequest(); // RoutesV3CreateEnrichmentRequest | Enrichment configuration
    Boolean testConnection = true; // Boolean | Test connection before creating the enrichment
    try {
      ModelsEnrichment result = apiInstance.createEnrichment(organizationId, routesV3CreateEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#createEnrichment");
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
| **routesV3CreateEnrichmentRequest** | [**RoutesV3CreateEnrichmentRequest**](RoutesV3CreateEnrichmentRequest.md)| Enrichment configuration | |
| **testConnection** | **Boolean**| Test connection before creating the enrichment | [optional] |

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment created successfully |  -  |
| **400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
| **500** | Internal server error |  -  |

<a id="deleteEnrichment"></a>
# **deleteEnrichment**
> RoutesV3SuccessResponse deleteEnrichment(organizationId, enrichmentId)

Delete enrichment

Delete an enrichment by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String enrichmentId = "enrichmentId_example"; // String | Enrichment ID
    try {
      RoutesV3SuccessResponse result = apiInstance.deleteEnrichment(organizationId, enrichmentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#deleteEnrichment");
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
| **enrichmentId** | **String**| Enrichment ID | |

### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment deleted successfully |  -  |
| **404** | Enrichment not found |  -  |
| **500** | Internal server error |  -  |

<a id="getEnrichment"></a>
# **getEnrichment**
> RoutesV3GetEnrichmentResponse getEnrichment(organizationId, enrichmentId)

Get enrichment

Get an enrichment by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String enrichmentId = "enrichmentId_example"; // String | Enrichment ID
    try {
      RoutesV3GetEnrichmentResponse result = apiInstance.getEnrichment(organizationId, enrichmentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#getEnrichment");
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
| **enrichmentId** | **String**| Enrichment ID | |

### Return type

[**RoutesV3GetEnrichmentResponse**](RoutesV3GetEnrichmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment details |  -  |
| **404** | Enrichment not found |  -  |
| **500** | Internal server error |  -  |

<a id="listEnrichments"></a>
# **listEnrichments**
> ModelsEnrichmentList listEnrichments(organizationId, limit, offset)

List enrichments

List all enrichments for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Number of results to return (default 100)
    Integer offset = 56; // Integer | Number of results to skip (default 0)
    try {
      ModelsEnrichmentList result = apiInstance.listEnrichments(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#listEnrichments");
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
| **limit** | **Integer**| Number of results to return (default 100) | [optional] |
| **offset** | **Integer**| Number of results to skip (default 0) | [optional] |

### Return type

[**ModelsEnrichmentList**](ModelsEnrichmentList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of enrichments |  -  |
| **400** | Invalid request |  -  |
| **500** | Internal server error |  -  |

<a id="replaceEnrichment"></a>
# **replaceEnrichment**
> ModelsEnrichment replaceEnrichment(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection)

Replace enrichment

Replace an existing enrichment with new configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String enrichmentId = "enrichmentId_example"; // String | Enrichment ID
    RoutesV3PutEnrichmentRequest routesV3PutEnrichmentRequest = new RoutesV3PutEnrichmentRequest(); // RoutesV3PutEnrichmentRequest | Enrichment configuration update
    Boolean testConnection = true; // Boolean | Test connection before updating the enrichment
    try {
      ModelsEnrichment result = apiInstance.replaceEnrichment(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#replaceEnrichment");
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
| **enrichmentId** | **String**| Enrichment ID | |
| **routesV3PutEnrichmentRequest** | [**RoutesV3PutEnrichmentRequest**](RoutesV3PutEnrichmentRequest.md)| Enrichment configuration update | |
| **testConnection** | **Boolean**| Test connection before updating the enrichment | [optional] |

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment updated successfully |  -  |
| **400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
| **404** | Enrichment not found |  -  |
| **500** | Internal server error |  -  |

<a id="testEnrichmentConnection"></a>
# **testEnrichmentConnection**
> RoutesV3SuccessResponse testEnrichmentConnection(organizationId, routesV3TestEnrichmentConnectionRequest)

Test enrichment connection

Tests the connection for a given enrichment type and configuration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV3TestEnrichmentConnectionRequest routesV3TestEnrichmentConnectionRequest = new RoutesV3TestEnrichmentConnectionRequest(); // RoutesV3TestEnrichmentConnectionRequest | Enrichment configuration to test
    try {
      RoutesV3SuccessResponse result = apiInstance.testEnrichmentConnection(organizationId, routesV3TestEnrichmentConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#testEnrichmentConnection");
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
| **routesV3TestEnrichmentConnectionRequest** | [**RoutesV3TestEnrichmentConnectionRequest**](RoutesV3TestEnrichmentConnectionRequest.md)| Enrichment configuration to test | |

### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Connection test successful |  -  |
| **400** | Invalid request body, enrichment type, or configuration |  -  |
| **500** | Internal server error |  -  |

<a id="updateEnrichment"></a>
# **updateEnrichment**
> ModelsEnrichment updateEnrichment(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection)

Update enrichment

Update an existing enrichment with new configuration including secrets handling

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationEnrichmentsApi;

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

    OrganizationEnrichmentsApi apiInstance = new OrganizationEnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String enrichmentId = "enrichmentId_example"; // String | Enrichment ID
    RoutesV3UpdateEnrichmentRequest routesV3UpdateEnrichmentRequest = new RoutesV3UpdateEnrichmentRequest(); // RoutesV3UpdateEnrichmentRequest | Enrichment configuration update
    Boolean testConnection = true; // Boolean | Test connection before updating the enrichment
    try {
      ModelsEnrichment result = apiInstance.updateEnrichment(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#updateEnrichment");
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
| **enrichmentId** | **String**| Enrichment ID | |
| **routesV3UpdateEnrichmentRequest** | [**RoutesV3UpdateEnrichmentRequest**](RoutesV3UpdateEnrichmentRequest.md)| Enrichment configuration update | |
| **testConnection** | **Boolean**| Test connection before updating the enrichment | [optional] |

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichment updated successfully |  -  |
| **400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
| **404** | Enrichment not found |  -  |
| **500** | Internal server error |  -  |

