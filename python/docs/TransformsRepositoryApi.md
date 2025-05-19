# monad.TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_transforms_repository_get**](TransformsRepositoryApi.md#v2_transforms_repository_get) | **GET** /v2/transforms/repository | List transforms
[**v2_transforms_repository_transform_id_get**](TransformsRepositoryApi.md#v2_transforms_repository_transform_id_get) | **GET** /v2/transforms/repository/{transform_id} | Get transform details
[**v3_transforms_repository_export_post**](TransformsRepositoryApi.md#v3_transforms_repository_export_post) | **POST** /v3/transforms/repository/export | Export transform to YAML
[**v3_transforms_repository_get**](TransformsRepositoryApi.md#v3_transforms_repository_get) | **GET** /v3/transforms/repository | List community transforms
[**v3_transforms_repository_import_post**](TransformsRepositoryApi.md#v3_transforms_repository_import_post) | **POST** /v3/transforms/repository/import | Import transform from YAML
[**v3_transforms_repository_transform_id_get**](TransformsRepositoryApi.md#v3_transforms_repository_transform_id_get) | **GET** /v3/transforms/repository/{transform_id} | Get transform details


# **v2_transforms_repository_get**
> ModelsTransformsRepositoryList v2_transforms_repository_get(limit=limit, offset=offset)

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
        api_response = api_instance.v2_transforms_repository_get(limit=limit, offset=offset)
        print("The response of TransformsRepositoryApi->v2_transforms_repository_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v2_transforms_repository_get: %s\n" % e)
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

# **v2_transforms_repository_transform_id_get**
> ModelsTransformsRepositoryTransform v2_transforms_repository_transform_id_get(transform_id)

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
        api_response = api_instance.v2_transforms_repository_transform_id_get(transform_id)
        print("The response of TransformsRepositoryApi->v2_transforms_repository_transform_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v2_transforms_repository_transform_id_get: %s\n" % e)
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

# **v3_transforms_repository_export_post**
> str v3_transforms_repository_export_post(community_transforms_internal_transform_config)

Export transform to YAML

Export transform to YAML format

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
    community_transforms_internal_transform_config = monad.CommunityTransformsInternalTransformConfig() # CommunityTransformsInternalTransformConfig | Transform to export and optional metadata

    try:
        # Export transform to YAML
        api_response = api_instance.v3_transforms_repository_export_post(community_transforms_internal_transform_config)
        print("The response of TransformsRepositoryApi->v3_transforms_repository_export_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v3_transforms_repository_export_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **community_transforms_internal_transform_config** | [**CommunityTransformsInternalTransformConfig**](CommunityTransformsInternalTransformConfig.md)| Transform to export and optional metadata | 

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

# **v3_transforms_repository_get**
> CommunityTransformsInternalTransformsIndex v3_transforms_repository_get()

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
        api_response = api_instance.v3_transforms_repository_get()
        print("The response of TransformsRepositoryApi->v3_transforms_repository_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v3_transforms_repository_get: %s\n" % e)
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

# **v3_transforms_repository_import_post**
> RoutesV3ImportTransformResponse v3_transforms_repository_import_post(body)

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
    body = 'body_example' # str | YAML transform definition

    try:
        # Import transform from YAML
        api_response = api_instance.v3_transforms_repository_import_post(body)
        print("The response of TransformsRepositoryApi->v3_transforms_repository_import_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v3_transforms_repository_import_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**| YAML transform definition | 

### Return type

[**RoutesV3ImportTransformResponse**](RoutesV3ImportTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform imported successfully |  -  |
**400** | Invalid YAML or transform validation failed |  -  |
**500** | Failed to import transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_transforms_repository_transform_id_get**
> CommunityTransformsInternalTransformConfig v3_transforms_repository_transform_id_get(transform_id)

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
        api_response = api_instance.v3_transforms_repository_transform_id_get(transform_id)
        print("The response of TransformsRepositoryApi->v3_transforms_repository_transform_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRepositoryApi->v3_transforms_repository_transform_id_get: %s\n" % e)
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

