# monad.OrganizationInputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_input**](OrganizationInputsApi.md#create_input) | **POST** /v2/{organization_id}/inputs | Create input
[**delete_organization_input**](OrganizationInputsApi.md#delete_organization_input) | **DELETE** /v1/{organization_id}/inputs/{input_id} | Delete input
[**get_organization_input**](OrganizationInputsApi.md#get_organization_input) | **GET** /v1/{organization_id}/inputs/{input_id} | Get organization input
[**list_organization_inputs**](OrganizationInputsApi.md#list_organization_inputs) | **GET** /v1/{organization_id}/inputs | List organization inputs
[**replace_input**](OrganizationInputsApi.md#replace_input) | **PUT** /v2/{organization_id}/inputs/{input_id} | Replace input
[**test_input_connection**](OrganizationInputsApi.md#test_input_connection) | **POST** /v2/{organization_id}/inputs/test-connection | Test input connection
[**update_input**](OrganizationInputsApi.md#update_input) | **PATCH** /v2/{organization_id}/inputs/{input_id} | Update input


# **create_input**
> ModelsInput create_input(organization_id, create_input_request, test_connection=test_connection)

Create input

Create a new input with configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_input_request import CreateInputRequest
from monad.models.models_input import ModelsInput
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
    create_input_request = monad.CreateInputRequest() # CreateInputRequest | Input configuration
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Create input
        api_response = api_instance.create_input(organization_id, create_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->create_input:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->create_input: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **create_input_request** | [**CreateInputRequest**](CreateInputRequest.md)| Input configuration | 
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

# **delete_organization_input**
> object delete_organization_input(organization_id, input_id)

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
        api_response = api_instance.delete_organization_input(organization_id, input_id)
        print("The response of OrganizationInputsApi->delete_organization_input:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->delete_organization_input: %s\n" % e)
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

# **get_organization_input**
> RoutesGetInputResponse get_organization_input(organization_id, input_id)

Get organization input

Get a configured input in organization

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
        # Get organization input
        api_response = api_instance.get_organization_input(organization_id, input_id)
        print("The response of OrganizationInputsApi->get_organization_input:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->get_organization_input: %s\n" % e)
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

# **list_organization_inputs**
> ModelsInputList list_organization_inputs(organization_id, limit=limit, offset=offset)

List organization inputs

List configured inputs in organization

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
        # List organization inputs
        api_response = api_instance.list_organization_inputs(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationInputsApi->list_organization_inputs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->list_organization_inputs: %s\n" % e)
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

# **replace_input**
> ModelsInput replace_input(organization_id, input_id, replace_input_request, test_connection=test_connection)

Replace input

Replace an existing input with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.replace_input_request import ReplaceInputRequest
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
    replace_input_request = monad.ReplaceInputRequest() # ReplaceInputRequest | Input configuration update
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Replace input
        api_response = api_instance.replace_input(organization_id, input_id, replace_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->replace_input:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->replace_input: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 
 **replace_input_request** | [**ReplaceInputRequest**](ReplaceInputRequest.md)| Input configuration update | 
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

# **test_input_connection**
> RoutesV2SuccessResponse test_input_connection(organization_id, test_input_connection_request)

Test input connection

Tests the connection for a given input type and configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_success_response import RoutesV2SuccessResponse
from monad.models.test_input_connection_request import TestInputConnectionRequest
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
    test_input_connection_request = monad.TestInputConnectionRequest() # TestInputConnectionRequest | Input configuration to test

    try:
        # Test input connection
        api_response = api_instance.test_input_connection(organization_id, test_input_connection_request)
        print("The response of OrganizationInputsApi->test_input_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->test_input_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **test_input_connection_request** | [**TestInputConnectionRequest**](TestInputConnectionRequest.md)| Input configuration to test | 

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

# **update_input**
> ModelsInput update_input(organization_id, input_id, update_input_request, test_connection=test_connection)

Update input

Update an existing input with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_input import ModelsInput
from monad.models.update_input_request import UpdateInputRequest
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
    update_input_request = monad.UpdateInputRequest() # UpdateInputRequest | Input configuration update
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Update input
        api_response = api_instance.update_input(organization_id, input_id, update_input_request, test_connection=test_connection)
        print("The response of OrganizationInputsApi->update_input:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInputsApi->update_input: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **input_id** | **str**| Input ID | 
 **update_input_request** | [**UpdateInputRequest**](UpdateInputRequest.md)| Input configuration update | 
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

