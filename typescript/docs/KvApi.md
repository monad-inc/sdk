# .KvApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdKvLookupMetadataGet**](KvApi.md#v3OrganizationIdKvLookupMetadataGet) | **GET** /v3/{organization_id}/kv_lookup/metadata | Get KV lookup metadata
[**v3OrganizationIdKvLookupSampleGet**](KvApi.md#v3OrganizationIdKvLookupSampleGet) | **GET** /v3/{organization_id}/kv_lookup/sample | Get KV lookup sample entries
[**v3OrganizationIdKvLookupValueGet**](KvApi.md#v3OrganizationIdKvLookupValueGet) | **GET** /v3/{organization_id}/kv_lookup/value | Get value by key from KV lookup


# **v3OrganizationIdKvLookupMetadataGet**
> KvlookupGetMetadataResponse v3OrganizationIdKvLookupMetadataGet()

Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL

### Example


```typescript
import { createConfiguration, KvApi } from '';
import type { KvApiV3OrganizationIdKvLookupMetadataGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KvApi(configuration);

const request: KvApiV3OrganizationIdKvLookupMetadataGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
};

const data = await apiInstance.v3OrganizationIdKvLookupMetadataGet(request);
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

# **v3OrganizationIdKvLookupSampleGet**
> Array<KvlookupKVEntry> v3OrganizationIdKvLookupSampleGet()

Get a sample of entries from the NATS KV lookup bucket for a given organization and component

### Example


```typescript
import { createConfiguration, KvApi } from '';
import type { KvApiV3OrganizationIdKvLookupSampleGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KvApi(configuration);

const request: KvApiV3OrganizationIdKvLookupSampleGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
    // Number of sample entries to return
  numEntries: 1,
};

const data = await apiInstance.v3OrganizationIdKvLookupSampleGet(request);
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

# **v3OrganizationIdKvLookupValueGet**
> KvlookupKVEntry v3OrganizationIdKvLookupValueGet()

Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component

### Example


```typescript
import { createConfiguration, KvApi } from '';
import type { KvApiV3OrganizationIdKvLookupValueGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new KvApi(configuration);

const request: KvApiV3OrganizationIdKvLookupValueGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Component ID
  componentId: "component_id_example",
    // Key to look up
  key: "key_example",
};

const data = await apiInstance.v3OrganizationIdKvLookupValueGet(request);
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


