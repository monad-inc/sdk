# AlertsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v3OrganizationIdAlertsGet**](AlertsApi.md#v3OrganizationIdAlertsGet) | **GET** /v3/{organization_id}/alerts | List alerts with pagination |
| [**v3OrganizationIdAlertsStreamGet**](AlertsApi.md#v3OrganizationIdAlertsStreamGet) | **GET** /v3/{organization_id}/alerts/stream | Stream alerts in real-time |


<a id="v3OrganizationIdAlertsGet"></a>
# **v3OrganizationIdAlertsGet**
> RoutesV3AlertList v3OrganizationIdAlertsGet(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until)

List alerts with pagination

Get list of recent historical alerts for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertsApi apiInstance = new AlertsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String ruleIds = "ruleIds_example"; // String | Comma-separated alert rule IDs
    String severities = "severities_example"; // String | Comma-separated severity levels
    String pipelineIds = "pipelineIds_example"; // String | Comma-separated pipeline IDs
    String resourceType = "resourceType_example"; // String | Resource type filter
    String resourceId = "resourceId_example"; // String | Specific resource ID
    String since = "since_example"; // String | RFC3339 timestamp for start time
    String until = "until_example"; // String | RFC3339 timestamp for end time
    try {
      RoutesV3AlertList result = apiInstance.v3OrganizationIdAlertsGet(organizationId, ruleIds, severities, pipelineIds, resourceType, resourceId, since, until);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertsApi#v3OrganizationIdAlertsGet");
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
| **ruleIds** | **String**| Comma-separated alert rule IDs | [optional] |
| **severities** | **String**| Comma-separated severity levels | [optional] |
| **pipelineIds** | **String**| Comma-separated pipeline IDs | [optional] |
| **resourceType** | **String**| Resource type filter | [optional] |
| **resourceId** | **String**| Specific resource ID | [optional] |
| **since** | **String**| RFC3339 timestamp for start time | [optional] |
| **until** | **String**| RFC3339 timestamp for end time | [optional] |

### Return type

[**RoutesV3AlertList**](RoutesV3AlertList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated alerts |  -  |
| **400** | Invalid parameters |  -  |
| **500** | Internal server error |  -  |

<a id="v3OrganizationIdAlertsStreamGet"></a>
# **v3OrganizationIdAlertsStreamGet**
> String v3OrganizationIdAlertsStreamGet(organizationId, since, last, ruleIds, severities, resourceIds, resourceType)

Stream alerts in real-time

Stream alerts for an organization using Server-Sent Events

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertsApi apiInstance = new AlertsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    String last = "last_example"; // String | Duration to start streaming from (e.g., '5m', '1h', '24h')
    String ruleIds = "ruleIds_example"; // String | Comma-separated alert rule IDs
    String severities = "severities_example"; // String | Comma-separated severity levels
    String resourceIds = "resourceIds_example"; // String | Comma-separated resource IDs
    String resourceType = "resourceType_example"; // String | Resource type filter
    try {
      String result = apiInstance.v3OrganizationIdAlertsStreamGet(organizationId, since, last, ruleIds, severities, resourceIds, resourceType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertsApi#v3OrganizationIdAlertsStreamGet");
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
| **since** | **String**| RFC3339 timestamp to start streaming from | [optional] |
| **last** | **String**| Duration to start streaming from (e.g., &#39;5m&#39;, &#39;1h&#39;, &#39;24h&#39;) | [optional] |
| **ruleIds** | **String**| Comma-separated alert rule IDs | [optional] |
| **severities** | **String**| Comma-separated severity levels | [optional] |
| **resourceIds** | **String**| Comma-separated resource IDs | [optional] |
| **resourceType** | **String**| Resource type filter | [optional] |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert stream |  -  |
| **400** | Invalid parameters |  -  |
| **500** | Internal server error |  -  |

