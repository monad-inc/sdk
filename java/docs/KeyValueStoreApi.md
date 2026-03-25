# KeyValueStoreApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getKVLookupMetadata**](KeyValueStoreApi.md#getKVLookupMetadata) | **GET** /v3/{organization_id}/kv_lookup/metadata | Get KV lookup metadata |
| [**getKVLookupSampleEntries**](KeyValueStoreApi.md#getKVLookupSampleEntries) | **GET** /v3/{organization_id}/kv_lookup/sample | Get KV lookup sample entries |
| [**getValueFromKvStore**](KeyValueStoreApi.md#getValueFromKvStore) | **GET** /v3/{organization_id}/kv_lookup/value | Get value by key from KV lookup |


<a id="getKVLookupMetadata"></a>
# **getKVLookupMetadata**
> KvlookupGetMetadataResponse getKVLookupMetadata(organizationId, componentId)

Get KV lookup metadata

Get metadata of the KV lookup bucket for a given organization and component, including key count, byte usage, last ingested time, max bytes, and TTL

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KeyValueStoreApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    KeyValueStoreApi apiInstance = new KeyValueStoreApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String componentId = "componentId_example"; // String | Component ID
    try {
      KvlookupGetMetadataResponse result = apiInstance.getKVLookupMetadata(organizationId, componentId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KeyValueStoreApi#getKVLookupMetadata");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **componentId** | **String**| Component ID | |

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
| **200** | Metadata retrieved successfully |  -  |
| **500** | Failed to get KV lookup metadata |  -  |

<a id="getKVLookupSampleEntries"></a>
# **getKVLookupSampleEntries**
> List&lt;KvlookupKVEntry&gt; getKVLookupSampleEntries(organizationId, componentId, numEntries)

Get KV lookup sample entries

Get a sample of entries from the NATS KV lookup bucket for a given organization and component

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KeyValueStoreApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    KeyValueStoreApi apiInstance = new KeyValueStoreApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String componentId = "componentId_example"; // String | Component ID
    Integer numEntries = 56; // Integer | Number of sample entries to return
    try {
      List<KvlookupKVEntry> result = apiInstance.getKVLookupSampleEntries(organizationId, componentId, numEntries);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KeyValueStoreApi#getKVLookupSampleEntries");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **componentId** | **String**| Component ID | |
| **numEntries** | **Integer**| Number of sample entries to return | |

### Return type

[**List&lt;KvlookupKVEntry&gt;**](KvlookupKVEntry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sample entries retrieved successfully |  -  |
| **400** | Invalid num_entries parameter |  -  |
| **500** | Failed to get KV lookup sample entries |  -  |

<a id="getValueFromKvStore"></a>
# **getValueFromKvStore**
> KvlookupKVEntry getValueFromKvStore(organizationId, componentId, key)

Get value by key from KV lookup

Get the value associated with a specific key from the NATS KV lookup bucket for a given organization and component

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.KeyValueStoreApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    KeyValueStoreApi apiInstance = new KeyValueStoreApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String componentId = "componentId_example"; // String | Component ID
    String key = "key_example"; // String | Key to look up
    try {
      KvlookupKVEntry result = apiInstance.getValueFromKvStore(organizationId, componentId, key);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling KeyValueStoreApi#getValueFromKvStore");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **componentId** | **String**| Component ID | |
| **key** | **String**| Key to look up | |

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
| **200** | Value retrieved successfully |  -  |
| **500** | Failed to get value from KV lookup |  -  |

