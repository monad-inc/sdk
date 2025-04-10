# monad.OrganizationOutputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_outputs_get**](OrganizationOutputsApi.md#v1_organization_id_outputs_get) | **GET** /v1/{organization_id}/outputs | List outputs
[**v1_organization_id_outputs_output_id_delete**](OrganizationOutputsApi.md#v1_organization_id_outputs_output_id_delete) | **DELETE** /v1/{organization_id}/outputs/{output_id} | Delete output
[**v1_organization_id_outputs_output_id_get**](OrganizationOutputsApi.md#v1_organization_id_outputs_output_id_get) | **GET** /v1/{organization_id}/outputs/{output_id} | Get output
[**v2_organization_id_outputs_output_id_patch**](OrganizationOutputsApi.md#v2_organization_id_outputs_output_id_patch) | **PATCH** /v2/{organization_id}/outputs/{output_id} | Update output
[**v2_organization_id_outputs_post**](OrganizationOutputsApi.md#v2_organization_id_outputs_post) | **POST** /v2/{organization_id}/outputs | Create output
[**v2_organization_id_outputs_test_connection_post**](OrganizationOutputsApi.md#v2_organization_id_outputs_test_connection_post) | **POST** /v2/{organization_id}/outputs/test-connection | Test output connection


# **v1_organization_id_outputs_get**
> ModelsOutputList v1_organization_id_outputs_get(organization_id, limit=limit, offset=offset)

List outputs

List outputs

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_output_list import ModelsOutputList
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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List outputs
        api_response = api_instance.v1_organization_id_outputs_get(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationOutputsApi->v1_organization_id_outputs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v1_organization_id_outputs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsOutputList**](ModelsOutputList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of outputs |  -  |
**500** | Failed to marshal outputs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_outputs_output_id_delete**
> str v1_organization_id_outputs_output_id_delete(organization_id, output_id)

Delete output

Delete output

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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    output_id = 'output_id_example' # str | Output ID

    try:
        # Delete output
        api_response = api_instance.v1_organization_id_outputs_output_id_delete(organization_id, output_id)
        print("The response of OrganizationOutputsApi->v1_organization_id_outputs_output_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v1_organization_id_outputs_output_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **output_id** | **str**| Output ID | 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output deleted successfully |  -  |
**500** | Failed to delete output |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_outputs_output_id_get**
> RoutesGetOutputResponse v1_organization_id_outputs_output_id_get(organization_id, output_id)

Get output

Get output

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_get_output_response import RoutesGetOutputResponse
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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    output_id = 'output_id_example' # str | Output ID

    try:
        # Get output
        api_response = api_instance.v1_organization_id_outputs_output_id_get(organization_id, output_id)
        print("The response of OrganizationOutputsApi->v1_organization_id_outputs_output_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v1_organization_id_outputs_output_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **output_id** | **str**| Output ID | 

### Return type

[**RoutesGetOutputResponse**](RoutesGetOutputResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output retrieved successfully |  -  |
**500** | Failed to get output |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_outputs_output_id_patch**
> ModelsOutput v2_organization_id_outputs_output_id_patch(organization_id, output_id, routes_v2_update_output_request, test_connection=test_connection)

Update output

Update an existing output with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_output import ModelsOutput
from monad.models.routes_v2_update_output_request import RoutesV2UpdateOutputRequest
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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    output_id = 'output_id_example' # str | Output ID
    routes_v2_update_output_request = monad.RoutesV2UpdateOutputRequest() # RoutesV2UpdateOutputRequest | Output configuration update
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Update output
        api_response = api_instance.v2_organization_id_outputs_output_id_patch(organization_id, output_id, routes_v2_update_output_request, test_connection=test_connection)
        print("The response of OrganizationOutputsApi->v2_organization_id_outputs_output_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v2_organization_id_outputs_output_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **output_id** | **str**| Output ID | 
 **routes_v2_update_output_request** | [**RoutesV2UpdateOutputRequest**](RoutesV2UpdateOutputRequest.md)| Output configuration update | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output updated successfully |  -  |
**400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
**404** | Output not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_outputs_post**
> ModelsOutput v2_organization_id_outputs_post(organization_id, routes_v2_create_output_request, test_connection=test_connection)

Create output

Create a new output with configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_output import ModelsOutput
from monad.models.routes_v2_create_output_request import RoutesV2CreateOutputRequest
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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_output_request = monad.RoutesV2CreateOutputRequest() # RoutesV2CreateOutputRequest | Output configuration
    test_connection = True # bool | Test connection before creating the input (optional)

    try:
        # Create output
        api_response = api_instance.v2_organization_id_outputs_post(organization_id, routes_v2_create_output_request, test_connection=test_connection)
        print("The response of OrganizationOutputsApi->v2_organization_id_outputs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v2_organization_id_outputs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_output_request** | [**RoutesV2CreateOutputRequest**](RoutesV2CreateOutputRequest.md)| Output configuration | 
 **test_connection** | **bool**| Test connection before creating the input | [optional] 

### Return type

[**ModelsOutput**](ModelsOutput.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output created successfully |  -  |
**400** | Invalid request body, output type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_outputs_test_connection_post**
> RoutesV2SuccessResponse v2_organization_id_outputs_test_connection_post(organization_id, routes_v2_test_output_connection_request)

Test output connection

Tests the connection for a given output type and configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_success_response import RoutesV2SuccessResponse
from monad.models.routes_v2_test_output_connection_request import RoutesV2TestOutputConnectionRequest
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
    api_instance = monad.OrganizationOutputsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_test_output_connection_request = monad.RoutesV2TestOutputConnectionRequest() # RoutesV2TestOutputConnectionRequest | Output configuration to test

    try:
        # Test output connection
        api_response = api_instance.v2_organization_id_outputs_test_connection_post(organization_id, routes_v2_test_output_connection_request)
        print("The response of OrganizationOutputsApi->v2_organization_id_outputs_test_connection_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationOutputsApi->v2_organization_id_outputs_test_connection_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_test_output_connection_request** | [**RoutesV2TestOutputConnectionRequest**](RoutesV2TestOutputConnectionRequest.md)| Output configuration to test | 

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
**400** | Invalid request body, output type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

