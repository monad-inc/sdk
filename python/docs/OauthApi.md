# monad.OauthApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_oauth_type_id_callback_get**](OauthApi.md#v1_oauth_type_id_callback_get) | **GET** /v1/oauth/{type_id}/callback | Oauth callback
[**v1_oauth_type_id_organization_id_get**](OauthApi.md#v1_oauth_type_id_organization_id_get) | **GET** /v1/oauth/{type_id}/{organization_id} | Get oauth redirect


# **v1_oauth_type_id_callback_get**
> object v1_oauth_type_id_callback_get(type_id)

Oauth callback

Oauth callback

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
    api_instance = monad.OauthApi(api_client)
    type_id = 'type_id_example' # str | component type ID

    try:
        # Oauth callback
        api_response = api_instance.v1_oauth_type_id_callback_get(type_id)
        print("The response of OauthApi->v1_oauth_type_id_callback_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->v1_oauth_type_id_callback_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_id** | **str**| component type ID | 

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
**200** | Oauth callback successful |  -  |
**404** | oauth handler not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_oauth_type_id_organization_id_get**
> object v1_oauth_type_id_organization_id_get(type_id, organization_id)

Get oauth redirect

Get oauth redirect

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
    api_instance = monad.OauthApi(api_client)
    type_id = 'type_id_example' # str | component type ID
    organization_id = 'organization_id_example' # str | organization ID

    try:
        # Get oauth redirect
        api_response = api_instance.v1_oauth_type_id_organization_id_get(type_id, organization_id)
        print("The response of OauthApi->v1_oauth_type_id_organization_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->v1_oauth_type_id_organization_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_id** | **str**| component type ID | 
 **organization_id** | **str**| organization ID | 

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
**200** | Oauth redirect retrieved successfully |  -  |
**404** | oauth handler not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

