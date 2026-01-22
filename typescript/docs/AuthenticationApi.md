# .AuthenticationApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1LoginCallbackGet**](AuthenticationApi.md#v1LoginCallbackGet) | **GET** /v1/login/callback | Handle login callback
[**v1LoginGet**](AuthenticationApi.md#v1LoginGet) | **GET** /v1/login | Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
[**v1LoginResendVerificationPost**](AuthenticationApi.md#v1LoginResendVerificationPost) | **POST** /v1/login/resend-verification | Resend email verification
[**v1LoginTokenPost**](AuthenticationApi.md#v1LoginTokenPost) | **POST** /v1/login/token | Get Authentication token


# **v1LoginCallbackGet**
> string v1LoginCallbackGet()

Displays a page with the access token for the user to include in requests.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.v1LoginCallbackGet(request);
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
 - **Accept**: application/json, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callback page displayed successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1LoginGet**
> v1LoginGet()

Redirects the user to authentication service login page to initiate the login process.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.v1LoginGet(request);
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

# **v1LoginResendVerificationPost**
> string v1LoginResendVerificationPost()

Resends the email verification to the user\'s email address

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request = {};

const data = await apiInstance.v1LoginResendVerificationPost(request);
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

# **v1LoginTokenPost**
> AuthenticationtypesTokenResponse v1LoginTokenPost(routesLoginRequest)

Retrieve an authentication token from the authentication service using username and password.

### Example


```typescript
import { createConfiguration, AuthenticationApi } from '';
import type { AuthenticationApiV1LoginTokenPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthenticationApi(configuration);

const request: AuthenticationApiV1LoginTokenPostRequest = {
    // Login request
  routesLoginRequest: {
    password: "password_example",
    username: "username_example",
  },
};

const data = await apiInstance.v1LoginTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesLoginRequest** | **RoutesLoginRequest**| Login request |


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


