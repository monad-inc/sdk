# OrganizationsMetricsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationMetrics**](OrganizationsMetricsApi.md#getOrganizationMetrics) | **GET** /v2/{organization_id}/metrics | Get organization metrics |


<a id="getOrganizationMetrics"></a>
# **getOrganizationMetrics**
> ModelsPipelineMetrics getOrganizationMetrics(organizationId, metric, start, end, resolution)

Get organization metrics

Get time series metrics for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsMetricsApi;

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

    OrganizationsMetricsApi apiInstance = new OrganizationsMetricsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    try {
      ModelsPipelineMetrics result = apiInstance.getOrganizationMetrics(organizationId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsMetricsApi#getOrganizationMetrics");
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
| **metric** | **String**| Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors) | |
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **resolution** | **String**| Resolution of the data, default determined by time window | [optional] |

### Return type

[**ModelsPipelineMetrics**](ModelsPipelineMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Organization metrics |  -  |
| **400** | Bad request |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

