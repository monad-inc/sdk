# .TransformSandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTransformation**](TransformSandboxApi.md#applyTransformation) | **POST** /v2/{organization_id}/sandbox/transform | Apply transformation to record
[**applyTransformationV2**](TransformSandboxApi.md#applyTransformationV2) | **POST** /v2/sandbox/transform | Apply transformation to record
[**generateRecord**](TransformSandboxApi.md#generateRecord) | **POST** /v2/sandbox/template | Generate sample record
[**listTemplates**](TransformSandboxApi.md#listTemplates) | **GET** /v2/sandbox/template | List available templates


# **applyTransformation**
> RoutesV2ApplyTransformationResponse applyTransformation(routesV2ApplyTransformationRequest)

Apply a transformation configuration to a JSON record, resolving secret references from the organization

### Example


```typescript
import { createConfiguration, TransformSandboxApi } from '';
import type { TransformSandboxApiApplyTransformationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformSandboxApi(configuration);

const request: TransformSandboxApiApplyTransformationRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Transform configuration and record
  routesV2ApplyTransformationRequest: {
    config: {
      conditional: {
        conditions: {
          conditions: [
            ,
          ],
          config: {
            "key": null,
          },
          operator: "operator_example",
          typeId: "typeId_example",
        },
        _else: "_else_example",
      },
      operations: [
        {
          arguments: {
            "key": null,
          },
          description: "description_example",
          operation: "operation_example",
        },
      ],
    },
    record: [
      1,
    ],
  },
};

const data = await apiInstance.applyTransformation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2ApplyTransformationRequest** | **RoutesV2ApplyTransformationRequest**| Transform configuration and record |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV2ApplyTransformationResponse**

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

# **applyTransformationV2**
> RoutesV2ApplyTransformationResponse applyTransformationV2(routesV2ApplyTransformationRequest)

Apply a transformation configuration to a JSON record

### Example


```typescript
import { createConfiguration, TransformSandboxApi } from '';
import type { TransformSandboxApiApplyTransformationV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new TransformSandboxApi(configuration);

const request: TransformSandboxApiApplyTransformationV2Request = {
    // Transform configuration and record
  routesV2ApplyTransformationRequest: {
    config: {
      conditional: {
        conditions: {
          conditions: [
            ,
          ],
          config: {
            "key": null,
          },
          operator: "operator_example",
          typeId: "typeId_example",
        },
        _else: "_else_example",
      },
      operations: [
        {
          arguments: {
            "key": null,
          },
          description: "description_example",
          operation: "operation_example",
        },
      ],
    },
    record: [
      1,
    ],
  },
};

const data = await apiInstance.applyTransformationV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2ApplyTransformationRequest** | **RoutesV2ApplyTransformationRequest**| Transform configuration and record |


### Return type

**RoutesV2ApplyTransformationResponse**

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

# **generateRecord**
> RoutesV2GenerateRecordResponse generateRecord(routesV2GenerateRecordRequest)

Generate a sample record using the specified template type

### Example


```typescript
import { createConfiguration, TransformSandboxApi } from '';
import type { TransformSandboxApiGenerateRecordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformSandboxApi(configuration);

const request: TransformSandboxApiGenerateRecordRequest = {
    // Record generation parameters
  routesV2GenerateRecordRequest: {
    recordType: "recordType_example",
  },
};

const data = await apiInstance.generateRecord(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV2GenerateRecordRequest** | **RoutesV2GenerateRecordRequest**| Record generation parameters |


### Return type

**RoutesV2GenerateRecordResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTemplates**
> RoutesV2ListTemplatesResponse listTemplates()

Get a list of all valid record type templates

### Example


```typescript
import { createConfiguration, TransformSandboxApi } from '';
import type { TransformSandboxApiListTemplatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TransformSandboxApi(configuration);

const request: TransformSandboxApiListTemplatesRequest = {
  
  body: {},
};

const data = await apiInstance.listTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**RoutesV2ListTemplatesResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of template names |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


