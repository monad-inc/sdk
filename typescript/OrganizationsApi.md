# .OrganizationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationsGet**](OrganizationsApi.md#v1OrganizationsGet) | **GET** /v1/organizations | List organizations for user
[**v1OrganizationsOrganizationIdDelete**](OrganizationsApi.md#v1OrganizationsOrganizationIdDelete) | **DELETE** /v1/organizations/{organization_id} | Delete organization
[**v1OrganizationsOrganizationIdPatch**](OrganizationsApi.md#v1OrganizationsOrganizationIdPatch) | **PATCH** /v1/organizations/{organization_id} | Update organization
[**v1OrganizationsPost**](OrganizationsApi.md#v1OrganizationsPost) | **POST** /v1/organizations | Create organization


# **v1OrganizationsGet**
> ModelsOrganizationList v1OrganizationsGet()

List organizations for user

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsGetRequest = {
    // Limit the number of organizations returned (default: 10) (optional)
  limit: 1,
    // Offset the organizations returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit the number of organizations returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the organizations returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsOrganizationList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for listing organizations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsOrganizationIdDelete**
> any v1OrganizationsOrganizationIdDelete()

Delete organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsOrganizationIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v1OrganizationsOrganizationIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsOrganizationIdPatch**
> ModelsOrganization v1OrganizationsOrganizationIdPatch(routesUpdateOrganizationRequest)

Update organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsOrganizationIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsOrganizationIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for updating an organization
  routesUpdateOrganizationRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationsOrganizationIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateOrganizationRequest** | **RoutesUpdateOrganizationRequest**| Request body for updating an organization |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsOrganization**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating an organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationsPost**
> ModelsOrganization v1OrganizationsPost(routesCreateOrganizationRequest)

Create organization

### Example


```typescript
import { createConfiguration, OrganizationsApi } from '';
import type { OrganizationsApiV1OrganizationsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationsApi(configuration);

const request: OrganizationsApiV1OrganizationsPostRequest = {
    // Request body for creating an organization
  routesCreateOrganizationRequest: {
    billingAccountId: "billingAccountId_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v1OrganizationsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateOrganizationRequest** | **RoutesCreateOrganizationRequest**| Request body for creating an organization |


### Return type

**ModelsOrganization**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for creating an organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


