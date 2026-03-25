# .BillingAccountsRBACApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBillingAccountRole**](BillingAccountsRBACApi.md#createBillingAccountRole) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**createBillingAccountUserRole**](BillingAccountsRBACApi.md#createBillingAccountUserRole) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**deleteBillingAccountRole**](BillingAccountsRBACApi.md#deleteBillingAccountRole) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**deleteBillingAccountUserRole**](BillingAccountsRBACApi.md#deleteBillingAccountUserRole) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**getBillingAccountRole**](BillingAccountsRBACApi.md#getBillingAccountRole) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**getBillingAccountRoles**](BillingAccountsRBACApi.md#getBillingAccountRoles) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**getBillingPermissions**](BillingAccountsRBACApi.md#getBillingPermissions) | **GET** /v2/billing/permissions | Get Billing Permissions
[**updateBillingAccountRole**](BillingAccountsRBACApi.md#updateBillingAccountRole) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role


# **createBillingAccountRole**
> ModelsBillingAccountRole createBillingAccountRole(routesV2CreateBillingAccountRoleRequest)

Create Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiCreateBillingAccountRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiCreateBillingAccountRoleRequest = {
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

const data = await apiInstance.createBillingAccountRole(request);
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

# **createBillingAccountUserRole**
> string createBillingAccountUserRole(routesV2CreatebillingAccountUserRoleRequest)

Add a user to a billing account role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiCreateBillingAccountUserRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiCreateBillingAccountUserRoleRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // Create Billing Account User Role Request
  routesV2CreatebillingAccountUserRoleRequest: {
    userEmail: "userEmail_example",
  },
};

const data = await apiInstance.createBillingAccountUserRole(request);
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

# **deleteBillingAccountRole**
> string deleteBillingAccountRole()

Delete Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiDeleteBillingAccountRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiDeleteBillingAccountRoleRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.deleteBillingAccountRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
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
**202** | delete billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBillingAccountUserRole**
> string deleteBillingAccountUserRole()

Remove a user to a billing account role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiDeleteBillingAccountUserRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiDeleteBillingAccountUserRoleRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // User ID
  userId: "user_id_example",
};

const data = await apiInstance.deleteBillingAccountUserRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
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
**204** | delete billing account user role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account User Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingAccountRole**
> ModelsBillingAccountRole getBillingAccountRole()

Get Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiGetBillingAccountRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiGetBillingAccountRoleRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.getBillingAccountRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined
 **roleId** | [**string**] | Role ID | defaults to undefined


### Return type

**ModelsBillingAccountRole**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account role successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Role |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingAccountRoles**
> Array<ModelsBillingAccountRole> getBillingAccountRoles()

Get Billing Account Roles

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiGetBillingAccountRolesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiGetBillingAccountRolesRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.getBillingAccountRoles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**Array<ModelsBillingAccountRole>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account roles successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Roles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingPermissions**
> Array<ModelsBillingAccountPermission> getBillingPermissions()

Get Billing Permissions

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request = {};

const data = await apiInstance.getBillingPermissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ModelsBillingAccountPermission>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account permissions successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account Permissions |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBillingAccountRole**
> ModelsBillingAccountRole updateBillingAccountRole(routesV2UpdateBillingAccountRoleRequest)

Update Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsRBACApi } from '';
import type { BillingAccountsRBACApiUpdateBillingAccountRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsRBACApi(configuration);

const request: BillingAccountsRBACApiUpdateBillingAccountRoleRequest = {
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

const data = await apiInstance.updateBillingAccountRole(request);
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


