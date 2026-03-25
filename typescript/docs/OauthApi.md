# .OauthApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOAuthRedirect**](OauthApi.md#getOAuthRedirect) | **GET** /v1/oauth/{type_id}/{organization_id} | Get oauth redirect
[**oAuthCallback**](OauthApi.md#oAuthCallback) | **GET** /v1/oauth/{type_id}/callback | Oauth callback


# **getOAuthRedirect**
> any getOAuthRedirect()

Get oauth redirect

### Example


```typescript
import { createConfiguration, OauthApi } from '';
import type { OauthApiGetOAuthRedirectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OauthApi(configuration);

const request: OauthApiGetOAuthRedirectRequest = {
    // component type ID
  typeId: "type_id_example",
    // organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.getOAuthRedirect(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | [**string**] | component type ID | defaults to undefined
 **organizationId** | [**string**] | organization ID | defaults to undefined


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
**200** | Oauth redirect retrieved successfully |  -  |
**404** | oauth handler not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oAuthCallback**
> any oAuthCallback()

Oauth callback

### Example


```typescript
import { createConfiguration, OauthApi } from '';
import type { OauthApiOAuthCallbackRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OauthApi(configuration);

const request: OauthApiOAuthCallbackRequest = {
    // component type ID
  typeId: "type_id_example",
};

const data = await apiInstance.oAuthCallback(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | [**string**] | component type ID | defaults to undefined


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
**200** | Oauth callback successful |  -  |
**404** | oauth handler not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


