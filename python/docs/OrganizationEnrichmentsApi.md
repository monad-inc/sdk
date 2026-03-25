# monad.OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_enrichment**](OrganizationEnrichmentsApi.md#create_enrichment) | **POST** /v3/{organization_id}/enrichments | Create enrichment
[**delete_enrichment**](OrganizationEnrichmentsApi.md#delete_enrichment) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**get_enrichment**](OrganizationEnrichmentsApi.md#get_enrichment) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**list_enrichments**](OrganizationEnrichmentsApi.md#list_enrichments) | **GET** /v3/{organization_id}/enrichments | List enrichments
[**replace_enrichment**](OrganizationEnrichmentsApi.md#replace_enrichment) | **PUT** /v3/{organization_id}/enrichments/{enrichment_id} | Replace enrichment
[**test_enrichment_connection**](OrganizationEnrichmentsApi.md#test_enrichment_connection) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection
[**update_enrichment**](OrganizationEnrichmentsApi.md#update_enrichment) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment


# **create_enrichment**
> ModelsEnrichment create_enrichment(organization_id, routes_v3_create_enrichment_request, test_connection=test_connection)

Create enrichment

Create a new enrichment with configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_enrichment import ModelsEnrichment
from monad.models.routes_v3_create_enrichment_request import RoutesV3CreateEnrichmentRequest
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_create_enrichment_request = monad.RoutesV3CreateEnrichmentRequest() # RoutesV3CreateEnrichmentRequest | Enrichment configuration
    test_connection = True # bool | Test connection before creating the enrichment (optional)

    try:
        # Create enrichment
        api_response = api_instance.create_enrichment(organization_id, routes_v3_create_enrichment_request, test_connection=test_connection)
        print("The response of OrganizationEnrichmentsApi->create_enrichment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->create_enrichment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_create_enrichment_request** | [**RoutesV3CreateEnrichmentRequest**](RoutesV3CreateEnrichmentRequest.md)| Enrichment configuration | 
 **test_connection** | **bool**| Test connection before creating the enrichment | [optional] 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment created successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_enrichment**
> RoutesV3SuccessResponse delete_enrichment(organization_id, enrichment_id)

Delete enrichment

Delete an enrichment by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_success_response import RoutesV3SuccessResponse
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    enrichment_id = 'enrichment_id_example' # str | Enrichment ID

    try:
        # Delete enrichment
        api_response = api_instance.delete_enrichment(organization_id, enrichment_id)
        print("The response of OrganizationEnrichmentsApi->delete_enrichment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->delete_enrichment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_id** | **str**| Enrichment ID | 

### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment deleted successfully |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_enrichment**
> RoutesV3GetEnrichmentResponse get_enrichment(organization_id, enrichment_id)

Get enrichment

Get an enrichment by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_get_enrichment_response import RoutesV3GetEnrichmentResponse
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    enrichment_id = 'enrichment_id_example' # str | Enrichment ID

    try:
        # Get enrichment
        api_response = api_instance.get_enrichment(organization_id, enrichment_id)
        print("The response of OrganizationEnrichmentsApi->get_enrichment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->get_enrichment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_id** | **str**| Enrichment ID | 

### Return type

[**RoutesV3GetEnrichmentResponse**](RoutesV3GetEnrichmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment details |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_enrichments**
> ModelsEnrichmentList list_enrichments(organization_id, limit=limit, offset=offset)

List enrichments

List all enrichments for an organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_enrichment_list import ModelsEnrichmentList
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Number of results to return (default 100) (optional)
    offset = 56 # int | Number of results to skip (default 0) (optional)

    try:
        # List enrichments
        api_response = api_instance.list_enrichments(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationEnrichmentsApi->list_enrichments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->list_enrichments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Number of results to return (default 100) | [optional] 
 **offset** | **int**| Number of results to skip (default 0) | [optional] 

### Return type

[**ModelsEnrichmentList**](ModelsEnrichmentList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of enrichments |  -  |
**400** | Invalid request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_enrichment**
> ModelsEnrichment replace_enrichment(organization_id, enrichment_id, routes_v3_put_enrichment_request, test_connection=test_connection)

Replace enrichment

Replace an existing enrichment with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_enrichment import ModelsEnrichment
from monad.models.routes_v3_put_enrichment_request import RoutesV3PutEnrichmentRequest
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    enrichment_id = 'enrichment_id_example' # str | Enrichment ID
    routes_v3_put_enrichment_request = monad.RoutesV3PutEnrichmentRequest() # RoutesV3PutEnrichmentRequest | Enrichment configuration update
    test_connection = True # bool | Test connection before updating the enrichment (optional)

    try:
        # Replace enrichment
        api_response = api_instance.replace_enrichment(organization_id, enrichment_id, routes_v3_put_enrichment_request, test_connection=test_connection)
        print("The response of OrganizationEnrichmentsApi->replace_enrichment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->replace_enrichment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_id** | **str**| Enrichment ID | 
 **routes_v3_put_enrichment_request** | [**RoutesV3PutEnrichmentRequest**](RoutesV3PutEnrichmentRequest.md)| Enrichment configuration update | 
 **test_connection** | **bool**| Test connection before updating the enrichment | [optional] 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment updated successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_enrichment_connection**
> RoutesV3SuccessResponse test_enrichment_connection(organization_id, routes_v3_test_enrichment_connection_request)

Test enrichment connection

Tests the connection for a given enrichment type and configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_success_response import RoutesV3SuccessResponse
from monad.models.routes_v3_test_enrichment_connection_request import RoutesV3TestEnrichmentConnectionRequest
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_test_enrichment_connection_request = monad.RoutesV3TestEnrichmentConnectionRequest() # RoutesV3TestEnrichmentConnectionRequest | Enrichment configuration to test

    try:
        # Test enrichment connection
        api_response = api_instance.test_enrichment_connection(organization_id, routes_v3_test_enrichment_connection_request)
        print("The response of OrganizationEnrichmentsApi->test_enrichment_connection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->test_enrichment_connection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_test_enrichment_connection_request** | [**RoutesV3TestEnrichmentConnectionRequest**](RoutesV3TestEnrichmentConnectionRequest.md)| Enrichment configuration to test | 

### Return type

[**RoutesV3SuccessResponse**](RoutesV3SuccessResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection test successful |  -  |
**400** | Invalid request body, enrichment type, or configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_enrichment**
> ModelsEnrichment update_enrichment(organization_id, enrichment_id, routes_v3_update_enrichment_request, test_connection=test_connection)

Update enrichment

Update an existing enrichment with new configuration including secrets handling

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_enrichment import ModelsEnrichment
from monad.models.routes_v3_update_enrichment_request import RoutesV3UpdateEnrichmentRequest
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
    api_instance = monad.OrganizationEnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    enrichment_id = 'enrichment_id_example' # str | Enrichment ID
    routes_v3_update_enrichment_request = monad.RoutesV3UpdateEnrichmentRequest() # RoutesV3UpdateEnrichmentRequest | Enrichment configuration update
    test_connection = True # bool | Test connection before updating the enrichment (optional)

    try:
        # Update enrichment
        api_response = api_instance.update_enrichment(organization_id, enrichment_id, routes_v3_update_enrichment_request, test_connection=test_connection)
        print("The response of OrganizationEnrichmentsApi->update_enrichment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->update_enrichment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_id** | **str**| Enrichment ID | 
 **routes_v3_update_enrichment_request** | [**RoutesV3UpdateEnrichmentRequest**](RoutesV3UpdateEnrichmentRequest.md)| Enrichment configuration update | 
 **test_connection** | **bool**| Test connection before updating the enrichment | [optional] 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment updated successfully |  -  |
**400** | Invalid request body, enrichment type, configuration validation error, or secret processing error |  -  |
**404** | Enrichment not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

