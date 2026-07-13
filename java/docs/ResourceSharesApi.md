# ResourceSharesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createResourceShares**](ResourceSharesApi.md#createResourceShares) | **POST** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Share a resource |
| [**listResourceShareTargets**](ResourceSharesApi.md#listResourceShareTargets) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id}/organizations | List a resource&#39;s share targets (all direct child orgs) |
| [**listResourceShares**](ResourceSharesApi.md#listResourceShares) | **GET** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | List a resource&#39;s shares |
| [**listSharedResources**](ResourceSharesApi.md#listSharedResources) | **GET** /v3/{organization_id}/resource_shares | List shared resources |
| [**unshareResource**](ResourceSharesApi.md#unshareResource) | **DELETE** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Unshare a resource |
| [**updateResourceShares**](ResourceSharesApi.md#updateResourceShares) | **PATCH** /v3/{organization_id}/resource_shares/{resource_type}/{resource_id} | Update a resource&#39;s shares |


<a id="createResourceShares"></a>
# **createResourceShares**
> ModelsResourceShareChangeSet createResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest)

Share a resource

Start sharing one resource with child organizations. The flat body takes two additive create inputs (share_organization_ids and/or all_current_children), may carry revoke_organization_ids, and may toggle the resource&#39;s auto-share policy via share_with_all_new_children (omit &#x3D; unchanged, true &#x3D; enable, false &#x3D; disable). Re-sharing existing targets is idempotent.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    String resourceType = "secret"; // String | Resource type
    String resourceId = "resourceId_example"; // String | Resource ID
    CreateResourceSharesRequest createResourceSharesRequest = new CreateResourceSharesRequest(); // CreateResourceSharesRequest | Share request
    try {
      ModelsResourceShareChangeSet result = apiInstance.createResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#createResourceShares");
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
| **organizationId** | **String**| Owner organization ID | |
| **resourceType** | **String**| Resource type | [enum: secret, component] |
| **resourceId** | **String**| Resource ID | |
| **createResourceSharesRequest** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md)| Share request | |

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Created and revoked shares |  -  |
| **400** | Invalid request |  -  |
| **403** | Missing resource_sharing:write permission |  -  |
| **409** | A revoked share is in use by the target organization |  -  |
| **500** | Internal server error |  -  |

<a id="listResourceShareTargets"></a>
# **listResourceShareTargets**
> ModelsResourceShareTargetList listResourceShareTargets(organizationId, resourceType, resourceId, search, shared, sortBy, order, limit, offset)

List a resource&#39;s share targets (all direct child orgs)

List every direct child organization of the owner for one resource, each annotated with whether the resource is shared to it (and whether the child is using it). Backs the share UI&#39;s per-team shared/not-shared toggles. Filterable by name and share state; sortable (shared-first by default, or by name); paginated.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    String resourceType = "secret"; // String | Resource type
    String resourceId = "resourceId_example"; // String | Resource ID
    String search = "search_example"; // String | Case-insensitive substring filter on child org name, slug, or id
    Boolean shared = true; // Boolean | Filter by share state: true = only shared, false = only not shared
    String sortBy = "name"; // String | Column to sort by; default puts shared rows first
    String order = "asc"; // String | Sort direction (used with sort_by)
    Integer limit = 10; // Integer | Page size
    Integer offset = 0; // Integer | Rows to skip
    try {
      ModelsResourceShareTargetList result = apiInstance.listResourceShareTargets(organizationId, resourceType, resourceId, search, shared, sortBy, order, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#listResourceShareTargets");
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
| **organizationId** | **String**| Owner organization ID | |
| **resourceType** | **String**| Resource type | [enum: secret, component] |
| **resourceId** | **String**| Resource ID | |
| **search** | **String**| Case-insensitive substring filter on child org name, slug, or id | [optional] |
| **shared** | **Boolean**| Filter by share state: true &#x3D; only shared, false &#x3D; only not shared | [optional] |
| **sortBy** | **String**| Column to sort by; default puts shared rows first | [optional] [enum: name, shared, shared_at, in_use] |
| **order** | **String**| Sort direction (used with sort_by) | [optional] [default to asc] [enum: asc, desc] |
| **limit** | **Integer**| Page size | [optional] [default to 10] |
| **offset** | **Integer**| Rows to skip | [optional] [default to 0] |

### Return type

[**ModelsResourceShareTargetList**](ModelsResourceShareTargetList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Direct child orgs annotated with share state |  -  |
| **400** | Invalid resource_type, sort_by, order, or shared value |  -  |
| **403** | Missing resource_sharing:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="listResourceShares"></a>
# **listResourceShares**
> ModelsResourceShareWithUsageList listResourceShares(organizationId, resourceType, resourceId)

List a resource&#39;s shares

List every per-child share of one resource, each annotated with whether the target organization is using it (in_use), plus whether the resource&#39;s policy auto-shares it with new children.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    String resourceType = "secret"; // String | Resource type
    String resourceId = "resourceId_example"; // String | Resource ID
    try {
      ModelsResourceShareWithUsageList result = apiInstance.listResourceShares(organizationId, resourceType, resourceId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#listResourceShares");
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
| **organizationId** | **String**| Owner organization ID | |
| **resourceType** | **String**| Resource type | [enum: secret, component] |
| **resourceId** | **String**| Resource ID | |

### Return type

[**ModelsResourceShareWithUsageList**](ModelsResourceShareWithUsageList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The resource&#39;s shares |  -  |
| **400** | Invalid resource_type |  -  |
| **403** | Missing resource_sharing:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="listSharedResources"></a>
# **listSharedResources**
> ModelsSharedResourceList listSharedResources(organizationId, limit, offset, resourceType)

List shared resources

List the resources this organization has shared with its child organizations, one entry per resource with its aggregated share summary and metadata. Owner view only.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    Integer limit = 56; // Integer | Page size (default: 10)
    Integer offset = 56; // Integer | Offset (default: 0)
    String resourceType = "secret"; // String | Filter by resource type
    try {
      ModelsSharedResourceList result = apiInstance.listSharedResources(organizationId, limit, offset, resourceType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#listSharedResources");
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
| **organizationId** | **String**| Owner organization ID | |
| **limit** | **Integer**| Page size (default: 10) | [optional] |
| **offset** | **Integer**| Offset (default: 0) | [optional] |
| **resourceType** | **String**| Filter by resource type | [optional] [enum: secret, component] |

### Return type

[**ModelsSharedResourceList**](ModelsSharedResourceList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of shared resources |  -  |
| **400** | Invalid query parameters |  -  |
| **403** | Missing resource_sharing:read permission |  -  |
| **500** | Internal server error |  -  |

<a id="unshareResource"></a>
# **unshareResource**
> ModelsResourceShareChangeSet unshareResource(organizationId, resourceType, resourceId)

Unshare a resource

Remove every per-child share of one resource and its share policy in a single transaction, returning the revoked set. Rejected with 409 if any current target organization is actively using the resource.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    String resourceType = "secret"; // String | Resource type
    String resourceId = "resourceId_example"; // String | Resource ID
    try {
      ModelsResourceShareChangeSet result = apiInstance.unshareResource(organizationId, resourceType, resourceId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#unshareResource");
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
| **organizationId** | **String**| Owner organization ID | |
| **resourceType** | **String**| Resource type | [enum: secret, component] |
| **resourceId** | **String**| Resource ID | |

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The revoked shares |  -  |
| **400** | Invalid resource_type |  -  |
| **403** | Missing resource_sharing:write permission |  -  |
| **409** | A share is in use by a target organization |  -  |
| **500** | Internal server error |  -  |

<a id="updateResourceShares"></a>
# **updateResourceShares**
> ModelsResourceShareChangeSet updateResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest)

Update a resource&#39;s shares

Apply per-child share additions and revocations to one resource in a single transaction, returning the before/after diff. Revoking a share that the target organization is actively using is rejected with 409.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.ResourceSharesApi;

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

    ResourceSharesApi apiInstance = new ResourceSharesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Owner organization ID
    String resourceType = "secret"; // String | Resource type
    String resourceId = "resourceId_example"; // String | Resource ID
    CreateResourceSharesRequest createResourceSharesRequest = new CreateResourceSharesRequest(); // CreateResourceSharesRequest | Share delta request
    try {
      ModelsResourceShareChangeSet result = apiInstance.updateResourceShares(organizationId, resourceType, resourceId, createResourceSharesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ResourceSharesApi#updateResourceShares");
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
| **organizationId** | **String**| Owner organization ID | |
| **resourceType** | **String**| Resource type | [enum: secret, component] |
| **resourceId** | **String**| Resource ID | |
| **createResourceSharesRequest** | [**CreateResourceSharesRequest**](CreateResourceSharesRequest.md)| Share delta request | |

### Return type

[**ModelsResourceShareChangeSet**](ModelsResourceShareChangeSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Created and revoked shares |  -  |
| **400** | Invalid request |  -  |
| **403** | Missing resource_sharing:write permission |  -  |
| **409** | A revoked share is in use by the target organization |  -  |
| **500** | Internal server error |  -  |

