# SecretsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganizationIdSecretsGet**](SecretsApi.md#v2OrganizationIdSecretsGet) | **GET** /v2/{organization_id}/secrets | List secrets |
| [**v2OrganizationIdSecretsPost**](SecretsApi.md#v2OrganizationIdSecretsPost) | **POST** /v2/{organization_id}/secrets | Create secret |
| [**v2OrganizationIdSecretsSecretIdDelete**](SecretsApi.md#v2OrganizationIdSecretsSecretIdDelete) | **DELETE** /v2/{organization_id}/secrets/{secret_id} | Delete secret |
| [**v2OrganizationIdSecretsSecretIdGet**](SecretsApi.md#v2OrganizationIdSecretsSecretIdGet) | **GET** /v2/{organization_id}/secrets/{secret_id} | Get secret |
| [**v2OrganizationIdSecretsSecretIdPatch**](SecretsApi.md#v2OrganizationIdSecretsSecretIdPatch) | **PATCH** /v2/{organization_id}/secrets/{secret_id} | Update secret |


<a id="v2OrganizationIdSecretsGet"></a>
# **v2OrganizationIdSecretsGet**
> ModelsSecretList v2OrganizationIdSecretsGet(organizationId, limit, offset)

List secrets

Lists all secrets for the specified organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SecretsApi;

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

    SecretsApi apiInstance = new SecretsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit number of results
    Integer offset = 56; // Integer | Offset results
    try {
      ModelsSecretList result = apiInstance.v2OrganizationIdSecretsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SecretsApi#v2OrganizationIdSecretsGet");
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
| **limit** | **Integer**| Limit number of results | [optional] |
| **offset** | **Integer**| Offset results | [optional] |

### Return type

[**ModelsSecretList**](ModelsSecretList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdSecretsPost"></a>
# **v2OrganizationIdSecretsPost**
> RoutesV2SecretResponse v2OrganizationIdSecretsPost(organizationId, routesV2CreateOrUpdateSecretRequest)

Create secret

Creates a new secret for the specified organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SecretsApi;

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

    SecretsApi apiInstance = new SecretsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV2CreateOrUpdateSecretRequest routesV2CreateOrUpdateSecretRequest = new RoutesV2CreateOrUpdateSecretRequest(); // RoutesV2CreateOrUpdateSecretRequest | Secret to create
    try {
      RoutesV2SecretResponse result = apiInstance.v2OrganizationIdSecretsPost(organizationId, routesV2CreateOrUpdateSecretRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SecretsApi#v2OrganizationIdSecretsPost");
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
| **routesV2CreateOrUpdateSecretRequest** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md)| Secret to create | |

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdSecretsSecretIdDelete"></a>
# **v2OrganizationIdSecretsSecretIdDelete**
> v2OrganizationIdSecretsSecretIdDelete(organizationId, secretId)

Delete secret

Deletes a specific secret by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SecretsApi;

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

    SecretsApi apiInstance = new SecretsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String secretId = "secretId_example"; // String | Secret ID
    try {
      apiInstance.v2OrganizationIdSecretsSecretIdDelete(organizationId, secretId);
    } catch (ApiException e) {
      System.err.println("Exception when calling SecretsApi#v2OrganizationIdSecretsSecretIdDelete");
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
| **secretId** | **String**| Secret ID | |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Secret not found |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdSecretsSecretIdGet"></a>
# **v2OrganizationIdSecretsSecretIdGet**
> RoutesV2SecretResponse v2OrganizationIdSecretsSecretIdGet(organizationId, secretId)

Get secret

Gets a specific secret by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SecretsApi;

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

    SecretsApi apiInstance = new SecretsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String secretId = "secretId_example"; // String | Secret ID
    try {
      RoutesV2SecretResponse result = apiInstance.v2OrganizationIdSecretsSecretIdGet(organizationId, secretId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SecretsApi#v2OrganizationIdSecretsSecretIdGet");
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
| **secretId** | **String**| Secret ID | |

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Secret not found |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdSecretsSecretIdPatch"></a>
# **v2OrganizationIdSecretsSecretIdPatch**
> RoutesV2SecretResponse v2OrganizationIdSecretsSecretIdPatch(organizationId, secretId, routesV2CreateOrUpdateSecretRequest)

Update secret

Updates a specific secret by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SecretsApi;

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

    SecretsApi apiInstance = new SecretsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String secretId = "secretId_example"; // String | Secret ID
    RoutesV2CreateOrUpdateSecretRequest routesV2CreateOrUpdateSecretRequest = new RoutesV2CreateOrUpdateSecretRequest(); // RoutesV2CreateOrUpdateSecretRequest | Secret updates
    try {
      RoutesV2SecretResponse result = apiInstance.v2OrganizationIdSecretsSecretIdPatch(organizationId, secretId, routesV2CreateOrUpdateSecretRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SecretsApi#v2OrganizationIdSecretsSecretIdPatch");
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
| **secretId** | **String**| Secret ID | |
| **routesV2CreateOrUpdateSecretRequest** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md)| Secret updates | |

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Invalid request body |  -  |
| **404** | Secret not found |  -  |
| **500** | Internal server error |  -  |

