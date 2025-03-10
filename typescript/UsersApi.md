# .UsersApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1UsersPost**](UsersApi.md#v1UsersPost) | **POST** /v1/users | Create user


# **v1UsersPost**
> ModelsUser v1UsersPost()

Create user

### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiV1UsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiV1UsersPostRequest = {
  
  body: {},
};

const data = await apiInstance.v1UsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**ModelsUser**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Error creating user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


