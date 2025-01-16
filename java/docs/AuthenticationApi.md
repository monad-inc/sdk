# AuthenticationApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1LoginCallbackGet**](AuthenticationApi.md#v1LoginCallbackGet) | **GET** /v1/login/callback | Handle login callback |
| [**v1LoginGet**](AuthenticationApi.md#v1LoginGet) | **GET** /v1/login | Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger. |
| [**v1LoginResendVerificationPost**](AuthenticationApi.md#v1LoginResendVerificationPost) | **POST** /v1/login/resend-verification | Resend email verification |
| [**v1LoginTokenPost**](AuthenticationApi.md#v1LoginTokenPost) | **POST** /v1/login/token | Get Authentication token |


<a id="v1LoginCallbackGet"></a>
# **v1LoginCallbackGet**
> String v1LoginCallbackGet()

Handle login callback

Displays a page with the access token for the user to include in requests.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    try {
      String result = apiInstance.v1LoginCallbackGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#v1LoginCallbackGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback page displayed successfully |  -  |

<a id="v1LoginGet"></a>
# **v1LoginGet**
> v1LoginGet()

Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.

Redirects the user to Authentication service login page to initiate the login process.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    try {
      apiInstance.v1LoginGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#v1LoginGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **307** | Temporary Redirect |  -  |

<a id="v1LoginResendVerificationPost"></a>
# **v1LoginResendVerificationPost**
> String v1LoginResendVerificationPost()

Resend email verification

Resends the email verification to the user&#39;s email address

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthenticationApi;

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

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    try {
      String result = apiInstance.v1LoginResendVerificationPost();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#v1LoginResendVerificationPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

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
| **200** | Verification email sent successfully |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

<a id="v1LoginTokenPost"></a>
# **v1LoginTokenPost**
> Auth0Auth0TokenResponse v1LoginTokenPost(auth0LoginRequest)

Get Authentication token

Retrieve an authentication token from the Authentication service using username and password.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    Auth0LoginRequest auth0LoginRequest = new Auth0LoginRequest(); // Auth0LoginRequest | Login request
    try {
      Auth0Auth0TokenResponse result = apiInstance.v1LoginTokenPost(auth0LoginRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#v1LoginTokenPost");
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
| **auth0LoginRequest** | [**Auth0LoginRequest**](Auth0LoginRequest.md)| Login request | |

### Return type

[**Auth0Auth0TokenResponse**](Auth0Auth0TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token retrieved successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |
| **0** | Error message |  -  |

