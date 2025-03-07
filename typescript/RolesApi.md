# .RolesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdRolesGet**](RolesApi.md#v1OrganizationIdRolesGet) | **GET** /v1/{organization_id}/roles | List roles
[**v1OrganizationIdRolesPost**](RolesApi.md#v1OrganizationIdRolesPost) | **POST** /v1/{organization_id}/roles | Create role
[**v1OrganizationIdRolesRoleIdDelete**](RolesApi.md#v1OrganizationIdRolesRoleIdDelete) | **DELETE** /v1/{organization_id}/roles/{role_id} | Delete role
[**v1OrganizationIdRolesRoleIdGet**](RolesApi.md#v1OrganizationIdRolesRoleIdGet) | **GET** /v1/{organization_id}/roles/{role_id} | Get role
[**v1OrganizationIdRolesRoleIdPatch**](RolesApi.md#v1OrganizationIdRolesRoleIdPatch) | **PATCH** /v1/{organization_id}/roles/{role_id} | Update role
[**v2OrganizationIdRolesGet**](RolesApi.md#v2OrganizationIdRolesGet) | **GET** /v2/{organization_id}/roles | List roles
[**v2OrganizationIdRolesPost**](RolesApi.md#v2OrganizationIdRolesPost) | **POST** /v2/{organization_id}/roles | Create role
[**v2OrganizationIdRolesRoleIdDelete**](RolesApi.md#v2OrganizationIdRolesRoleIdDelete) | **DELETE** /v2/{organization_id}/roles/{role_id} | Delete role
[**v2OrganizationIdRolesRoleIdGet**](RolesApi.md#v2OrganizationIdRolesRoleIdGet) | **GET** /v2/{organization_id}/roles/{role_id} | Get role
[**v2OrganizationIdRolesRoleIdPatch**](RolesApi.md#v2OrganizationIdRolesRoleIdPatch) | **PATCH** /v2/{organization_id}/roles/{role_id} | Update role


# **v1OrganizationIdRolesGet**
> ModelsRoleList v1OrganizationIdRolesGet()

List roles

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV1OrganizationIdRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV1OrganizationIdRolesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit the number of roles returned (default: 10) (optional)
  limit: 1,
    // Offset the roles returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v1OrganizationIdRolesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit the number of roles returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the roles returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsRoleList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error listing roles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdRolesPost**
> ModelsRole v1OrganizationIdRolesPost(routesCreateRoleRequest)

Create role

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV1OrganizationIdRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV1OrganizationIdRolesPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a role
  routesCreateRoleRequest: {
    description: "description_example",
    name: "name_example",
    pipelineCreate: true,
    pipelineDelete: true,
    pipelineRead: true,
    pipelineUpdate: true,
  },
};

const data = await apiInstance.v1OrganizationIdRolesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesCreateRoleRequest** | **RoutesCreateRoleRequest**| Request body for creating a role |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsRole**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdRolesRoleIdDelete**
> any v1OrganizationIdRolesRoleIdDelete()

Delete role

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV1OrganizationIdRolesRoleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV1OrganizationIdRolesRoleIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v1OrganizationIdRolesRoleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


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
**500** | Failed to delete role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdRolesRoleIdGet**
> ModelsRole v1OrganizationIdRolesRoleIdGet()

Get role

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV1OrganizationIdRolesRoleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV1OrganizationIdRolesRoleIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v1OrganizationIdRolesRoleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsRole**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error getting role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OrganizationIdRolesRoleIdPatch**
> ModelsRole v1OrganizationIdRolesRoleIdPatch(routesUpdateRoleRequest)

Update role

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV1OrganizationIdRolesRoleIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV1OrganizationIdRolesRoleIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
    // Request body for updating a role
  routesUpdateRoleRequest: {
    description: "description_example",
    name: "name_example",
    pipelineCreate: true,
    pipelineDelete: true,
    pipelineRead: true,
    pipelineUpdate: true,
  },
};

const data = await apiInstance.v1OrganizationIdRolesRoleIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesUpdateRoleRequest** | **RoutesUpdateRoleRequest**| Request body for updating a role |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsRole**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdRolesGet**
> ModelsRoleWithPermissionsList v2OrganizationIdRolesGet()

List roles with their associated permissions

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV2OrganizationIdRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV2OrganizationIdRolesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit the number of roles returned (default: 10) (optional)
  limit: 1,
    // Offset the roles returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v2OrganizationIdRolesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit the number of roles returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the roles returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsRoleWithPermissionsList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Roles retrieved successfully |  -  |
**500** | Error listing roles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdRolesPost**
> ModelsRoleWithPermissions v2OrganizationIdRolesPost(routesV2CreateRoleV2Request)

Create a new role with permissions

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV2OrganizationIdRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV2OrganizationIdRolesPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a role
  routesV2CreateRoleV2Request: {
    description: "description_example",
    name: "name_example",
    permissionIds: [
      "permissionIds_example",
    ],
  },
};

const data = await apiInstance.v2OrganizationIdRolesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateRoleV2Request** | **RoutesV2CreateRoleV2Request**| Request body for creating a role |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsRoleWithPermissions**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdRolesRoleIdDelete**
> any v2OrganizationIdRolesRoleIdDelete()

Delete a role

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV2OrganizationIdRolesRoleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV2OrganizationIdRolesRoleIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v2OrganizationIdRolesRoleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


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
**500** | Failed to delete role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdRolesRoleIdGet**
> ModelsRoleWithPermissions v2OrganizationIdRolesRoleIdGet()

Get a role with its associated permissions

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV2OrganizationIdRolesRoleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV2OrganizationIdRolesRoleIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v2OrganizationIdRolesRoleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsRoleWithPermissions**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role retrieved successfully |  -  |
**500** | Error getting role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2OrganizationIdRolesRoleIdPatch**
> ModelsRoleWithPermissions v2OrganizationIdRolesRoleIdPatch(routesV2UpdateRoleV2Request)

Update a role and its permissions

### Example


```typescript
import { createConfiguration, RolesApi } from '';
import type { RolesApiV2OrganizationIdRolesRoleIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolesApi(configuration);

const request: RolesApiV2OrganizationIdRolesRoleIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Role ID
  roleId: "role_id_example",
    // Request body for updating a role
  routesV2UpdateRoleV2Request: {
    description: "description_example",
    name: "name_example",
    permissionIds: [
      "permissionIds_example",
    ],
  },
};

const data = await apiInstance.v2OrganizationIdRolesRoleIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateRoleV2Request** | **RoutesV2UpdateRoleV2Request**| Request body for updating a role |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsRoleWithPermissions**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Role updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


