# monad.LogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_node_data**](LogsApi.md#stream_node_data) | **GET** /v1/{organization_id}/data/{node_id} | Stream node data
[**stream_node_logs**](LogsApi.md#stream_node_logs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs
[**stream_organization_api_logs**](LogsApi.md#stream_organization_api_logs) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs
[**stream_organization_logs**](LogsApi.md#stream_organization_logs) | **GET** /v1/{organization_id}/logs | Stream organization logs
[**stream_organization_pipelines_logs**](LogsApi.md#stream_organization_pipelines_logs) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs
[**stream_pipeline_logs**](LogsApi.md#stream_pipeline_logs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs


# **stream_node_data**
> str stream_node_data(organization_id, node_id)

Stream node data

Stream data for a specific node within an organization

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
    node_id = 'node_id_example' # str | Node ID

    try:
        # Stream node data
        api_response = api_instance.stream_node_data(organization_id, node_id)
        print("The response of LogsApi->stream_node_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_node_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **node_id** | **str**| Node ID | 

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
**200** | Data stream |  -  |
**400** | Failed to enable node watching |  -  |
**500** | Failed to create consumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_node_logs**
> str stream_node_logs(organization_id, pipeline_id, node_id, since=since, last=last)

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
        api_response = api_instance.stream_node_logs(organization_id, pipeline_id, node_id, since=since, last=last)
        print("The response of LogsApi->stream_node_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_node_logs: %s\n" % e)
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

# **stream_organization_api_logs**
> str stream_organization_api_logs(organization_id, since=since)

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
        api_response = api_instance.stream_organization_api_logs(organization_id, since=since)
        print("The response of LogsApi->stream_organization_api_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_organization_api_logs: %s\n" % e)
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

# **stream_organization_logs**
> str stream_organization_logs(organization_id, since=since, last=last)

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
        api_response = api_instance.stream_organization_logs(organization_id, since=since, last=last)
        print("The response of LogsApi->stream_organization_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_organization_logs: %s\n" % e)
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

# **stream_organization_pipelines_logs**
> str stream_organization_pipelines_logs(organization_id, since=since)

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
        api_response = api_instance.stream_organization_pipelines_logs(organization_id, since=since)
        print("The response of LogsApi->stream_organization_pipelines_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_organization_pipelines_logs: %s\n" % e)
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

# **stream_pipeline_logs**
> str stream_pipeline_logs(organization_id, pipeline_id, since=since, last=last)

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
        api_response = api_instance.stream_pipeline_logs(organization_id, pipeline_id, since=since, last=last)
        print("The response of LogsApi->stream_pipeline_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogsApi->stream_pipeline_logs: %s\n" % e)
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

