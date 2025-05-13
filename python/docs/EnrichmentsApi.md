# monad.EnrichmentsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_organization_id_enrichments_meta_enrichment_type_id_get**](EnrichmentsApi.md#v3_organization_id_enrichments_meta_enrichment_type_id_get) | **GET** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta
[**v3_organization_id_enrichments_meta_get**](EnrichmentsApi.md#v3_organization_id_enrichments_meta_get) | **GET** /v3/{organization_id}/enrichments_meta | List enrichments


# **v3_organization_id_enrichments_meta_enrichment_type_id_get**
> EnrichmentConnectorMeta v3_organization_id_enrichments_meta_enrichment_type_id_get(organization_id, enrichment_type_id)

Get enrichment config meta

Get enrichment config meta

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.enrichment_connector_meta import EnrichmentConnectorMeta
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
    api_instance = monad.EnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    enrichment_type_id = 'enrichment_type_id_example' # str | Enrichment type ID

    try:
        # Get enrichment config meta
        api_response = api_instance.v3_organization_id_enrichments_meta_enrichment_type_id_get(organization_id, enrichment_type_id)
        print("The response of EnrichmentsApi->v3_organization_id_enrichments_meta_enrichment_type_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrichmentsApi->v3_organization_id_enrichments_meta_enrichment_type_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **enrichment_type_id** | **str**| Enrichment type ID | 

### Return type

[**EnrichmentConnectorMeta**](EnrichmentConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichment config meta retrieved successfully |  -  |
**404** | Enrichment type not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_enrichments_meta_get**
> List[EnrichmentConnectorMeta] v3_organization_id_enrichments_meta_get(organization_id)

List enrichments

List available enrichment types

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.enrichment_connector_meta import EnrichmentConnectorMeta
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
    api_instance = monad.EnrichmentsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List enrichments
        api_response = api_instance.v3_organization_id_enrichments_meta_get(organization_id)
        print("The response of EnrichmentsApi->v3_organization_id_enrichments_meta_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnrichmentsApi->v3_organization_id_enrichments_meta_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**List[EnrichmentConnectorMeta]**](EnrichmentConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Enrichments retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

