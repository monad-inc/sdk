# .ConditionSandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyConditionV2**](ConditionSandboxApi.md#applyConditionV2) | **POST** /v2/sandbox/condition | Apply condition to record


# **applyConditionV2**
> RoutesV2ApplyConditionResponse applyConditionV2(routesV2ApplyConditionRequest)

Apply a condition to a JSON record

### Example


```typescript
import { createConfiguration, ConditionSandboxApi } from '';
import type { ConditionSandboxApiApplyConditionV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new ConditionSandboxApi(configuration);

const request: ConditionSandboxApiApplyConditionV2Request = {
    // Condition and record
  routesV2ApplyConditionRequest: {
    condition: {
      conditions: [
        ,
      ],
      config: {
        "key": null,
      },
      operator: "operator_example",
      typeId: "typeId_example",
    },
    record: [
      1,
    ],
  },
};

const data = await apiInstance.applyConditionV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2ApplyConditionRequest** | **RoutesV2ApplyConditionRequest**| Condition and record |


### Return type

**RoutesV2ApplyConditionResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


