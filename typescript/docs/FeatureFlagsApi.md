# .FeatureFlagsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeatureFlags**](FeatureFlagsApi.md#getFeatureFlags) | **GET** /v3/feature_flags | Get feature flags


# **getFeatureFlags**
> RoutesV3GetFeatureFlagResponse getFeatureFlags()

Get feature flags for the authenticated user

### Example


```typescript
import { createConfiguration, FeatureFlagsApi } from '';

const configuration = createConfiguration();
const apiInstance = new FeatureFlagsApi(configuration);

const request = {};

const data = await apiInstance.getFeatureFlags(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RoutesV3GetFeatureFlagResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feature flags retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


