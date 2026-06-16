# monad.AuditLogsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_audit_log_histogram**](AuditLogsApi.md#get_organization_audit_log_histogram) | **GET** /v3/{organization_id}/audit_logs/histogram | Audit log change histogram
[**list_organization_audit_logs**](AuditLogsApi.md#list_organization_audit_logs) | **GET** /v3/{organization_id}/audit_logs | List organization audit logs


# **get_organization_audit_log_histogram**
> ModelsOrganizationAuditLogHistogram get_organization_audit_log_histogram(organization_id, var_from, to, buckets=buckets, resource_type=resource_type, resource_id=resource_id, actor_id=actor_id, action=action)

Audit log change histogram

Bucketed change counts over [from, to) for the audit timeline. For resource_type=pipeline (or a component type) with a resource_id, counts span the same merged feed as the list endpoint. Each non-empty bucket carries per-action and per-resource-type breakdowns; the response also includes the total and the true earliest/latest event times across all history (ignoring from/to). Gated by the resource_audit_logs feature flag.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_audit_log_histogram import ModelsOrganizationAuditLogHistogram
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
    api_instance = monad.AuditLogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    var_from = 'var_from_example' # str | Bucket window start (inclusive), RFC3339
    to = 'to_example' # str | Bucket window end (exclusive), RFC3339
    buckets = 56 # int | Number of equal-width buckets (default 100, max 500) (optional)
    resource_type = 'resource_type_example' # str | Filter by resource type; with resource_id selects the merged feed (optional)
    resource_id = 'resource_id_example' # str | Filter by resource ID; requires resource_type (optional)
    actor_id = 'actor_id_example' # str | Filter by actor ID (optional)
    action = 'action_example' # str | Filter by action (insert, update, delete) (optional)

    try:
        # Audit log change histogram
        api_response = api_instance.get_organization_audit_log_histogram(organization_id, var_from, to, buckets=buckets, resource_type=resource_type, resource_id=resource_id, actor_id=actor_id, action=action)
        print("The response of AuditLogsApi->get_organization_audit_log_histogram:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuditLogsApi->get_organization_audit_log_histogram: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **var_from** | **str**| Bucket window start (inclusive), RFC3339 | 
 **to** | **str**| Bucket window end (exclusive), RFC3339 | 
 **buckets** | **int**| Number of equal-width buckets (default 100, max 500) | [optional] 
 **resource_type** | **str**| Filter by resource type; with resource_id selects the merged feed | [optional] 
 **resource_id** | **str**| Filter by resource ID; requires resource_type | [optional] 
 **actor_id** | **str**| Filter by actor ID | [optional] 
 **action** | **str**| Filter by action (insert, update, delete) | [optional] 

### Return type

[**ModelsOrganizationAuditLogHistogram**](ModelsOrganizationAuditLogHistogram.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucketed change counts |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing organization:logs:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_organization_audit_logs**
> ModelsOrganizationAuditLogList list_organization_audit_logs(organization_id, limit=limit, cursor=cursor, resource_type=resource_type, resource_id=resource_id, actor_id=actor_id, action=action, var_from=var_from, to=to)

List organization audit logs

List the organization's audit log, newest first, with cursor pagination. Filtering by resource_type=pipeline with a resource_id returns the pipeline's merged history: the pipeline's own changes plus changes to the components — and the secrets those components referenced — scoped to the time windows in which the pipeline actually used them. Rows self-identify via resource.type. Audit visibility is organization-wide under organization:logs:read: the merged feed surfaces nothing the caller could not query directly by resource. Gated by the resource_audit_logs feature flag.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization_audit_log_list import ModelsOrganizationAuditLogList
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
    api_instance = monad.AuditLogsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Page size (default 50, max 100) (optional)
    cursor = 'cursor_example' # str | Opaque cursor from a previous response; filters are carried by the cursor (optional)
    resource_type = 'resource_type_example' # str | Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type (optional)
    resource_id = 'resource_id_example' # str | Filter by resource ID; requires resource_type (optional)
    actor_id = 'actor_id_example' # str | Filter by actor ID (optional)
    action = 'action_example' # str | Filter by action (insert, update, delete) (optional)
    var_from = 'var_from_example' # str | Only rows at or after this RFC3339 timestamp (optional)
    to = 'to_example' # str | Only rows before this RFC3339 timestamp (optional)

    try:
        # List organization audit logs
        api_response = api_instance.list_organization_audit_logs(organization_id, limit=limit, cursor=cursor, resource_type=resource_type, resource_id=resource_id, actor_id=actor_id, action=action, var_from=var_from, to=to)
        print("The response of AuditLogsApi->list_organization_audit_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuditLogsApi->list_organization_audit_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Page size (default 50, max 100) | [optional] 
 **cursor** | **str**| Opaque cursor from a previous response; filters are carried by the cursor | [optional] 
 **resource_type** | **str**| Filter by resource type (e.g. input, output, transform, enrichment, pipeline, secret); alone it returns all rows of that type | [optional] 
 **resource_id** | **str**| Filter by resource ID; requires resource_type | [optional] 
 **actor_id** | **str**| Filter by actor ID | [optional] 
 **action** | **str**| Filter by action (insert, update, delete) | [optional] 
 **var_from** | **str**| Only rows at or after this RFC3339 timestamp | [optional] 
 **to** | **str**| Only rows before this RFC3339 timestamp | [optional] 

### Return type

[**ModelsOrganizationAuditLogList**](ModelsOrganizationAuditLogList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | One page of audit logs |  -  |
**400** | Invalid query parameters or cursor |  -  |
**403** | Missing organization:logs:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

