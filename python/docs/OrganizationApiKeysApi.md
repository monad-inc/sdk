# monad.OrganizationApiKeysApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organization_id_api_keys_api_key_id_delete**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_api_key_id_delete) | **DELETE** /v2/{organization_id}/api_keys/{api_key_id} | Delete API key
[**v2_organization_id_api_keys_api_key_id_get**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_api_key_id_get) | **GET** /v2/{organization_id}/api_keys/{api_key_id} | Get API key
[**v2_organization_id_api_keys_api_key_id_patch**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_api_key_id_patch) | **PATCH** /v2/{organization_id}/api_keys/{api_key_id} | Update API key
[**v2_organization_id_api_keys_api_key_id_regenerate_post**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_api_key_id_regenerate_post) | **POST** /v2/{organization_id}/api_keys/{api_key_id}/regenerate | Regenerate API key
[**v2_organization_id_api_keys_get**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_get) | **GET** /v2/{organization_id}/api_keys | List API keys
[**v2_organization_id_api_keys_post**](OrganizationApiKeysApi.md#v2_organization_id_api_keys_post) | **POST** /v2/{organization_id}/api_keys | Create API key


# **v2_organization_id_api_keys_api_key_id_delete**
> str v2_organization_id_api_keys_api_key_id_delete(organization_id, api_key_id)

Delete API key

Delete API key

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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    api_key_id = 'api_key_id_example' # str | API Key ID

    try:
        # Delete API key
        api_response = api_instance.v2_organization_id_api_keys_api_key_id_delete(organization_id, api_key_id)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **api_key_id** | **str**| API Key ID | 

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
**200** | API key deleted successfully |  -  |
**404** | API key not found |  -  |
**500** | Failed to delete API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_api_keys_api_key_id_get**
> ModelsAPIKey v2_organization_id_api_keys_api_key_id_get(organization_id, api_key_id)

Get API key

Get API key

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_api_key import ModelsAPIKey
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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    api_key_id = 'api_key_id_example' # str | API Key ID

    try:
        # Get API key
        api_response = api_instance.v2_organization_id_api_keys_api_key_id_get(organization_id, api_key_id)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **api_key_id** | **str**| API Key ID | 

### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key details |  -  |
**404** | API key not found |  -  |
**500** | Failed to get API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_api_keys_api_key_id_patch**
> ModelsAPIKey v2_organization_id_api_keys_api_key_id_patch(organization_id, api_key_id, routes_v2_update_api_key_request)

Update API key

Update API key

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_api_key import ModelsAPIKey
from monad.models.routes_v2_update_api_key_request import RoutesV2UpdateAPIKeyRequest
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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    api_key_id = 'api_key_id_example' # str | API Key ID
    routes_v2_update_api_key_request = monad.RoutesV2UpdateAPIKeyRequest() # RoutesV2UpdateAPIKeyRequest | Request body for updating an API key

    try:
        # Update API key
        api_response = api_instance.v2_organization_id_api_keys_api_key_id_patch(organization_id, api_key_id, routes_v2_update_api_key_request)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **api_key_id** | **str**| API Key ID | 
 **routes_v2_update_api_key_request** | [**RoutesV2UpdateAPIKeyRequest**](RoutesV2UpdateAPIKeyRequest.md)| Request body for updating an API key | 

### Return type

[**ModelsAPIKey**](ModelsAPIKey.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_api_keys_api_key_id_regenerate_post**
> ModelsAPIKeyWithToken v2_organization_id_api_keys_api_key_id_regenerate_post(organization_id, api_key_id)

Regenerate API key

Regenerates an API key by creating a new one with the same metadata and deleting the old one

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_api_key_with_token import ModelsAPIKeyWithToken
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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    api_key_id = 'api_key_id_example' # str | API Key ID

    try:
        # Regenerate API key
        api_response = api_instance.v2_organization_id_api_keys_api_key_id_regenerate_post(organization_id, api_key_id)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_regenerate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_api_key_id_regenerate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **api_key_id** | **str**| API Key ID | 

### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | New API key generated successfully |  -  |
**404** | API key not found |  -  |
**500** | Failed to regenerate API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_api_keys_get**
> ModelsAPIKeyList v2_organization_id_api_keys_get(organization_id, limit=limit, offset=offset)

List API keys

List API keys

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_api_key_list import ModelsAPIKeyList
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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List API keys
        api_response = api_instance.v2_organization_id_api_keys_get(organization_id, limit=limit, offset=offset)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsAPIKeyList**](ModelsAPIKeyList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of API keys |  -  |
**500** | Failed to list API keys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_api_keys_post**
> ModelsAPIKeyWithToken v2_organization_id_api_keys_post(organization_id, routes_v2_create_api_key_request)

Create API key

Create API key

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_api_key_with_token import ModelsAPIKeyWithToken
from monad.models.routes_v2_create_api_key_request import RoutesV2CreateAPIKeyRequest
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
    api_instance = monad.OrganizationApiKeysApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_api_key_request = monad.RoutesV2CreateAPIKeyRequest() # RoutesV2CreateAPIKeyRequest | Request body for creating an API key

    try:
        # Create API key
        api_response = api_instance.v2_organization_id_api_keys_post(organization_id, routes_v2_create_api_key_request)
        print("The response of OrganizationApiKeysApi->v2_organization_id_api_keys_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApiKeysApi->v2_organization_id_api_keys_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_api_key_request** | [**RoutesV2CreateAPIKeyRequest**](RoutesV2CreateAPIKeyRequest.md)| Request body for creating an API key | 

### Return type

[**ModelsAPIKeyWithToken**](ModelsAPIKeyWithToken.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

