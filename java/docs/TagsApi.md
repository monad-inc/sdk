# TagsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTag**](TagsApi.md#createTag) | **POST** /v3/{organization_id}/tags | Create a tag |
| [**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /v3/{organization_id}/tags/{tag_id} | Delete a tag |
| [**listTags**](TagsApi.md#listTags) | **GET** /v3/{organization_id}/tags | List tags |
| [**updateTag**](TagsApi.md#updateTag) | **PATCH** /v3/{organization_id}/tags/{tag_id} | Update a tag |


<a id="createTag"></a>
# **createTag**
> RoutesV3TagResponse createTag(organizationId, createTagRequest)

Create a tag

Create a customer tag. managed_by is always \&quot;customer\&quot;.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TagsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TagsApi apiInstance = new TagsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    CreateTagRequest createTagRequest = new CreateTagRequest(); // CreateTagRequest | Request body for creating a tag
    try {
      RoutesV3TagResponse result = apiInstance.createTag(organizationId, createTagRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TagsApi#createTag");
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
| **createTagRequest** | [**CreateTagRequest**](CreateTagRequest.md)| Request body for creating a tag | |

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Tag created |  -  |
| **400** | Invalid request body |  -  |
| **409** | A tag with this name already exists |  -  |
| **500** | Internal server error |  -  |

<a id="deleteTag"></a>
# **deleteTag**
> deleteTag(organizationId, tagId)

Delete a tag

Delete a customer tag. Reserved tags return 404. Taggings cascade.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TagsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TagsApi apiInstance = new TagsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String tagId = "tagId_example"; // String | Tag ID
    try {
      apiInstance.deleteTag(organizationId, tagId);
    } catch (ApiException e) {
      System.err.println("Exception when calling TagsApi#deleteTag");
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
| **tagId** | **String**| Tag ID | |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Tag deleted |  -  |
| **404** | Tag not found |  -  |
| **500** | Internal server error |  -  |

<a id="listTags"></a>
# **listTags**
> RoutesV3TagListResponse listTags(organizationId, search, limit, offset)

List tags

List the organization&#39;s customer tags, optionally prefix-filtered by name.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TagsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TagsApi apiInstance = new TagsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String search = "search_example"; // String | Prefix match on tag name
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      RoutesV3TagListResponse result = apiInstance.listTags(organizationId, search, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TagsApi#listTags");
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
| **search** | **String**| Prefix match on tag name | [optional] |
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**RoutesV3TagListResponse**](RoutesV3TagListResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of tags |  -  |
| **500** | Internal server error |  -  |

<a id="updateTag"></a>
# **updateTag**
> RoutesV3TagResponse updateTag(organizationId, tagId, updateTagRequest)

Update a tag

Partially update a customer tag. Reserved tags return 404.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TagsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    TagsApi apiInstance = new TagsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String tagId = "tagId_example"; // String | Tag ID
    UpdateTagRequest updateTagRequest = new UpdateTagRequest(); // UpdateTagRequest | Request body for updating a tag
    try {
      RoutesV3TagResponse result = apiInstance.updateTag(organizationId, tagId, updateTagRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TagsApi#updateTag");
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
| **tagId** | **String**| Tag ID | |
| **updateTagRequest** | [**UpdateTagRequest**](UpdateTagRequest.md)| Request body for updating a tag | |

### Return type

[**RoutesV3TagResponse**](RoutesV3TagResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Tag updated |  -  |
| **400** | Invalid request body |  -  |
| **404** | Tag not found |  -  |
| **409** | A tag with this name already exists |  -  |
| **500** | Internal server error |  -  |

