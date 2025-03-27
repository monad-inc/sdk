# .BillingAccountsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BillingAccountsBillingAccountIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**v2BillingAccountsBillingAccountIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdGet) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**v2BillingAccountsBillingAccountIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account
[**v2BillingAccountsBillingAccountIdRolesGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles | Get Billing Account Roles
[**v2BillingAccountsBillingAccountIdRolesPost**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles | Create Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Delete Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdGet**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdGet) | **GET** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Get Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdPatch**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdPatch) | **PATCH** /v2/billing/accounts/{billing_account_id}/roles/{role_id} | Update Billing Account Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersPost) | **POST** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users | Create Billing Account User Role
[**v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete**](BillingAccountsApi.md#v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete) | **DELETE** /v2/billing/accounts/{billing_account_id}/roles/{role_id}/users/{user_id} | Delete Billing Account User Role
[**v2BillingAccountsGet**](BillingAccountsApi.md#v2BillingAccountsGet) | **GET** /v2/billing/accounts | List Billing Accounts
[**v2BillingAccountsPost**](BillingAccountsApi.md#v2BillingAccountsPost) | **POST** /v2/billing/accounts | Create Billing Account
[**v2BillingPermissionsGet**](BillingAccountsApi.md#v2BillingPermissionsGet) | **GET** /v2/billing/permissions | Get Billing Permissions


# **v2BillingAccountsBillingAccountIdDelete**
> void v2BillingAccountsBillingAccountIdDelete()

Delete Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
  
  body: {},
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Billing account deleted successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdGet**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdGet()

Get Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdPatch**
> ModelsBillingAccount v2BillingAccountsBillingAccountIdPatch(routesV2UpdateBillingAccountRequest)

Update Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdPatchRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Request body for updating a billing account
  routesV2UpdateBillingAccountRequest: {
    billingEmail: "billingEmail_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2UpdateBillingAccountRequest** | **RoutesV2UpdateBillingAccountRequest**| Request body for updating a billing account |
 **billingAccountId** | [**string**] | Billing Account ID | defaults to undefined


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsBillingAccountIdRolesGet**
> Array<ModelsBillingAccountRole> v2BillingAccountsBillingAccountIdRolesGet()

Get Billing Account Roles

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesGet(request);
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

# **v2BillingAccountsBillingAccountIdRolesPost**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesPost(routesV2CreateBillingAccountRoleRequest)

Create Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesPostRequest = {
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
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdDelete(request);
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

# **v2BillingAccountsBillingAccountIdRolesRoleIdGet**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdGet()

Get Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdGetRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdGet(request);
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

# **v2BillingAccountsBillingAccountIdRolesRoleIdPatch**
> ModelsBillingAccountRole v2BillingAccountsBillingAccountIdRolesRoleIdPatch(routesV2UpdateBillingAccountRoleRequest)

Update Billing Account Role

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdPatchRequest = {
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
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersPostRequest = {
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
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDeleteRequest = {
    // Billing Account ID
  billingAccountId: "billing_account_id_example",
    // Role ID
  roleId: "role_id_example",
    // User ID
  userId: "user_id_example",
};

const data = await apiInstance.v2BillingAccountsBillingAccountIdRolesRoleIdUsersUserIdDelete(request);
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

# **v2BillingAccountsGet**
> ModelsBillingAccountList v2BillingAccountsGet()

List Billing Accounts

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsGetRequest = {
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v2BillingAccountsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsBillingAccountList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list billing accounts successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list Billing Accounts |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingAccountsPost**
> ModelsBillingAccount v2BillingAccountsPost(routesV2CreateBillingAccountRequest)

Create Billing Account

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';
import type { BillingAccountsApiV2BillingAccountsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request: BillingAccountsApiV2BillingAccountsPostRequest = {
    // Request body for creating a billing account
  routesV2CreateBillingAccountRequest: {
    billingEmail: "billingEmail_example",
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v2BillingAccountsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2CreateBillingAccountRequest** | **RoutesV2CreateBillingAccountRequest**| Request body for creating a billing account |


### Return type

**ModelsBillingAccount**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BillingPermissionsGet**
> Array<ModelsBillingAccountPermission> v2BillingPermissionsGet()

Get Billing Permissions

### Example


```typescript
import { createConfiguration, BillingAccountsApi } from '';

const configuration = createConfiguration();
const apiInstance = new BillingAccountsApi(configuration);

const request = {};

const data = await apiInstance.v2BillingPermissionsGet(request);
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


