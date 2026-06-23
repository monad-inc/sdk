# PipelinesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPipeline**](PipelinesApi.md#createPipeline) | **POST** /v2/{organization_id}/pipelines | Create pipeline |
| [**deletePipeline**](PipelinesApi.md#deletePipeline) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline |
| [**deletePipelineV1**](PipelinesApi.md#deletePipelineV1) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline |
| [**forceGraduateSchemaState**](PipelinesApi.md#forceGraduateSchemaState) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id}/schema/graduate | Force graduate schema state |
| [**getMetricsForPipelines**](PipelinesApi.md#getMetricsForPipelines) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines |
| [**getOrganizationSummary**](PipelinesApi.md#getOrganizationSummary) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization |
| [**getPipeline**](PipelinesApi.md#getPipeline) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline |
| [**getPipelineConfig**](PipelinesApi.md#getPipelineConfig) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration |
| [**getPipelineEdgeConditionOperatorTypes**](PipelinesApi.md#getPipelineEdgeConditionOperatorTypes) | **GET** /v3/pipeline_edges/edge_condition_operator_types | Conditional types for edge conditions |
| [**getPipelineEdgeConditionRules**](PipelinesApi.md#getPipelineEdgeConditionRules) | **GET** /v3/pipeline_edges/edge_condition_rules | Rules for edge conditions |
| [**getPipelineMetrics**](PipelinesApi.md#getPipelineMetrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id} | Get pipeline metrics |
| [**getPipelineNodeMetrics**](PipelinesApi.md#getPipelineNodeMetrics) | **GET** /v2/{organization_id}/metrics/pipelines/{pipeline_id}/{node_id} | Get pipeline node metrics |
| [**getPipelineNodeMetricsV2**](PipelinesApi.md#getPipelineNodeMetricsV2) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics |
| [**getPipelineNodeStatus**](PipelinesApi.md#getPipelineNodeStatus) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status |
| [**getPipelineStatus**](PipelinesApi.md#getPipelineStatus) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status |
| [**getPipelinesStatuses**](PipelinesApi.md#getPipelinesStatuses) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status |
| [**getSchemaState**](PipelinesApi.md#getSchemaState) | **GET** /v3/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id}/schema-detection | Get schema state |
| [**listPipelines**](PipelinesApi.md#listPipelines) | **GET** /v2/{organization_id}/pipelines | List pipelines |
| [**listPipelinesV1**](PipelinesApi.md#listPipelinesV1) | **GET** /v1/{organization_id}/pipelines | List pipelines |
| [**listSchemaHistory**](PipelinesApi.md#listSchemaHistory) | **GET** /v3/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id}/schema-detection/events | List schema history |
| [**purgePipeline**](PipelinesApi.md#purgePipeline) | **POST** /v3/{organization_id}/pipelines/{pipeline_id}/purge | Purge pipeline data |
| [**purgePipelineNode**](PipelinesApi.md#purgePipelineNode) | **POST** /v3/{organization_id}/pipelines/{pipeline_id}/nodes/{node_id}/purge | Purge pipeline node data |
| [**resetSchemaState**](PipelinesApi.md#resetSchemaState) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id}/schema/reset | Reset schema state |
| [**triggerPipeline**](PipelinesApi.md#triggerPipeline) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually |
| [**updatePipeline**](PipelinesApi.md#updatePipeline) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline |
| [**updatePipelineEdge**](PipelinesApi.md#updatePipelineEdge) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id}/edges/{edge_id} | Update pipeline edge |
| [**updatePipelineV1**](PipelinesApi.md#updatePipelineV1) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline |


<a id="createPipeline"></a>
# **createPipeline**
> ModelsPipelineConfigV2 createPipeline(organizationId, createPipelineRequest)

Create pipeline

Create a new pipeline with specified configuration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    CreatePipelineRequest createPipelineRequest = new CreatePipelineRequest(); // CreatePipelineRequest | Request body for creating a pipeline
    try {
      ModelsPipelineConfigV2 result = apiInstance.createPipeline(organizationId, createPipelineRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#createPipeline");
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
| **createPipelineRequest** | [**CreatePipelineRequest**](CreatePipelineRequest.md)| Request body for creating a pipeline | |

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Pipeline created successfully |  -  |
| **400** | Invalid JSON request body or Failed to create pipeline |  -  |
| **500** | Internal server error |  -  |

<a id="deletePipeline"></a>
# **deletePipeline**
> String deletePipeline(organizationId, pipelineId)

Delete pipeline

Delete pipeline

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    try {
      String result = apiInstance.deletePipeline(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#deletePipeline");
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline deleted successfully |  -  |
| **500** | Failed to delete pipeline |  -  |

<a id="deletePipelineV1"></a>
# **deletePipelineV1**
> String deletePipelineV1(organizationId, pipelineId)

Delete pipeline

Delete pipeline

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    try {
      String result = apiInstance.deletePipelineV1(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#deletePipelineV1");
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline deleted successfully |  -  |
| **500** | Failed to delete pipeline |  -  |

<a id="forceGraduateSchemaState"></a>
# **forceGraduateSchemaState**
> forceGraduateSchemaState(organizationId, pipelineId, edgeId)

Force graduate schema state

Force an edge in learning mode to immediately graduate to detection mode

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String edgeId = "edgeId_example"; // String | Edge ID
    try {
      apiInstance.forceGraduateSchemaState(organizationId, pipelineId, edgeId);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#forceGraduateSchemaState");
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
| **edgeId** | **String**| Edge ID | |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Schema state graduated to detection mode |  -  |
| **400** | Edge is not in learning mode |  -  |
| **500** | Internal server error |  -  |
| **504** | Pipeline is not currently running |  -  |

<a id="getMetricsForPipelines"></a>
# **getMetricsForPipelines**
> RoutesV2MetricsResponse getMetricsForPipelines(organizationId, pipelineIds, resolution)

Get metrics for specific pipelines

Get aggregated ingress and egress metrics for specific pipelines

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineIds = "pipelineIds_example"; // String | Comma-separated list of pipeline IDs
    String resolution = "resolution_example"; // String | Resolution for metrics (default: 5m)
    try {
      RoutesV2MetricsResponse result = apiInstance.getMetricsForPipelines(organizationId, pipelineIds, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getMetricsForPipelines");
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
| **pipelineIds** | **String**| Comma-separated list of pipeline IDs | |
| **resolution** | **String**| Resolution for metrics (default: 5m) | [optional] |

### Return type

[**RoutesV2MetricsResponse**](RoutesV2MetricsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline metrics data |  -  |
| **400** | Bad request error |  -  |
| **500** | Internal server error |  -  |

<a id="getOrganizationSummary"></a>
# **getOrganizationSummary**
> RoutesV2GetOrganizationSummaryResponse getOrganizationSummary(organizationId, start, end)

Get status of all pipelines for an organization

Get status of all pipelines for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String start = "start_example"; // String | ISO3339 start time, default 24 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    try {
      RoutesV2GetOrganizationSummaryResponse result = apiInstance.getOrganizationSummary(organizationId, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getOrganizationSummary");
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
| **start** | **String**| ISO3339 start time, default 24 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |

### Return type

[**RoutesV2GetOrganizationSummaryResponse**](RoutesV2GetOrganizationSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Organization Pipeline Summary |  -  |
| **500** | Failed to get pipelines for organization |  -  |

<a id="getPipeline"></a>
# **getPipeline**
> ModelsPipeline getPipeline(organizationId, pipelineId)

Get pipeline

Get pipeline

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    try {
      ModelsPipeline result = apiInstance.getPipeline(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipeline");
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

### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline details |  -  |
| **500** | Failed to get pipeline |  -  |

<a id="getPipelineConfig"></a>
# **getPipelineConfig**
> ModelsPipelineConfigV2 getPipelineConfig(organizationId, pipelineId, includeStatus)

Get pipeline configuration

Retrieve a specific pipeline configuration by pipeline ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    Boolean includeStatus = true; // Boolean | Include the status of the pipeline nodes
    try {
      ModelsPipelineConfigV2 result = apiInstance.getPipelineConfig(organizationId, pipelineId, includeStatus);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineConfig");
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
| **includeStatus** | **Boolean**| Include the status of the pipeline nodes | [optional] |

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline configuration retrieved successfully |  -  |
| **500** | Failed to get pipeline |  -  |

<a id="getPipelineEdgeConditionOperatorTypes"></a>
# **getPipelineEdgeConditionOperatorTypes**
> String getPipelineEdgeConditionOperatorTypes()

Conditional types for edge conditions

Returns the conditional types for edge conditions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    try {
      String result = apiInstance.getPipelineEdgeConditionOperatorTypes();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineEdgeConditionOperatorTypes");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conditions returned succesfully |  -  |

<a id="getPipelineEdgeConditionRules"></a>
# **getPipelineEdgeConditionRules**
> String getPipelineEdgeConditionRules()

Rules for edge conditions

Returns the rules for edge conditions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    try {
      String result = apiInstance.getPipelineEdgeConditionRules();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineEdgeConditionRules");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rules returned succesfully |  -  |

<a id="getPipelineMetrics"></a>
# **getPipelineMetrics**
> ModelsPipelineMetrics getPipelineMetrics(organizationId, pipelineId, metric, start, end, resolution)

Get pipeline metrics

Get time series metrics for a pipeline

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    try {
      ModelsPipelineMetrics result = apiInstance.getPipelineMetrics(organizationId, pipelineId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineMetrics");
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
| **200** | Pipeline metrics |  -  |
| **400** | Bad request |  -  |
| **404** | Pipeline not found |  -  |
| **500** | Internal server error |  -  |

<a id="getPipelineNodeMetrics"></a>
# **getPipelineNodeMetrics**
> ModelsPipelineMetrics getPipelineNodeMetrics(organizationId, pipelineId, nodeId, metric, start, end, resolution)

Get pipeline node metrics

Get pipeline node metrics

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String nodeId = "nodeId_example"; // String | Node ID
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    try {
      ModelsPipelineMetrics result = apiInstance.getPipelineNodeMetrics(organizationId, pipelineId, nodeId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineNodeMetrics");
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
| **200** | Pipeline node metrics |  -  |
| **400** | Bad request |  -  |
| **404** | Pipeline or node not found |  -  |
| **500** | Internal server error |  -  |

<a id="getPipelineNodeMetricsV2"></a>
# **getPipelineNodeMetricsV2**
> ModelsPipelineMetrics getPipelineNodeMetricsV2(organizationId, pipelineId, nodeId, metric, start, end, resolution)

Get pipeline node metrics

Get pipeline node metrics

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String nodeId = "nodeId_example"; // String | Node ID
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    try {
      ModelsPipelineMetrics result = apiInstance.getPipelineNodeMetricsV2(organizationId, pipelineId, nodeId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineNodeMetricsV2");
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
| **200** | Pipeline node metrics |  -  |
| **400** | Bad request |  -  |
| **404** | Pipeline or node not found |  -  |
| **500** | Internal server error |  -  |

<a id="getPipelineNodeStatus"></a>
# **getPipelineNodeStatus**
> ModelsPipelineNodeStatus getPipelineNodeStatus(organizationId, pipelineId, nodeId, metrics, start, end)

Get pipeline node status

Get pipeline node status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String nodeId = "nodeId_example"; // String | Node ID
    List<String> metrics = Arrays.asList(); // List<String> | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
    String start = "start_example"; // String | ISO3339 start time, default 24 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    try {
      ModelsPipelineNodeStatus result = apiInstance.getPipelineNodeStatus(organizationId, pipelineId, nodeId, metrics, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineNodeStatus");
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
| **metrics** | [**List&lt;String&gt;**](String.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | [optional] |
| **start** | **String**| ISO3339 start time, default 24 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |

### Return type

[**ModelsPipelineNodeStatus**](ModelsPipelineNodeStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline Node status |  -  |
| **500** | Failed to get pipeline node status |  -  |

<a id="getPipelineStatus"></a>
# **getPipelineStatus**
> ModelsPipelineStatus getPipelineStatus(organizationId, pipelineId, metrics, start, end)

Get pipeline status

Get pipeline status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    List<String> metrics = Arrays.asList(); // List<String> | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure)
    String start = "start_example"; // String | ISO3339 start time, default 24 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    try {
      ModelsPipelineStatus result = apiInstance.getPipelineStatus(organizationId, pipelineId, metrics, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelineStatus");
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
| **metrics** | [**List&lt;String&gt;**](String.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records|backpressure) | [optional] |
| **start** | **String**| ISO3339 start time, default 24 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |

### Return type

[**ModelsPipelineStatus**](ModelsPipelineStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline status |  -  |
| **500** | Failed to get pipeline |  -  |

<a id="getPipelinesStatuses"></a>
# **getPipelinesStatuses**
> List&lt;RoutesV2PipelineWithStatus&gt; getPipelinesStatuses(organizationId, limit, offset, start, end)

Get pipeline status

Retrieve the status of pipelines within an organization for a specified time period.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Maximum number of pipelines to return (default is 10)
    Integer offset = 56; // Integer | Offset for pagination (default is 0)
    String start = "start_example"; // String | Start time (RFC3339 format) for status metrics (default: 24 hours ago)
    String end = "end_example"; // String | End time (RFC3339 format) for status metrics (default: now)
    try {
      List<RoutesV2PipelineWithStatus> result = apiInstance.getPipelinesStatuses(organizationId, limit, offset, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getPipelinesStatuses");
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
| **limit** | **Integer**| Maximum number of pipelines to return (default is 10) | [optional] |
| **offset** | **Integer**| Offset for pagination (default is 0) | [optional] |
| **start** | **String**| Start time (RFC3339 format) for status metrics (default: 24 hours ago) | [optional] |
| **end** | **String**| End time (RFC3339 format) for status metrics (default: now) | [optional] |

### Return type

[**List&lt;RoutesV2PipelineWithStatus&gt;**](RoutesV2PipelineWithStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of pipelines with status |  -  |
| **400** | Invalid query parameters or time range |  -  |
| **500** | Failed to retrieve pipeline status |  -  |

<a id="getSchemaState"></a>
# **getSchemaState**
> RoutesV3SchemaStateResponse getSchemaState(organizationId, pipelineId, edgeId)

Get schema state

Get the current schema state for a pipeline edge

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String edgeId = "edgeId_example"; // String | Edge ID
    try {
      RoutesV3SchemaStateResponse result = apiInstance.getSchemaState(organizationId, pipelineId, edgeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#getSchemaState");
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
| **edgeId** | **String**| Edge ID | |

### Return type

[**RoutesV3SchemaStateResponse**](RoutesV3SchemaStateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current schema state |  -  |
| **404** | Schema state not found |  -  |
| **500** | Internal server error |  -  |

<a id="listPipelines"></a>
# **listPipelines**
> ModelsPipelineList listPipelines(organizationId, limit, offset, includeStatus)

List pipelines

List pipelines

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    Boolean includeStatus = true; // Boolean | Include the status of the pipeline nodes
    try {
      ModelsPipelineList result = apiInstance.listPipelines(organizationId, limit, offset, includeStatus);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#listPipelines");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |
| **includeStatus** | **Boolean**| Include the status of the pipeline nodes | [optional] |

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of pipelines |  -  |
| **400** | Invalid limit or offset |  -  |
| **500** | Failed to list pipelines |  -  |

<a id="listPipelinesV1"></a>
# **listPipelinesV1**
> ModelsPipelineList listPipelinesV1(organizationId, limit, offset)

List pipelines

List pipelines

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsPipelineList result = apiInstance.listPipelinesV1(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#listPipelinesV1");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**ModelsPipelineList**](ModelsPipelineList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of pipelines |  -  |
| **400** | Invalid limit or offset |  -  |
| **500** | Failed to list pipelines |  -  |

<a id="listSchemaHistory"></a>
# **listSchemaHistory**
> List&lt;RoutesV3SchemaHistoryEntryResponse&gt; listSchemaHistory(organizationId, pipelineId, edgeId)

List schema history

List schema drift events for a pipeline edge

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String edgeId = "edgeId_example"; // String | Edge ID
    try {
      List<RoutesV3SchemaHistoryEntryResponse> result = apiInstance.listSchemaHistory(organizationId, pipelineId, edgeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#listSchemaHistory");
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
| **edgeId** | **String**| Edge ID | |

### Return type

[**List&lt;RoutesV3SchemaHistoryEntryResponse&gt;**](RoutesV3SchemaHistoryEntryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schema history |  -  |
| **500** | Internal server error |  -  |

<a id="purgePipeline"></a>
# **purgePipeline**
> ModelsPipelinePurgeResponse purgePipeline(organizationId, pipelineId)

Purge pipeline data

Purge all messages from a pipeline&#39;s NATS stream

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    try {
      ModelsPipelinePurgeResponse result = apiInstance.purgePipeline(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#purgePipeline");
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

### Return type

[**ModelsPipelinePurgeResponse**](ModelsPipelinePurgeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Purge completed |  -  |
| **403** | Insufficient permissions |  -  |
| **404** | Pipeline not found |  -  |
| **500** | Operator returned an error or NATS transport failed |  -  |
| **504** | No leaf operator answered (pipeline not scheduled) |  -  |

<a id="purgePipelineNode"></a>
# **purgePipelineNode**
> ModelsPipelinePurgeResponse purgePipelineNode(organizationId, pipelineId, nodeId)

Purge pipeline node data

Purge messages destined for a specific pipeline node

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String nodeId = "nodeId_example"; // String | Node ID
    try {
      ModelsPipelinePurgeResponse result = apiInstance.purgePipelineNode(organizationId, pipelineId, nodeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#purgePipelineNode");
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

### Return type

[**ModelsPipelinePurgeResponse**](ModelsPipelinePurgeResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Purge completed |  -  |
| **403** | Insufficient permissions |  -  |
| **404** | Pipeline not found |  -  |
| **500** | Operator returned an error or NATS transport failed |  -  |
| **504** | No leaf operator answered (pipeline not scheduled) |  -  |

<a id="resetSchemaState"></a>
# **resetSchemaState**
> resetSchemaState(organizationId, pipelineId, edgeId)

Reset schema state

Delete the current schema state for an edge and signal the sidecar to restart in learning mode

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String edgeId = "edgeId_example"; // String | Edge ID
    try {
      apiInstance.resetSchemaState(organizationId, pipelineId, edgeId);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#resetSchemaState");
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
| **edgeId** | **String**| Edge ID | |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Schema state reset successfully |  -  |
| **500** | Internal server error |  -  |

<a id="triggerPipeline"></a>
# **triggerPipeline**
> String triggerPipeline(organizationId, pipelineId)

Trigger pipeline manually

Manually trigger a cron-scheduled pipeline to run

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    try {
      String result = apiInstance.triggerPipeline(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#triggerPipeline");
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline triggered successfully |  -  |
| **400** | Invalid request or pipeline not cron-based |  -  |
| **403** | Insufficient permissions |  -  |
| **404** | Pipeline not found |  -  |
| **500** | Internal server error |  -  |

<a id="updatePipeline"></a>
# **updatePipeline**
> ModelsPipelineConfigV2 updatePipeline(organizationId, pipelineId, updatePipelineRequest)

Update pipeline

Update an existing pipeline with the specified configuration

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    UpdatePipelineRequest updatePipelineRequest = new UpdatePipelineRequest(); // UpdatePipelineRequest | Request body for updating a pipeline
    try {
      ModelsPipelineConfigV2 result = apiInstance.updatePipeline(organizationId, pipelineId, updatePipelineRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#updatePipeline");
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
| **updatePipelineRequest** | [**UpdatePipelineRequest**](UpdatePipelineRequest.md)| Request body for updating a pipeline | |

### Return type

[**ModelsPipelineConfigV2**](ModelsPipelineConfigV2.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update pipeline |  -  |

<a id="updatePipelineEdge"></a>
# **updatePipelineEdge**
> updatePipelineEdge(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest)

Update pipeline edge

Enable or disable a pipeline edge

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    String edgeId = "edgeId_example"; // String | Edge ID
    UpdatePipelineEdgeRequest updatePipelineEdgeRequest = new UpdatePipelineEdgeRequest(); // UpdatePipelineEdgeRequest | Request body
    try {
      apiInstance.updatePipelineEdge(organizationId, pipelineId, edgeId, updatePipelineEdgeRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#updatePipelineEdge");
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
| **edgeId** | **String**| Edge ID | |
| **updatePipelineEdgeRequest** | [**UpdatePipelineEdgeRequest**](UpdatePipelineEdgeRequest.md)| Request body | |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Edge updated successfully |  -  |
| **400** | Invalid JSON request body |  -  |
| **404** | Edge not found in pipeline |  -  |
| **500** | Failed to update pipeline edge |  -  |

<a id="updatePipelineV1"></a>
# **updatePipelineV1**
> ModelsPipeline updatePipelineV1(organizationId, pipelineId, updatePipelineV1Request)

Update pipeline

Update pipeline

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PipelinesApi;

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

    PipelinesApi apiInstance = new PipelinesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String pipelineId = "pipelineId_example"; // String | Pipeline ID
    UpdatePipelineV1Request updatePipelineV1Request = new UpdatePipelineV1Request(); // UpdatePipelineV1Request | Request body for updating a pipeline
    try {
      ModelsPipeline result = apiInstance.updatePipelineV1(organizationId, pipelineId, updatePipelineV1Request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#updatePipelineV1");
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
| **updatePipelineV1Request** | [**UpdatePipelineV1Request**](UpdatePipelineV1Request.md)| Request body for updating a pipeline | |

### Return type

[**ModelsPipeline**](ModelsPipeline.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for updating a pipeline |  -  |
| **400** | Invalid JSON request body |  -  |
| **500** | Failed to update pipeline |  -  |

