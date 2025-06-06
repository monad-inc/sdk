# OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v3OrganizationIdEnrichmentsEnrichmentIdDelete**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdDelete) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment |
| [**v3OrganizationIdEnrichmentsEnrichmentIdGet**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdGet) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment |
| [**v3OrganizationIdEnrichmentsEnrichmentIdPatch**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdPatch) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment |
| [**v3OrganizationIdEnrichmentsEnrichmentIdPut**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsEnrichmentIdPut) | **PUT** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment |
| [**v3OrganizationIdEnrichmentsGet**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsGet) | **GET** /v3/{organization_id}/enrichments | List enrichments |
| [**v3OrganizationIdEnrichmentsPost**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsPost) | **POST** /v3/{organization_id}/enrichments | Create enrichment |
| [**v3OrganizationIdEnrichmentsTestConnectionPost**](OrganizationEnrichmentsApi.md#v3OrganizationIdEnrichmentsTestConnectionPost) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection |


<a id="v3OrganizationIdEnrichmentsEnrichmentIdDelete"></a>
# **v3OrganizationIdEnrichmentsEnrichmentIdDelete**
> RoutesV3SuccessResponse v3OrganizationIdEnrichmentsEnrichmentIdDelete(organizationId, enrichmentId)

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
      RoutesV3SuccessResponse result = apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdDelete(organizationId, enrichmentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsEnrichmentIdDelete");
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

<a id="v3OrganizationIdEnrichmentsEnrichmentIdGet"></a>
# **v3OrganizationIdEnrichmentsEnrichmentIdGet**
> RoutesV3GetEnrichmentResponse v3OrganizationIdEnrichmentsEnrichmentIdGet(organizationId, enrichmentId)

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
      RoutesV3GetEnrichmentResponse result = apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdGet(organizationId, enrichmentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsEnrichmentIdGet");
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

<a id="v3OrganizationIdEnrichmentsEnrichmentIdPatch"></a>
# **v3OrganizationIdEnrichmentsEnrichmentIdPatch**
> ModelsEnrichment v3OrganizationIdEnrichmentsEnrichmentIdPatch(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection)

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
      ModelsEnrichment result = apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdPatch(organizationId, enrichmentId, routesV3UpdateEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsEnrichmentIdPatch");
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

<a id="v3OrganizationIdEnrichmentsEnrichmentIdPut"></a>
# **v3OrganizationIdEnrichmentsEnrichmentIdPut**
> ModelsEnrichment v3OrganizationIdEnrichmentsEnrichmentIdPut(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection)

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
      ModelsEnrichment result = apiInstance.v3OrganizationIdEnrichmentsEnrichmentIdPut(organizationId, enrichmentId, routesV3PutEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsEnrichmentIdPut");
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

<a id="v3OrganizationIdEnrichmentsGet"></a>
# **v3OrganizationIdEnrichmentsGet**
> ModelsEnrichmentList v3OrganizationIdEnrichmentsGet(organizationId, limit, offset)

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
      ModelsEnrichmentList result = apiInstance.v3OrganizationIdEnrichmentsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsGet");
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

<a id="v3OrganizationIdEnrichmentsPost"></a>
# **v3OrganizationIdEnrichmentsPost**
> ModelsEnrichment v3OrganizationIdEnrichmentsPost(organizationId, routesV3CreateEnrichmentRequest, testConnection)

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
      ModelsEnrichment result = apiInstance.v3OrganizationIdEnrichmentsPost(organizationId, routesV3CreateEnrichmentRequest, testConnection);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsPost");
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

<a id="v3OrganizationIdEnrichmentsTestConnectionPost"></a>
# **v3OrganizationIdEnrichmentsTestConnectionPost**
> RoutesV3SuccessResponse v3OrganizationIdEnrichmentsTestConnectionPost(organizationId, routesV3TestEnrichmentConnectionRequest)

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
      RoutesV3SuccessResponse result = apiInstance.v3OrganizationIdEnrichmentsTestConnectionPost(organizationId, routesV3TestEnrichmentConnectionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationEnrichmentsApi#v3OrganizationIdEnrichmentsTestConnectionPost");
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

