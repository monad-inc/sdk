# monad.LogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_logs_api_get**](LogsApi.md#v1_organization_id_logs_api_get) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs
[**v1_organization_id_logs_get**](LogsApi.md#v1_organization_id_logs_get) | **GET** /v1/{organization_id}/logs | Stream organization logs
[**v1_organization_id_logs_pipelines_get**](LogsApi.md#v1_organization_id_logs_pipelines_get) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**v1_organization_id_logs_pipelines_pipeline_id_get**](LogsApi.md#v1_organization_id_logs_pipelines_pipeline_id_get) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs
[**v1_organization_id_logs_pipelines_pipeline_id_node_id_get**](LogsApi.md#v1_organization_id_logs_pipelines_pipeline_id_node_id_get) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs


# **v1_organization_id_logs_api_get**
> str v1_organization_id_logs_api_get(organization_id, since=since)

Stream organization api logs

Stream api logs for an organization

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
    api_instance = monad.LogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)

    try:
        # Stream organization api logs
        api_response = api_instance.v1_organization_id_logs_api_get(organization_id, since=since)
        print("The response of LogsApi->v1_organization_id_logs_api_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->v1_organization_id_logs_api_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid &#39;since&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_logs_get**
> str v1_organization_id_logs_get(organization_id, since=since, last=last)

Stream organization logs

Stream logs for an entire organization

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
    api_instance = monad.LogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)
    last = 'last_example' # str | Duration to start streaming from (e.g., '5h' or '30m') (optional)

    try:
        # Stream organization logs
        api_response = api_instance.v1_organization_id_logs_get(organization_id, since=since, last=last)
        print("The response of LogsApi->v1_organization_id_logs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->v1_organization_id_logs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 
 **last** | **str**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_logs_pipelines_get**
> str v1_organization_id_logs_pipelines_get(organization_id, since=since)

Stream organization pipeline logs

Stream pipeline logs for an organization

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
    api_instance = monad.LogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)

    try:
        # Stream organization pipeline logs
        api_response = api_instance.v1_organization_id_logs_pipelines_get(organization_id, since=since)
        print("The response of LogsApi->v1_organization_id_logs_pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->v1_organization_id_logs_pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid &#39;since&#39; timestamp format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_logs_pipelines_pipeline_id_get**
> str v1_organization_id_logs_pipelines_pipeline_id_get(organization_id, pipeline_id, since=since, last=last)

Stream pipeline logs

Stream logs for a specific pipeline within an organization

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
    api_instance = monad.LogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)
    last = 'last_example' # str | Duration to start streaming from (e.g., '5h' or '30m') (optional)

    try:
        # Stream pipeline logs
        api_response = api_instance.v1_organization_id_logs_pipelines_pipeline_id_get(organization_id, pipeline_id, since=since, last=last)
        print("The response of LogsApi->v1_organization_id_logs_pipelines_pipeline_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->v1_organization_id_logs_pipelines_pipeline_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 
 **last** | **str**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_logs_pipelines_pipeline_id_node_id_get**
> str v1_organization_id_logs_pipelines_pipeline_id_node_id_get(organization_id, pipeline_id, node_id, since=since, last=last)

Stream node logs

Stream logs for a specific node within a pipeline and organization

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
    api_instance = monad.LogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    node_id = 'node_id_example' # str | Node ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)
    last = 'last_example' # str | Duration to start streaming from (e.g., '5h' or '30m') (optional)

    try:
        # Stream node logs
        api_response = api_instance.v1_organization_id_logs_pipelines_pipeline_id_node_id_get(organization_id, pipeline_id, node_id, since=since, last=last)
        print("The response of LogsApi->v1_organization_id_logs_pipelines_pipeline_id_node_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->v1_organization_id_logs_pipelines_pipeline_id_node_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **node_id** | **str**| Node ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 
 **last** | **str**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Log stream |  -  |
**400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

