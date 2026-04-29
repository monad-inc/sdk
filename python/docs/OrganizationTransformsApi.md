# monad.OrganizationTransformsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transform**](OrganizationTransformsApi.md#create_transform) | **POST** /v1/{organization_id}/transforms | Create transform
[**delete_organization_transform**](OrganizationTransformsApi.md#delete_organization_transform) | **DELETE** /v1/{organization_id}/transforms/{transform_id} | Delete transform
[**get_organization_transform**](OrganizationTransformsApi.md#get_organization_transform) | **GET** /v1/{organization_id}/transforms/{transform_id} | Get transform
[**list_organization_transforms**](OrganizationTransformsApi.md#list_organization_transforms) | **GET** /v1/{organization_id}/transforms | List configured transforms in a transform
[**update_organization_transform**](OrganizationTransformsApi.md#update_organization_transform) | **PATCH** /v1/{organization_id}/transforms/{transform_id} | Update transform


# **create_transform**
> ModelsTransform create_transform(organization_id, create_transform_request)

Create transform

Create transform

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_transform_request import CreateTransformRequest
from monad.models.models_transform import ModelsTransform
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
    api_instance = monad.OrganizationTransformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    create_transform_request = monad.CreateTransformRequest() # CreateTransformRequest | Request body for creating a transform

    try:
        # Create transform
        api_response = api_instance.create_transform(organization_id, create_transform_request)
        print("The response of OrganizationTransformsApi->create_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationTransformsApi->create_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **create_transform_request** | [**CreateTransformRequest**](CreateTransformRequest.md)| Request body for creating a transform | 

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_transform**
> object delete_organization_transform(organization_id, transform_id)

Delete transform

Delete transform

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
    api_instance = monad.OrganizationTransformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    transform_id = 'transform_id_example' # str | Transform ID

    try:
        # Delete transform
        api_response = api_instance.delete_organization_transform(organization_id, transform_id)
        print("The response of OrganizationTransformsApi->delete_organization_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationTransformsApi->delete_organization_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **transform_id** | **str**| Transform ID | 

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
**500** | Failed to delete transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_transform**
> RoutesGetTransformResponse get_organization_transform(transform_id, organization_id)

Get transform

Get transform

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_get_transform_response import RoutesGetTransformResponse
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
    api_instance = monad.OrganizationTransformsApi(api_client)
    transform_id = 'transform_id_example' # str | Transform ID
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # Get transform
        api_response = api_instance.get_organization_transform(transform_id, organization_id)
        print("The response of OrganizationTransformsApi->get_organization_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationTransformsApi->get_organization_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform_id** | **str**| Transform ID | 
 **organization_id** | **str**| Organization ID | 

### Return type

[**RoutesGetTransformResponse**](RoutesGetTransformResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform retrieved successfully |  -  |
**500** | Failed to get transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_organization_transforms**
> ModelsTransformList list_organization_transforms(organization_id, limit=limit, offset=offset)

List configured transforms in a transform

List transforms

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_transform_list import ModelsTransformList
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
    api_instance = monad.OrganizationTransformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List configured transforms in a transform
        api_response = api_instance.list_organization_transforms(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationTransformsApi->list_organization_transforms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationTransformsApi->list_organization_transforms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsTransformList**](ModelsTransformList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transforms |  -  |
**500** | Failed to marshal transforms |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_transform**
> ModelsTransform update_organization_transform(organization_id, transform_id, routes_update_transform_request)

Update transform

Update transform

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_transform import ModelsTransform
from monad.models.routes_update_transform_request import RoutesUpdateTransformRequest
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
    api_instance = monad.OrganizationTransformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    transform_id = 'transform_id_example' # str | Transform ID
    routes_update_transform_request = monad.RoutesUpdateTransformRequest() # RoutesUpdateTransformRequest | Request body for updating a transform

    try:
        # Update transform
        api_response = api_instance.update_organization_transform(organization_id, transform_id, routes_update_transform_request)
        print("The response of OrganizationTransformsApi->update_organization_transform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationTransformsApi->update_organization_transform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **transform_id** | **str**| Transform ID | 
 **routes_update_transform_request** | [**RoutesUpdateTransformRequest**](RoutesUpdateTransformRequest.md)| Request body for updating a transform | 

### Return type

[**ModelsTransform**](ModelsTransform.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update transform |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

