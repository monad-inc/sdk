# OrganizationsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createChildOrganization**](OrganizationsApi.md#createChildOrganization) | **POST** /v3/{organization_id}/organizations | Create child organization (team) |
| [**createOrganization**](OrganizationsApi.md#createOrganization) | **POST** /v1/organizations | Create organization |
| [**deleteChildOrganization**](OrganizationsApi.md#deleteChildOrganization) | **DELETE** /v3/{organization_id}/organizations/{child_organization_id} | Delete child organization (team) |
| [**deleteOrganization**](OrganizationsApi.md#deleteOrganization) | **DELETE** /v1/organizations/{organization_id} | Delete organization |
| [**getStorageTypeSummaryByType**](OrganizationsApi.md#getStorageTypeSummaryByType) | **GET** /v2/{organization_id}/metrics/storage-types/{storage_type}/summary | Get storage type cost summary by type |
| [**listChildOrganizations**](OrganizationsApi.md#listChildOrganizations) | **GET** /v3/{organization_id}/organizations | List child organizations (teams) |
| [**listUserOrganizations**](OrganizationsApi.md#listUserOrganizations) | **GET** /v1/organizations | List organizations for user |
| [**updateChildOrganization**](OrganizationsApi.md#updateChildOrganization) | **PATCH** /v3/{organization_id}/organizations/{child_organization_id} | Update child organization (team) |
| [**updateOrganization**](OrganizationsApi.md#updateOrganization) | **PATCH** /v1/organizations/{organization_id} | Update organization |


<a id="createChildOrganization"></a>
# **createChildOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization createChildOrganization(organizationId, createChildOrganizationRequest)

Create child organization (team)

Create a new child organization under the given parent organization. Known as a \&quot;team\&quot; in the UI.

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
    String organizationId = "organizationId_example"; // String | Parent Organization ID
    CreateChildOrganizationRequest createChildOrganizationRequest = new CreateChildOrganizationRequest(); // CreateChildOrganizationRequest | Request body
    try {
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.createChildOrganization(organizationId, createChildOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#createChildOrganization");
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
| **organizationId** | **String**| Parent Organization ID | |
| **createChildOrganizationRequest** | [**CreateChildOrganizationRequest**](CreateChildOrganizationRequest.md)| Request body | |

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
| **200** | Created child organization |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

<a id="createOrganization"></a>
# **createOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization createOrganization(routesCreateOrganizationRequest)

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
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.createOrganization(routesCreateOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#createOrganization");
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

<a id="deleteChildOrganization"></a>
# **deleteChildOrganization**
> deleteChildOrganization(organizationId, childOrganizationId)

Delete child organization (team)

Delete a child organization under the given parent organization. Known as a \&quot;team\&quot; in the UI.

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
    String organizationId = "organizationId_example"; // String | Parent Organization ID
    String childOrganizationId = "childOrganizationId_example"; // String | Child Organization ID
    try {
      apiInstance.deleteChildOrganization(organizationId, childOrganizationId);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#deleteChildOrganization");
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
| **organizationId** | **String**| Parent Organization ID | |
| **childOrganizationId** | **String**| Child Organization ID | |

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
| **204** | Child organization deleted successfully |  -  |
| **404** | Child organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="deleteOrganization"></a>
# **deleteOrganization**
> Object deleteOrganization(organizationId)

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
      Object result = apiInstance.deleteOrganization(organizationId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#deleteOrganization");
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

<a id="getStorageTypeSummaryByType"></a>
# **getStorageTypeSummaryByType**
> ModelsStorageTypeSummaryResponse getStorageTypeSummaryByType(organizationId, storageType, start, end, billingType, pipelineId)

Get storage type cost summary by type

Get aggregated cost and usage summary for a specific storage type

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
    String storageType = "storageType_example"; // String | Storage type (e.g., s3, dev-null, bigquery)
    String start = "start_example"; // String | ISO3339 start time, default 6 hours ago
    String end = "end_example"; // String | ISO3339 end time, default now
    String billingType = "billingType_example"; // String | Filter by billing type (billable|non_billable)
    String pipelineId = "pipelineId_example"; // String | Filter to specific pipeline
    try {
      ModelsStorageTypeSummaryResponse result = apiInstance.getStorageTypeSummaryByType(organizationId, storageType, start, end, billingType, pipelineId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#getStorageTypeSummaryByType");
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
| **404** | Organization or storage type not found |  -  |
| **500** | Internal server error |  -  |

<a id="listChildOrganizations"></a>
# **listChildOrganizations**
> ModelsUserOrganizationList listChildOrganizations(organizationId, limit, offset, nameSearch)

List child organizations (teams)

List child organizations for the given parent organization. These are surfaced as \&quot;teams\&quot; in the UI.

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
    String organizationId = "organizationId_example"; // String | Parent Organization ID
    Integer limit = 56; // Integer | Limit the number of organizations returned (default: 10)
    Integer offset = 56; // Integer | Offset the organizations returned (default: 0)
    String nameSearch = "nameSearch_example"; // String | If provided, only return organizations with names that contain the search string
    try {
      ModelsUserOrganizationList result = apiInstance.listChildOrganizations(organizationId, limit, offset, nameSearch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#listChildOrganizations");
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
| **organizationId** | **String**| Parent Organization ID | |
| **limit** | **Integer**| Limit the number of organizations returned (default: 10) | [optional] |
| **offset** | **Integer**| Offset the organizations returned (default: 0) | [optional] |
| **nameSearch** | **String**| If provided, only return organizations with names that contain the search string | [optional] |

### Return type

[**ModelsUserOrganizationList**](ModelsUserOrganizationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of child organizations |  -  |
| **500** | Internal server error |  -  |

<a id="listUserOrganizations"></a>
# **listUserOrganizations**
> ModelsOrganizationList listUserOrganizations(limit, offset, noChildren, parentOrganizationId, nameSearch)

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
    Boolean noChildren = true; // Boolean | If true, only return organizations that are directly associated with the user, not child organizations (default: false)
    String parentOrganizationId = "parentOrganizationId_example"; // String | If provided, only return organizations that are children of the specified parent organization
    String nameSearch = "nameSearch_example"; // String | If provided, only return organizations with names that contain the search string
    try {
      ModelsOrganizationList result = apiInstance.listUserOrganizations(limit, offset, noChildren, parentOrganizationId, nameSearch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#listUserOrganizations");
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
| **noChildren** | **Boolean**| If true, only return organizations that are directly associated with the user, not child organizations (default: false) | [optional] |
| **parentOrganizationId** | **String**| If provided, only return organizations that are children of the specified parent organization | [optional] |
| **nameSearch** | **String**| If provided, only return organizations with names that contain the search string | [optional] |

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

<a id="updateChildOrganization"></a>
# **updateChildOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization updateChildOrganization(organizationId, childOrganizationId, updateChildOrganizationRequest)

Update child organization (team)

Update a child organization under the given parent organization. Known as a \&quot;team\&quot; in the UI.

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
    String organizationId = "organizationId_example"; // String | Parent Organization ID
    String childOrganizationId = "childOrganizationId_example"; // String | Child Organization ID
    UpdateChildOrganizationRequest updateChildOrganizationRequest = new UpdateChildOrganizationRequest(); // UpdateChildOrganizationRequest | Request body
    try {
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.updateChildOrganization(organizationId, childOrganizationId, updateChildOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#updateChildOrganization");
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
| **organizationId** | **String**| Parent Organization ID | |
| **childOrganizationId** | **String**| Child Organization ID | |
| **updateChildOrganizationRequest** | [**UpdateChildOrganizationRequest**](UpdateChildOrganizationRequest.md)| Request body | |

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
| **200** | Updated child organization |  -  |
| **400** | Invalid request body |  -  |
| **404** | Child organization not found |  -  |
| **500** | Internal server error |  -  |

<a id="updateOrganization"></a>
# **updateOrganization**
> GithubComMonadIncCorePkgTypesModelsOrganization updateOrganization(organizationId, routesUpdateOrganizationRequest)

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
      GithubComMonadIncCorePkgTypesModelsOrganization result = apiInstance.updateOrganization(organizationId, routesUpdateOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationsApi#updateOrganization");
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

