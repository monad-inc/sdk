# .PermissionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2OrganizationIdRolesPermissionsGet**](PermissionsApi.md#v2OrganizationIdRolesPermissionsGet) | **GET** /v2/{organization_id}/roles/permissions | List permissions


# **v2OrganizationIdRolesPermissionsGet**
> ModelsPermissionList v2OrganizationIdRolesPermissionsGet()

List all available permissions in the system

### Example


```typescript
import { createConfiguration, PermissionsApi } from '';
import type { PermissionsApiV2OrganizationIdRolesPermissionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PermissionsApi(configuration);

const request: PermissionsApiV2OrganizationIdRolesPermissionsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit the number of permissions returned (default: 10) (optional)
  limit: 1,
    // Offset the permissions returned (default: 0) (optional)
  offset: 1,
};

const data = await apiInstance.v2OrganizationIdRolesPermissionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit the number of permissions returned (default: 10) | (optional) defaults to undefined
 **offset** | [**number**] | Offset the permissions returned (default: 0) | (optional) defaults to undefined


### Return type

**ModelsPermissionList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Permissions retrieved successfully |  -  |
**500** | Error listing permissions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


