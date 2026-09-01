# monad.TagsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_tag**](TagsApi.md#create_tag) | **POST** /v3/{organization_id}/tags | Create a tag
[**delete_tag**](TagsApi.md#delete_tag) | **DELETE** /v3/{organization_id}/tags/{tag_id} | Delete a tag
[**list_tags**](TagsApi.md#list_tags) | **GET** /v3/{organization_id}/tags | List tags
[**update_tag**](TagsApi.md#update_tag) | **PATCH** /v3/{organization_id}/tags/{tag_id} | Update a tag


# **create_tag**
> RoutesV3TagResponse create_tag(organization_id, create_tag_request)

Create a tag

Create a customer tag. managed_by is always "customer".

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_tag_request import CreateTagRequest
from monad.models.routes_v3_tag_response import RoutesV3TagResponse
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
    api_instance = monad.TagsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    create_tag_request = monad.CreateTagRequest() # CreateTagRequest | Request body for creating a tag

    try:
        # Create a tag
        api_response = api_instance.create_tag(organization_id, create_tag_request)
        print("The response of TagsApi->create_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->create_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **create_tag_request** | [**CreateTagRequest**](CreateTagRequest.md)| Request body for creating a tag | 

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tag created |  -  |
**400** | Invalid request body |  -  |
**409** | A tag with this name already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tag**
> delete_tag(organization_id, tag_id)

Delete a tag

Delete a customer tag. Reserved tags return 404. Taggings cascade.

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
    api_instance = monad.TagsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    tag_id = 'tag_id_example' # str | Tag ID

    try:
        # Delete a tag
        api_instance.delete_tag(organization_id, tag_id)
    except Exception as e:
        print("Exception when calling TagsApi->delete_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **tag_id** | **str**| Tag ID | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Tag deleted |  -  |
**404** | Tag not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tags**
> RoutesV3TagListResponse list_tags(organization_id, search=search, limit=limit, offset=offset)

List tags

List the organization's customer tags, optionally prefix-filtered by name.

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_tag_list_response import RoutesV3TagListResponse
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
    api_instance = monad.TagsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    search = 'search_example' # str | Prefix match on tag name (optional)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List tags
        api_response = api_instance.list_tags(organization_id, search=search, limit=limit, offset=offset)
        print("The response of TagsApi->list_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->list_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **search** | **str**| Prefix match on tag name | [optional] 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**RoutesV3TagListResponse**](RoutesV3TagListResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of tags |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tag**
> RoutesV3TagResponse update_tag(organization_id, tag_id, update_tag_request)

Update a tag

Partially update a customer tag. Reserved tags return 404.

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_tag_response import RoutesV3TagResponse
from monad.models.update_tag_request import UpdateTagRequest
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
    api_instance = monad.TagsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    tag_id = 'tag_id_example' # str | Tag ID
    update_tag_request = monad.UpdateTagRequest() # UpdateTagRequest | Request body for updating a tag

    try:
        # Update a tag
        api_response = api_instance.update_tag(organization_id, tag_id, update_tag_request)
        print("The response of TagsApi->update_tag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->update_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **tag_id** | **str**| Tag ID | 
 **update_tag_request** | [**UpdateTagRequest**](UpdateTagRequest.md)| Request body for updating a tag | 

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag updated |  -  |
**400** | Invalid request body |  -  |
**404** | Tag not found |  -  |
**409** | A tag with this name already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

