# monad.OrganizationMCPRegistrationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_mcp_client_registrations**](OrganizationMCPRegistrationsApi.md#list_mcp_client_registrations) | **GET** /v2/{organization_id}/mcp/registrations | List MCP client registrations
[**revoke_mcp_client_registration**](OrganizationMCPRegistrationsApi.md#revoke_mcp_client_registration) | **DELETE** /v2/{organization_id}/mcp/registrations/{client_id} | Revoke an MCP client registration


# **list_mcp_client_registrations**
> ModelsMCPClientRegistrationList list_mcp_client_registrations(organization_id, owned_by=owned_by, limit=limit, offset=offset)

List MCP client registrations

List Connected-Applications: caller's own with `owned_by=me`, or all in the org for admins.

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_mcp_client_registration_list import ModelsMCPClientRegistrationList
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
    api_instance = monad.OrganizationMCPRegistrationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    owned_by = 'owned_by_example' # str | Set to `me` to scope to the caller's own registrations (optional)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List MCP client registrations
        api_response = api_instance.list_mcp_client_registrations(organization_id, owned_by=owned_by, limit=limit, offset=offset)
        print("The response of OrganizationMCPRegistrationsApi->list_mcp_client_registrations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationMCPRegistrationsApi->list_mcp_client_registrations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **owned_by** | **str**| Set to &#x60;me&#x60; to scope to the caller&#39;s own registrations | [optional] 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsMCPClientRegistrationList**](ModelsMCPClientRegistrationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | access denied |  -  |
**500** | Failed to list registrations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_mcp_client_registration**
> revoke_mcp_client_registration(organization_id, client_id)

Revoke an MCP client registration

Revoke a Connected Application. Owners can revoke their own; admins (mcp_registration:delete) can revoke any in the org.

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
    api_instance = monad.OrganizationMCPRegistrationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    client_id = 'client_id_example' # str | MCP client registration ID

    try:
        # Revoke an MCP client registration
        api_instance.revoke_mcp_client_registration(organization_id, client_id)
    except Exception as e:
        print("Exception when calling OrganizationMCPRegistrationsApi->revoke_mcp_client_registration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **client_id** | **str**| MCP client registration ID | 

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
**204** | Revoked |  -  |
**403** | access denied |  -  |
**404** | registration not found in this organization |  -  |
**500** | Failed to revoke registration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

