# monad.OrganizationsStorageCostApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_storage_type_cost**](OrganizationsStorageCostApi.md#get_storage_type_cost) | **GET** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**get_storage_type_details**](OrganizationsStorageCostApi.md#get_storage_type_details) | **GET** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**get_storage_type_metrics**](OrganizationsStorageCostApi.md#get_storage_type_metrics) | **GET** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**get_storage_type_summary**](OrganizationsStorageCostApi.md#get_storage_type_summary) | **GET** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**set_storage_type_cost**](OrganizationsStorageCostApi.md#set_storage_type_cost) | **PUT** /v2/{organization_id}/storage-type-cost | Set storage type cost
[**v2_organization_id_metrics_storage_types_storage_type_details_get**](OrganizationsStorageCostApi.md#v2_organization_id_metrics_storage_types_storage_type_details_get) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type


# **get_storage_type_cost**
> ModelsStorageTypeCostConfig get_storage_type_cost(organization_id)

Get storage type cost

Get per-organization cost configuration for storage types

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_storage_type_cost_config import ModelsStorageTypeCostConfig
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # Get storage type cost
        api_response = api_instance.get_storage_type_cost(organization_id)
        print("The response of OrganizationsStorageCostApi->get_storage_type_cost:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->get_storage_type_cost: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type cost |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_storage_type_details**
> RoutesV2StorageTypeDetailsResponse get_storage_type_details(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

Get storage type output details

Get detailed metrics for each individual output, including egress and associated input

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_storage_type_details_response import RoutesV2StorageTypeDetailsResponse
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type output details
        api_response = api_instance.get_storage_type_details(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsStorageCostApi->get_storage_type_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->get_storage_type_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **billing_type** | **str**| Filter by billing type (billable|non_billable) | [optional] 
 **pipeline_id** | **str**| Filter to specific pipeline | [optional] 

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type output details |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_storage_type_metrics**
> ModelsStorageTypeTimeSeriesResponse get_storage_type_metrics(organization_id, metric, start=start, end=end, resolution=resolution, billing_type=billing_type, pipeline_id=pipeline_id)

Get storage type metrics

Get time series metrics grouped by storage type for an organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_storage_type_time_series_response import ModelsStorageTypeTimeSeriesResponse
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    metric = 'metric_example' # str | Metric to retrieve (egress_bytes|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type metrics
        api_response = api_instance.get_storage_type_metrics(organization_id, metric, start=start, end=end, resolution=resolution, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsStorageCostApi->get_storage_type_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->get_storage_type_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **metric** | **str**| Metric to retrieve (egress_bytes|egress_records|errors) | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **resolution** | **str**| Resolution of the data, default determined by time window | [optional] 
 **billing_type** | **str**| Filter by billing type (billable|non_billable) | [optional] 
 **pipeline_id** | **str**| Filter to specific pipeline | [optional] 

### Return type

[**ModelsStorageTypeTimeSeriesResponse**](ModelsStorageTypeTimeSeriesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type metrics |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_storage_type_summary**
> ModelsStorageTypeSummaryResponse get_storage_type_summary(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

Get storage type cost summary

Get aggregated cost and usage summary by storage type

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_storage_type_summary_response import ModelsStorageTypeSummaryResponse
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type cost summary
        api_response = api_instance.get_storage_type_summary(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsStorageCostApi->get_storage_type_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->get_storage_type_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **billing_type** | **str**| Filter by billing type (billable|non_billable) | [optional] 
 **pipeline_id** | **str**| Filter to specific pipeline | [optional] 

### Return type

[**ModelsStorageTypeSummaryResponse**](ModelsStorageTypeSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type cost summary |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_storage_type_cost**
> ModelsStorageTypeCostConfig set_storage_type_cost(organization_id, routes_v2_set_storage_type_cost_request)

Set storage type cost

Update per-organization cost configuration for storage types

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_storage_type_cost_config import ModelsStorageTypeCostConfig
from monad.models.routes_v2_set_storage_type_cost_request import RoutesV2SetStorageTypeCostRequest
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_set_storage_type_cost_request = monad.RoutesV2SetStorageTypeCostRequest() # RoutesV2SetStorageTypeCostRequest | Cost configuration

    try:
        # Set storage type cost
        api_response = api_instance.set_storage_type_cost(organization_id, routes_v2_set_storage_type_cost_request)
        print("The response of OrganizationsStorageCostApi->set_storage_type_cost:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->set_storage_type_cost: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_set_storage_type_cost_request** | [**RoutesV2SetStorageTypeCostRequest**](RoutesV2SetStorageTypeCostRequest.md)| Cost configuration | 

### Return type

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated storage type cost |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_storage_types_storage_type_details_get**
> RoutesV2StorageTypeDetailsResponse v2_organization_id_metrics_storage_types_storage_type_details_get(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

Get storage type output details by type

Get detailed metrics for each individual output of a specific storage type

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_storage_type_details_response import RoutesV2StorageTypeDetailsResponse
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
    api_instance = monad.OrganizationsStorageCostApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    storage_type = 'storage_type_example' # str | Storage type (e.g., s3, dev-null, bigquery)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type output details by type
        api_response = api_instance.v2_organization_id_metrics_storage_types_storage_type_details_get(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsStorageCostApi->v2_organization_id_metrics_storage_types_storage_type_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsStorageCostApi->v2_organization_id_metrics_storage_types_storage_type_details_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **storage_type** | **str**| Storage type (e.g., s3, dev-null, bigquery) | 
 **start** | **str**| ISO3339 start time, default 6 hours ago | [optional] 
 **end** | **str**| ISO3339 end time, default now | [optional] 
 **billing_type** | **str**| Filter by billing type (billable|non_billable) | [optional] 
 **pipeline_id** | **str**| Filter to specific pipeline | [optional] 

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage type output details |  -  |
**400** | Bad request |  -  |
**404** | Organization or storage type not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

