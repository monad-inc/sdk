# monad.RolesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_roles_get**](RolesApi.md#v1_organization_id_roles_get) | **GET** /v1/{organization_id}/roles | List roles
[**v1_organization_id_roles_post**](RolesApi.md#v1_organization_id_roles_post) | **POST** /v1/{organization_id}/roles | Create role
[**v1_organization_id_roles_role_id_delete**](RolesApi.md#v1_organization_id_roles_role_id_delete) | **DELETE** /v1/{organization_id}/roles/{role_id} | Delete role
[**v1_organization_id_roles_role_id_get**](RolesApi.md#v1_organization_id_roles_role_id_get) | **GET** /v1/{organization_id}/roles/{role_id} | Get role
[**v1_organization_id_roles_role_id_patch**](RolesApi.md#v1_organization_id_roles_role_id_patch) | **PATCH** /v1/{organization_id}/roles/{role_id} | Update role
[**v2_organization_id_roles_get**](RolesApi.md#v2_organization_id_roles_get) | **GET** /v2/{organization_id}/roles | List roles
[**v2_organization_id_roles_post**](RolesApi.md#v2_organization_id_roles_post) | **POST** /v2/{organization_id}/roles | Create role
[**v2_organization_id_roles_role_id_delete**](RolesApi.md#v2_organization_id_roles_role_id_delete) | **DELETE** /v2/{organization_id}/roles/{role_id} | Delete role
[**v2_organization_id_roles_role_id_get**](RolesApi.md#v2_organization_id_roles_role_id_get) | **GET** /v2/{organization_id}/roles/{role_id} | Get role
[**v2_organization_id_roles_role_id_patch**](RolesApi.md#v2_organization_id_roles_role_id_patch) | **PATCH** /v2/{organization_id}/roles/{role_id} | Update role


# **v1_organization_id_roles_get**
> ModelsRoleList v1_organization_id_roles_get(organization_id, limit=limit, offset=offset)

List roles

List roles

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role_list import ModelsRoleList
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit the number of roles returned (default: 10) (optional)
    offset = 56 # int | Offset the roles returned (default: 0) (optional)

    try:
        # List roles
        api_response = api_instance.v1_organization_id_roles_get(organization_id, limit=limit, offset=offset)
        print("The response of RolesApi->v1_organization_id_roles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v1_organization_id_roles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit the number of roles returned (default: 10) | [optional] 
 **offset** | **int**| Offset the roles returned (default: 0) | [optional] 

### Return type

[**ModelsRoleList**](ModelsRoleList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error listing roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_roles_post**
> ModelsRole v1_organization_id_roles_post(organization_id, routes_create_role_request)

Create role

Create role

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role import ModelsRole
from monad.models.routes_create_role_request import RoutesCreateRoleRequest
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_create_role_request = monad.RoutesCreateRoleRequest() # RoutesCreateRoleRequest | Request body for creating a role

    try:
        # Create role
        api_response = api_instance.v1_organization_id_roles_post(organization_id, routes_create_role_request)
        print("The response of RolesApi->v1_organization_id_roles_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v1_organization_id_roles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_create_role_request** | [**RoutesCreateRoleRequest**](RoutesCreateRoleRequest.md)| Request body for creating a role | 

### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_roles_role_id_delete**
> object v1_organization_id_roles_role_id_delete(organization_id, role_id)

Delete role

Delete role

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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Delete role
        api_response = api_instance.v1_organization_id_roles_role_id_delete(organization_id, role_id)
        print("The response of RolesApi->v1_organization_id_roles_role_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v1_organization_id_roles_role_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 

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
**500** | Failed to delete role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_roles_role_id_get**
> ModelsRole v1_organization_id_roles_role_id_get(organization_id, role_id)

Get role

Get role

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role import ModelsRole
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Get role
        api_response = api_instance.v1_organization_id_roles_role_id_get(organization_id, role_id)
        print("The response of RolesApi->v1_organization_id_roles_role_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v1_organization_id_roles_role_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 

### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error getting role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_roles_role_id_patch**
> ModelsRole v1_organization_id_roles_role_id_patch(organization_id, role_id, routes_update_role_request)

Update role

Update role

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role import ModelsRole
from monad.models.routes_update_role_request import RoutesUpdateRoleRequest
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID
    routes_update_role_request = monad.RoutesUpdateRoleRequest() # RoutesUpdateRoleRequest | Request body for updating a role

    try:
        # Update role
        api_response = api_instance.v1_organization_id_roles_role_id_patch(organization_id, role_id, routes_update_role_request)
        print("The response of RolesApi->v1_organization_id_roles_role_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v1_organization_id_roles_role_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 
 **routes_update_role_request** | [**RoutesUpdateRoleRequest**](RoutesUpdateRoleRequest.md)| Request body for updating a role | 

### Return type

[**ModelsRole**](ModelsRole.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_roles_get**
> ModelsRoleWithPermissionsList v2_organization_id_roles_get(organization_id, limit=limit, offset=offset)

List roles

List roles with their associated permissions

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role_with_permissions_list import ModelsRoleWithPermissionsList
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit the number of roles returned (default: 10) (optional)
    offset = 56 # int | Offset the roles returned (default: 0) (optional)

    try:
        # List roles
        api_response = api_instance.v2_organization_id_roles_get(organization_id, limit=limit, offset=offset)
        print("The response of RolesApi->v2_organization_id_roles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v2_organization_id_roles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit the number of roles returned (default: 10) | [optional] 
 **offset** | **int**| Offset the roles returned (default: 0) | [optional] 

### Return type

[**ModelsRoleWithPermissionsList**](ModelsRoleWithPermissionsList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error listing roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_roles_post**
> ModelsRoleWithPermissions v2_organization_id_roles_post(organization_id, routes_v2_create_role_v2_request)

Create role

Create a new role with permissions

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role_with_permissions import ModelsRoleWithPermissions
from monad.models.routes_v2_create_role_v2_request import RoutesV2CreateRoleV2Request
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_role_v2_request = monad.RoutesV2CreateRoleV2Request() # RoutesV2CreateRoleV2Request | Request body for creating a role

    try:
        # Create role
        api_response = api_instance.v2_organization_id_roles_post(organization_id, routes_v2_create_role_v2_request)
        print("The response of RolesApi->v2_organization_id_roles_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v2_organization_id_roles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_role_v2_request** | [**RoutesV2CreateRoleV2Request**](RoutesV2CreateRoleV2Request.md)| Request body for creating a role | 

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_roles_role_id_delete**
> object v2_organization_id_roles_role_id_delete(organization_id, role_id)

Delete role

Delete a role

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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Delete role
        api_response = api_instance.v2_organization_id_roles_role_id_delete(organization_id, role_id)
        print("The response of RolesApi->v2_organization_id_roles_role_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v2_organization_id_roles_role_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 

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
**500** | Failed to delete role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_roles_role_id_get**
> ModelsRoleWithPermissions v2_organization_id_roles_role_id_get(organization_id, role_id)

Get role

Get a role with its associated permissions

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role_with_permissions import ModelsRoleWithPermissions
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Get role
        api_response = api_instance.v2_organization_id_roles_role_id_get(organization_id, role_id)
        print("The response of RolesApi->v2_organization_id_roles_role_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v2_organization_id_roles_role_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role retrieved successfully |  -  |
**500** | Error getting role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_roles_role_id_patch**
> ModelsRoleWithPermissions v2_organization_id_roles_role_id_patch(organization_id, role_id, routes_v2_update_role_v2_request)

Update role

Update a role and its permissions

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_role_with_permissions import ModelsRoleWithPermissions
from monad.models.routes_v2_update_role_v2_request import RoutesV2UpdateRoleV2Request
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
    api_instance = monad.RolesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    role_id = 'role_id_example' # str | Role ID
    routes_v2_update_role_v2_request = monad.RoutesV2UpdateRoleV2Request() # RoutesV2UpdateRoleV2Request | Request body for updating a role

    try:
        # Update role
        api_response = api_instance.v2_organization_id_roles_role_id_patch(organization_id, role_id, routes_v2_update_role_v2_request)
        print("The response of RolesApi->v2_organization_id_roles_role_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->v2_organization_id_roles_role_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **role_id** | **str**| Role ID | 
 **routes_v2_update_role_v2_request** | [**RoutesV2UpdateRoleV2Request**](RoutesV2UpdateRoleV2Request.md)| Request body for updating a role | 

### Return type

[**ModelsRoleWithPermissions**](ModelsRoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

