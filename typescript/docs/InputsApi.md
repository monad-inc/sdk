# .InputsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInputTypeMeta**](InputsApi.md#getInputTypeMeta) | **GET** /v1/inputs/{input_type_id} | Get input config meta
[**listInputTypes**](InputsApi.md#listInputTypes) | **GET** /v1/inputs | List inputs


# **getInputTypeMeta**
> ModelsConnectorMeta getInputTypeMeta()

Get input config meta

### Example


```typescript
import { createConfiguration, InputsApi } from '';
import type { InputsApiGetInputTypeMetaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new InputsApi(configuration);

const request: InputsApiGetInputTypeMetaRequest = {
    // Input type ID
  inputTypeId: "input_type_id_example",
};

const data = await apiInstance.getInputTypeMeta(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputTypeId** | [**string**] | Input type ID | defaults to undefined


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
**200** | Input config meta retrieved successfully |  -  |
**404** | Input type not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listInputTypes**
> Array<InputsConnectorMeta> listInputTypes()

List inputs

### Example


```typescript
import { createConfiguration, InputsApi } from '';

const configuration = createConfiguration();
const apiInstance = new InputsApi(configuration);

const request = {};

const data = await apiInstance.listInputTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<InputsConnectorMeta>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inputs retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


