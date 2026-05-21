# SessionsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSession**](SessionsApi.md#createSession) | **POST** /v3/sessions | Mint a short-lived API token, optionally scoped to a single org |


<a id="createSession"></a>
# **createSession**
> RoutesV3CreateSessionResponse createSession(createSessionRequest)

Mint a short-lived API token, optionally scoped to a single org

Creates a short-lived JWT off the calling API key. When &#x60;organization_id&#x60; is supplied, the token is pinned to that org via a &#x60;scoped_org&#x60; claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SessionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    SessionsApi apiInstance = new SessionsApi(defaultClient);
    CreateSessionRequest createSessionRequest = new CreateSessionRequest(); // CreateSessionRequest | Session options
    try {
      RoutesV3CreateSessionResponse result = apiInstance.createSession(createSessionRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SessionsApi#createSession");
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
| **createSessionRequest** | [**CreateSessionRequest**](CreateSessionRequest.md)| Session options | [optional] |

### Return type

[**RoutesV3CreateSessionResponse**](RoutesV3CreateSessionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session minted |  -  |
| **400** | Invalid request |  -  |
| **401** | Missing or invalid auth |  -  |
| **500** | Internal server error |  -  |

