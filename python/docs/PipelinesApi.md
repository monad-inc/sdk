# monad.PipelinesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_pipeline**](PipelinesApi.md#create_pipeline) | **POST** /v2/{organization_id}/pipelines | Create pipeline
[**delete_pipeline**](PipelinesApi.md#delete_pipeline) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**delete_pipeline_v1**](PipelinesApi.md#delete_pipeline_v1) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline
[**get_metrics_for_pipelines**](PipelinesApi.md#get_metrics_for_pipelines) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines
[**get_organization_summary**](PipelinesApi.md#get_organization_summary) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization
[**get_pipeline**](PipelinesApi.md#get_pipeline) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline
[**get_pipeline_config**](PipelinesApi.md#get_pipeline_config) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration
[**get_pipeline_edge_condition_operator_types**](PipelinesApi.md#get_pipeline_edge_condition_operator_types) | **GET** /v3/pipeline_edges/edge_condition_operator_types | Conditional types for edge conditions
[**get_pipeline_edge_condition_rules**](PipelinesApi.md#get_pipeline_edge_condition_rules) | **GET** /v3/pipeline_edges/edge_condition_rules | Rules for edge conditions
[**get_pipeline_metrics**](PipelinesApi.md#get_pipeline_metrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id} | Get pipeline metrics
[**get_pipeline_node_metrics**](PipelinesApi.md#get_pipeline_node_metrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id}/{node_id} | Get pipeline node metrics
[**get_pipeline_node_metrics_v2**](PipelinesApi.md#get_pipeline_node_metrics_v2) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics
[**get_pipeline_node_status**](PipelinesApi.md#get_pipeline_node_status) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status
[**get_pipeline_status**](PipelinesApi.md#get_pipeline_status) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status
[**get_pipelines_statuses**](PipelinesApi.md#get_pipelines_statuses) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status
[**list_pipelines**](PipelinesApi.md#list_pipelines) | **GET** /v2/{organization_id}/pipelines | List pipelines
[**list_pipelines_v1**](PipelinesApi.md#list_pipelines_v1) | **GET** /v1/{organization_id}/pipelines | List pipelines
[**trigger_pipeline**](PipelinesApi.md#trigger_pipeline) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually
[**update_pipeline**](PipelinesApi.md#update_pipeline) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline
[**update_pipeline_edge**](PipelinesApi.md#update_pipeline_edge) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id} | Update pipeline edge
[**update_pipeline_v1**](PipelinesApi.md#update_pipeline_v1) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline


# **create_pipeline**
> ModelsPipelineConfigV2 create_pipeline(organization_id, create_pipeline_request)

Create pipeline

Create a new pipeline with specified configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_pipeline_request import CreatePipelineRequest
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
    create_pipeline_request = monad.CreatePipelineRequest() # CreatePipelineRequest | Request body for creating a pipeline

    try:
        # Create pipeline
        api_response = api_instance.create_pipeline(organization_id, create_pipeline_request)
        print("The response of PipelinesApi->create_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->create_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **create_pipeline_request** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| Request body for creating a pipeline | 

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

# **delete_pipeline**
> str delete_pipeline(organization_id, pipeline_id)

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
        api_response = api_instance.delete_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->delete_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->delete_pipeline: %s\n" % e)
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

# **delete_pipeline_v1**
> str delete_pipeline_v1(organization_id, pipeline_id)

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
        api_response = api_instance.delete_pipeline_v1(organization_id, pipeline_id)
        print("The response of PipelinesApi->delete_pipeline_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->delete_pipeline_v1: %s\n" % e)
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

# **get_metrics_for_pipelines**
> RoutesV2MetricsResponse get_metrics_for_pipelines(organization_id, pipeline_ids, resolution=resolution)

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
        api_response = api_instance.get_metrics_for_pipelines(organization_id, pipeline_ids, resolution=resolution)
        print("The response of PipelinesApi->get_metrics_for_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_metrics_for_pipelines: %s\n" % e)
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

# **get_organization_summary**
> RoutesV2GetOrganizationSummaryResponse get_organization_summary(organization_id, start=start, end=end)

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
        api_response = api_instance.get_organization_summary(organization_id, start=start, end=end)
        print("The response of PipelinesApi->get_organization_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_organization_summary: %s\n" % e)
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

# **get_pipeline**
> ModelsPipeline get_pipeline(organization_id, pipeline_id)

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
        api_response = api_instance.get_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->get_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline: %s\n" % e)
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

# **get_pipeline_config**
> ModelsPipelineConfigV2 get_pipeline_config(organization_id, pipeline_id, include_status=include_status)

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
    include_status = True # bool | Include the status of the pipeline nodes (optional)

    try:
        # Get pipeline configuration
        api_response = api_instance.get_pipeline_config(organization_id, pipeline_id, include_status=include_status)
        print("The response of PipelinesApi->get_pipeline_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **include_status** | **bool**| Include the status of the pipeline nodes | [optional] 

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

# **get_pipeline_edge_condition_operator_types**
> str get_pipeline_edge_condition_operator_types()

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
        api_response = api_instance.get_pipeline_edge_condition_operator_types()
        print("The response of PipelinesApi->get_pipeline_edge_condition_operator_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_edge_condition_operator_types: %s\n" % e)
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

# **get_pipeline_edge_condition_rules**
> str get_pipeline_edge_condition_rules()

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
        api_response = api_instance.get_pipeline_edge_condition_rules()
        print("The response of PipelinesApi->get_pipeline_edge_condition_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_edge_condition_rules: %s\n" % e)
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

# **get_pipeline_metrics**
> ModelsPipelineMetrics get_pipeline_metrics(organization_id, pipeline_id, metric, start=start, end=end, resolution=resolution)

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
        api_response = api_instance.get_pipeline_metrics(organization_id, pipeline_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->get_pipeline_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_metrics: %s\n" % e)
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

# **get_pipeline_node_metrics**
> ModelsPipelineMetrics get_pipeline_node_metrics(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)

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
        api_response = api_instance.get_pipeline_node_metrics(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->get_pipeline_node_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_node_metrics: %s\n" % e)
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

# **get_pipeline_node_metrics_v2**
> ModelsPipelineMetrics get_pipeline_node_metrics_v2(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)

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
        api_response = api_instance.get_pipeline_node_metrics_v2(organization_id, pipeline_id, node_id, metric, start=start, end=end, resolution=resolution)
        print("The response of PipelinesApi->get_pipeline_node_metrics_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_node_metrics_v2: %s\n" % e)
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

# **get_pipeline_node_status**
> ModelsPipelineNodeStatus get_pipeline_node_status(organization_id, pipeline_id, node_id, metrics=metrics, start=start, end=end)

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
    metrics = ['metrics_example'] # List[str] | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
    start = 'start_example' # str | ISO3339 start time, default 24 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)

    try:
        # Get pipeline node status
        api_response = api_instance.get_pipeline_node_status(organization_id, pipeline_id, node_id, metrics=metrics, start=start, end=end)
        print("The response of PipelinesApi->get_pipeline_node_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_node_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **node_id** | **str**| Node ID | 
 **metrics** | [**List[str]**](str.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | [optional] 
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

# **get_pipeline_status**
> ModelsPipelineStatus get_pipeline_status(organization_id, pipeline_id, metrics=metrics, start=start, end=end)

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
    metrics = ['metrics_example'] # List[str] | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) (optional)
    start = 'start_example' # str | ISO3339 start time, default 24 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)

    try:
        # Get pipeline status
        api_response = api_instance.get_pipeline_status(organization_id, pipeline_id, metrics=metrics, start=start, end=end)
        print("The response of PipelinesApi->get_pipeline_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **metrics** | [**List[str]**](str.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | [optional] 
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

# **get_pipelines_statuses**
> List[RoutesV2PipelineWithStatus] get_pipelines_statuses(organization_id, limit=limit, offset=offset, start=start, end=end)

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
        api_response = api_instance.get_pipelines_statuses(organization_id, limit=limit, offset=offset, start=start, end=end)
        print("The response of PipelinesApi->get_pipelines_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipelines_statuses: %s\n" % e)
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

# **list_pipelines**
> ModelsPipelineList list_pipelines(organization_id, limit=limit, offset=offset, include_status=include_status)

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
    include_status = True # bool | Include the status of the pipeline nodes (optional)

    try:
        # List pipelines
        api_response = api_instance.list_pipelines(organization_id, limit=limit, offset=offset, include_status=include_status)
        print("The response of PipelinesApi->list_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->list_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 
 **include_status** | **bool**| Include the status of the pipeline nodes | [optional] 

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

# **list_pipelines_v1**
> ModelsPipelineList list_pipelines_v1(organization_id, limit=limit, offset=offset)

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
        api_response = api_instance.list_pipelines_v1(organization_id, limit=limit, offset=offset)
        print("The response of PipelinesApi->list_pipelines_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->list_pipelines_v1: %s\n" % e)
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

# **trigger_pipeline**
> str trigger_pipeline(organization_id, pipeline_id)

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
        api_response = api_instance.trigger_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->trigger_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->trigger_pipeline: %s\n" % e)
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

# **update_pipeline**
> ModelsPipelineConfigV2 update_pipeline(organization_id, pipeline_id, update_pipeline_request)

Update pipeline

Update an existing pipeline with the specified configuration

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_config_v2 import ModelsPipelineConfigV2
from monad.models.update_pipeline_request import UpdatePipelineRequest
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
    update_pipeline_request = monad.UpdatePipelineRequest() # UpdatePipelineRequest | Request body for updating a pipeline

    try:
        # Update pipeline
        api_response = api_instance.update_pipeline(organization_id, pipeline_id, update_pipeline_request)
        print("The response of PipelinesApi->update_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->update_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **update_pipeline_request** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| Request body for updating a pipeline | 

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

# **update_pipeline_edge**
> update_pipeline_edge(organization_id, pipeline_id, edge_id, update_pipeline_edge_request)

Update pipeline edge

Enable or disable a pipeline edge

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.update_pipeline_edge_request import UpdatePipelineEdgeRequest
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
    update_pipeline_edge_request = monad.UpdatePipelineEdgeRequest() # UpdatePipelineEdgeRequest | Request body

    try:
        # Update pipeline edge
        api_instance.update_pipeline_edge(organization_id, pipeline_id, edge_id, update_pipeline_edge_request)
    except Exception as e:
        print("Exception when calling PipelinesApi->update_pipeline_edge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **edge_id** | **str**| Edge ID | 
 **update_pipeline_edge_request** | [**UpdatePipelineEdgeRequest**](UpdatePipelineEdgeRequest.md)| Request body | 

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

# **update_pipeline_v1**
> ModelsPipeline update_pipeline_v1(organization_id, pipeline_id, update_pipeline_v1_request)

Update pipeline

Update pipeline

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline import ModelsPipeline
from monad.models.update_pipeline_v1_request import UpdatePipelineV1Request
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
    update_pipeline_v1_request = monad.UpdatePipelineV1Request() # UpdatePipelineV1Request | Request body for updating a pipeline

    try:
        # Update pipeline
        api_response = api_instance.update_pipeline_v1(organization_id, pipeline_id, update_pipeline_v1_request)
        print("The response of PipelinesApi->update_pipeline_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->update_pipeline_v1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **update_pipeline_v1_request** | [**UpdatePipelineV1Request**](UpdatePipelineV1Request.md)| Request body for updating a pipeline | 

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

