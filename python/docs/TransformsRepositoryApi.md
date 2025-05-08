# monad.TransformsRepositoryApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_transforms_repository_get**](TransformsRepositoryApi.md#v2_transforms_repository_get) | **GET** /v2/transforms/repository | List transforms
[**v2_transforms_repository_transform_id_get**](TransformsRepositoryApi.md#v2_transforms_repository_transform_id_get) | **GET** /v2/transforms/repository/{transform_id} | Get transform details
[**v3_transforms_repository_get**](TransformsRepositoryApi.md#v3_transforms_repository_get) | **GET** /v3/transforms/repository | List community transforms
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

