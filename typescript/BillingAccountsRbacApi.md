# .BillingAccountsRbacApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BillingAccountsBillingAccountIdRolesGet**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**v2BillingAccountsBillingAccountIdRolesPost**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdDelete**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdGet**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdPatch**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**](BillingAccountsRbacApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**v2BillingPermissionsGet**](BillingAccountsRbacApi.md#v2BillingPermissionsGet) | **GET** /v2/billing/permissions | Get Billing Permissions


# **v2BillingAccountsBillingAccountIdRolesGet**
> Array<ModelsBillingAccountRole> v2BillingAccountsBillingAccountIdRolesGet()

Get Billing Account Roles

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
  
  body: {},
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**Array<ModelsBillingAccountRole>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account roles successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Roles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesPost**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesPost(routesV2CreateBillingAccountRoleRequest)

Create Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesPostRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Create Billing Account Role Request
  routesV2CreateBillingAccountRoleRequest: {
    description: "description_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateBillingAccountRoleRequest** | **RoutesV2CreateBillingAccountRoleRequest**| Create Billing Account Role Request |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingAccountRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | create billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesRoleIdDelete**
> string v2BillingAccountsBillingAccountIdRolesRoleIdDelete()

Delete Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
  
  body: {},
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
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
**202** | delete billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesRoleIdGet**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdGet()

Get Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
  
  body: {},
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsBillingAccountRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesRoleIdPatch**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdPatch(routesV2UpdateBillingAccountRoleRequest)

Update Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // Update Billing Account Role Request
  routesV2UpdateBillingAccountRoleRequest: {
    description: "description_example",
    name: "name_example",
    permissions: [
      "permissions_example",
    ],
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateBillingAccountRoleRequest** | **RoutesV2UpdateBillingAccountRoleRequest**| Update Billing Account Role Request |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsBillingAccountRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**
> string v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(routesV2CreatebillingAccountUserRoleRequest)

Add a user to a billing account role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // Create Billing Account User Role Request
  routesV2CreatebillingAccountUserRoleRequest: {
    userEmail: "userEmail_example",
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreatebillingAccountUserRoleRequest** | **RoutesV2CreatebillingAccountUserRoleRequest**| Create Billing Account User Role Request |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
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
**201** | create billing account user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account User Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**
> string v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete()

Remove a user to a billing account role

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // User ID
  userId: "user_id_example",
  
  body: {},
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined
 **userId** | [**string**] | User ID | defaults to undefined


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
**204** | delete billing account user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account User Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingPermissionsGet**
> Array<ModelsBillingAccountPermission> v2BillingPermissionsGet()

Get Billing Permissions

### Example


```typescript
import { createConfiguration, BillingAccountsRbacApi } from '';
import type { BillingAccountsRbacApiV2BillingPermissionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRbacApi(configuration);

const request: BillingAccountsRbacApiV2BillingPermissionsGetRequest = {
  
  body: {},
};

const data = await apiInstance.v2BillingPermissionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**Array<ModelsBillingAccountPermission>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account permissions successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Permissions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


