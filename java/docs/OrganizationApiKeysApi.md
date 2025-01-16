# OrganizationApiKeysApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganizationIdApiKeysApiKeyIdDelete**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdDelete) | **DELETE** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key |
| [**v2OrganizationIdApiKeysApiKeyIdGet**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdGet) | **GET** /v2/{organization_id}/api_keys/{api_key_id} | Get API key |
| [**v2OrganizationIdApiKeysApiKeyIdPatch**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdPatch) | **PATCH** /v2/{organization_id}/api_keys/{api_key_id} | Update API key |
| [**v2OrganizationIdApiKeysApiKeyIdRegeneratePost**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysApiKeyIdRegeneratePost) | **POST** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key |
| [**v2OrganizationIdApiKeysGet**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysGet) | **GET** /v2/{organization_id}/api_keys | List API keys |
| [**v2OrganizationIdApiKeysPost**](OrganizationApiKeysApi.md#v2OrganizationIdApiKeysPost) | **POST** /v2/{organization_id}/api_keys | Create API key |


<a id="v2OrganizationIdApiKeysApiKeyIdDelete"></a>
# **v2OrganizationIdApiKeysApiKeyIdDelete**
> String v2OrganizationIdApiKeysApiKeyIdDelete(organizationId, apiKeyId)

Delete API key

Delete API key

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String apiKeyId = "apiKeyId_example"; // String | API Key ID
    try {
      String result = apiInstance.v2OrganizationIdApiKeysApiKeyIdDelete(organizationId, apiKeyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysApiKeyIdDelete");
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
| **apiKeyId** | **String**| API Key ID | |

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
| **200** | API key deleted successfully |  -  |
| **404** | API key not found |  -  |
| **500** | Failed to delete API key |  -  |

<a id="v2OrganizationIdApiKeysApiKeyIdGet"></a>
# **v2OrganizationIdApiKeysApiKeyIdGet**
> ModelsAPIKey v2OrganizationIdApiKeysApiKeyIdGet(organizationId, apiKeyId)

Get API key

Get API key

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String apiKeyId = "apiKeyId_example"; // String | API Key ID
    try {
      ModelsAPIKey result = apiInstance.v2OrganizationIdApiKeysApiKeyIdGet(organizationId, apiKeyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysApiKeyIdGet");
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
| **apiKeyId** | **String**| API Key ID | |

### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key details |  -  |
| **404** | API key not found |  -  |
| **500** | Failed to get API key |  -  |

<a id="v2OrganizationIdApiKeysApiKeyIdPatch"></a>
# **v2OrganizationIdApiKeysApiKeyIdPatch**
> ModelsAPIKey v2OrganizationIdApiKeysApiKeyIdPatch(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest)

Update API key

Update API key

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String apiKeyId = "apiKeyId_example"; // String | API Key ID
    RoutesV2UpdateAPIKeyRequest routesV2UpdateAPIKeyRequest = new RoutesV2UpdateAPIKeyRequest(); // RoutesV2UpdateAPIKeyRequest | Request body for updating an API key
    try {
      ModelsAPIKey result = apiInstance.v2OrganizationIdApiKeysApiKeyIdPatch(organizationId, apiKeyId, routesV2UpdateAPIKeyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysApiKeyIdPatch");
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
| **apiKeyId** | **String**| API Key ID | |
| **routesV2UpdateAPIKeyRequest** | [**RoutesV2UpdateAPIKeyRequest**](RoutesV2UpdateAPIKeyRequest.md)| Request body for updating an API key | |

### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update API key |  -  |

<a id="v2OrganizationIdApiKeysApiKeyIdRegeneratePost"></a>
# **v2OrganizationIdApiKeysApiKeyIdRegeneratePost**
> ModelsAPIKeyWithToken v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId, apiKeyId)

Regenerate API key

Regenerates an API key by creating a new one with the same metadata and deleting the old one

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String apiKeyId = "apiKeyId_example"; // String | API Key ID
    try {
      ModelsAPIKeyWithToken result = apiInstance.v2OrganizationIdApiKeysApiKeyIdRegeneratePost(organizationId, apiKeyId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysApiKeyIdRegeneratePost");
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
| **apiKeyId** | **String**| API Key ID | |

### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New API key generated successfully |  -  |
| **404** | API key not found |  -  |
| **500** | Failed to regenerate API key |  -  |

<a id="v2OrganizationIdApiKeysGet"></a>
# **v2OrganizationIdApiKeysGet**
> ModelsAPIKeyList v2OrganizationIdApiKeysGet(organizationId, limit, offset)

List API keys

List API keys

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsAPIKeyList result = apiInstance.v2OrganizationIdApiKeysGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysGet");
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

[**ModelsAPIKeyList**](ModelsAPIKeyList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of API keys |  -  |
| **500** | Failed to list API keys |  -  |

<a id="v2OrganizationIdApiKeysPost"></a>
# **v2OrganizationIdApiKeysPost**
> ModelsAPIKeyWithToken v2OrganizationIdApiKeysPost(organizationId, routesV2CreateAPIKeyRequest)

Create API key

Create API key

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationApiKeysApi;

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

    OrganizationApiKeysApi apiInstance = new OrganizationApiKeysApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV2CreateAPIKeyRequest routesV2CreateAPIKeyRequest = new RoutesV2CreateAPIKeyRequest(); // RoutesV2CreateAPIKeyRequest | Request body for creating an API key
    try {
      ModelsAPIKeyWithToken result = apiInstance.v2OrganizationIdApiKeysPost(organizationId, routesV2CreateAPIKeyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationApiKeysApi#v2OrganizationIdApiKeysPost");
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
| **routesV2CreateAPIKeyRequest** | [**RoutesV2CreateAPIKeyRequest**](RoutesV2CreateAPIKeyRequest.md)| Request body for creating an API key | |

### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API key created successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to create API key |  -  |

