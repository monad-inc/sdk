# monad.OrganizationInvitesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_organization_id_invites_post**](OrganizationInvitesApi.md#v1_organization_id_invites_post) | **POST** /v1/{organization_id}/invites | Invite user to organization


# **v1_organization_id_invites_post**
> str v1_organization_id_invites_post(organization_id, routes_invite_user_to_organization_request)

Invite user to organization

Invite user to organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_invite_user_to_organization_request import RoutesInviteUserToOrganizationRequest
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
    api_instance = monad.OrganizationInvitesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_invite_user_to_organization_request = monad.RoutesInviteUserToOrganizationRequest() # RoutesInviteUserToOrganizationRequest | Request body for inviting a user to an organization

    try:
        # Invite user to organization
        api_response = api_instance.v1_organization_id_invites_post(organization_id, routes_invite_user_to_organization_request)
        print("The response of OrganizationInvitesApi->v1_organization_id_invites_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationInvitesApi->v1_organization_id_invites_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_invite_user_to_organization_request** | [**RoutesInviteUserToOrganizationRequest**](RoutesInviteUserToOrganizationRequest.md)| Request body for inviting a user to an organization | 

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User added to organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

