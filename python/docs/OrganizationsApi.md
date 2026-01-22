# monad.OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organizations_get**](OrganizationsApi.md#v1_organizations_get) | **GET** /v1/organizations | List organizations for user
[**v1_organizations_organization_id_delete**](OrganizationsApi.md#v1_organizations_organization_id_delete) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**v1_organizations_organization_id_patch**](OrganizationsApi.md#v1_organizations_organization_id_patch) | **PATCH** /v1/organizations/{organization_id} | Update organization
[**v1_organizations_post**](OrganizationsApi.md#v1_organizations_post) | **POST** /v1/organizations | Create organization
[**v2_organization_id_metrics_get**](OrganizationsApi.md#v2_organization_id_metrics_get) | **GET** /v2/{organization_id}/metrics | Get organization metrics
[**v2_organization_id_metrics_storage_types_details_get**](OrganizationsApi.md#v2_organization_id_metrics_storage_types_details_get) | **GET** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details
[**v2_organization_id_metrics_storage_types_get**](OrganizationsApi.md#v2_organization_id_metrics_storage_types_get) | **GET** /v2/{organization_id}/metrics/storage-types | Get storage type metrics
[**v2_organization_id_metrics_storage_types_storage_type_details_get**](OrganizationsApi.md#v2_organization_id_metrics_storage_types_storage_type_details_get) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type
[**v2_organization_id_metrics_storage_types_storage_type_summary_get**](OrganizationsApi.md#v2_organization_id_metrics_storage_types_storage_type_summary_get) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**v2_organization_id_metrics_storage_types_summary_get**](OrganizationsApi.md#v2_organization_id_metrics_storage_types_summary_get) | **GET** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary
[**v2_organization_id_storage_type_cost_get**](OrganizationsApi.md#v2_organization_id_storage_type_cost_get) | **GET** /v2/{organization_id}/storage-type-cost | Get storage type cost
[**v2_organization_id_storage_type_cost_put**](OrganizationsApi.md#v2_organization_id_storage_type_cost_put) | **PUT** /v2/{organization_id}/storage-type-cost | Set storage type cost


# **v1_organizations_get**
> ModelsOrganizationList v1_organizations_get(limit=limit, offset=offset)

List organizations for user

List organizations for user

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_list import ModelsOrganizationList
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
    api_instance = monad.OrganizationsApi(api_client)
    limit = 56 # int | Limit the number of organizations returned (default: 10) (optional)
    offset = 56 # int | Offset the organizations returned (default: 0) (optional)

    try:
        # List organizations for user
        api_response = api_instance.v1_organizations_get(limit=limit, offset=offset)
        print("The response of OrganizationsApi->v1_organizations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v1_organizations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit the number of organizations returned (default: 10) | [optional] 
 **offset** | **int**| Offset the organizations returned (default: 0) | [optional] 

### Return type

[**ModelsOrganizationList**](ModelsOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for listing organizations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organizations_organization_id_delete**
> object v1_organizations_organization_id_delete(organization_id)

Delete organization

Delete organization

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # Delete organization
        api_response = api_instance.v1_organizations_organization_id_delete(organization_id)
        print("The response of OrganizationsApi->v1_organizations_organization_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v1_organizations_organization_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organizations_organization_id_patch**
> GithubComMonadIncCorePkgTypesModelsOrganization v1_organizations_organization_id_patch(organization_id, routes_update_organization_request)

Update organization

Update organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.github_com_monad_inc_core_pkg_types_models_organization import GithubComMonadIncCorePkgTypesModelsOrganization
from monad.models.routes_update_organization_request import RoutesUpdateOrganizationRequest
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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_update_organization_request = monad.RoutesUpdateOrganizationRequest() # RoutesUpdateOrganizationRequest | Request body for updating an organization

    try:
        # Update organization
        api_response = api_instance.v1_organizations_organization_id_patch(organization_id, routes_update_organization_request)
        print("The response of OrganizationsApi->v1_organizations_organization_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v1_organizations_organization_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_update_organization_request** | [**RoutesUpdateOrganizationRequest**](RoutesUpdateOrganizationRequest.md)| Request body for updating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating an organization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_organizations_post**
> GithubComMonadIncCorePkgTypesModelsOrganization v1_organizations_post(routes_create_organization_request)

Create organization

Create organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.github_com_monad_inc_core_pkg_types_models_organization import GithubComMonadIncCorePkgTypesModelsOrganization
from monad.models.routes_create_organization_request import RoutesCreateOrganizationRequest
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
    api_instance = monad.OrganizationsApi(api_client)
    routes_create_organization_request = monad.RoutesCreateOrganizationRequest() # RoutesCreateOrganizationRequest | Request body for creating an organization

    try:
        # Create organization
        api_response = api_instance.v1_organizations_post(routes_create_organization_request)
        print("The response of OrganizationsApi->v1_organizations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v1_organizations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_create_organization_request** | [**RoutesCreateOrganizationRequest**](RoutesCreateOrganizationRequest.md)| Request body for creating an organization | 

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for creating an organization |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_get**
> ModelsPipelineMetrics v2_organization_id_metrics_get(organization_id, metric, start=start, end=end, resolution=resolution)

Get organization metrics

Get time series metrics for an organization

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    metric = 'metric_example' # str | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)

    try:
        # Get organization metrics
        api_response = api_instance.v2_organization_id_metrics_get(organization_id, metric, start=start, end=end, resolution=resolution)
        print("The response of OrganizationsApi->v2_organization_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
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
**200** | Organization metrics |  -  |
**400** | Bad request |  -  |
**404** | Organization not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_storage_types_details_get**
> RoutesV2StorageTypeDetailsResponse v2_organization_id_metrics_storage_types_details_get(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type output details
        api_response = api_instance.v2_organization_id_metrics_storage_types_details_get(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->v2_organization_id_metrics_storage_types_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_storage_types_details_get: %s\n" % e)
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

# **v2_organization_id_metrics_storage_types_get**
> ModelsStorageTypeTimeSeriesResponse v2_organization_id_metrics_storage_types_get(organization_id, metric, start=start, end=end, resolution=resolution, billing_type=billing_type, pipeline_id=pipeline_id)

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    metric = 'metric_example' # str | Metric to retrieve (egress_bytes|egress_records|errors)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    resolution = 'resolution_example' # str | Resolution of the data, default determined by time window (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type metrics
        api_response = api_instance.v2_organization_id_metrics_storage_types_get(organization_id, metric, start=start, end=end, resolution=resolution, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->v2_organization_id_metrics_storage_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_storage_types_get: %s\n" % e)
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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    storage_type = 'storage_type_example' # str | Storage type (e.g., s3, dev-null, bigquery)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type output details by type
        api_response = api_instance.v2_organization_id_metrics_storage_types_storage_type_details_get(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->v2_organization_id_metrics_storage_types_storage_type_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_storage_types_storage_type_details_get: %s\n" % e)
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

# **v2_organization_id_metrics_storage_types_storage_type_summary_get**
> ModelsStorageTypeSummaryResponse v2_organization_id_metrics_storage_types_storage_type_summary_get(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

Get storage type cost summary by type

Get aggregated cost and usage summary for a specific storage type

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    storage_type = 'storage_type_example' # str | Storage type (e.g., s3, dev-null, bigquery)
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type cost summary by type
        api_response = api_instance.v2_organization_id_metrics_storage_types_storage_type_summary_get(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->v2_organization_id_metrics_storage_types_storage_type_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_storage_types_storage_type_summary_get: %s\n" % e)
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
**404** | Organization or storage type not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_metrics_storage_types_summary_get**
> ModelsStorageTypeSummaryResponse v2_organization_id_metrics_storage_types_summary_get(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    start = 'start_example' # str | ISO3339 start time, default 6 hours ago (optional)
    end = 'end_example' # str | ISO3339 end time, default now (optional)
    billing_type = 'billing_type_example' # str | Filter by billing type (billable|non_billable) (optional)
    pipeline_id = 'pipeline_id_example' # str | Filter to specific pipeline (optional)

    try:
        # Get storage type cost summary
        api_response = api_instance.v2_organization_id_metrics_storage_types_summary_get(organization_id, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->v2_organization_id_metrics_storage_types_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_metrics_storage_types_summary_get: %s\n" % e)
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

# **v2_organization_id_storage_type_cost_get**
> ModelsStorageTypeCostConfig v2_organization_id_storage_type_cost_get(organization_id)

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # Get storage type cost
        api_response = api_instance.v2_organization_id_storage_type_cost_get(organization_id)
        print("The response of OrganizationsApi->v2_organization_id_storage_type_cost_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_storage_type_cost_get: %s\n" % e)
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

# **v2_organization_id_storage_type_cost_put**
> ModelsStorageTypeCostConfig v2_organization_id_storage_type_cost_put(organization_id, routes_v2_set_storage_type_cost_request)

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
    api_instance = monad.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_set_storage_type_cost_request = monad.RoutesV2SetStorageTypeCostRequest() # RoutesV2SetStorageTypeCostRequest | Cost configuration

    try:
        # Set storage type cost
        api_response = api_instance.v2_organization_id_storage_type_cost_put(organization_id, routes_v2_set_storage_type_cost_request)
        print("The response of OrganizationsApi->v2_organization_id_storage_type_cost_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->v2_organization_id_storage_type_cost_put: %s\n" % e)
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

