# monad.PipelinesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_pipelines_get**](PipelinesApi.md#v1_organization_id_pipelines_get) | **GET** /v1/{organization_id}/pipelines | List pipelines
[**v1_organization_id_pipelines_pipeline_id_delete**](PipelinesApi.md#v1_organization_id_pipelines_pipeline_id_delete) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**v1_organization_id_pipelines_pipeline_id_get**](PipelinesApi.md#v1_organization_id_pipelines_pipeline_id_get) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**v1_organization_id_pipelines_pipeline_id_patch**](PipelinesApi.md#v1_organization_id_pipelines_pipeline_id_patch) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**v2_organization_id_metrics_pipelines_pipeline_id_get**](PipelinesApi.md#v2_organization_id_metrics_pipelines_pipeline_id_get) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id} | Get pipeline metrics
[**v2_organization_id_metrics_pipelines_pipeline_id_node_id_get**](PipelinesApi.md#v2_organization_id_metrics_pipelines_pipeline_id_node_id_get) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id}/{node_id} | Get pipeline node metrics
[**v2_organization_id_pipeline_summary_get**](PipelinesApi.md#v2_organization_id_pipeline_summary_get) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**v2_organization_id_pipelines_get**](PipelinesApi.md#v2_organization_id_pipelines_get) | **GET** /v2/{organization_id}/pipelines | List pipelines
[**v2_organization_id_pipelines_metrics_get**](PipelinesApi.md#v2_organization_id_pipelines_metrics_get) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines
[**v2_organization_id_pipelines_pipeline_id_delete**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_delete) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id} | Update pipeline edge
[**v2_organization_id_pipelines_pipeline_id_get**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_get) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**v2_organization_id_pipelines_pipeline_id_node_id_metrics_get**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_node_id_metrics_get) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**v2_organization_id_pipelines_pipeline_id_patch**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_patch) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**v2_organization_id_pipelines_pipeline_id_status_get**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_status_get) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**v2_organization_id_pipelines_pipeline_id_status_node_id_get**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_status_node_id_get) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**v2_organization_id_pipelines_pipeline_id_trigger_post**](PipelinesApi.md#v2_organization_id_pipelines_pipeline_id_trigger_post) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually
[**v2_organization_id_pipelines_post**](PipelinesApi.md#v2_organization_id_pipelines_post) | **POST** /v2/{organization_id}/pipelines | Create pipeline
[**v2_organization_id_pipelines_statuses_get**](PipelinesApi.md#v2_organization_id_pipelines_statuses_get) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status
[**v3_pipeline_edges_edge_condition_operator_types_get**](PipelinesApi.md#v3_pipeline_edges_edge_condition_operator_types_get) | **GET** /v3/pipeline_edges/edge_condition_operator_types | Conditional types for edge conditions
[**v3_pipeline_edges_edge_condition_rules_get**](PipelinesApi.md#v3_pipeline_edges_edge_condition_rules_get) | **GET** /v3/pipeline_edges/edge_condition_rules | Rules for edge conditions


# **v1_organization_id_pipelines_get**
> ModelsPipelineList v1_organization_id_pipelines_get(organization_id, limit=limit, offset=offset)

List pipelines

List pipelines

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_list import ModelsPipelineList
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List pipelines
        api_response = api_instance.v1_organization_id_pipelines_get(organization_id, limit=limit, offset=offset)
        print("The response of PipelinesApi->v1_organization_id_pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v1_organization_id_pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list pipelines |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_pipelines_pipeline_id_delete**
> str v1_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)

Delete pipeline

Delete pipeline

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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Delete pipeline
        api_response = api_instance.v1_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)
        print("The response of PipelinesApi->v1_organization_id_pipelines_pipeline_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v1_organization_id_pipelines_pipeline_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

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
**200** | Pipeline deleted successfully |  -  |
**500** | Failed to delete pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_pipelines_pipeline_id_get**
> ModelsPipeline v1_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)

Get pipeline

Get pipeline

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline import ModelsPipeline
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Get pipeline
        api_response = api_instance.v1_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)
        print("The response of PipelinesApi->v1_organization_id_pipelines_pipeline_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v1_organization_id_pipelines_pipeline_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline details |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organization_id_pipelines_pipeline_id_patch**
> ModelsPipeline v1_organization_id_pipelines_pipeline_id_patch(organization_id, pipeline_id, routes_update_pipeline_request)

Update pipeline

Update pipeline

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline import ModelsPipeline
from monad.models.routes_update_pipeline_request import RoutesUpdatePipelineRequest
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    routes_update_pipeline_request = monad.RoutesUpdatePipelineRequest() # RoutesUpdatePipelineRequest | Request body for updating a pipeline

    try:
        # Update pipeline
        api_response = api_instance.v1_organization_id_pipelines_pipeline_id_patch(organization_id, pipeline_id, routes_update_pipeline_request)
        print("The response of PipelinesApi->v1_organization_id_pipelines_pipeline_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v1_organization_id_pipelines_pipeline_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **routes_update_pipeline_request** | [**RoutesUpdatePipelineRequest**](RoutesUpdatePipelineRequest.md)| Request body for updating a pipeline | 

### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating a pipeline |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_pipelines_pipeline_id_get**
> ModelsPipelineMetrics v2_organization_id_metrics_pipelines_pipeline_id_get(organization_id, pipeline_id, metric, start=start, end=end, resolution=resolution)

Get pipeline metrics

Get time series metrics for a pipeline

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_metrics import ModelsPipelineMetrics
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    metric = 'metric_example' # str | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)

    try:
        # Get pipeline metrics
        api_response = api_instance.v2_organization_id_metrics_pipelines_pipeline_id_get(organization_id, pipeline_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->v2_organization_id_metrics_pipelines_pipeline_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_metrics_pipelines_pipeline_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **metric** | **str**| Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **resolution** | **str**| Resolution of the data, default determined by time window | [optional] 

### Return type

[**ModelsPipelineMetrics**](ModelsPipelineMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_pipelines_pipeline_id_node_id_get**
> ModelsPipelineMetrics v2_organization_id_metrics_pipelines_pipeline_id_node_id_get(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)

Get pipeline node metrics

Get pipeline node metrics

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_metrics import ModelsPipelineMetrics
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    node_id = 'node_id_example' # str | Node ID
    metric = 'metric_example' # str | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)

    try:
        # Get pipeline node metrics
        api_response = api_instance.v2_organization_id_metrics_pipelines_pipeline_id_node_id_get(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->v2_organization_id_metrics_pipelines_pipeline_id_node_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_metrics_pipelines_pipeline_id_node_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **node_id** | **str**| Node ID | 
 **metric** | **str**| Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **resolution** | **str**| Resolution of the data, default determined by time window | [optional] 

### Return type

[**ModelsPipelineMetrics**](ModelsPipelineMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline node metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline or node not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipeline_summary_get**
> RoutesV2GetOrganizationSummaryResponse v2_organization_id_pipeline_summary_get(organization_id, start=start, end=end)

Get status of all pipelines for an organization

Get status of all pipelines for an organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_get_organization_summary_response import RoutesV2GetOrganizationSummaryResponse
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    start = 'start_example' # str | ISO3339 start time, default 24 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)

    try:
        # Get status of all pipelines for an organization
        api_response = api_instance.v2_organization_id_pipeline_summary_get(organization_id, start=start, end=end)
        print("The response of PipelinesApi->v2_organization_id_pipeline_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipeline_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **start** | **str**| ISO3339 start time, default 24 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 

### Return type

[**RoutesV2GetOrganizationSummaryResponse**](RoutesV2GetOrganizationSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization Pipeline Summary |  -  |
**500** | Failed to get pipelines for organization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_get**
> ModelsPipelineList v2_organization_id_pipelines_get(organization_id, limit=limit, offset=offset)

List pipelines

List pipelines

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_list import ModelsPipelineList
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List pipelines
        api_response = api_instance.v2_organization_id_pipelines_get(organization_id, limit=limit, offset=offset)
        print("The response of PipelinesApi->v2_organization_id_pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list pipelines |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_metrics_get**
> RoutesV2MetricsResponse v2_organization_id_pipelines_metrics_get(organization_id, pipeline_ids, resolution=resolution)

Get metrics for specific pipelines

Get aggregated ingress and egress metrics for specific pipelines

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_metrics_response import RoutesV2MetricsResponse
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_ids = 'pipeline_ids_example' # str | Comma-separated list of pipeline IDs
    resolution = 'resolution_example' # str | Resolution for metrics (default: 5m) (optional)

    try:
        # Get metrics for specific pipelines
        api_response = api_instance.v2_organization_id_pipelines_metrics_get(organization_id, pipeline_ids, resolution=resolution)
        print("The response of PipelinesApi->v2_organization_id_pipelines_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_ids** | **str**| Comma-separated list of pipeline IDs | 
 **resolution** | **str**| Resolution for metrics (default: 5m) | [optional] 

### Return type

[**RoutesV2MetricsResponse**](RoutesV2MetricsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics data |  -  |
**400** | Bad request error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_delete**
> str v2_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)

Delete pipeline

Delete pipeline

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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Delete pipeline
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

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
**200** | Pipeline deleted successfully |  -  |
**500** | Failed to delete pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch**
> v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch(organization_id, pipeline_id, edge_id, routes_v2_patch_pipeline_edge_request)

Update pipeline edge

Enable or disable a pipeline edge

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_patch_pipeline_edge_request import RoutesV2PatchPipelineEdgeRequest
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    edge_id = 'edge_id_example' # str | Edge ID
    routes_v2_patch_pipeline_edge_request = monad.RoutesV2PatchPipelineEdgeRequest() # RoutesV2PatchPipelineEdgeRequest | Request body

    try:
        # Update pipeline edge
        api_instance.v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch(organization_id, pipeline_id, edge_id, routes_v2_patch_pipeline_edge_request)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_edges_edge_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **edge_id** | **str**| Edge ID | 
 **routes_v2_patch_pipeline_edge_request** | [**RoutesV2PatchPipelineEdgeRequest**](RoutesV2PatchPipelineEdgeRequest.md)| Request body | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Edge updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**404** | Edge not found in pipeline |  -  |
**500** | Failed to update pipeline edge |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_get**
> ModelsPipelineConfigV2 v2_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)

Get pipeline configuration

Retrieve a specific pipeline configuration by pipeline ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_config_v2 import ModelsPipelineConfigV2
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Get pipeline configuration
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline configuration retrieved successfully |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_node_id_metrics_get**
> ModelsPipelineMetrics v2_organization_id_pipelines_pipeline_id_node_id_metrics_get(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)

Get pipeline node metrics

Get pipeline node metrics

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_metrics import ModelsPipelineMetrics
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    node_id = 'node_id_example' # str | Node ID
    metric = 'metric_example' # str | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)

    try:
        # Get pipeline node metrics
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_node_id_metrics_get(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_node_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_node_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **node_id** | **str**| Node ID | 
 **metric** | **str**| Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **resolution** | **str**| Resolution of the data, default determined by time window | [optional] 

### Return type

[**ModelsPipelineMetrics**](ModelsPipelineMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline node metrics |  -  |
**400** | Bad request |  -  |
**404** | Pipeline or node not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_patch**
> ModelsPipelineConfigV2 v2_organization_id_pipelines_pipeline_id_patch(organization_id, pipeline_id, routes_v2_update_pipeline_request)

Update pipeline

Update an existing pipeline with the specified configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_config_v2 import ModelsPipelineConfigV2
from monad.models.routes_v2_update_pipeline_request import RoutesV2UpdatePipelineRequest
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    routes_v2_update_pipeline_request = monad.RoutesV2UpdatePipelineRequest() # RoutesV2UpdatePipelineRequest | Request body for updating a pipeline

    try:
        # Update pipeline
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_patch(organization_id, pipeline_id, routes_v2_update_pipeline_request)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **routes_v2_update_pipeline_request** | [**RoutesV2UpdatePipelineRequest**](RoutesV2UpdatePipelineRequest.md)| Request body for updating a pipeline | 

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_status_get**
> ModelsPipelineStatus v2_organization_id_pipelines_pipeline_id_status_get(organization_id, pipeline_id, metrics=metrics, start=start, end=end)

Get pipeline status

Get pipeline status

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_status import ModelsPipelineStatus
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    metrics = ['metrics_example'] # List[str] | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
    start = 'start_example' # str | ISO3339 start time, default 24 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)

    try:
        # Get pipeline status
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_status_get(organization_id, pipeline_id, metrics=metrics, start=start, end=end)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **metrics** | [**List[str]**](str.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | [optional] 
 **start** | **str**| ISO3339 start time, default 24 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 

### Return type

[**ModelsPipelineStatus**](ModelsPipelineStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline status |  -  |
**500** | Failed to get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_status_node_id_get**
> ModelsPipelineNodeStatus v2_organization_id_pipelines_pipeline_id_status_node_id_get(organization_id, pipeline_id, node_id, metrics=metrics, start=start, end=end)

Get pipeline node status

Get pipeline node status

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_node_status import ModelsPipelineNodeStatus
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    node_id = 'node_id_example' # str | Node ID
    metrics = ['metrics_example'] # List[str] | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) (optional)
    start = 'start_example' # str | ISO3339 start time, default 24 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)

    try:
        # Get pipeline node status
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_status_node_id_get(organization_id, pipeline_id, node_id, metrics=metrics, start=start, end=end)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_status_node_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_status_node_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **node_id** | **str**| Node ID | 
 **metrics** | [**List[str]**](str.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | [optional] 
 **start** | **str**| ISO3339 start time, default 24 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 

### Return type

[**ModelsPipelineNodeStatus**](ModelsPipelineNodeStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline Node status |  -  |
**500** | Failed to get pipeline node status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_pipeline_id_trigger_post**
> str v2_organization_id_pipelines_pipeline_id_trigger_post(organization_id, pipeline_id)

Trigger pipeline manually

Manually trigger a cron-scheduled pipeline to run

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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Trigger pipeline manually
        api_response = api_instance.v2_organization_id_pipelines_pipeline_id_trigger_post(organization_id, pipeline_id)
        print("The response of PipelinesApi->v2_organization_id_pipelines_pipeline_id_trigger_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_pipeline_id_trigger_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

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
**200** | Pipeline triggered successfully |  -  |
**400** | Invalid request or pipeline not cron-based |  -  |
**403** | Insufficient permissions |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_post**
> ModelsPipelineConfigV2 v2_organization_id_pipelines_post(organization_id, routes_v2_create_pipeline_request)

Create pipeline

Create a new pipeline with specified configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_config_v2 import ModelsPipelineConfigV2
from monad.models.routes_v2_create_pipeline_request import RoutesV2CreatePipelineRequest
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_pipeline_request = monad.RoutesV2CreatePipelineRequest() # RoutesV2CreatePipelineRequest | Request body for creating a pipeline

    try:
        # Create pipeline
        api_response = api_instance.v2_organization_id_pipelines_post(organization_id, routes_v2_create_pipeline_request)
        print("The response of PipelinesApi->v2_organization_id_pipelines_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_pipeline_request** | [**RoutesV2CreatePipelineRequest**](RoutesV2CreatePipelineRequest.md)| Request body for creating a pipeline | 

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Pipeline created successfully |  -  |
**400** | Invalid JSON request body or Failed to create pipeline |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_pipelines_statuses_get**
> List[RoutesV2PipelineWithStatus] v2_organization_id_pipelines_statuses_get(organization_id, limit=limit, offset=offset, start=start, end=end)

Get pipeline status

Retrieve the status of pipelines within an organization for a specified time period.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_pipeline_with_status import RoutesV2PipelineWithStatus
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
    api_instance = monad.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Maximum number of pipelines to return (default is 10) (optional)
    offset = 56 # int | Offset for pagination (default is 0) (optional)
    start = 'start_example' # str | Start time (RFC3339 format) for status metrics (default: 24 hours ago) (optional)
    end = 'end_example' # str | End time (RFC3339 format) for status metrics (default: now) (optional)

    try:
        # Get pipeline status
        api_response = api_instance.v2_organization_id_pipelines_statuses_get(organization_id, limit=limit, offset=offset, start=start, end=end)
        print("The response of PipelinesApi->v2_organization_id_pipelines_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v2_organization_id_pipelines_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Maximum number of pipelines to return (default is 10) | [optional] 
 **offset** | **int**| Offset for pagination (default is 0) | [optional] 
 **start** | **str**| Start time (RFC3339 format) for status metrics (default: 24 hours ago) | [optional] 
 **end** | **str**| End time (RFC3339 format) for status metrics (default: now) | [optional] 

### Return type

[**List[RoutesV2PipelineWithStatus]**](RoutesV2PipelineWithStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pipelines with status |  -  |
**400** | Invalid query parameters or time range |  -  |
**500** | Failed to retrieve pipeline status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_pipeline_edges_edge_condition_operator_types_get**
> str v3_pipeline_edges_edge_condition_operator_types_get()

Conditional types for edge conditions

Returns the conditional types for edge conditions

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
    api_instance = monad.PipelinesApi(api_client)

    try:
        # Conditional types for edge conditions
        api_response = api_instance.v3_pipeline_edges_edge_condition_operator_types_get()
        print("The response of PipelinesApi->v3_pipeline_edges_edge_condition_operator_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v3_pipeline_edges_edge_condition_operator_types_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Conditions returned succesfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_pipeline_edges_edge_condition_rules_get**
> str v3_pipeline_edges_edge_condition_rules_get()

Rules for edge conditions

Returns the rules for edge conditions

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
    api_instance = monad.PipelinesApi(api_client)

    try:
        # Rules for edge conditions
        api_response = api_instance.v3_pipeline_edges_edge_condition_rules_get()
        print("The response of PipelinesApi->v3_pipeline_edges_edge_condition_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->v3_pipeline_edges_edge_condition_rules_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Rules returned succesfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

