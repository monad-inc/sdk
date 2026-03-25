# monad.AuthenticationApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_token**](AuthenticationApi.md#get_token) | **POST** /v1/login/token | Get Authentication token
[**login_callback_handler**](AuthenticationApi.md#login_callback_handler) | **GET** /v1/login/callback | Handle login callback
[**login_handler**](AuthenticationApi.md#login_handler) | **GET** /v1/login | Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
[**resend_verification_handler**](AuthenticationApi.md#resend_verification_handler) | **POST** /v1/login/resend-verification | Resend email verification


# **get_token**
> AuthenticationtypesTokenResponse get_token(routes_login_request)

Get Authentication token

Retrieve an authentication token from the authentication service using username and password.

### Example


```python
import monad
from monad.models.authenticationtypes_token_response import AuthenticationtypesTokenResponse
from monad.models.routes_login_request import RoutesLoginRequest
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)


# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AuthenticationApi(api_client)
    routes_login_request = monad.RoutesLoginRequest() # RoutesLoginRequest | Login request

    try:
        # Get Authentication token
        api_response = api_instance.get_token(routes_login_request)
        print("The response of AuthenticationApi->get_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->get_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_login_request** | [**RoutesLoginRequest**](RoutesLoginRequest.md)| Login request | 

### Return type

[**AuthenticationtypesTokenResponse**](AuthenticationtypesTokenResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_callback_handler**
> str login_callback_handler()

Handle login callback

Displays a page with the access token for the user to include in requests.

### Example


```python
import monad
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)


# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AuthenticationApi(api_client)

    try:
        # Handle login callback
        api_response = api_instance.login_callback_handler()
        print("The response of AuthenticationApi->login_callback_handler:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->login_callback_handler: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callback page displayed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_handler**
> login_handler()

Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.

Redirects the user to authentication service login page to initiate the login process.

### Example


```python
import monad
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)


# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AuthenticationApi(api_client)

    try:
        # Initiate login - This is a development endpoint that is not used by the frontend. You can use this endpoint to initiate the login process and get an access token for swagger.
        api_instance.login_handler()
    except Exception as e:
        print("Exception when calling AuthenticationApi->login_handler: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_verification_handler**
> str resend_verification_handler()

Resend email verification

Resends the email verification to the user's email address

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AuthenticationApi(api_client)

    try:
        # Resend email verification
        api_response = api_instance.resend_verification_handler()
        print("The response of AuthenticationApi->resend_verification_handler:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthenticationApi->resend_verification_handler: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[Bearer](../README.md#Bearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

