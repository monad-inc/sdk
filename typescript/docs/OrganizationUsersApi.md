# .OrganizationUsersApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdUsersGet**](OrganizationUsersApi.md#v1OrganizationIdUsersGet) | **GET** /v1/{organization_id}/users | List organization users
[**v1OrganizationIdUsersPost**](OrganizationUsersApi.md#v1OrganizationIdUsersPost) | **POST** /v1/{organization_id}/users | Add user to organization
[**v1OrganizationIdUsersUserIdDelete**](OrganizationUsersApi.md#v1OrganizationIdUsersUserIdDelete) | **DELETE** /v1/{organization_id}/users/{user_id} | Remove user from organization
[**v1OrganizationIdUsersUserIdPatch**](OrganizationUsersApi.md#v1OrganizationIdUsersUserIdPatch) | **PATCH** /v1/{organization_id}/users/{user_id} | Update user in organization


# **v1OrganizationIdUsersGet**
> ModelsOrganizationUserList v1OrganizationIdUsersGet()

List organization users

### Example


```typescript
import { createConfiguration, OrganizationUsersApi } from '';
import type { OrganizationUsersApiV1OrganizationIdUsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationUsersApi(configuration);

const request: OrganizationUsersApiV1OrganizationIdUsersGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdUsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsOrganizationUserList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of organization users |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdUsersPost**
> ModelsOrganizationUser v1OrganizationIdUsersPost(routesAddUserToOrganizationRequest)

Add user to organization

### Example


```typescript
import { createConfiguration, OrganizationUsersApi } from '';
import type { OrganizationUsersApiV1OrganizationIdUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationUsersApi(configuration);

const request: OrganizationUsersApiV1OrganizationIdUsersPostRequest = {
    // organization ID
  organizationId: "organization_id_example",
    // Request body for adding a user to an organization
  routesAddUserToOrganizationRequest: {
    roleId: "roleId_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.v1OrganizationIdUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesAddUserToOrganizationRequest** | **RoutesAddUserToOrganizationRequest**| Request body for adding a user to an organization |
 **organizationId** | [**string**] | organization ID | defaults to undefined


### Return type

**ModelsOrganizationUser**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for adding a user to an organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdUsersUserIdDelete**
> any v1OrganizationIdUsersUserIdDelete()

Remove user from organization

### Example


```typescript
import { createConfiguration, OrganizationUsersApi } from '';
import type { OrganizationUsersApiV1OrganizationIdUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationUsersApi(configuration);

const request: OrganizationUsersApiV1OrganizationIdUsersUserIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // User ID
  userId: "user_id_example",
    // User Auth Provider ID
  userAuthProviderId: "user_auth_provider_id_example",
};

const data = await apiInstance.v1OrganizationIdUsersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **userId** | [**string**] | User ID | defaults to undefined
 **userAuthProviderId** | [**string**] | User Auth Provider ID | defaults to undefined


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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdUsersUserIdPatch**
> ModelsOrganizationUser v1OrganizationIdUsersUserIdPatch(routesUpdateUserInOrganizationRequest)

Update user in organization

### Example


```typescript
import { createConfiguration, OrganizationUsersApi } from '';
import type { OrganizationUsersApiV1OrganizationIdUsersUserIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationUsersApi(configuration);

const request: OrganizationUsersApiV1OrganizationIdUsersUserIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // User ID
  userId: "user_id_example",
    // Request body for updating a user in an organization
  routesUpdateUserInOrganizationRequest: {
    roleId: "roleId_example",
    userAuthProviderId: "userAuthProviderId_example",
  },
};

const data = await apiInstance.v1OrganizationIdUsersUserIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateUserInOrganizationRequest** | **RoutesUpdateUserInOrganizationRequest**| Request body for updating a user in an organization |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **userId** | [**string**] | User ID | defaults to undefined


### Return type

**ModelsOrganizationUser**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response body for updating a user in an organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


