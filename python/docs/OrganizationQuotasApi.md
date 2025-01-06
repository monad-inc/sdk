# monad.OrganizationQuotasApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organization_id_quotas_get**](OrganizationQuotasApi.md#v2_organization_id_quotas_get) | **GET** /v2/{organization_id}/quotas | Get Organization Quotas


# **v2_organization_id_quotas_get**
> ModelsQuotaList v2_organization_id_quotas_get(organization_id, limit=limit, offset=offset, body=body)

Get Organization Quotas

Returns a paginated list of quotas with their latest usage for a given organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_quota_list import ModelsQuotaList
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
    api_instance = monad.OrganizationQuotasApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)
    body = None # object |  (optional)

    try:
        # Get Organization Quotas
        api_response = api_instance.v2_organization_id_quotas_get(organization_id, limit=limit, offset=offset, body=body)
        print("The response of OrganizationQuotasApi->v2_organization_id_quotas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationQuotasApi->v2_organization_id_quotas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 
 **body** | **object**|  | [optional] 

### Return type

[**ModelsQuotaList**](ModelsQuotaList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of quotas |  -  |
**400** | Invalid limit or offset |  -  |
**500** | Failed to list quotas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

