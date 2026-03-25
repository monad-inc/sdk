# .OrganizationTransformsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransform**](OrganizationTransformsApi.md#createTransform) | **POST** /v1/{organization_id}/transforms | Create transform
[**deleteOrganizationTransform**](OrganizationTransformsApi.md#deleteOrganizationTransform) | **DELETE** /v1/{organization_id}/transforms/{transform_id} | Delete transform
[**getOrganizationTransform**](OrganizationTransformsApi.md#getOrganizationTransform) | **GET** /v1/{organization_id}/transforms/{transform_id} | Get transform
[**listOrganizationTransforms**](OrganizationTransformsApi.md#listOrganizationTransforms) | **GET** /v1/{organization_id}/transforms | List configured transforms in a transform
[**updateOrganizationTransform**](OrganizationTransformsApi.md#updateOrganizationTransform) | **PATCH** /v1/{organization_id}/transforms/{transform_id} | Update transform


# **createTransform**
> ModelsTransform createTransform(routesCreateTransformRequest)

Create transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiCreateTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiCreateTransformRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a transform
  routesCreateTransformRequest: {
    config: {
      conditional: {
        conditions: {
          conditions: [
            ,
          ],
          config: {
            "key": null,
          },
          operator: "operator_example",
          typeId: "typeId_example",
        },
        _else: "_else_example",
      },
      operations: [
        {
          arguments: 
            key: null,
          ,
          description: "description_example",
          operation: "operation_example",
          secrets: {
            "key": null,
          },
        },
      ],
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.createTransform(request);
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

# **deleteOrganizationTransform**
> any deleteOrganizationTransform()

Delete transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiDeleteOrganizationTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiDeleteOrganizationTransformRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Transform ID
  transformId: "transform_id_example",
};

const data = await apiInstance.deleteOrganizationTransform(request);
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

# **getOrganizationTransform**
> RoutesGetTransformResponse getOrganizationTransform()

Get transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiGetOrganizationTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiGetOrganizationTransformRequest = {
    // Transform ID
  transformId: "transform_id_example",
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.getOrganizationTransform(request);
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

# **listOrganizationTransforms**
> ModelsTransformList listOrganizationTransforms()

List transforms

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiListOrganizationTransformsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiListOrganizationTransformsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listOrganizationTransforms(request);
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

# **updateOrganizationTransform**
> ModelsTransform updateOrganizationTransform(routesUpdateTransformRequest)

Update transform

### Example


```typescript
import { createConfiguration, OrganizationTransformsApi } from '';
import type { OrganizationTransformsApiUpdateOrganizationTransformRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationTransformsApi(configuration);

const request: OrganizationTransformsApiUpdateOrganizationTransformRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Transform ID
  transformId: "transform_id_example",
    // Request body for updating a transform
  routesUpdateTransformRequest: {
    config: {
      conditional: {
        conditions: {
          conditions: [
            ,
          ],
          config: {
            "key": null,
          },
          operator: "operator_example",
          typeId: "typeId_example",
        },
        _else: "_else_example",
      },
      operations: [
        {
          arguments: 
            key: null,
          ,
          description: "description_example",
          operation: "operation_example",
          secrets: {
            "key": null,
          },
        },
      ],
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.updateOrganizationTransform(request);
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


