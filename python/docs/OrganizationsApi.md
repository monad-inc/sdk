# monad.OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_child_organization**](OrganizationsApi.md#create_child_organization) | **POST** /v3/{organization_id}/organizations | Create sub-org
[**create_organization**](OrganizationsApi.md#create_organization) | **POST** /v1/organizations | Create organization
[**delete_child_organization**](OrganizationsApi.md#delete_child_organization) | **DELETE** /v3/{organization_id}/organizations/{child_organization_id} | Delete sub-org
[**delete_organization**](OrganizationsApi.md#delete_organization) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**get_storage_type_summary_by_type**](OrganizationsApi.md#get_storage_type_summary_by_type) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type
[**list_child_organizations**](OrganizationsApi.md#list_child_organizations) | **GET** /v3/{organization_id}/organizations | List sub-orgs
[**list_user_organizations**](OrganizationsApi.md#list_user_organizations) | **GET** /v1/organizations | List organizations for user
[**update_child_organization**](OrganizationsApi.md#update_child_organization) | **PATCH** /v3/{organization_id}/organizations/{child_organization_id} | Update sub-org
[**update_organization**](OrganizationsApi.md#update_organization) | **PATCH** /v1/organizations/{organization_id} | Update organization


# **create_child_organization**
> ModelsOrganization create_child_organization(organization_id, create_child_organization_request)

Create sub-org

Create a sub-org (child organization) under the given parent organization. The new organization's parent_organization_id is set to the parent.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.create_child_organization_request import CreateChildOrganizationRequest
from monad.models.models_organization import ModelsOrganization
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
    organization_id = 'organization_id_example' # str | Parent Organization ID
    create_child_organization_request = monad.CreateChildOrganizationRequest() # CreateChildOrganizationRequest | Request body

    try:
        # Create sub-org
        api_response = api_instance.create_child_organization(organization_id, create_child_organization_request)
        print("The response of OrganizationsApi->create_child_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_child_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Parent Organization ID | 
 **create_child_organization_request** | [**CreateChildOrganizationRequest**](CreateChildOrganizationRequest.md)| Request body | 

### Return type

[**ModelsOrganization**](ModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created sub-org |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization**
> ModelsOrganization create_organization(routes_create_organization_request)

Create organization

Create organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization import ModelsOrganization
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
        api_response = api_instance.create_organization(routes_create_organization_request)
        print("The response of OrganizationsApi->create_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_create_organization_request** | [**RoutesCreateOrganizationRequest**](RoutesCreateOrganizationRequest.md)| Request body for creating an organization | 

### Return type

[**ModelsOrganization**](ModelsOrganization.md)

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

# **delete_child_organization**
> delete_child_organization(organization_id, child_organization_id)

Delete sub-org

Delete a sub-org (child organization) of the given parent organization.

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
    organization_id = 'organization_id_example' # str | Parent Organization ID
    child_organization_id = 'child_organization_id_example' # str | Sub-org ID

    try:
        # Delete sub-org
        api_instance.delete_child_organization(organization_id, child_organization_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_child_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Parent Organization ID | 
 **child_organization_id** | **str**| Sub-org ID | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Sub-org deleted successfully |  -  |
**404** | Sub-org not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization**
> object delete_organization(organization_id)

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
        api_response = api_instance.delete_organization(organization_id)
        print("The response of OrganizationsApi->delete_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization: %s\n" % e)
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

# **get_storage_type_summary_by_type**
> ModelsStorageTypeSummaryResponse get_storage_type_summary_by_type(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)

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
        api_response = api_instance.get_storage_type_summary_by_type(organization_id, storage_type, start=start, end=end, billing_type=billing_type, pipeline_id=pipeline_id)
        print("The response of OrganizationsApi->get_storage_type_summary_by_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_storage_type_summary_by_type: %s\n" % e)
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

# **list_child_organizations**
> ModelsUserOrganizationList list_child_organizations(organization_id, limit=limit, offset=offset, name_search=name_search)

List sub-orgs

List the sub-orgs (child organizations) of the given parent organization. A sub-org is an organization with a non-empty parent_organization_id.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_user_organization_list import ModelsUserOrganizationList
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
    organization_id = 'organization_id_example' # str | Parent Organization ID
    limit = 56 # int | Page size (default 10, max 500) (optional)
    offset = 56 # int | Offset the organizations returned (default: 0) (optional)
    name_search = 'name_search_example' # str | If provided, only return organizations with names that contain the search string (optional)

    try:
        # List sub-orgs
        api_response = api_instance.list_child_organizations(organization_id, limit=limit, offset=offset, name_search=name_search)
        print("The response of OrganizationsApi->list_child_organizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->list_child_organizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Parent Organization ID | 
 **limit** | **int**| Page size (default 10, max 500) | [optional] 
 **offset** | **int**| Offset the organizations returned (default: 0) | [optional] 
 **name_search** | **str**| If provided, only return organizations with names that contain the search string | [optional] 

### Return type

[**ModelsUserOrganizationList**](ModelsUserOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of sub-orgs |  -  |
**400** | Offset larger than 2147483647 |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_organizations**
> ModelsOrganizationList list_user_organizations(limit=limit, offset=offset, no_children=no_children, parent_organization_id=parent_organization_id, name_search=name_search)

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
    limit = 56 # int | Page size (default 10, max 500) (optional)
    offset = 56 # int | Offset the organizations returned (default: 0) (optional)
    no_children = True # bool | If true, only return organizations that are directly associated with the user, not their sub-orgs (default: false) (optional)
    parent_organization_id = 'parent_organization_id_example' # str | If provided, only return the sub-orgs of the specified parent organization (optional)
    name_search = 'name_search_example' # str | If provided, only return organizations with names that contain the search string (optional)

    try:
        # List organizations for user
        api_response = api_instance.list_user_organizations(limit=limit, offset=offset, no_children=no_children, parent_organization_id=parent_organization_id, name_search=name_search)
        print("The response of OrganizationsApi->list_user_organizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->list_user_organizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Page size (default 10, max 500) | [optional] 
 **offset** | **int**| Offset the organizations returned (default: 0) | [optional] 
 **no_children** | **bool**| If true, only return organizations that are directly associated with the user, not their sub-orgs (default: false) | [optional] 
 **parent_organization_id** | **str**| If provided, only return the sub-orgs of the specified parent organization | [optional] 
 **name_search** | **str**| If provided, only return organizations with names that contain the search string | [optional] 

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
**400** | Offset larger than 2147483647 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_child_organization**
> ModelsOrganization update_child_organization(organization_id, child_organization_id, update_child_organization_request)

Update sub-org

Update a sub-org (child organization) of the given parent organization.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization import ModelsOrganization
from monad.models.update_child_organization_request import UpdateChildOrganizationRequest
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
    organization_id = 'organization_id_example' # str | Parent Organization ID
    child_organization_id = 'child_organization_id_example' # str | Sub-org ID
    update_child_organization_request = monad.UpdateChildOrganizationRequest() # UpdateChildOrganizationRequest | Request body

    try:
        # Update sub-org
        api_response = api_instance.update_child_organization(organization_id, child_organization_id, update_child_organization_request)
        print("The response of OrganizationsApi->update_child_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_child_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Parent Organization ID | 
 **child_organization_id** | **str**| Sub-org ID | 
 **update_child_organization_request** | [**UpdateChildOrganizationRequest**](UpdateChildOrganizationRequest.md)| Request body | 

### Return type

[**ModelsOrganization**](ModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated sub-org |  -  |
**400** | Invalid request body |  -  |
**404** | Sub-org not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization**
> ModelsOrganization update_organization(organization_id, routes_update_organization_request)

Update organization

Update organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_organization import ModelsOrganization
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
        api_response = api_instance.update_organization(organization_id, routes_update_organization_request)
        print("The response of OrganizationsApi->update_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_update_organization_request** | [**RoutesUpdateOrganizationRequest**](RoutesUpdateOrganizationRequest.md)| Request body for updating an organization | 

### Return type

[**ModelsOrganization**](ModelsOrganization.md)

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

