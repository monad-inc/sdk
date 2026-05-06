# .UsersApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /v1/users | Create user
[**enableMFA**](UsersApi.md#enableMFA) | **POST** /v3/users/mfa | Enable MFA
[**getActiveUser**](UsersApi.md#getActiveUser) | **GET** /v1/users | Get your current user
[**getMFAStatus**](UsersApi.md#getMFAStatus) | **GET** /v3/users/mfa | Get MFA status


# **createUser**
> GithubComMonadIncCorePkgTypesModelsUser createUser()

Create user

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiCreateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiCreateUserRequest = {
  
  body: {},
};

const data = await apiInstance.createUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**GithubComMonadIncCorePkgTypesModelsUser**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get user success |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Error creating user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableMFA**
> AuthenticationtypesMFAEnrollmentTicket enableMFA()

Enable MFA for a user and create enrollment ticket (OTP only)

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.enableMFA(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AuthenticationtypesMFAEnrollmentTicket**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MFA enrollment ticket created successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getActiveUser**
> RoutesUserWithRoles getActiveUser()

Get your current user

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiGetActiveUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiGetActiveUserRequest = {
    // Organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.getActiveUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesUserWithRoles**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get user successful |  -  |
**400** | Missing organization_id |  -  |
**403** | Access denied |  -  |
**500** | Failed to get user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMFAStatus**
> RoutesV3MFAStatusResponse getMFAStatus()

Get MFA enrollment status and methods for a user

### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.getMFAStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RoutesV3MFAStatusResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MFA status retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


