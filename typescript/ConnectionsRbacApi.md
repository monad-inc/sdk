# .ConnectionsRbacApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ConnectionsConnectionIdRolesGet**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesGet) | **GET** /v3/connections/{connection_id}/roles | Get Connection Roles
[**v3ConnectionsConnectionIdRolesPost**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesPost) | **POST** /v3/connections/{connection_id}/roles | Create Connection Role
[**v3ConnectionsConnectionIdRolesRoleIdDelete**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdDelete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id} | Delete Connection Role
[**v3ConnectionsConnectionIdRolesRoleIdGet**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdGet) | **GET** /v3/connections/{connection_id}/roles/{role_id} | Get Connection Role
[**v3ConnectionsConnectionIdRolesRoleIdPatch**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdPatch) | **PATCH** /v3/connections/{connection_id}/roles/{role_id} | Update Connection Role
[**v3ConnectionsConnectionIdRolesRoleIdUsersPost**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdUsersPost) | **POST** /v3/connections/{connection_id}/roles/{role_id}/users | Create Connection User Role
[**v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete**](ConnectionsRbacApi.md#v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v3/connections/{connection_id}/roles/{role_id}/users/{user_id} | Delete Connection User Role
[**v3ConnectionsPermissionsGet**](ConnectionsRbacApi.md#v3ConnectionsPermissionsGet) | **GET** /v3/connections/permissions | Get Connection Permissions


# **v3ConnectionsConnectionIdRolesGet**
> Array<ModelsConnectionRole> v3ConnectionsConnectionIdRolesGet()

Get Connection Roles

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesGetRequest = {
    // Connection ID
  connectionId: "connection_id_example",
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Connection ID | defaults to undefined


### Return type

**Array<ModelsConnectionRole>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection roles successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Roles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesPost**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesPost(routesV3CreateConnectionRoleRequest)

Create Connection Role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesPostRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Create Connection Role Request
  routesV3CreateConnectionRoleRequest: {
    description: "description_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateConnectionRoleRequest** | **RoutesV3CreateConnectionRoleRequest**| Create Connection Role Request |
 **connectionId** | [**string**] | Connection ID | defaults to undefined


### Return type

**ModelsConnectionRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | create connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesRoleIdDelete**
> string v3ConnectionsConnectionIdRolesRoleIdDelete()

Delete Connection Role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdDeleteRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesRoleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Connection ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**string**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | delete connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesRoleIdGet**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesRoleIdGet()

Get Connection Role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdGetRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesRoleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Connection ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsConnectionRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesRoleIdPatch**
> ModelsConnectionRole v3ConnectionsConnectionIdRolesRoleIdPatch(routesV3UpdateConnectionRoleRequest)

Update Connection Role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdPatchRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Role ID
  roleId: "role_id_example",
    // Update Connection Role Request
  routesV3UpdateConnectionRoleRequest: {
    description: "description_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesRoleIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateConnectionRoleRequest** | **RoutesV3UpdateConnectionRoleRequest**| Update Connection Role Request |
 **connectionId** | [**string**] | Connection ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsConnectionRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update connection role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Connection Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesRoleIdUsersPost**
> string v3ConnectionsConnectionIdRolesRoleIdUsersPost(routesV3CreateConnectionUserRoleRequest)

Add a user to a connection role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdUsersPostRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Role ID
  roleId: "role_id_example",
    // Create Connection User Role Request
  routesV3CreateConnectionUserRoleRequest: {
    userEmail: "userEmail_example",
  },
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesRoleIdUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateConnectionUserRoleRequest** | **RoutesV3CreateConnectionUserRoleRequest**| Create Connection User Role Request |
 **connectionId** | [**string**] | Connection ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**string**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | create connection user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Connection User Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete**
> string v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete()

Remove a user to a connection role

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';
import type { ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request: ConnectionsRbacApiV3ConnectionsConnectionIdRolesRoleIdUsersUserIdDeleteRequest = {
    // Connection ID
  connectionId: "connection_id_example",
    // Role ID
  roleId: "role_id_example",
    // User ID
  userId: "user_id_example",
};

const data = await apiInstance.v3ConnectionsConnectionIdRolesRoleIdUsersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Connection ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined
 **userId** | [**string**] | User ID | defaults to undefined


### Return type

**string**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | delete connection user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Connection User Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsPermissionsGet**
> Array<ModelsConnectionPermission> v3ConnectionsPermissionsGet()

Get Connection Permissions

### Example


```typescript
import { createConfiguration, ConnectionsRbacApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsRbacApi(configuration);

const request = {};

const data = await apiInstance.v3ConnectionsPermissionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ModelsConnectionPermission>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get connection permissions successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Connection Permissions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


