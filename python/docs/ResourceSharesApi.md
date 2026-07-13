# monad.ResourceSharesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_resource_shares**](ResourceSharesApi.md#create_resource_shares) | **POST** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Share a resource
[**list_resource_share_targets**](ResourceSharesApi.md#list_resource_share_targets) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/organizations | List a resource&#39;s share targets (all direct child orgs)
[**list_resource_shares**](ResourceSharesApi.md#list_resource_shares) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | List a resource&#39;s shares
[**list_shared_resources**](ResourceSharesApi.md#list_shared_resources) | **GET** /v3/{organization_id}/resource_shares | List shared resources
[**unshare_resource**](ResourceSharesApi.md#unshare_resource) | **DELETE** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Unshare a resource
[**update_resource_shares**](ResourceSharesApi.md#update_resource_shares) | **PATCH** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Update a resource&#39;s shares


# **create_resource_shares**
> ModelsResourceShareChangeSet create_resource_shares(organization_id, resource_type, resource_id, create_resource_shares_request)

Share a resource

Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource's auto-share policy via share_with_all_new_children (omit = unchanged, true = enable, false = disable). Re-sharing existing targets is idempotent.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_resource_shares_request import CreateResourceSharesRequest
from monad.models.models_resource_share_change_set import ModelsResourceShareChangeSet
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    resource_type = 'resource_type_example' # str | Resource type
    resource_id = 'resource_id_example' # str | Resource ID
    create_resource_shares_request = monad.CreateResourceSharesRequest() # CreateResourceSharesRequest | Share request

    try:
        # Share a resource
        api_response = api_instance.create_resource_shares(organization_id, resource_type, resource_id, create_resource_shares_request)
        print("The response of ResourceSharesApi->create_resource_shares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->create_resource_shares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **resource_type** | **str**| Resource type | 
 **resource_id** | **str**| Resource ID | 
 **create_resource_shares_request** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md)| Share request | 

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created and revoked shares |  -  |
**400** | Invalid request |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A revoked share is in use by the target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_resource_share_targets**
> ModelsResourceShareTargetList list_resource_share_targets(organization_id, resource_type, resource_id, search=search, shared=shared, sort_by=sort_by, order=order, limit=limit, offset=offset)

List a resource's share targets (all direct child orgs)

List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI's per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_resource_share_target_list import ModelsResourceShareTargetList
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    resource_type = 'resource_type_example' # str | Resource type
    resource_id = 'resource_id_example' # str | Resource ID
    search = 'search_example' # str | Case-insensitive substring filter on child org name, slug, or id (optional)
    shared = True # bool | Filter by share state: true = only shared, false = only not shared (optional)
    sort_by = 'sort_by_example' # str | Column to sort by; default puts shared rows first (optional)
    order = asc # str | Sort direction (used with sort_by) (optional) (default to asc)
    limit = 10 # int | Page size (optional) (default to 10)
    offset = 0 # int | Rows to skip (optional) (default to 0)

    try:
        # List a resource's share targets (all direct child orgs)
        api_response = api_instance.list_resource_share_targets(organization_id, resource_type, resource_id, search=search, shared=shared, sort_by=sort_by, order=order, limit=limit, offset=offset)
        print("The response of ResourceSharesApi->list_resource_share_targets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->list_resource_share_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **resource_type** | **str**| Resource type | 
 **resource_id** | **str**| Resource ID | 
 **search** | **str**| Case-insensitive substring filter on child org name, slug, or id | [optional] 
 **shared** | **bool**| Filter by share state: true &#x3D; only shared, false &#x3D; only not shared | [optional] 
 **sort_by** | **str**| Column to sort by; default puts shared rows first | [optional] 
 **order** | **str**| Sort direction (used with sort_by) | [optional] [default to asc]
 **limit** | **int**| Page size | [optional] [default to 10]
 **offset** | **int**| Rows to skip | [optional] [default to 0]

### Return type

[**ModelsResourceShareTargetList**](ModelsResourceShareTargetList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Direct child orgs annotated with share state |  -  |
**400** | Invalid resource_type, sort_by, order, or shared value |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_resource_shares**
> ModelsResourceShareWithUsageList list_resource_shares(organization_id, resource_type, resource_id)

List a resource's shares

List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource's policy auto-shares it with new children.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_resource_share_with_usage_list import ModelsResourceShareWithUsageList
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    resource_type = 'resource_type_example' # str | Resource type
    resource_id = 'resource_id_example' # str | Resource ID

    try:
        # List a resource's shares
        api_response = api_instance.list_resource_shares(organization_id, resource_type, resource_id)
        print("The response of ResourceSharesApi->list_resource_shares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->list_resource_shares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **resource_type** | **str**| Resource type | 
 **resource_id** | **str**| Resource ID | 

### Return type

[**ModelsResourceShareWithUsageList**](ModelsResourceShareWithUsageList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource&#39;s shares |  -  |
**400** | Invalid resource_type |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_shared_resources**
> ModelsSharedResourceList list_shared_resources(organization_id, limit=limit, offset=offset, resource_type=resource_type)

List shared resources

List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_shared_resource_list import ModelsSharedResourceList
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    limit = 56 # int | Page size (default: 10) (optional)
    offset = 56 # int | Offset (default: 0) (optional)
    resource_type = 'resource_type_example' # str | Filter by resource type (optional)

    try:
        # List shared resources
        api_response = api_instance.list_shared_resources(organization_id, limit=limit, offset=offset, resource_type=resource_type)
        print("The response of ResourceSharesApi->list_shared_resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->list_shared_resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **limit** | **int**| Page size (default: 10) | [optional] 
 **offset** | **int**| Offset (default: 0) | [optional] 
 **resource_type** | **str**| Filter by resource type | [optional] 

### Return type

[**ModelsSharedResourceList**](ModelsSharedResourceList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of shared resources |  -  |
**400** | Invalid query parameters |  -  |
**403** | Missing resource_sharing:read permission |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unshare_resource**
> ModelsResourceShareChangeSet unshare_resource(organization_id, resource_type, resource_id)

Unshare a resource

Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_resource_share_change_set import ModelsResourceShareChangeSet
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    resource_type = 'resource_type_example' # str | Resource type
    resource_id = 'resource_id_example' # str | Resource ID

    try:
        # Unshare a resource
        api_response = api_instance.unshare_resource(organization_id, resource_type, resource_id)
        print("The response of ResourceSharesApi->unshare_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->unshare_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **resource_type** | **str**| Resource type | 
 **resource_id** | **str**| Resource ID | 

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The revoked shares |  -  |
**400** | Invalid resource_type |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A share is in use by a target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_resource_shares**
> ModelsResourceShareChangeSet update_resource_shares(organization_id, resource_type, resource_id, create_resource_shares_request)

Update a resource's shares

Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a share that the target organization is actively using is rejected with 409.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_resource_shares_request import CreateResourceSharesRequest
from monad.models.models_resource_share_change_set import ModelsResourceShareChangeSet
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
    api_instance = monad.ResourceSharesApi(api_client)
    organization_id = 'organization_id_example' # str | Owner organization ID
    resource_type = 'resource_type_example' # str | Resource type
    resource_id = 'resource_id_example' # str | Resource ID
    create_resource_shares_request = monad.CreateResourceSharesRequest() # CreateResourceSharesRequest | Share delta request

    try:
        # Update a resource's shares
        api_response = api_instance.update_resource_shares(organization_id, resource_type, resource_id, create_resource_shares_request)
        print("The response of ResourceSharesApi->update_resource_shares:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceSharesApi->update_resource_shares: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Owner organization ID | 
 **resource_type** | **str**| Resource type | 
 **resource_id** | **str**| Resource ID | 
 **create_resource_shares_request** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md)| Share delta request | 

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created and revoked shares |  -  |
**400** | Invalid request |  -  |
**403** | Missing resource_sharing:write permission |  -  |
**409** | A revoked share is in use by the target organization |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

