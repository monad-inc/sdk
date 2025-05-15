# monad.OrganizationEnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_organization_id_enrichments_enrichment_id_delete**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_enrichment_id_delete) | **DELETE** /v3/{organization_id}/enrichments/{enrichment_id} | Delete enrichment
[**v3_organization_id_enrichments_enrichment_id_get**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_enrichment_id_get) | **GET** /v3/{organization_id}/enrichments/{enrichment_id} | Get enrichment
[**v3_organization_id_enrichments_enrichment_id_patch**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_enrichment_id_patch) | **PATCH** /v3/{organization_id}/enrichments/{enrichment_id} | Update enrichment
[**v3_organization_id_enrichments_get**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_get) | **GET** /v3/{organization_id}/enrichments | List enrichments
[**v3_organization_id_enrichments_post**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_post) | **POST** /v3/{organization_id}/enrichments | Create enrichment
[**v3_organization_id_enrichments_test_connection_post**](OrganizationEnrichmentsApi.md#v3_organization_id_enrichments_test_connection_post) | **POST** /v3/{organization_id}/enrichments/test-connection | Test enrichment connection


# **v3_organization_id_enrichments_enrichment_id_delete**
> RoutesV3SuccessResponse v3_organization_id_enrichments_enrichment_id_delete(organization_id, enrichment_id)

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
        api_response = api_instance.v3_organization_id_enrichments_enrichment_id_delete(organization_id, enrichment_id)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_delete: %s\n" % e)
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

# **v3_organization_id_enrichments_enrichment_id_get**
> ModelsEnrichment v3_organization_id_enrichments_enrichment_id_get(organization_id, enrichment_id)

Get enrichment

Get an enrichment by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_enrichment import ModelsEnrichment
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
        api_response = api_instance.v3_organization_id_enrichments_enrichment_id_get(organization_id, enrichment_id)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_id** | **str**| Enrichment ID | 

### Return type

[**ModelsEnrichment**](ModelsEnrichment.md)

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

# **v3_organization_id_enrichments_enrichment_id_patch**
> ModelsEnrichment v3_organization_id_enrichments_enrichment_id_patch(organization_id, enrichment_id, routes_v3_update_enrichment_request, test_connection=test_connection)

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
        api_response = api_instance.v3_organization_id_enrichments_enrichment_id_patch(organization_id, enrichment_id, routes_v3_update_enrichment_request, test_connection=test_connection)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_enrichment_id_patch: %s\n" % e)
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

# **v3_organization_id_enrichments_get**
> ModelsEnrichmentList v3_organization_id_enrichments_get(organization_id, limit=limit, offset=offset)

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
        api_response = api_instance.v3_organization_id_enrichments_get(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_get: %s\n" % e)
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

# **v3_organization_id_enrichments_post**
> ModelsEnrichment v3_organization_id_enrichments_post(organization_id, routes_v3_create_enrichment_request, test_connection=test_connection)

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
        api_response = api_instance.v3_organization_id_enrichments_post(organization_id, routes_v3_create_enrichment_request, test_connection=test_connection)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_post: %s\n" % e)
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

# **v3_organization_id_enrichments_test_connection_post**
> RoutesV3SuccessResponse v3_organization_id_enrichments_test_connection_post(organization_id, routes_v3_test_enrichment_connection_request)

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
        api_response = api_instance.v3_organization_id_enrichments_test_connection_post(organization_id, routes_v3_test_enrichment_connection_request)
        print("The response of OrganizationEnrichmentsApi->v3_organization_id_enrichments_test_connection_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationEnrichmentsApi->v3_organization_id_enrichments_test_connection_post: %s\n" % e)
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

