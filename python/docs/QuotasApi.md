# monad.QuotasApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_quotas_get**](QuotasApi.md#v2_quotas_get) | **GET** /v2/quotas | List quotas


# **v2_quotas_get**
> ModelsQuotaList v2_quotas_get(billing_account_id=billing_account_id, organization_id=organization_id, limit=limit, offset=offset, body=body)

List quotas

List quotas for a given billing account or organization id.

### Example

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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.QuotasApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID (optional)
    organization_id = 'organization_id_example' # str | Organization ID (optional)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)
    body = None # object |  (optional)

    try:
        # List quotas
        api_response = api_instance.v2_quotas_get(billing_account_id=billing_account_id, organization_id=organization_id, limit=limit, offset=offset, body=body)
        print("The response of QuotasApi->v2_quotas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotasApi->v2_quotas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | [optional] 
 **organization_id** | **str**| Organization ID | [optional] 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 
 **body** | **object**|  | [optional] 

### Return type

[**ModelsQuotaList**](ModelsQuotaList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list quotas successful |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list quotas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

