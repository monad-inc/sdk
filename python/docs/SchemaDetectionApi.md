# monad.SchemaDetectionApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_schema_tracking_summary**](SchemaDetectionApi.md#get_organization_schema_tracking_summary) | **GET** /v3/{organization_id}/schema_detection/summary | Schema tracking summary
[**list_organization_pipelines_with_schema**](SchemaDetectionApi.md#list_organization_pipelines_with_schema) | **GET** /v3/{organization_id}/schema_detection/pipelines | List pipelines with tracked schema
[**list_organization_schema_change_events**](SchemaDetectionApi.md#list_organization_schema_change_events) | **GET** /v3/{organization_id}/schema_detection/events | List organization schema change events


# **get_organization_schema_tracking_summary**
> ModelsSchemaTrackingSummary get_organization_schema_tracking_summary(organization_id)

Schema tracking summary

Counts of the organization's tracked edges by mode (learning / detection).

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_schema_tracking_summary import ModelsSchemaTrackingSummary
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
    api_instance = monad.SchemaDetectionApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # Schema tracking summary
        api_response = api_instance.get_organization_schema_tracking_summary(organization_id)
        print("The response of SchemaDetectionApi->get_organization_schema_tracking_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchemaDetectionApi->get_organization_schema_tracking_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**ModelsSchemaTrackingSummary**](ModelsSchemaTrackingSummary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Learning / detection counts |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_organization_pipelines_with_schema**
> List[ModelsPipelineWithSchemaTracked] list_organization_pipelines_with_schema(organization_id)

List pipelines with tracked schema

List the id and name of every pipeline in the organization that has any edge with a tracked schema state, for populating pipeline pickers.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_pipeline_with_schema_tracked import ModelsPipelineWithSchemaTracked
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
    api_instance = monad.SchemaDetectionApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List pipelines with tracked schema
        api_response = api_instance.list_organization_pipelines_with_schema(organization_id)
        print("The response of SchemaDetectionApi->list_organization_pipelines_with_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchemaDetectionApi->list_organization_pipelines_with_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**List[ModelsPipelineWithSchemaTracked]**](ModelsPipelineWithSchemaTracked.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipelines with tracked schema |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_organization_schema_change_events**
> ModelsSchemaHistoryList list_organization_schema_change_events(organization_id, limit=limit, offset=offset, var_from=var_from)

List organization schema change events

List schema drift events (new field / type change) across every pipeline and edge in the organization, newest first, with offset pagination. Optionally bounded to events after `from`.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_schema_history_list import ModelsSchemaHistoryList
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
    api_instance = monad.SchemaDetectionApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Page size (default 10) (optional)
    offset = 56 # int | Row offset for pagination (default 0) (optional)
    var_from = 'var_from_example' # str | Only events strictly after this RFC3339 timestamp (optional)

    try:
        # List organization schema change events
        api_response = api_instance.list_organization_schema_change_events(organization_id, limit=limit, offset=offset, var_from=var_from)
        print("The response of SchemaDetectionApi->list_organization_schema_change_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SchemaDetectionApi->list_organization_schema_change_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Page size (default 10) | [optional] 
 **offset** | **int**| Row offset for pagination (default 0) | [optional] 
 **var_from** | **str**| Only events strictly after this RFC3339 timestamp | [optional] 

### Return type

[**ModelsSchemaHistoryList**](ModelsSchemaHistoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | One page of schema change events |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing pipeline:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

