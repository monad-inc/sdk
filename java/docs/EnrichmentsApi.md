# EnrichmentsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEnrichmentTypeMeta**](EnrichmentsApi.md#getEnrichmentTypeMeta) | **GET** /v3/{organization_id}/enrichments_meta/{enrichment_type_id} | Get enrichment config meta |
| [**listEnrichmentTypes**](EnrichmentsApi.md#listEnrichmentTypes) | **GET** /v3/{organization_id}/enrichments_meta | List enrichments |


<a id="getEnrichmentTypeMeta"></a>
# **getEnrichmentTypeMeta**
> EnrichmentConnectorMeta getEnrichmentTypeMeta(organizationId, enrichmentTypeId)

Get enrichment config meta

Get enrichment config meta

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EnrichmentsApi;

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

    EnrichmentsApi apiInstance = new EnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String enrichmentTypeId = "enrichmentTypeId_example"; // String | Enrichment type ID
    try {
      EnrichmentConnectorMeta result = apiInstance.getEnrichmentTypeMeta(organizationId, enrichmentTypeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EnrichmentsApi#getEnrichmentTypeMeta");
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
| **enrichmentTypeId** | **String**| Enrichment type ID | |

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
| **200** | Enrichment config meta retrieved successfully |  -  |
| **404** | Enrichment type not found |  -  |

<a id="listEnrichmentTypes"></a>
# **listEnrichmentTypes**
> List&lt;EnrichmentConnectorMeta&gt; listEnrichmentTypes(organizationId)

List enrichments

List available enrichment types

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EnrichmentsApi;

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

    EnrichmentsApi apiInstance = new EnrichmentsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      List<EnrichmentConnectorMeta> result = apiInstance.listEnrichmentTypes(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EnrichmentsApi#listEnrichmentTypes");
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

[**List&lt;EnrichmentConnectorMeta&gt;**](EnrichmentConnectorMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Enrichments retrieved successfully |  -  |

