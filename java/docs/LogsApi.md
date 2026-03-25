# LogsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**streamNodeData**](LogsApi.md#streamNodeData) | **GET** /v1/{organization_id}/data/{node_id} | Stream node data |
| [**streamNodeLogs**](LogsApi.md#streamNodeLogs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id}/{node_id} | Stream node logs |
| [**streamOrganizationAPILogs**](LogsApi.md#streamOrganizationAPILogs) | **GET** /v1/{organization_id}/logs/api | Stream organization api logs |
| [**streamOrganizationLogs**](LogsApi.md#streamOrganizationLogs) | **GET** /v1/{organization_id}/logs | Stream organization logs |
| [**streamOrganizationPipelinesLogs**](LogsApi.md#streamOrganizationPipelinesLogs) | **GET** /v1/{organization_id}/logs/pipelines | Stream organization pipeline logs |
| [**streamPipelineLogs**](LogsApi.md#streamPipelineLogs) | **GET** /v1/{organization_id}/logs/pipelines/{pipeline_id} | Stream pipeline logs |


<a id="streamNodeData"></a>
# **streamNodeData**
> String streamNodeData(organizationId, nodeId)

Stream node data

Stream data for a specific node within an organization

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
    String nodeId = "nodeId_example"; // String | Node ID
    try {
      String result = apiInstance.streamNodeData(organizationId, nodeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamNodeData");
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
| **nodeId** | **String**| Node ID | |

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
| **200** | Data stream |  -  |
| **400** | Failed to enable node watching |  -  |
| **500** | Failed to create consumer |  -  |

<a id="streamNodeLogs"></a>
# **streamNodeLogs**
> String streamNodeLogs(organizationId, pipelineId, nodeId, since, last)

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
      String result = apiInstance.streamNodeLogs(organizationId, pipelineId, nodeId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamNodeLogs");
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

<a id="streamOrganizationAPILogs"></a>
# **streamOrganizationAPILogs**
> String streamOrganizationAPILogs(organizationId, since)

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
      String result = apiInstance.streamOrganizationAPILogs(organizationId, since);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamOrganizationAPILogs");
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

<a id="streamOrganizationLogs"></a>
# **streamOrganizationLogs**
> String streamOrganizationLogs(organizationId, since, last)

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
      String result = apiInstance.streamOrganizationLogs(organizationId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamOrganizationLogs");
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

<a id="streamOrganizationPipelinesLogs"></a>
# **streamOrganizationPipelinesLogs**
> String streamOrganizationPipelinesLogs(organizationId, since)

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
      String result = apiInstance.streamOrganizationPipelinesLogs(organizationId, since);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamOrganizationPipelinesLogs");
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

<a id="streamPipelineLogs"></a>
# **streamPipelineLogs**
> String streamPipelineLogs(organizationId, pipelineId, since, last)

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
      String result = apiInstance.streamPipelineLogs(organizationId, pipelineId, since, last);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling LogsApi#streamPipelineLogs");
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

