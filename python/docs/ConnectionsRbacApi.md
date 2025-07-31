# monad.ConnectionsRbacApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_connections_connection_id_roles_get**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_get) | **GET** /v3/connections/{connection_id}/roles | Get Connection Roles
[**v3_connections_connection_id_roles_post**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_post) | **POST** /v3/connections/{connection_id}/roles | Create Connection Role
[**v3_connections_connection_id_roles_role_id_delete**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_role_id_delete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id} | Delete Connection Role
[**v3_connections_connection_id_roles_role_id_get**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_role_id_get) | **GET** /v3/connections/{connection_id}/roles/{role_id} | Get Connection Role
[**v3_connections_connection_id_roles_role_id_patch**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_role_id_patch) | **PATCH** /v3/connections/{connection_id}/roles/{role_id} | Update Connection Role
[**v3_connections_connection_id_roles_role_id_users_post**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_role_id_users_post) | **POST** /v3/connections/{connection_id}/roles/{role_id}/users | Create Connection User Role
[**v3_connections_connection_id_roles_role_id_users_user_id_delete**](ConnectionsRbacApi.md#v3_connections_connection_id_roles_role_id_users_user_id_delete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id}/users/{user_id} | Delete Connection User Role
[**v3_connections_permissions_get**](ConnectionsRbacApi.md#v3_connections_permissions_get) | **GET** /v3/connections/permissions | Get Connection Permissions


# **v3_connections_connection_id_roles_get**
> List[ModelsConnectionRole] v3_connections_connection_id_roles_get(connection_id)

Get Connection Roles

Get Connection Roles

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_role import ModelsConnectionRole
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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID

    try:
        # Get Connection Roles
        api_response = api_instance.v3_connections_connection_id_roles_get(connection_id)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 

### Return type

[**List[ModelsConnectionRole]**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection roles successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_post**
> ModelsConnectionRole v3_connections_connection_id_roles_post(connection_id, routes_v3_create_connection_role_request)

Create Connection Role

Create Connection Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_role import ModelsConnectionRole
from monad.models.routes_v3_create_connection_role_request import RoutesV3CreateConnectionRoleRequest
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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    routes_v3_create_connection_role_request = monad.RoutesV3CreateConnectionRoleRequest() # RoutesV3CreateConnectionRoleRequest | Create Connection Role Request

    try:
        # Create Connection Role
        api_response = api_instance.v3_connections_connection_id_roles_post(connection_id, routes_v3_create_connection_role_request)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **routes_v3_create_connection_role_request** | [**RoutesV3CreateConnectionRoleRequest**](RoutesV3CreateConnectionRoleRequest.md)| Create Connection Role Request | 

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | create connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_role_id_delete**
> str v3_connections_connection_id_roles_role_id_delete(connection_id, role_id)

Delete Connection Role

Delete Connection Role

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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Delete Connection Role
        api_response = api_instance.v3_connections_connection_id_roles_role_id_delete(connection_id, role_id)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **role_id** | **str**| Role ID | 

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
**202** | delete connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_role_id_get**
> ModelsConnectionRole v3_connections_connection_id_roles_role_id_get(connection_id, role_id)

Get Connection Role

Get Connection Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_role import ModelsConnectionRole
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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Get Connection Role
        api_response = api_instance.v3_connections_connection_id_roles_role_id_get(connection_id, role_id)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **role_id** | **str**| Role ID | 

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_role_id_patch**
> ModelsConnectionRole v3_connections_connection_id_roles_role_id_patch(connection_id, role_id, routes_v3_update_connection_role_request)

Update Connection Role

Update Connection Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_role import ModelsConnectionRole
from monad.models.routes_v3_update_connection_role_request import RoutesV3UpdateConnectionRoleRequest
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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    role_id = 'role_id_example' # str | Role ID
    routes_v3_update_connection_role_request = monad.RoutesV3UpdateConnectionRoleRequest() # RoutesV3UpdateConnectionRoleRequest | Update Connection Role Request

    try:
        # Update Connection Role
        api_response = api_instance.v3_connections_connection_id_roles_role_id_patch(connection_id, role_id, routes_v3_update_connection_role_request)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **role_id** | **str**| Role ID | 
 **routes_v3_update_connection_role_request** | [**RoutesV3UpdateConnectionRoleRequest**](RoutesV3UpdateConnectionRoleRequest.md)| Update Connection Role Request | 

### Return type

[**ModelsConnectionRole**](ModelsConnectionRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_role_id_users_post**
> str v3_connections_connection_id_roles_role_id_users_post(connection_id, role_id, routes_v3_create_connection_user_role_request)

Create Connection User Role

Add a user to a connection role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_create_connection_user_role_request import RoutesV3CreateConnectionUserRoleRequest
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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    role_id = 'role_id_example' # str | Role ID
    routes_v3_create_connection_user_role_request = monad.RoutesV3CreateConnectionUserRoleRequest() # RoutesV3CreateConnectionUserRoleRequest | Create Connection User Role Request

    try:
        # Create Connection User Role
        api_response = api_instance.v3_connections_connection_id_roles_role_id_users_post(connection_id, role_id, routes_v3_create_connection_user_role_request)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_users_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **role_id** | **str**| Role ID | 
 **routes_v3_create_connection_user_role_request** | [**RoutesV3CreateConnectionUserRoleRequest**](RoutesV3CreateConnectionUserRoleRequest.md)| Create Connection User Role Request | 

### Return type

**str**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | create connection user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Connection User Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_roles_role_id_users_user_id_delete**
> str v3_connections_connection_id_roles_role_id_users_user_id_delete(connection_id, role_id, user_id)

Delete Connection User Role

Remove a user to a connection role

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
    api_instance = monad.ConnectionsRbacApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID
    role_id = 'role_id_example' # str | Role ID
    user_id = 'user_id_example' # str | User ID

    try:
        # Delete Connection User Role
        api_response = api_instance.v3_connections_connection_id_roles_role_id_users_user_id_delete(connection_id, role_id, user_id)
        print("The response of ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_users_user_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_connection_id_roles_role_id_users_user_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID | 
 **role_id** | **str**| Role ID | 
 **user_id** | **str**| User ID | 

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
**204** | delete connection user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Connection User Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_permissions_get**
> List[ModelsConnectionPermission] v3_connections_permissions_get()

Get Connection Permissions

Get Connection Permissions

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_permission import ModelsConnectionPermission
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
    api_instance = monad.ConnectionsRbacApi(api_client)

    try:
        # Get Connection Permissions
        api_response = api_instance.v3_connections_permissions_get()
        print("The response of ConnectionsRbacApi->v3_connections_permissions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsRbacApi->v3_connections_permissions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ModelsConnectionPermission]**](ModelsConnectionPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection permissions successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

