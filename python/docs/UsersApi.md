# monad.UsersApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_users_get**](UsersApi.md#v1_users_get) | **GET** /v1/users | Get your current user
[**v1_users_post**](UsersApi.md#v1_users_post) | **POST** /v1/users | Create user
[**v3_users_mfa_get**](UsersApi.md#v3_users_mfa_get) | **GET** /v3/users/mfa | Get MFA status
[**v3_users_mfa_post**](UsersApi.md#v3_users_mfa_post) | **POST** /v3/users/mfa | Enable MFA


# **v1_users_get**
> RoutesUserWithRoles v1_users_get()

Get your current user

Get your current user

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_user_with_roles import RoutesUserWithRoles
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
    api_instance = monad.UsersApi(api_client)

    try:
        # Get your current user
        api_response = api_instance.v1_users_get()
        print("The response of UsersApi->v1_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->v1_users_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RoutesUserWithRoles**](RoutesUserWithRoles.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Error creating user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_users_post**
> GithubComMonadIncCorePkgTypesModelsUser v1_users_post(body=body)

Create user

Create user

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.github_com_monad_inc_core_pkg_types_models_user import GithubComMonadIncCorePkgTypesModelsUser
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

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.UsersApi(api_client)
    body = None # object |  (optional)

    try:
        # Create user
        api_response = api_instance.v1_users_post(body=body)
        print("The response of UsersApi->v1_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->v1_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

[**GithubComMonadIncCorePkgTypesModelsUser**](GithubComMonadIncCorePkgTypesModelsUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get user success |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Error creating user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_users_mfa_get**
> RoutesV3MFAStatusResponse v3_users_mfa_get()

Get MFA status

Get MFA enrollment status and methods for a user

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_mfa_status_response import RoutesV3MFAStatusResponse
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

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.UsersApi(api_client)

    try:
        # Get MFA status
        api_response = api_instance.v3_users_mfa_get()
        print("The response of UsersApi->v3_users_mfa_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->v3_users_mfa_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RoutesV3MFAStatusResponse**](RoutesV3MFAStatusResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MFA status retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_users_mfa_post**
> AuthenticationtypesMFAEnrollmentTicket v3_users_mfa_post()

Enable MFA

Enable MFA for a user and create enrollment ticket (OTP only)

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.authenticationtypes_mfa_enrollment_ticket import AuthenticationtypesMFAEnrollmentTicket
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

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.UsersApi(api_client)

    try:
        # Enable MFA
        api_response = api_instance.v3_users_mfa_post()
        print("The response of UsersApi->v3_users_mfa_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->v3_users_mfa_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthenticationtypesMFAEnrollmentTicket**](AuthenticationtypesMFAEnrollmentTicket.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MFA enrollment ticket created successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

