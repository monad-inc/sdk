# .KeyValueStoreApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKVLookupMetadata**](KeyValueStoreApi.md#getKVLookupMetadata) | **GET** /v3/{organization_id}/kv_lookup/metadata | Get KV lookup metadata
[**getKVLookupSampleEntries**](KeyValueStoreApi.md#getKVLookupSampleEntries) | **GET** /v3/{organization_id}/kv_lookup/sample | Get KV lookup sample entries
[**getValueFromKvStore**](KeyValueStoreApi.md#getValueFromKvStore) | **GET** /v3/{organization_id}/kv_lookup/value | Get value by key from KV lookup


# **getKVLookupMetadata**
> KvlookupGetMetadataResponse getKVLookupMetadata()

Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL

### Example


```typescript
import { createConfiguration, KeyValueStoreApi } from '';
import type { KeyValueStoreApiGetKVLookupMetadataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KeyValueStoreApi(configuration);

const request: KeyValueStoreApiGetKVLookupMetadataRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
};

const data = await apiInstance.getKVLookupMetadata(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **componentId** | [**string**] | Component ID | defaults to undefined


### Return type

**KvlookupGetMetadataResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Metadata retrieved successfully |  -  |
**500** | Failed to get KV lookup metadata |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getKVLookupSampleEntries**
> Array<KvlookupKVEntry> getKVLookupSampleEntries()

Get a sample of entries from the NATS KV lookup bucket for a given organization and component

### Example


```typescript
import { createConfiguration, KeyValueStoreApi } from '';
import type { KeyValueStoreApiGetKVLookupSampleEntriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KeyValueStoreApi(configuration);

const request: KeyValueStoreApiGetKVLookupSampleEntriesRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
    // Number of sample entries to return
  numEntries: 1,
};

const data = await apiInstance.getKVLookupSampleEntries(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **componentId** | [**string**] | Component ID | defaults to undefined
 **numEntries** | [**number**] | Number of sample entries to return | defaults to undefined


### Return type

**Array<KvlookupKVEntry>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sample entries retrieved successfully |  -  |
**400** | Invalid num_entries parameter |  -  |
**500** | Failed to get KV lookup sample entries |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getValueFromKvStore**
> KvlookupKVEntry getValueFromKvStore()

Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component

### Example


```typescript
import { createConfiguration, KeyValueStoreApi } from '';
import type { KeyValueStoreApiGetValueFromKvStoreRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KeyValueStoreApi(configuration);

const request: KeyValueStoreApiGetValueFromKvStoreRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
    // Key to look up
  key: "key_example",
};

const data = await apiInstance.getValueFromKvStore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **componentId** | [**string**] | Component ID | defaults to undefined
 **key** | [**string**] | Key to look up | defaults to undefined


### Return type

**KvlookupKVEntry**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Value retrieved successfully |  -  |
**500** | Failed to get value from KV lookup |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


