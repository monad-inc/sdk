# OrganizationsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationsGet**](OrganizationsApi.md#v1OrganizationsGet) | **GET** /v1/organizations | List organizations for user |
| [**v1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#v1OrganizationsOrganizationIdDelete) | **DELETE** /v1/organizations/{organization_id} | Delete organization |
| [**v1OrganizationsOrganizationIdPatch**](OrganizationsApi.md#v1OrganizationsOrganizationIdPatch) | **PATCH** /v1/organizations/{organization_id} | Update organization |
| [**v1OrganizationsPost**](OrganizationsApi.md#v1OrganizationsPost) | **POST** /v1/organizations | Create organization |
| [**v2OrganizationIdMetricsGet**](OrganizationsApi.md#v2OrganizationIdMetricsGet) | **GET** /v2/{organization_id}/metrics | Get organization metrics |


<a id="v1OrganizationsGet"></a>
# **v1OrganizationsGet**
> ModelsOrganizationList v1OrganizationsGet(limit, offset)

List organizations for user

List organizations for user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsApi;

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

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    Integer limit = 56; // Integer | Limit the number of organizations returned (default: 10)
    Integer offset = 56; // Integer | Offset the organizations returned (default: 0)
    try {
      ModelsOrganizationList result = apiInstance.v1OrganizationsGet(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#v1OrganizationsGet");
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
| **limit** | **Integer**| Limit the number of organizations returned (default: 10) | [optional] |
| **offset** | **Integer**| Offset the organizations returned (default: 0) | [optional] |

### Return type

[**ModelsOrganizationList**](ModelsOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for listing organizations |  -  |

<a id="v1OrganizationsOrganizationIdDelete"></a>
# **v1OrganizationsOrganizationIdDelete**
> Object v1OrganizationsOrganizationIdDelete(organizationId)

Delete organization

Delete organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsApi;

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

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    try {
      Object result = apiInstance.v1OrganizationsOrganizationIdDelete(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#v1OrganizationsOrganizationIdDelete");
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

<a id="v1OrganizationsOrganizationIdPatch"></a>
# **v1OrganizationsOrganizationIdPatch**
> GithubComMonadIncCorePkgTypesModelsOrganization v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest)

Update organization

Update organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsApi;

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

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesUpdateOrganizationRequest routesUpdateOrganizationRequest = new RoutesUpdateOrganizationRequest(); // RoutesUpdateOrganizationRequest | Request body for updating an organization
    try {
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.v1OrganizationsOrganizationIdPatch(organizationId, routesUpdateOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#v1OrganizationsOrganizationIdPatch");
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
| **routesUpdateOrganizationRequest** | [**RoutesUpdateOrganizationRequest**](RoutesUpdateOrganizationRequest.md)| Request body for updating an organization | |

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for updating an organization |  -  |

<a id="v1OrganizationsPost"></a>
# **v1OrganizationsPost**
> GithubComMonadIncCorePkgTypesModelsOrganization v1OrganizationsPost(routesCreateOrganizationRequest)

Create organization

Create organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationsApi;

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

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    RoutesCreateOrganizationRequest routesCreateOrganizationRequest = new RoutesCreateOrganizationRequest(); // RoutesCreateOrganizationRequest | Request body for creating an organization
    try {
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.v1OrganizationsPost(routesCreateOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#v1OrganizationsPost");
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
| **routesCreateOrganizationRequest** | [**RoutesCreateOrganizationRequest**](RoutesCreateOrganizationRequest.md)| Request body for creating an organization | |

### Return type

[**GithubComMonadIncCorePkgTypesModelsOrganization**](GithubComMonadIncCorePkgTypesModelsOrganization.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response body for creating an organization |  -  |

<a id="v2OrganizationIdMetricsGet"></a>
# **v2OrganizationIdMetricsGet**
> ModelsPipelineMetrics v2OrganizationIdMetricsGet(organizationId, metric, start, end, resolution)

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
import org.openapitools.client.api.OrganizationsApi;

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

    OrganizationsApi apiInstance = new OrganizationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String metric = "metric_example"; // String | Metric to retrieve (ingress_bytes|egress_bytes|ingress_records|egress_records|errors)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String resolution = "resolution_example"; // String | Resolution of the data, default determined by time window
    try {
      ModelsPipelineMetrics result = apiInstance.v2OrganizationIdMetricsGet(organizationId, metric, start, end, resolution);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#v2OrganizationIdMetricsGet");
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

