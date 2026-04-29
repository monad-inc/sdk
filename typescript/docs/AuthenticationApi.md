# .AuthenticationApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](AuthenticationApi.md#getToken) | **POST** /v1/login/token | Get Authentication token
[**loginCallbackHandler**](AuthenticationApi.md#loginCallbackHandler) | **GET** /v1/login/callback | Handle login callback
[**loginHandler**](AuthenticationApi.md#loginHandler) | **GET** /v1/login | Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
[**resendVerificationHandler**](AuthenticationApi.md#resendVerificationHandler) | **POST** /v1/login/resend-verification | Resend email verification


# **getToken**
> AuthenticationtypesTokenResponse getToken(getTokenRequest)

Retrieve an authentication token from the authentication service using username and password.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';
import type { AuthenticationApiGetTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request: AuthenticationApiGetTokenRequest = {
    // Login request
  getTokenRequest: null,
};

const data = await apiInstance.getToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTokenRequest** | **GetTokenRequest**| Login request |


### Return type

**AuthenticationtypesTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token retrieved successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |
**0** | Error message |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loginCallbackHandler**
> string loginCallbackHandler()

Displays a page with the access token for the user to include in requests.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.loginCallbackHandler(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callback page displayed successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **loginHandler**
> loginHandler()

Redirects the user to authentication service login page to initiate the login process.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.loginHandler(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**307** | Temporary Redirect |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resendVerificationHandler**
> string resendVerificationHandler()

Resends the email verification to the user\'s email address

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.resendVerificationHandler(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verification email sent successfully |  -  |
**400** | Invalid request body |  -  |
**401** | Unauthorized |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


