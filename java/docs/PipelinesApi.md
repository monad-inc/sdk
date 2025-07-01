# PipelinesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdPipelinesGet**](PipelinesApi.md#v1OrganizationIdPipelinesGet) | **GET** /v1/{organization_id}/pipelines | List pipelines |
| [**v1OrganizationIdPipelinesPipelineIdDelete**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdDelete) | **DELETE** /v1/{organization_id}/pipelines/{pipeline_id} | Delete pipeline |
| [**v1OrganizationIdPipelinesPipelineIdGet**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdGet) | **GET** /v1/{organization_id}/pipelines/{pipeline_id} | Get pipeline |
| [**v1OrganizationIdPipelinesPipelineIdPatch**](PipelinesApi.md#v1OrganizationIdPipelinesPipelineIdPatch) | **PATCH** /v1/{organization_id}/pipelines/{pipeline_id} | Update pipeline |
| [**v2OrganizationIdPipelineSummaryGet**](PipelinesApi.md#v2OrganizationIdPipelineSummaryGet) | **GET** /v2/{organization_id}/pipeline_summary | Get status of all pipelines for an organization |
| [**v2OrganizationIdPipelinesGet**](PipelinesApi.md#v2OrganizationIdPipelinesGet) | **GET** /v2/{organization_id}/pipelines | List pipelines |
| [**v2OrganizationIdPipelinesMetricsGet**](PipelinesApi.md#v2OrganizationIdPipelinesMetricsGet) | **GET** /v2/{organization_id}/pipelines/metrics | Get metrics for specific pipelines |
| [**v2OrganizationIdPipelinesPipelineIdDelete**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdDelete) | **DELETE** /v2/{organization_id}/pipelines/{pipeline_id} | Delete pipeline |
| [**v2OrganizationIdPipelinesPipelineIdGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id} | Get pipeline configuration |
| [**v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/{node_id}/metrics | Get pipeline node metrics |
| [**v2OrganizationIdPipelinesPipelineIdPatch**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdPatch) | **PATCH** /v2/{organization_id}/pipelines/{pipeline_id} | Update pipeline |
| [**v2OrganizationIdPipelinesPipelineIdStatusGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdStatusGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status | Get pipeline status |
| [**v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet) | **GET** /v2/{organization_id}/pipelines/{pipeline_id}/status/{node_id} | Get pipeline node status |
| [**v2OrganizationIdPipelinesPipelineIdTriggerPost**](PipelinesApi.md#v2OrganizationIdPipelinesPipelineIdTriggerPost) | **POST** /v2/{organization_id}/pipelines/{pipeline_id}/trigger | Trigger pipeline manually |
| [**v2OrganizationIdPipelinesPost**](PipelinesApi.md#v2OrganizationIdPipelinesPost) | **POST** /v2/{organization_id}/pipelines | Create pipeline |
| [**v2OrganizationIdPipelinesStatusesGet**](PipelinesApi.md#v2OrganizationIdPipelinesStatusesGet) | **GET** /v2/{organization_id}/pipelines/statuses | Get pipeline status |


<a id="v1OrganizationIdPipelinesGet"></a>
# **v1OrganizationIdPipelinesGet**
> ModelsPipelineList v1OrganizationIdPipelinesGet(organizationId, limit, offset)

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
      ModelsPipelineList result = apiInstance.v1OrganizationIdPipelinesGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v1OrganizationIdPipelinesGet");
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

<a id="v1OrganizationIdPipelinesPipelineIdDelete"></a>
# **v1OrganizationIdPipelinesPipelineIdDelete**
> String v1OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId)

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
      String result = apiInstance.v1OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v1OrganizationIdPipelinesPipelineIdDelete");
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

<a id="v1OrganizationIdPipelinesPipelineIdGet"></a>
# **v1OrganizationIdPipelinesPipelineIdGet**
> ModelsPipeline v1OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId)

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
      ModelsPipeline result = apiInstance.v1OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v1OrganizationIdPipelinesPipelineIdGet");
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

<a id="v1OrganizationIdPipelinesPipelineIdPatch"></a>
# **v1OrganizationIdPipelinesPipelineIdPatch**
> ModelsPipeline v1OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesUpdatePipelineRequest)

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
    RoutesUpdatePipelineRequest routesUpdatePipelineRequest = new RoutesUpdatePipelineRequest(); // RoutesUpdatePipelineRequest | Request body for updating a pipeline
    try {
      ModelsPipeline result = apiInstance.v1OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesUpdatePipelineRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v1OrganizationIdPipelinesPipelineIdPatch");
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
| **routesUpdatePipelineRequest** | [**RoutesUpdatePipelineRequest**](RoutesUpdatePipelineRequest.md)| Request body for updating a pipeline | |

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

<a id="v2OrganizationIdPipelineSummaryGet"></a>
# **v2OrganizationIdPipelineSummaryGet**
> RoutesV2GetOrganizationSummaryResponse v2OrganizationIdPipelineSummaryGet(organizationId, start, end)

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
      RoutesV2GetOrganizationSummaryResponse result = apiInstance.v2OrganizationIdPipelineSummaryGet(organizationId, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelineSummaryGet");
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

<a id="v2OrganizationIdPipelinesGet"></a>
# **v2OrganizationIdPipelinesGet**
> ModelsPipelineList v2OrganizationIdPipelinesGet(organizationId, limit, offset)

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
      ModelsPipelineList result = apiInstance.v2OrganizationIdPipelinesGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesGet");
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

<a id="v2OrganizationIdPipelinesMetricsGet"></a>
# **v2OrganizationIdPipelinesMetricsGet**
> RoutesV2MetricsResponse v2OrganizationIdPipelinesMetricsGet(organizationId, pipelineIds, resolution)

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
      RoutesV2MetricsResponse result = apiInstance.v2OrganizationIdPipelinesMetricsGet(organizationId, pipelineIds, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesMetricsGet");
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

<a id="v2OrganizationIdPipelinesPipelineIdDelete"></a>
# **v2OrganizationIdPipelinesPipelineIdDelete**
> String v2OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId)

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
      String result = apiInstance.v2OrganizationIdPipelinesPipelineIdDelete(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdDelete");
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

<a id="v2OrganizationIdPipelinesPipelineIdGet"></a>
# **v2OrganizationIdPipelinesPipelineIdGet**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId)

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
    try {
      ModelsPipelineConfigV2 result = apiInstance.v2OrganizationIdPipelinesPipelineIdGet(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdGet");
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

<a id="v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet"></a>
# **v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet**
> ModelsPipelineNodeMetrics v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId, pipelineId, nodeId, metric, start, end, resolution)

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
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default 15m
    try {
      ModelsPipelineNodeMetrics result = apiInstance.v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet(organizationId, pipelineId, nodeId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdNodeIdMetricsGet");
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
| **metric** | **String**| Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records) | |
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **resolution** | **String**| Resolution of the data, default 15m | [optional] |

### Return type

[**ModelsPipelineNodeMetrics**](ModelsPipelineNodeMetrics.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pipeline node metrics |  -  |
| **500** | Failed to get node |  -  |

<a id="v2OrganizationIdPipelinesPipelineIdPatch"></a>
# **v2OrganizationIdPipelinesPipelineIdPatch**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesV2UpdatePipelineRequest)

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
    RoutesV2UpdatePipelineRequest routesV2UpdatePipelineRequest = new RoutesV2UpdatePipelineRequest(); // RoutesV2UpdatePipelineRequest | Request body for updating a pipeline
    try {
      ModelsPipelineConfigV2 result = apiInstance.v2OrganizationIdPipelinesPipelineIdPatch(organizationId, pipelineId, routesV2UpdatePipelineRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdPatch");
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
| **routesV2UpdatePipelineRequest** | [**RoutesV2UpdatePipelineRequest**](RoutesV2UpdatePipelineRequest.md)| Request body for updating a pipeline | |

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

<a id="v2OrganizationIdPipelinesPipelineIdStatusGet"></a>
# **v2OrganizationIdPipelinesPipelineIdStatusGet**
> ModelsPipelineStatus v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId, pipelineId, metrics, start, end)

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
    List<String> metrics = Arrays.asList(); // List<String> | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
    String start = "start_example"; // String | ISO3339 start time, default 24 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    try {
      ModelsPipelineStatus result = apiInstance.v2OrganizationIdPipelinesPipelineIdStatusGet(organizationId, pipelineId, metrics, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdStatusGet");
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
| **metrics** | [**List&lt;String&gt;**](String.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | [optional] |
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

<a id="v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet"></a>
# **v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet**
> ModelsPipelineNodeStatus v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId, pipelineId, nodeId, metrics, start, end)

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
    List<String> metrics = Arrays.asList(); // List<String> | Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records)
    String start = "start_example"; // String | ISO3339 start time, default 24 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    try {
      ModelsPipelineNodeStatus result = apiInstance.v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet(organizationId, pipelineId, nodeId, metrics, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdStatusNodeIdGet");
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
| **metrics** | [**List&lt;String&gt;**](String.md)| Metrics to retrieve (all|health|ingress_bytes|egress_bytes|ingress_records|egress_records) | [optional] |
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

<a id="v2OrganizationIdPipelinesPipelineIdTriggerPost"></a>
# **v2OrganizationIdPipelinesPipelineIdTriggerPost**
> String v2OrganizationIdPipelinesPipelineIdTriggerPost(organizationId, pipelineId)

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
      String result = apiInstance.v2OrganizationIdPipelinesPipelineIdTriggerPost(organizationId, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPipelineIdTriggerPost");
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

<a id="v2OrganizationIdPipelinesPost"></a>
# **v2OrganizationIdPipelinesPost**
> ModelsPipelineConfigV2 v2OrganizationIdPipelinesPost(organizationId, routesV2CreatePipelineRequest)

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
    RoutesV2CreatePipelineRequest routesV2CreatePipelineRequest = new RoutesV2CreatePipelineRequest(); // RoutesV2CreatePipelineRequest | Request body for creating a pipeline
    try {
      ModelsPipelineConfigV2 result = apiInstance.v2OrganizationIdPipelinesPost(organizationId, routesV2CreatePipelineRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesPost");
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
| **routesV2CreatePipelineRequest** | [**RoutesV2CreatePipelineRequest**](RoutesV2CreatePipelineRequest.md)| Request body for creating a pipeline | |

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

<a id="v2OrganizationIdPipelinesStatusesGet"></a>
# **v2OrganizationIdPipelinesStatusesGet**
> List&lt;RoutesV2PipelineWithStatus&gt; v2OrganizationIdPipelinesStatusesGet(organizationId, limit, offset, start, end)

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
      List<RoutesV2PipelineWithStatus> result = apiInstance.v2OrganizationIdPipelinesStatusesGet(organizationId, limit, offset, start, end);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PipelinesApi#v2OrganizationIdPipelinesStatusesGet");
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

