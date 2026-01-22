# monad.AlertsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_organization_id_alerts_get**](AlertsApi.md#v3_organization_id_alerts_get) | **GET** /v3/{organization_id}/alerts | List alerts with pagination
[**v3_organization_id_alerts_stream_get**](AlertsApi.md#v3_organization_id_alerts_stream_get) | **GET** /v3/{organization_id}/alerts/stream | Stream alerts in real-time


# **v3_organization_id_alerts_get**
> RoutesV3AlertList v3_organization_id_alerts_get(organization_id, rule_ids=rule_ids, severities=severities, pipeline_ids=pipeline_ids, resource_type=resource_type, resource_id=resource_id, since=since, until=until)

List alerts with pagination

Get list of recent historical alerts for an organization

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_alert_list import RoutesV3AlertList
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
    api_instance = monad.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    rule_ids = 'rule_ids_example' # str | Comma-separated alert rule IDs (optional)
    severities = 'severities_example' # str | Comma-separated severity levels (optional)
    pipeline_ids = 'pipeline_ids_example' # str | Comma-separated pipeline IDs (optional)
    resource_type = 'resource_type_example' # str | Resource type filter (optional)
    resource_id = 'resource_id_example' # str | Specific resource ID (optional)
    since = 'since_example' # str | RFC3339 timestamp for start time (optional)
    until = 'until_example' # str | RFC3339 timestamp for end time (optional)

    try:
        # List alerts with pagination
        api_response = api_instance.v3_organization_id_alerts_get(organization_id, rule_ids=rule_ids, severities=severities, pipeline_ids=pipeline_ids, resource_type=resource_type, resource_id=resource_id, since=since, until=until)
        print("The response of AlertsApi->v3_organization_id_alerts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->v3_organization_id_alerts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **rule_ids** | **str**| Comma-separated alert rule IDs | [optional] 
 **severities** | **str**| Comma-separated severity levels | [optional] 
 **pipeline_ids** | **str**| Comma-separated pipeline IDs | [optional] 
 **resource_type** | **str**| Resource type filter | [optional] 
 **resource_id** | **str**| Specific resource ID | [optional] 
 **since** | **str**| RFC3339 timestamp for start time | [optional] 
 **until** | **str**| RFC3339 timestamp for end time | [optional] 

### Return type

[**RoutesV3AlertList**](RoutesV3AlertList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated alerts |  -  |
**400** | Invalid parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alerts_stream_get**
> str v3_organization_id_alerts_stream_get(organization_id, since=since, last=last, rule_ids=rule_ids, severities=severities, resource_ids=resource_ids, resource_type=resource_type)

Stream alerts in real-time

Stream alerts for an organization using Server-Sent Events

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
    api_instance = monad.AlertsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    since = 'since_example' # str | RFC3339 timestamp to start streaming from (optional)
    last = 'last_example' # str | Duration to start streaming from (e.g., '5m', '1h', '24h') (optional)
    rule_ids = 'rule_ids_example' # str | Comma-separated alert rule IDs (optional)
    severities = 'severities_example' # str | Comma-separated severity levels (optional)
    resource_ids = 'resource_ids_example' # str | Comma-separated resource IDs (optional)
    resource_type = 'resource_type_example' # str | Resource type filter (optional)

    try:
        # Stream alerts in real-time
        api_response = api_instance.v3_organization_id_alerts_stream_get(organization_id, since=since, last=last, rule_ids=rule_ids, severities=severities, resource_ids=resource_ids, resource_type=resource_type)
        print("The response of AlertsApi->v3_organization_id_alerts_stream_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->v3_organization_id_alerts_stream_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **since** | **str**| RFC3339 timestamp to start streaming from | [optional] 
 **last** | **str**| Duration to start streaming from (e.g., &#39;5m&#39;, &#39;1h&#39;, &#39;24h&#39;) | [optional] 
 **rule_ids** | **str**| Comma-separated alert rule IDs | [optional] 
 **severities** | **str**| Comma-separated severity levels | [optional] 
 **resource_ids** | **str**| Comma-separated resource IDs | [optional] 
 **resource_type** | **str**| Resource type filter | [optional] 

### Return type

**str**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert stream |  -  |
**400** | Invalid parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

