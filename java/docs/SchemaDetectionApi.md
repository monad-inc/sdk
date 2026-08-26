# SchemaDetectionApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationSchemaTrackingSummary**](SchemaDetectionApi.md#getOrganizationSchemaTrackingSummary) | **GET** /v3/{organization_id}/schema_detection/summary | Schema tracking summary |
| [**listOrganizationPipelinesWithSchema**](SchemaDetectionApi.md#listOrganizationPipelinesWithSchema) | **GET** /v3/{organization_id}/schema_detection/pipelines | List pipelines with tracked schema |
| [**listOrganizationSchemaChangeEvents**](SchemaDetectionApi.md#listOrganizationSchemaChangeEvents) | **GET** /v3/{organization_id}/schema_detection/events | List organization schema change events |


<a id="getOrganizationSchemaTrackingSummary"></a>
# **getOrganizationSchemaTrackingSummary**
> ModelsSchemaTrackingSummary getOrganizationSchemaTrackingSummary(organizationId)

Schema tracking summary

Counts of the organization&#39;s tracked edges by mode (learning / detection).

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SchemaDetectionApi;

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

    SchemaDetectionApi apiInstance = new SchemaDetectionApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      ModelsSchemaTrackingSummary result = apiInstance.getOrganizationSchemaTrackingSummary(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SchemaDetectionApi#getOrganizationSchemaTrackingSummary");
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

### Return type

[**ModelsSchemaTrackingSummary**](ModelsSchemaTrackingSummary.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Learning / detection counts |  -  |
| **403** | Missing pipeline:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="listOrganizationPipelinesWithSchema"></a>
# **listOrganizationPipelinesWithSchema**
> List&lt;ModelsPipelineWithSchemaTracked&gt; listOrganizationPipelinesWithSchema(organizationId)

List pipelines with tracked schema

List the id and name of every pipeline in the organization that has any edge with a tracked schema state, for populating pipeline pickers.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SchemaDetectionApi;

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

    SchemaDetectionApi apiInstance = new SchemaDetectionApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      List<ModelsPipelineWithSchemaTracked> result = apiInstance.listOrganizationPipelinesWithSchema(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SchemaDetectionApi#listOrganizationPipelinesWithSchema");
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

### Return type

[**List&lt;ModelsPipelineWithSchemaTracked&gt;**](ModelsPipelineWithSchemaTracked.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipelines with tracked schema |  -  |
| **403** | Missing pipeline:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="listOrganizationSchemaChangeEvents"></a>
# **listOrganizationSchemaChangeEvents**
> ModelsSchemaHistoryList listOrganizationSchemaChangeEvents(organizationId, limit, offset, from)

List organization schema change events

List schema drift events (new field / type change) across every pipeline and edge in the organization, newest first, with offset pagination. Optionally bounded to events after &#x60;from&#x60;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SchemaDetectionApi;

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

    SchemaDetectionApi apiInstance = new SchemaDetectionApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Page size (default 10)
    Integer offset = 56; // Integer | Row offset for pagination (default 0)
    String from = "from_example"; // String | Only events strictly after this RFC3339 timestamp
    try {
      ModelsSchemaHistoryList result = apiInstance.listOrganizationSchemaChangeEvents(organizationId, limit, offset, from);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SchemaDetectionApi#listOrganizationSchemaChangeEvents");
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
| **limit** | **Integer**| Page size (default 10) | [optional] |
| **offset** | **Integer**| Row offset for pagination (default 0) | [optional] |
| **from** | **String**| Only events strictly after this RFC3339 timestamp | [optional] |

### Return type

[**ModelsSchemaHistoryList**](ModelsSchemaHistoryList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | One page of schema change events |  -  |
| **400** | Invalid query parameters |  -  |
| **403** | Missing pipeline:read permission |  -  |
| **500** | Internal server error |  -  |

