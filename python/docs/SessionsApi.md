# monad.SessionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_session**](SessionsApi.md#create_session) | **POST** /v3/sessions | Mint a short-lived API token, optionally scoped to a single org


# **create_session**
> RoutesV3CreateSessionResponse create_session(create_session_request=create_session_request)

Mint a short-lived API token, optionally scoped to a single org

Creates a short-lived JWT off the calling API key. When
`organization_id` is supplied, the token is pinned to that
org via a `scoped_org` claim and the org-access middleware
refuses any other org for this token. No new API key row
is created — revoking the parent key invalidates every
session it minted.

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import monad
from monad.models.create_session_request import CreateSessionRequest
from monad.models.routes_v3_create_session_response import RoutesV3CreateSessionResponse
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

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.SessionsApi(api_client)
    create_session_request = monad.CreateSessionRequest() # CreateSessionRequest | Session options (optional)

    try:
        # Mint a short-lived API token, optionally scoped to a single org
        api_response = api_instance.create_session(create_session_request=create_session_request)
        print("The response of SessionsApi->create_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->create_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_session_request** | [**CreateSessionRequest**](CreateSessionRequest.md)| Session options | [optional] 

### Return type

[**RoutesV3CreateSessionResponse**](RoutesV3CreateSessionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session minted |  -  |
**400** | Invalid request |  -  |
**401** | Missing or invalid auth |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

