# .SessionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSession**](SessionsApi.md#createSession) | **POST** /v3/sessions | Mint a short-lived API token, optionally scoped to a single org


# **createSession**
> RoutesV3CreateSessionResponse createSession()

Creates a short-lived JWT off the calling API key. When `organization_id` is supplied, the token is pinned to that org via a `scoped_org` claim and the org-access middleware refuses any other org for this token. No new API key row is created — revoking the parent key invalidates every session it minted.

### Example


```typescript
import { createConfiguration, SessionsApi } from '';
import type { SessionsApiCreateSessionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SessionsApi(configuration);

const request: SessionsApiCreateSessionRequest = {
    // Session options (optional)
  createSessionRequest: null,
};

const data = await apiInstance.createSession(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSessionRequest** | **CreateSessionRequest**| Session options |


### Return type

**RoutesV3CreateSessionResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session minted |  -  |
**400** | Invalid request |  -  |
**401** | Missing or invalid auth |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


