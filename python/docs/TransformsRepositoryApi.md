# monad.TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_transform**](TransformsRepositoryApi.md#export_transform) | **POST** /v3/transforms/repository/export | Export transform to YAML
[**get_transform_details_from_repository**](TransformsRepositoryApi.md#get_transform_details_from_repository) | **GET** /v3/transforms/repository/{transform_id} | Get transform details
[**get_transform_repository_details**](TransformsRepositoryApi.md#get_transform_repository_details) | **GET** /v2/transforms/repository/{transform_id} | Get transform details
[**import_transform**](TransformsRepositoryApi.md#import_transform) | **POST** /v3/transforms/repository/import | Import transform from YAML
[**list_community_transforms**](TransformsRepositoryApi.md#list_community_transforms) | **GET** /v3/transforms/repository | List community transforms
[**list_transform_repository**](TransformsRepositoryApi.md#list_transform_repository) | **GET** /v2/transforms/repository | List transforms


# **export_transform**
> str export_transform(export_transform_request)

Export transform to YAML

Export transform to YAML format

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.export_transform_request import ExportTransformRequest
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
    api_instance = monad.TransformsRepositoryApi(api_client)
    export_transform_request = monad.ExportTransformRequest() # ExportTransformRequest | Transform to export and optional metadata

    try:
        # Export transform to YAML
        api_response = api_instance.export_transform(export_transform_request)
        print("The response of TransformsRepositoryApi->export_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->export_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_transform_request** | [**ExportTransformRequest**](ExportTransformRequest.md)| Transform to export and optional metadata | 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | YAML-formatted transform |  -  |
**400** | Invalid request |  -  |
**500** | Failed to export transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transform_details_from_repository**
> CommunityTransformsInternalTransformConfig get_transform_details_from_repository(transform_id)

Get transform details

Get detailed information about a specific transform from repository

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.community_transforms_internal_transform_config import CommunityTransformsInternalTransformConfig
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
    api_instance = monad.TransformsRepositoryApi(api_client)
    transform_id = 'transform_id_example' # str | Transform ID

    try:
        # Get transform details
        api_response = api_instance.get_transform_details_from_repository(transform_id)
        print("The response of TransformsRepositoryApi->get_transform_details_from_repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->get_transform_details_from_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_id** | **str**| Transform ID | 

### Return type

[**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform details retrieved successfully |  -  |
**404** | Transform not found |  -  |
**500** | Failed to get transform details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transform_repository_details**
> ModelsTransformsRepositoryTransform get_transform_repository_details(transform_id)

Get transform details

Get detailed information about a specific transform from repository

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_transforms_repository_transform import ModelsTransformsRepositoryTransform
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
    api_instance = monad.TransformsRepositoryApi(api_client)
    transform_id = 'transform_id_example' # str | Transform ID

    try:
        # Get transform details
        api_response = api_instance.get_transform_repository_details(transform_id)
        print("The response of TransformsRepositoryApi->get_transform_repository_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->get_transform_repository_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_id** | **str**| Transform ID | 

### Return type

[**ModelsTransformsRepositoryTransform**](ModelsTransformsRepositoryTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform details retrieved successfully |  -  |
**500** | Failed to get transform details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_transform**
> RoutesV3ImportTransformResponse import_transform(body)

Import transform from YAML

Import transform from YAML file

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_import_transform_response import RoutesV3ImportTransformResponse
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
    api_instance = monad.TransformsRepositoryApi(api_client)
    body = None # object | YAML transform definition

    try:
        # Import transform from YAML
        api_response = api_instance.import_transform(body)
        print("The response of TransformsRepositoryApi->import_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->import_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**| YAML transform definition | 

### Return type

[**RoutesV3ImportTransformResponse**](RoutesV3ImportTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform imported successfully |  -  |
**400** | Invalid YAML or transform validation failed |  -  |
**500** | Failed to import transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_community_transforms**
> CommunityTransformsInternalTransformsIndex list_community_transforms()

List community transforms

List transforms from repository index

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.community_transforms_internal_transforms_index import CommunityTransformsInternalTransformsIndex
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
    api_instance = monad.TransformsRepositoryApi(api_client)

    try:
        # List community transforms
        api_response = api_instance.list_community_transforms()
        print("The response of TransformsRepositoryApi->list_community_transforms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->list_community_transforms: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CommunityTransformsInternalTransformsIndex**](CommunityTransformsInternalTransformsIndex.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transforms retrieved successfully |  -  |
**500** | Failed to list transforms |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_transform_repository**
> ModelsTransformsRepositoryList list_transform_repository(limit=limit, offset=offset)

List transforms

List transforms from repository with pagination

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_transforms_repository_list import ModelsTransformsRepositoryList
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
    api_instance = monad.TransformsRepositoryApi(api_client)
    limit = 56 # int | Number of items to return (default: 10) (optional)
    offset = 56 # int | Number of items to skip (default: 0) (optional)

    try:
        # List transforms
        api_response = api_instance.list_transform_repository(limit=limit, offset=offset)
        print("The response of TransformsRepositoryApi->list_transform_repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->list_transform_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to return (default: 10) | [optional] 
 **offset** | **int**| Number of items to skip (default: 0) | [optional] 

### Return type

[**ModelsTransformsRepositoryList**](ModelsTransformsRepositoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transforms retrieved successfully |  -  |
**500** | Failed to list transforms |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

