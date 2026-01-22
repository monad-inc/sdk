# .TransformsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransformsGet**](TransformsApi.md#v1TransformsGet) | **GET** /v1/transforms | List transforms
[**v1TransformsTransformTypeIdGet**](TransformsApi.md#v1TransformsTransformTypeIdGet) | **GET** /v1/transforms/{transform_type_id} | Get transform metadata


# **v1TransformsGet**
> Array<OperationInformation> v1TransformsGet()

List transforms

### Example


```typescript
import { createConfiguration, TransformsApi } from '';
import type { TransformsApiV1TransformsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsApi(configuration);

const request: TransformsApiV1TransformsGetRequest = {
  
  body: {},
};

const data = await apiInstance.v1TransformsGet(request);
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

# **v1TransformsTransformTypeIdGet**
> any v1TransformsTransformTypeIdGet()

Get transform metadata

### Example


```typescript
import { createConfiguration, TransformsApi } from '';
import type { TransformsApiV1TransformsTransformTypeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformsApi(configuration);

const request: TransformsApiV1TransformsTransformTypeIdGetRequest = {
    // Transform type ID
  transformTypeId: "transform_type_id_example",
  
  body: {},
};

const data = await apiInstance.v1TransformsTransformTypeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **transformTypeId** | [**string**] | Transform type ID | defaults to undefined


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


