# monad.KvApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_organization_id_kv_lookup_metadata_get**](KvApi.md#v3_organization_id_kv_lookup_metadata_get) | **GET** /v3/{organization_id}/kv_lookup/metadata | Get KV lookup metadata
[**v3_organization_id_kv_lookup_sample_get**](KvApi.md#v3_organization_id_kv_lookup_sample_get) | **GET** /v3/{organization_id}/kv_lookup/sample | Get KV lookup sample entries
[**v3_organization_id_kv_lookup_value_get**](KvApi.md#v3_organization_id_kv_lookup_value_get) | **GET** /v3/{organization_id}/kv_lookup/value | Get value by key from KV lookup


# **v3_organization_id_kv_lookup_metadata_get**
> KvlookupGetMetadataResponse v3_organization_id_kv_lookup_metadata_get(organization_id, component_id)

Get KV lookup metadata

Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.kvlookup_get_metadata_response import KvlookupGetMetadataResponse
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
    api_instance = monad.KvApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    component_id = 'component_id_example' # str | Component ID

    try:
        # Get KV lookup metadata
        api_response = api_instance.v3_organization_id_kv_lookup_metadata_get(organization_id, component_id)
        print("The response of KvApi->v3_organization_id_kv_lookup_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KvApi->v3_organization_id_kv_lookup_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **component_id** | **str**| Component ID | 

### Return type

[**KvlookupGetMetadataResponse**](KvlookupGetMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Metadata retrieved successfully |  -  |
**500** | Failed to get KV lookup metadata |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_kv_lookup_sample_get**
> List[KvlookupKVEntry] v3_organization_id_kv_lookup_sample_get(organization_id, component_id, num_entries)

Get KV lookup sample entries

Get a sample of entries from the NATS KV lookup bucket for a given organization and component

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.kvlookup_kv_entry import KvlookupKVEntry
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
    api_instance = monad.KvApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    component_id = 'component_id_example' # str | Component ID
    num_entries = 56 # int | Number of sample entries to return

    try:
        # Get KV lookup sample entries
        api_response = api_instance.v3_organization_id_kv_lookup_sample_get(organization_id, component_id, num_entries)
        print("The response of KvApi->v3_organization_id_kv_lookup_sample_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KvApi->v3_organization_id_kv_lookup_sample_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **component_id** | **str**| Component ID | 
 **num_entries** | **int**| Number of sample entries to return | 

### Return type

[**List[KvlookupKVEntry]**](KvlookupKVEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sample entries retrieved successfully |  -  |
**400** | Invalid num_entries parameter |  -  |
**500** | Failed to get KV lookup sample entries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_kv_lookup_value_get**
> KvlookupKVEntry v3_organization_id_kv_lookup_value_get(organization_id, component_id, key)

Get value by key from KV lookup

Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.kvlookup_kv_entry import KvlookupKVEntry
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
    api_instance = monad.KvApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    component_id = 'component_id_example' # str | Component ID
    key = 'key_example' # str | Key to look up

    try:
        # Get value by key from KV lookup
        api_response = api_instance.v3_organization_id_kv_lookup_value_get(organization_id, component_id, key)
        print("The response of KvApi->v3_organization_id_kv_lookup_value_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KvApi->v3_organization_id_kv_lookup_value_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **component_id** | **str**| Component ID | 
 **key** | **str**| Key to look up | 

### Return type

[**KvlookupKVEntry**](KvlookupKVEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Value retrieved successfully |  -  |
**500** | Failed to get value from KV lookup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

