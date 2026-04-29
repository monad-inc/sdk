# OrganizationsStorageCostApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStorageTypeCost**](OrganizationsStorageCostApi.md#getStorageTypeCost) | **GET** /v2/{organization_id}/storage-type-cost | Get storage type cost |
| [**getStorageTypeDetails**](OrganizationsStorageCostApi.md#getStorageTypeDetails) | **GET** /v2/{organization_id}/metrics/storage-types/details | Get storage type output details |
| [**getStorageTypeMetrics**](OrganizationsStorageCostApi.md#getStorageTypeMetrics) | **GET** /v2/{organization_id}/metrics/storage-types | Get storage type metrics |
| [**getStorageTypeSummary**](OrganizationsStorageCostApi.md#getStorageTypeSummary) | **GET** /v2/{organization_id}/metrics/storage-types/summary | Get storage type cost summary |
| [**setStorageTypeCost**](OrganizationsStorageCostApi.md#setStorageTypeCost) | **PUT** /v2/{organization_id}/storage-type-cost | Set storage type cost |
| [**v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**](OrganizationsStorageCostApi.md#v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/details | Get storage type output details by type |


<a id="getStorageTypeCost"></a>
# **getStorageTypeCost**
> ModelsStorageTypeCostConfig getStorageTypeCost(organizationId)

Get storage type cost

Get per-organization cost configuration for storage types

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      ModelsStorageTypeCostConfig result = apiInstance.getStorageTypeCost(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#getStorageTypeCost");
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

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage type cost |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="getStorageTypeDetails"></a>
# **getStorageTypeDetails**
> RoutesV2StorageTypeDetailsResponse getStorageTypeDetails(organizationId, start, end, billingType, pipelineId)

Get storage type output details

Get detailed metrics for each individual output, including egress and associated input

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String billingType = "billingType_example"; // String | Filter by billing type (billable|non_billable)
    String pipelineId = "pipelineId_example"; // String | Filter to specific pipeline
    try {
      RoutesV2StorageTypeDetailsResponse result = apiInstance.getStorageTypeDetails(organizationId, start, end, billingType, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#getStorageTypeDetails");
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
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **billingType** | **String**| Filter by billing type (billable|non_billable) | [optional] |
| **pipelineId** | **String**| Filter to specific pipeline | [optional] |

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage type output details |  -  |
| **400** | Bad request |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="getStorageTypeMetrics"></a>
# **getStorageTypeMetrics**
> ModelsStorageTypeTimeSeriesResponse getStorageTypeMetrics(organizationId, metric, start, end, resolution, billingType, pipelineId)

Get storage type metrics

Get time series metrics grouped by storage type for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String metric = "metric_example"; // String | Metric to retrieve (egress_bytes|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    String billingType = "billingType_example"; // String | Filter by billing type (billable|non_billable)
    String pipelineId = "pipelineId_example"; // String | Filter to specific pipeline
    try {
      ModelsStorageTypeTimeSeriesResponse result = apiInstance.getStorageTypeMetrics(organizationId, metric, start, end, resolution, billingType, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#getStorageTypeMetrics");
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
| **metric** | **String**| Metric to retrieve (egress_bytes|egress_records|errors) | |
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **resolution** | **String**| Resolution of the data, default determined by time window | [optional] |
| **billingType** | **String**| Filter by billing type (billable|non_billable) | [optional] |
| **pipelineId** | **String**| Filter to specific pipeline | [optional] |

### Return type

[**ModelsStorageTypeTimeSeriesResponse**](ModelsStorageTypeTimeSeriesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage type metrics |  -  |
| **400** | Bad request |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="getStorageTypeSummary"></a>
# **getStorageTypeSummary**
> ModelsStorageTypeSummaryResponse getStorageTypeSummary(organizationId, start, end, billingType, pipelineId)

Get storage type cost summary

Get aggregated cost and usage summary by storage type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String billingType = "billingType_example"; // String | Filter by billing type (billable|non_billable)
    String pipelineId = "pipelineId_example"; // String | Filter to specific pipeline
    try {
      ModelsStorageTypeSummaryResponse result = apiInstance.getStorageTypeSummary(organizationId, start, end, billingType, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#getStorageTypeSummary");
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
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **billingType** | **String**| Filter by billing type (billable|non_billable) | [optional] |
| **pipelineId** | **String**| Filter to specific pipeline | [optional] |

### Return type

[**ModelsStorageTypeSummaryResponse**](ModelsStorageTypeSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage type cost summary |  -  |
| **400** | Bad request |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="setStorageTypeCost"></a>
# **setStorageTypeCost**
> ModelsStorageTypeCostConfig setStorageTypeCost(organizationId, setStorageTypeCostRequest)

Set storage type cost

Update per-organization cost configuration for storage types

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    SetStorageTypeCostRequest setStorageTypeCostRequest = new SetStorageTypeCostRequest(); // SetStorageTypeCostRequest | Cost configuration
    try {
      ModelsStorageTypeCostConfig result = apiInstance.setStorageTypeCost(organizationId, setStorageTypeCostRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#setStorageTypeCost");
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
| **setStorageTypeCostRequest** | [**SetStorageTypeCostRequest**](SetStorageTypeCostRequest.md)| Cost configuration | |

### Return type

[**ModelsStorageTypeCostConfig**](ModelsStorageTypeCostConfig.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated storage type cost |  -  |
| **400** | Bad request |  -  |
| **404** | Organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet"></a>
# **v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet**
> RoutesV2StorageTypeDetailsResponse v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId, storageType, start, end, billingType, pipelineId)

Get storage type output details by type

Get detailed metrics for each individual output of a specific storage type

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsStorageCostApi;

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

    OrganizationsStorageCostApi apiInstance = new OrganizationsStorageCostApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String storageType = "storageType_example"; // String | Storage type (e.g., s3, dev-null, bigquery)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String billingType = "billingType_example"; // String | Filter by billing type (billable|non_billable)
    String pipelineId = "pipelineId_example"; // String | Filter to specific pipeline
    try {
      RoutesV2StorageTypeDetailsResponse result = apiInstance.v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet(organizationId, storageType, start, end, billingType, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsStorageCostApi#v2OrganizationIdMetricsStorageTypesStorageTypeDetailsGet");
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
| **storageType** | **String**| Storage type (e.g., s3, dev-null, bigquery) | |
| **start** | **String**| ISO3339 start time, default 6 hours ago | [optional] |
| **end** | **String**| ISO3339 end time, default now | [optional] |
| **billingType** | **String**| Filter by billing type (billable|non_billable) | [optional] |
| **pipelineId** | **String**| Filter to specific pipeline | [optional] |

### Return type

[**RoutesV2StorageTypeDetailsResponse**](RoutesV2StorageTypeDetailsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Storage type output details |  -  |
| **400** | Bad request |  -  |
| **404** | Organization or storage type not found |  -  |
| **500** | Internal server error |  -  |

