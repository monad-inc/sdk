# .OrganizationTransformsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdTransformsGet**](OrganizationTransformsApi.md#v1OrganizationIdTransformsGet) | **GET** /v1/{organization_id}/transforms | List transforms
[**v1OrganizationIdTransformsPost**](OrganizationTransformsApi.md#v1OrganizationIdTransformsPost) | **POST** /v1/{organization_id}/transforms | Create transform
[**v1OrganizationIdTransformsTransformIdDelete**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdDelete) | **DELETE** /v1/{organization_id}/transforms/{transform_id} | Delete transform
[**v1OrganizationIdTransformsTransformIdGet**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdGet) | **GET** /v1/{organization_id}/transforms/{transform_id} | Get transform
[**v1OrganizationIdTransformsTransformIdPatch**](OrganizationTransformsApi.md#v1OrganizationIdTransformsTransformIdPatch) | **PATCH** /v1/{organization_id}/transforms/{transform_id} | Update transform


# **v1OrganizationIdTransformsGet**
> ModelsTransformList v1OrganizationIdTransformsGet()

List transforms

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiV1OrganizationIdTransformsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiV1OrganizationIdTransformsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdTransformsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsTransformList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of transforms |  -  |
**500** | Failed to marshal transforms |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdTransformsPost**
> ModelsTransform v1OrganizationIdTransformsPost(routesCreateTransformRequest)

Create transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiV1OrganizationIdTransformsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiV1OrganizationIdTransformsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a transform
  routesCreateTransformRequest: {
    config: {
      operations: [
        {
          arguments: {
            "key": null,
          },
          operation: "operation_example",
        },
      ],
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationIdTransformsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateTransformRequest** | **RoutesCreateTransformRequest**| Request body for creating a transform |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsTransform**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdTransformsTransformIdDelete**
> any v1OrganizationIdTransformsTransformIdDelete()

Delete transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiV1OrganizationIdTransformsTransformIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.v1OrganizationIdTransformsTransformIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **transformId** | [**string**] | Transform ID | defaults to undefined


### Return type

**any**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Failed to delete transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdTransformsTransformIdGet**
> RoutesGetTransformResponse v1OrganizationIdTransformsTransformIdGet()

Get transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiV1OrganizationIdTransformsTransformIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdGetRequest = {
    // Transform ID
  transformId: "transform_id_example",
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v1OrganizationIdTransformsTransformIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transformId** | [**string**] | Transform ID | defaults to undefined
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesGetTransformResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform retrieved successfully |  -  |
**500** | Failed to get transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdTransformsTransformIdPatch**
> ModelsTransform v1OrganizationIdTransformsTransformIdPatch(routesUpdateTransformRequest)

Update transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiV1OrganizationIdTransformsTransformIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiV1OrganizationIdTransformsTransformIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Transform ID
  transformId: "transform_id_example",
    // Request body for updating a transform
  routesUpdateTransformRequest: {
    config: {
      operations: [
        {
          arguments: {
            "key": null,
          },
          operation: "operation_example",
        },
      ],
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationIdTransformsTransformIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateTransformRequest** | **RoutesUpdateTransformRequest**| Request body for updating a transform |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **transformId** | [**string**] | Transform ID | defaults to undefined


### Return type

**ModelsTransform**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update transform |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


