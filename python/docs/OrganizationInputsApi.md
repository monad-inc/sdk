# monad.OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_inputs_bulk_post**](OrganizationInputsApi.md#v1_organization_id_inputs_bulk_post) | **POST** /v1/{organization_id}/inputs/bulk | Bulk create inputs
[**v1_organization_id_inputs_get**](OrganizationInputsApi.md#v1_organization_id_inputs_get) | **GET** /v1/{organization_id}/inputs | List inputs
[**v1_organization_id_inputs_input_id_delete**](OrganizationInputsApi.md#v1_organization_id_inputs_input_id_delete) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input
[**v1_organization_id_inputs_input_id_get**](OrganizationInputsApi.md#v1_organization_id_inputs_input_id_get) | **GET** /v1/{organization_id}/inputs/{input_id} | Get input
[**v1_organization_id_inputs_input_id_patch**](OrganizationInputsApi.md#v1_organization_id_inputs_input_id_patch) | **PATCH** /v1/{organization_id}/inputs/{input_id} | Update input
[**v1_organization_id_inputs_post**](OrganizationInputsApi.md#v1_organization_id_inputs_post) | **POST** /v1/{organization_id}/inputs | Create input
[**v2_organization_id_inputs_bulk_post**](OrganizationInputsApi.md#v2_organization_id_inputs_bulk_post) | **POST** /v2/{organization_id}/inputs/bulk | Bulk create inputs
[**v2_organization_id_inputs_input_id_patch**](OrganizationInputsApi.md#v2_organization_id_inputs_input_id_patch) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input
[**v2_organization_id_inputs_post**](OrganizationInputsApi.md#v2_organization_id_inputs_post) | **POST** /v2/{organization_id}/inputs | Create input
[**v2_organization_id_inputs_test_connection_post**](OrganizationInputsApi.md#v2_organization_id_inputs_test_connection_post) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection


# **v1_organization_id_inputs_bulk_post**
> List[ModelsInput] v1_organization_id_inputs_bulk_post(organization_id, routes_bulk_create_input_request, test_connection=test_connection)

Bulk create inputs

Create multiple inputs in a single request

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_bulk_create_input_request import RoutesBulkCreateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_bulk_create_input_request = monad.RoutesBulkCreateInputRequest() # RoutesBulkCreateInputRequest | Request body for creating multiple inputs
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Bulk create inputs
        api_response = api_instance.v1_organization_id_inputs_bulk_post(organization_id, routes_bulk_create_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_bulk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_bulk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_bulk_create_input_request** | [**RoutesBulkCreateInputRequest**](RoutesBulkCreateInputRequest.md)| Request body for creating multiple inputs | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**List[ModelsInput]**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inputs created successfully |  -  |
**400** | Validation error |  -  |
**500** | Failed to create inputs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_inputs_get**
> ModelsInputList v1_organization_id_inputs_get(organization_id, limit=limit, offset=offset)

List inputs

List inputs

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input_list import ModelsInputList
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit the number of organizations returned (default: DefaultLimit) (optional)
    offset = 56 # int | Offset the organizations returned (default: 0) (optional)

    try:
        # List inputs
        api_response = api_instance.v1_organization_id_inputs_get(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit the number of organizations returned (default: DefaultLimit) | [optional] 
 **offset** | **int**| Offset the organizations returned (default: 0) | [optional] 

### Return type

[**ModelsInputList**](ModelsInputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inputs retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_inputs_input_id_delete**
> object v1_organization_id_inputs_input_id_delete(organization_id, input_id)

Delete input

Delete input

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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    input_id = 'input_id_example' # str | Input ID

    try:
        # Delete input
        api_response = api_instance.v1_organization_id_inputs_input_id_delete(organization_id, input_id)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_input_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_input_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 

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
**500** | Failed to delete input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_inputs_input_id_get**
> RoutesGetInputResponse v1_organization_id_inputs_input_id_get(organization_id, input_id)

Get input

Get input

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_get_input_response import RoutesGetInputResponse
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    input_id = 'input_id_example' # str | Input ID

    try:
        # Get input
        api_response = api_instance.v1_organization_id_inputs_input_id_get(organization_id, input_id)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_input_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_input_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 

### Return type

[**RoutesGetInputResponse**](RoutesGetInputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_inputs_input_id_patch**
> ModelsInput v1_organization_id_inputs_input_id_patch(organization_id, input_id, routes_update_input_request, test_connection=test_connection)

Update input

Update input

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_update_input_request import RoutesUpdateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    input_id = 'input_id_example' # str | Input ID
    routes_update_input_request = monad.RoutesUpdateInputRequest() # RoutesUpdateInputRequest | Request body for updating an input
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Update input
        api_response = api_instance.v1_organization_id_inputs_input_id_patch(organization_id, input_id, routes_update_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_input_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_input_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 
 **routes_update_input_request** | [**RoutesUpdateInputRequest**](RoutesUpdateInputRequest.md)| Request body for updating an input | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input updated successfully |  -  |
**400** | Invalid JSON config in body |  -  |
**500** | Failed to update input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_inputs_post**
> ModelsInput v1_organization_id_inputs_post(organization_id, routes_create_input_request, test_connection=test_connection)

Create input

Create input

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_create_input_request import RoutesCreateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_create_input_request = monad.RoutesCreateInputRequest() # RoutesCreateInputRequest | Request body for creating an input
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Create input
        api_response = api_instance.v1_organization_id_inputs_post(organization_id, routes_create_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v1_organization_id_inputs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v1_organization_id_inputs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_create_input_request** | [**RoutesCreateInputRequest**](RoutesCreateInputRequest.md)| Request body for creating an input | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input created successfully |  -  |
**400** | Failed to create input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_inputs_bulk_post**
> List[ModelsInput] v2_organization_id_inputs_bulk_post(organization_id, routes_v2_bulk_create_input_request, test_connection=test_connection)

Bulk create inputs

Create multiple inputs in a single request

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_v2_bulk_create_input_request import RoutesV2BulkCreateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_bulk_create_input_request = monad.RoutesV2BulkCreateInputRequest() # RoutesV2BulkCreateInputRequest | Request body for creating multiple inputs
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Bulk create inputs
        api_response = api_instance.v2_organization_id_inputs_bulk_post(organization_id, routes_v2_bulk_create_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v2_organization_id_inputs_bulk_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v2_organization_id_inputs_bulk_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_bulk_create_input_request** | [**RoutesV2BulkCreateInputRequest**](RoutesV2BulkCreateInputRequest.md)| Request body for creating multiple inputs | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**List[ModelsInput]**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inputs created successfully |  -  |
**400** | Validation error |  -  |
**500** | Failed to create inputs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_inputs_input_id_patch**
> ModelsInput v2_organization_id_inputs_input_id_patch(organization_id, input_id, routes_v2_update_input_request, test_connection=test_connection)

Update input

Update an existing input with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_v2_update_input_request import RoutesV2UpdateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    input_id = 'input_id_example' # str | Input ID
    routes_v2_update_input_request = monad.RoutesV2UpdateInputRequest() # RoutesV2UpdateInputRequest | Input configuration update
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Update input
        api_response = api_instance.v2_organization_id_inputs_input_id_patch(organization_id, input_id, routes_v2_update_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v2_organization_id_inputs_input_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v2_organization_id_inputs_input_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 
 **routes_v2_update_input_request** | [**RoutesV2UpdateInputRequest**](RoutesV2UpdateInputRequest.md)| Input configuration update | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input updated successfully |  -  |
**400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
**404** | Input not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_inputs_post**
> ModelsInput v2_organization_id_inputs_post(organization_id, routes_v2_create_input_request, test_connection=test_connection)

Create input

Create a new input with configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.routes_v2_create_input_request import RoutesV2CreateInputRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_input_request = monad.RoutesV2CreateInputRequest() # RoutesV2CreateInputRequest | Input configuration
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Create input
        api_response = api_instance.v2_organization_id_inputs_post(organization_id, routes_v2_create_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->v2_organization_id_inputs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v2_organization_id_inputs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_input_request** | [**RoutesV2CreateInputRequest**](RoutesV2CreateInputRequest.md)| Input configuration | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsInput**](ModelsInput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Input created successfully |  -  |
**400** | Invalid request body, input type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_inputs_test_connection_post**
> RoutesV2SuccessResponse v2_organization_id_inputs_test_connection_post(organization_id, routes_v2_test_input_connection_request)

Test input connection

Tests the connection for a given input type and configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_success_response import RoutesV2SuccessResponse
from monad.models.routes_v2_test_input_connection_request import RoutesV2TestInputConnectionRequest
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
    api_instance = monad.OrganizationInputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_test_input_connection_request = monad.RoutesV2TestInputConnectionRequest() # RoutesV2TestInputConnectionRequest | Input configuration to test

    try:
        # Test input connection
        api_response = api_instance.v2_organization_id_inputs_test_connection_post(organization_id, routes_v2_test_input_connection_request)
        print("The response of OrganizationInputsApi->v2_organization_id_inputs_test_connection_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->v2_organization_id_inputs_test_connection_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_test_input_connection_request** | [**RoutesV2TestInputConnectionRequest**](RoutesV2TestInputConnectionRequest.md)| Input configuration to test | 

### Return type

[**RoutesV2SuccessResponse**](RoutesV2SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection test successful |  -  |
**400** | Invalid request body, input type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

