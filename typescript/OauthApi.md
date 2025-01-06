# .OauthApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OauthTypeIdCallbackGet**](OauthApi.md#v1OauthTypeIdCallbackGet) | **GET** /v1/oauth/{type_id}/callback | Oauth callback
[**v1OauthTypeIdOrganizationIdGet**](OauthApi.md#v1OauthTypeIdOrganizationIdGet) | **GET** /v1/oauth/{type_id}/{organization_id} | Get oauth redirect


# **v1OauthTypeIdCallbackGet**
> any v1OauthTypeIdCallbackGet()

Oauth callback

### Example


```typescript
import { createConfiguration, OauthApi } from '';
import type { OauthApiV1OauthTypeIdCallbackGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OauthApi(configuration);

const request: OauthApiV1OauthTypeIdCallbackGetRequest = {
    // component type ID
  typeId: "type_id_example",
};

const data = await apiInstance.v1OauthTypeIdCallbackGet(request);
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

# **v1OauthTypeIdOrganizationIdGet**
> any v1OauthTypeIdOrganizationIdGet()

Get oauth redirect

### Example


```typescript
import { createConfiguration, OauthApi } from '';
import type { OauthApiV1OauthTypeIdOrganizationIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OauthApi(configuration);

const request: OauthApiV1OauthTypeIdOrganizationIdGetRequest = {
    // component type ID
  typeId: "type_id_example",
    // organization ID
  organizationId: "organization_id_example",
};

const data = await apiInstance.v1OauthTypeIdOrganizationIdGet(request);
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


