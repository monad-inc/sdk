# monad.OrganizationUsersApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_users_get**](OrganizationUsersApi.md#v1_organization_id_users_get) | **GET** /v1/{organization_id}/users | List organization users
[**v1_organization_id_users_post**](OrganizationUsersApi.md#v1_organization_id_users_post) | **POST** /v1/{organization_id}/users | Add user to organization
[**v1_organization_id_users_user_id_delete**](OrganizationUsersApi.md#v1_organization_id_users_user_id_delete) | **DELETE** /v1/{organization_id}/users/{user_id} | Remove user from organization
[**v1_organization_id_users_user_id_patch**](OrganizationUsersApi.md#v1_organization_id_users_user_id_patch) | **PATCH** /v1/{organization_id}/users/{user_id} | Update user in organization


# **v1_organization_id_users_get**
> ModelsOrganizationUserList v1_organization_id_users_get(organization_id, limit=limit, offset=offset)

List organization users

List organization users

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_user_list import ModelsOrganizationUserList
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
    api_instance = monad.OrganizationUsersApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List organization users
        api_response = api_instance.v1_organization_id_users_get(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationUsersApi->v1_organization_id_users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUsersApi->v1_organization_id_users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsOrganizationUserList**](ModelsOrganizationUserList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of organization users |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_users_post**
> ModelsOrganizationUser v1_organization_id_users_post(organization_id, routes_add_user_to_organization_request)

Add user to organization

Add user to organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_user import ModelsOrganizationUser
from monad.models.routes_add_user_to_organization_request import RoutesAddUserToOrganizationRequest
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
    api_instance = monad.OrganizationUsersApi(api_client)
    organization_id = 'organization_id_example' # str | organization ID
    routes_add_user_to_organization_request = monad.RoutesAddUserToOrganizationRequest() # RoutesAddUserToOrganizationRequest | Request body for adding a user to an organization

    try:
        # Add user to organization
        api_response = api_instance.v1_organization_id_users_post(organization_id, routes_add_user_to_organization_request)
        print("The response of OrganizationUsersApi->v1_organization_id_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUsersApi->v1_organization_id_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| organization ID | 
 **routes_add_user_to_organization_request** | [**RoutesAddUserToOrganizationRequest**](RoutesAddUserToOrganizationRequest.md)| Request body for adding a user to an organization | 

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for adding a user to an organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_users_user_id_delete**
> object v1_organization_id_users_user_id_delete(organization_id, user_id)

Remove user from organization

Remove user from organization

### Example

* Api Key Authentication (ApiKeyAuth):
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
    api_instance = monad.OrganizationUsersApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    user_id = 'user_id_example' # str | User ID

    try:
        # Remove user from organization
        api_response = api_instance.v1_organization_id_users_user_id_delete(organization_id, user_id)
        print("The response of OrganizationUsersApi->v1_organization_id_users_user_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUsersApi->v1_organization_id_users_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **user_id** | **str**| User ID | 

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_users_user_id_patch**
> ModelsOrganizationUser v1_organization_id_users_user_id_patch(organization_id, user_id, routes_update_user_in_organization_request)

Update user in organization

Update user in organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_user import ModelsOrganizationUser
from monad.models.routes_update_user_in_organization_request import RoutesUpdateUserInOrganizationRequest
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
    api_instance = monad.OrganizationUsersApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    user_id = 'user_id_example' # str | User ID
    routes_update_user_in_organization_request = monad.RoutesUpdateUserInOrganizationRequest() # RoutesUpdateUserInOrganizationRequest | Request body for updating a user in an organization

    try:
        # Update user in organization
        api_response = api_instance.v1_organization_id_users_user_id_patch(organization_id, user_id, routes_update_user_in_organization_request)
        print("The response of OrganizationUsersApi->v1_organization_id_users_user_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUsersApi->v1_organization_id_users_user_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **user_id** | **str**| User ID | 
 **routes_update_user_in_organization_request** | [**RoutesUpdateUserInOrganizationRequest**](RoutesUpdateUserInOrganizationRequest.md)| Request body for updating a user in an organization | 

### Return type

[**ModelsOrganizationUser**](ModelsOrganizationUser.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating a user in an organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

