# .ConditionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listConditions**](ConditionsApi.md#listConditions) | **GET** /v2/conditions | List conditions


# **listConditions**
> Array<LeafconditionsInfo> listConditions()

List conditions

### Example


```typescript
import { createConfiguration, ConditionsApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionsApi(configuration);

const request = {};

const data = await apiInstance.listConditions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LeafconditionsInfo>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Conditions information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


