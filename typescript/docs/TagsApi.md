# .TagsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsApi.md#createTag) | **POST** /v3/{organization_id}/tags | Create a tag
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /v3/{organization_id}/tags/{tag_id} | Delete a tag
[**listTags**](TagsApi.md#listTags) | **GET** /v3/{organization_id}/tags | List tags
[**updateTag**](TagsApi.md#updateTag) | **PATCH** /v3/{organization_id}/tags/{tag_id} | Update a tag


# **createTag**
> RoutesV3TagResponse createTag(createTagRequest)

Create a customer tag. managed_by is always \"customer\".

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiCreateTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiCreateTagRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a tag
  createTagRequest: null,
};

const data = await apiInstance.createTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTagRequest** | **CreateTagRequest**| Request body for creating a tag |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV3TagResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tag created |  -  |
**400** | Invalid request body |  -  |
**409** | A tag with this name already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTag**
> void deleteTag()

Delete a customer tag. Reserved tags return 404. Taggings cascade.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiDeleteTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiDeleteTagRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Tag ID
  tagId: "tag_id_example",
};

const data = await apiInstance.deleteTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **tagId** | [**string**] | Tag ID | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Tag deleted |  -  |
**404** | Tag not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTags**
> RoutesV3TagListResponse listTags()

List the organization\'s customer tags, optionally prefix-filtered by name.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiListTagsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiListTagsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Prefix match on tag name (optional)
  search: "search_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listTags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **search** | [**string**] | Prefix match on tag name | (optional) defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**RoutesV3TagListResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of tags |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTag**
> RoutesV3TagResponse updateTag(updateTagRequest)

Partially update a customer tag. Reserved tags return 404.

### Example


```typescript
import { createConfiguration, TagsApi } from '';
import type { TagsApiUpdateTagRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsApi(configuration);

const request: TagsApiUpdateTagRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Tag ID
  tagId: "tag_id_example",
    // Request body for updating a tag
  updateTagRequest: null,
};

const data = await apiInstance.updateTag(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTagRequest** | **UpdateTagRequest**| Request body for updating a tag |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **tagId** | [**string**] | Tag ID | defaults to undefined


### Return type

**RoutesV3TagResponse**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag updated |  -  |
**400** | Invalid request body |  -  |
**404** | Tag not found |  -  |
**409** | A tag with this name already exists |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


