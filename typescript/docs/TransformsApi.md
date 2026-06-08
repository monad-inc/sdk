# .TransformsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransformTypeMeta**](TransformsApi.md#getTransformTypeMeta) | **GET** /v1/transforms/{operation_type_id} | Get transform metadata
[**listTransformTypes**](TransformsApi.md#listTransformTypes) | **GET** /v1/transforms | List transforms


# **getTransformTypeMeta**
> any getTransformTypeMeta()

Get transform metadata

### Example


```typescript
import { createConfiguration, TransformsApi } from '';
import type { TransformsApiGetTransformTypeMetaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsApi(configuration);

const request: TransformsApiGetTransformTypeMetaRequest = {
    // Transform type ID
  operationTypeId: "operation_type_id_example",
  
  body: {},
};

const data = await apiInstance.getTransformTypeMeta(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **operationTypeId** | [**string**] | Transform type ID | defaults to undefined


### Return type

**any**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform metadata |  -  |
**404** | Transform not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTransformTypes**
> Array<OperationInformation> listTransformTypes()

List transforms

### Example


```typescript
import { createConfiguration, TransformsApi } from '';
import type { TransformsApiListTransformTypesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsApi(configuration);

const request: TransformsApiListTransformTypesRequest = {
  
  body: {},
};

const data = await apiInstance.listTransformTypes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**Array<OperationInformation>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


