# monad.BillingAccountsRBACApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_billing_account_role**](BillingAccountsRBACApi.md#create_billing_account_role) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**create_billing_account_user_role**](BillingAccountsRBACApi.md#create_billing_account_user_role) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**delete_billing_account_role**](BillingAccountsRBACApi.md#delete_billing_account_role) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**delete_billing_account_user_role**](BillingAccountsRBACApi.md#delete_billing_account_user_role) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**get_billing_account_role**](BillingAccountsRBACApi.md#get_billing_account_role) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**get_billing_account_roles**](BillingAccountsRBACApi.md#get_billing_account_roles) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**get_billing_permissions**](BillingAccountsRBACApi.md#get_billing_permissions) | **GET** /v2/billing/permissions | Get Billing Permissions
[**update_billing_account_role**](BillingAccountsRBACApi.md#update_billing_account_role) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role


# **create_billing_account_role**
> ModelsBillingAccountRole create_billing_account_role(billing_account_id, routes_v2_create_billing_account_role_request)

Create Billing Account Role

Create Billing Account Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_role import ModelsBillingAccountRole
from monad.models.routes_v2_create_billing_account_role_request import RoutesV2CreateBillingAccountRoleRequest
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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    routes_v2_create_billing_account_role_request = monad.RoutesV2CreateBillingAccountRoleRequest() # RoutesV2CreateBillingAccountRoleRequest | Create Billing Account Role Request

    try:
        # Create Billing Account Role
        api_response = api_instance.create_billing_account_role(billing_account_id, routes_v2_create_billing_account_role_request)
        print("The response of BillingAccountsRBACApi->create_billing_account_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->create_billing_account_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **routes_v2_create_billing_account_role_request** | [**RoutesV2CreateBillingAccountRoleRequest**](RoutesV2CreateBillingAccountRoleRequest.md)| Create Billing Account Role Request | 

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | create billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_billing_account_user_role**
> str create_billing_account_user_role(billing_account_id, role_id, routes_v2_createbilling_account_user_role_request)

Create Billing Account User Role

Add a user to a billing account role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_createbilling_account_user_role_request import RoutesV2CreatebillingAccountUserRoleRequest
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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    role_id = 'role_id_example' # str | Role ID
    routes_v2_createbilling_account_user_role_request = monad.RoutesV2CreatebillingAccountUserRoleRequest() # RoutesV2CreatebillingAccountUserRoleRequest | Create Billing Account User Role Request

    try:
        # Create Billing Account User Role
        api_response = api_instance.create_billing_account_user_role(billing_account_id, role_id, routes_v2_createbilling_account_user_role_request)
        print("The response of BillingAccountsRBACApi->create_billing_account_user_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->create_billing_account_user_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **role_id** | **str**| Role ID | 
 **routes_v2_createbilling_account_user_role_request** | [**RoutesV2CreatebillingAccountUserRoleRequest**](RoutesV2CreatebillingAccountUserRoleRequest.md)| Create Billing Account User Role Request | 

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
**201** | create billing account user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account User Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_billing_account_role**
> str delete_billing_account_role(billing_account_id, role_id)

Delete Billing Account Role

Delete Billing Account Role

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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Delete Billing Account Role
        api_response = api_instance.delete_billing_account_role(billing_account_id, role_id)
        print("The response of BillingAccountsRBACApi->delete_billing_account_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->delete_billing_account_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
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
**202** | delete billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_billing_account_user_role**
> str delete_billing_account_user_role(billing_account_id, role_id, user_id)

Delete Billing Account User Role

Remove a user to a billing account role

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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    role_id = 'role_id_example' # str | Role ID
    user_id = 'user_id_example' # str | User ID

    try:
        # Delete Billing Account User Role
        api_response = api_instance.delete_billing_account_user_role(billing_account_id, role_id, user_id)
        print("The response of BillingAccountsRBACApi->delete_billing_account_user_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->delete_billing_account_user_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
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
**204** | delete billing account user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account User Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_account_role**
> ModelsBillingAccountRole get_billing_account_role(billing_account_id, role_id)

Get Billing Account Role

Get Billing Account Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_role import ModelsBillingAccountRole
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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    role_id = 'role_id_example' # str | Role ID

    try:
        # Get Billing Account Role
        api_response = api_instance.get_billing_account_role(billing_account_id, role_id)
        print("The response of BillingAccountsRBACApi->get_billing_account_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->get_billing_account_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **role_id** | **str**| Role ID | 

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_account_roles**
> List[ModelsBillingAccountRole] get_billing_account_roles(billing_account_id)

Get Billing Account Roles

Get Billing Account Roles

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_role import ModelsBillingAccountRole
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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID

    try:
        # Get Billing Account Roles
        api_response = api_instance.get_billing_account_roles(billing_account_id)
        print("The response of BillingAccountsRBACApi->get_billing_account_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->get_billing_account_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 

### Return type

[**List[ModelsBillingAccountRole]**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account roles successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_permissions**
> List[ModelsBillingAccountPermission] get_billing_permissions()

Get Billing Permissions

Get Billing Permissions

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_permission import ModelsBillingAccountPermission
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
    api_instance = monad.BillingAccountsRBACApi(api_client)

    try:
        # Get Billing Permissions
        api_response = api_instance.get_billing_permissions()
        print("The response of BillingAccountsRBACApi->get_billing_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->get_billing_permissions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ModelsBillingAccountPermission]**](ModelsBillingAccountPermission.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account permissions successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_billing_account_role**
> ModelsBillingAccountRole update_billing_account_role(billing_account_id, role_id, routes_v2_update_billing_account_role_request)

Update Billing Account Role

Update Billing Account Role

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_role import ModelsBillingAccountRole
from monad.models.routes_v2_update_billing_account_role_request import RoutesV2UpdateBillingAccountRoleRequest
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
    api_instance = monad.BillingAccountsRBACApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    role_id = 'role_id_example' # str | Role ID
    routes_v2_update_billing_account_role_request = monad.RoutesV2UpdateBillingAccountRoleRequest() # RoutesV2UpdateBillingAccountRoleRequest | Update Billing Account Role Request

    try:
        # Update Billing Account Role
        api_response = api_instance.update_billing_account_role(billing_account_id, role_id, routes_v2_update_billing_account_role_request)
        print("The response of BillingAccountsRBACApi->update_billing_account_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsRBACApi->update_billing_account_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **role_id** | **str**| Role ID | 
 **routes_v2_update_billing_account_role_request** | [**RoutesV2UpdateBillingAccountRoleRequest**](RoutesV2UpdateBillingAccountRoleRequest.md)| Update Billing Account Role Request | 

### Return type

[**ModelsBillingAccountRole**](ModelsBillingAccountRole.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

