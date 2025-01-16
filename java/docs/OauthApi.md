# OauthApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OauthTypeIdCallbackGet**](OauthApi.md#v1OauthTypeIdCallbackGet) | **GET** /v1/oauth/{type_id}/callback | Oauth callback |
| [**v1OauthTypeIdOrganizationIdGet**](OauthApi.md#v1OauthTypeIdOrganizationIdGet) | **GET** /v1/oauth/{type_id}/{organization_id} | Get oauth redirect |


<a id="v1OauthTypeIdCallbackGet"></a>
# **v1OauthTypeIdCallbackGet**
> Object v1OauthTypeIdCallbackGet(typeId)

Oauth callback

Oauth callback

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OauthApi;

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

    OauthApi apiInstance = new OauthApi(defaultClient);
    String typeId = "typeId_example"; // String | component type ID
    try {
      Object result = apiInstance.v1OauthTypeIdCallbackGet(typeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OauthApi#v1OauthTypeIdCallbackGet");
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
| **typeId** | **String**| component type ID | |

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
| **200** | Oauth callback successful |  -  |
| **404** | oauth handler not found |  -  |

<a id="v1OauthTypeIdOrganizationIdGet"></a>
# **v1OauthTypeIdOrganizationIdGet**
> Object v1OauthTypeIdOrganizationIdGet(typeId, organizationId)

Get oauth redirect

Get oauth redirect

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OauthApi;

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

    OauthApi apiInstance = new OauthApi(defaultClient);
    String typeId = "typeId_example"; // String | component type ID
    String organizationId = "organizationId_example"; // String | organization ID
    try {
      Object result = apiInstance.v1OauthTypeIdOrganizationIdGet(typeId, organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OauthApi#v1OauthTypeIdOrganizationIdGet");
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
| **typeId** | **String**| component type ID | |
| **organizationId** | **String**| organization ID | |

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
| **200** | Oauth redirect retrieved successfully |  -  |
| **404** | oauth handler not found |  -  |

