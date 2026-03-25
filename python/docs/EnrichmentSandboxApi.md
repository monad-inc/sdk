# monad.EnrichmentSandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrichment_sandbox**](EnrichmentSandboxApi.md#enrichment_sandbox) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record


# **enrichment_sandbox**
> RoutesV3EnrichmentSandboxResponse enrichment_sandbox(organization_id, routes_v3_enrichment_sandbox_request)

Apply enrichment to record

Apply a enrichment configuration to a JSON record

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_enrichment_sandbox_request import RoutesV3EnrichmentSandboxRequest
from monad.models.routes_v3_enrichment_sandbox_response import RoutesV3EnrichmentSandboxResponse
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
    api_instance = monad.EnrichmentSandboxApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_enrichment_sandbox_request = monad.RoutesV3EnrichmentSandboxRequest() # RoutesV3EnrichmentSandboxRequest | Enrichment configuration and record

    try:
        # Apply enrichment to record
        api_response = api_instance.enrichment_sandbox(organization_id, routes_v3_enrichment_sandbox_request)
        print("The response of EnrichmentSandboxApi->enrichment_sandbox:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrichmentSandboxApi->enrichment_sandbox: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_enrichment_sandbox_request** | [**RoutesV3EnrichmentSandboxRequest**](RoutesV3EnrichmentSandboxRequest.md)| Enrichment configuration and record | 

### Return type

[**RoutesV3EnrichmentSandboxResponse**](RoutesV3EnrichmentSandboxResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

