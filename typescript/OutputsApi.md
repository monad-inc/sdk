# .OutputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OutputsGet**](OutputsApi.md#v1OutputsGet) | **GET** /v1/outputs | List outputs
[**v1OutputsOutputTypeIdGet**](OutputsApi.md#v1OutputsOutputTypeIdGet) | **GET** /v1/outputs/{output_type_id} | Get output config meta


# **v1OutputsGet**
> Array<OutputsConnectorMeta> v1OutputsGet()

List outputs

### Example


```typescript
import { createConfiguration, OutputsApi } from '';

const configuration = createConfiguration();
const apiInstance = new OutputsApi(configuration);

const request = {};

const data = await apiInstance.v1OutputsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<OutputsConnectorMeta>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Outputs retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1OutputsOutputTypeIdGet**
> ModelsConnectorMeta v1OutputsOutputTypeIdGet()

Get output config meta

### Example


```typescript
import { createConfiguration, OutputsApi } from '';
import type { OutputsApiV1OutputsOutputTypeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OutputsApi(configuration);

const request: OutputsApiV1OutputsOutputTypeIdGetRequest = {
    // Output type ID
  outputTypeId: "output_type_id_example",
};

const data = await apiInstance.v1OutputsOutputTypeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **outputTypeId** | [**string**] | Output type ID | defaults to undefined


### Return type

**ModelsConnectorMeta**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Output config meta retrieved successfully |  -  |
**404** | Output type not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


