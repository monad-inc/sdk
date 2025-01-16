# LogsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdLogsApiGet**](LogsApi.md#v1OrganizationIdLogsApiGet) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs |
| [**v1OrganizationIdLogsGet**](LogsApi.md#v1OrganizationIdLogsGet) | **GET** /v1/{organization_id}/logs | Stream organization logs |
| [**v1OrganizationIdLogsPipelinesGet**](LogsApi.md#v1OrganizationIdLogsPipelinesGet) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs |
| [**v1OrganizationIdLogsPipelinesPipelineIdGet**](LogsApi.md#v1OrganizationIdLogsPipelinesPipelineIdGet) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs |
| [**v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet**](LogsApi.md#v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs |


<a id="v1OrganizationIdLogsApiGet"></a>
# **v1OrganizationIdLogsApiGet**
> String v1OrganizationIdLogsApiGet(organizationId, since)

Stream organization api logs

Stream api logs for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LogsApi;

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

    LogsApi apiInstance = new LogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    try {
      String result = apiInstance.v1OrganizationIdLogsApiGet(organizationId, since);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#v1OrganizationIdLogsApiGet");
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Log stream |  -  |
| **400** | Invalid &#39;since&#39; timestamp format |  -  |
| **500** | Internal server error |  -  |

<a id="v1OrganizationIdLogsGet"></a>
# **v1OrganizationIdLogsGet**
> String v1OrganizationIdLogsGet(organizationId, since, last)

Stream organization logs

Stream logs for an entire organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LogsApi;

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

    LogsApi apiInstance = new LogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    String last = "last_example"; // String | Duration to start streaming from (e.g., '5h' or '30m')
    try {
      String result = apiInstance.v1OrganizationIdLogsGet(organizationId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#v1OrganizationIdLogsGet");
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
| **last** | **String**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Log stream |  -  |
| **400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
| **500** | Internal server error |  -  |

<a id="v1OrganizationIdLogsPipelinesGet"></a>
# **v1OrganizationIdLogsPipelinesGet**
> String v1OrganizationIdLogsPipelinesGet(organizationId, since)

Stream organization pipeline logs

Stream pipeline logs for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LogsApi;

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

    LogsApi apiInstance = new LogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    try {
      String result = apiInstance.v1OrganizationIdLogsPipelinesGet(organizationId, since);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#v1OrganizationIdLogsPipelinesGet");
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Log stream |  -  |
| **400** | Invalid &#39;since&#39; timestamp format |  -  |
| **500** | Internal server error |  -  |

<a id="v1OrganizationIdLogsPipelinesPipelineIdGet"></a>
# **v1OrganizationIdLogsPipelinesPipelineIdGet**
> String v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId, pipelineId, since, last)

Stream pipeline logs

Stream logs for a specific pipeline within an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LogsApi;

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

    LogsApi apiInstance = new LogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    String last = "last_example"; // String | Duration to start streaming from (e.g., '5h' or '30m')
    try {
      String result = apiInstance.v1OrganizationIdLogsPipelinesPipelineIdGet(organizationId, pipelineId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#v1OrganizationIdLogsPipelinesPipelineIdGet");
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
| **pipelineId** | **String**| Pipeline ID | |
| **since** | **String**| RFC3339 timestamp to start streaming from | [optional] |
| **last** | **String**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Log stream |  -  |
| **400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
| **500** | Internal server error |  -  |

<a id="v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet"></a>
# **v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet**
> String v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, since, last)

Stream node logs

Stream logs for a specific node within a pipeline and organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.LogsApi;

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

    LogsApi apiInstance = new LogsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String nodeId = "nodeId_example"; // String | Node ID
    String since = "since_example"; // String | RFC3339 timestamp to start streaming from
    String last = "last_example"; // String | Duration to start streaming from (e.g., '5h' or '30m')
    try {
      String result = apiInstance.v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet(organizationId, pipelineId, nodeId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#v1OrganizationIdLogsPipelinesPipelineIdNodeIdGet");
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
| **pipelineId** | **String**| Pipeline ID | |
| **nodeId** | **String**| Node ID | |
| **since** | **String**| RFC3339 timestamp to start streaming from | [optional] |
| **last** | **String**| Duration to start streaming from (e.g., &#39;5h&#39; or &#39;30m&#39;) | [optional] |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Log stream |  -  |
| **400** | Invalid &#39;since&#39; timestamp or &#39;last&#39; duration format |  -  |
| **500** | Internal server error |  -  |

