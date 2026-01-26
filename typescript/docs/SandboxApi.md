# .SandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2SandboxTemplateGet**](SandboxApi.md#v2SandboxTemplateGet) | **GET** /v2/sandbox/template | List available templates
[**v2SandboxTemplatePost**](SandboxApi.md#v2SandboxTemplatePost) | **POST** /v2/sandbox/template | Generate sample record
[**v2SandboxTransformPost**](SandboxApi.md#v2SandboxTransformPost) | **POST** /v2/sandbox/transform | Apply transformation to record
[**v3OrganizationIdEnrichmentsSandboxPost**](SandboxApi.md#v3OrganizationIdEnrichmentsSandboxPost) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record


# **v2SandboxTemplateGet**
> RoutesV2ListTemplatesResponse v2SandboxTemplateGet()

Get a list of all valid record type templates

### Example


```typescript
import { createConfiguration, SandboxApi } from '';
import type { SandboxApiV2SandboxTemplateGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SandboxApi(configuration);

const request: SandboxApiV2SandboxTemplateGetRequest = {
  
  body: {},
};

const data = await apiInstance.v2SandboxTemplateGet(request);
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

# **v2SandboxTemplatePost**
> RoutesV2GenerateRecordResponse v2SandboxTemplatePost(routesV2GenerateRecordRequest)

Generate a sample record using the specified template type

### Example


```typescript
import { createConfiguration, SandboxApi } from '';
import type { SandboxApiV2SandboxTemplatePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SandboxApi(configuration);

const request: SandboxApiV2SandboxTemplatePostRequest = {
    // Record generation parameters
  routesV2GenerateRecordRequest: {
    recordType: "recordType_example",
  },
};

const data = await apiInstance.v2SandboxTemplatePost(request);
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

# **v2SandboxTransformPost**
> RoutesV2ApplyTransformationResponse v2SandboxTransformPost(routesV2ApplyTransformationRequest)

Apply a transformation configuration to a JSON record

### Example


```typescript
import { createConfiguration, SandboxApi } from '';
import type { SandboxApiV2SandboxTransformPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SandboxApi(configuration);

const request: SandboxApiV2SandboxTransformPostRequest = {
    // Transform configuration and record
  routesV2ApplyTransformationRequest: {
    config: {
      conditions: {
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
        onFail: "onFail_example",
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

const data = await apiInstance.v2SandboxTransformPost(request);
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

# **v3OrganizationIdEnrichmentsSandboxPost**
> RoutesV3EnrichmentSandboxResponse v3OrganizationIdEnrichmentsSandboxPost(routesV3EnrichmentSandboxRequest)

Apply a enrichment configuration to a JSON record

### Example


```typescript
import { createConfiguration, SandboxApi } from '';
import type { SandboxApiV3OrganizationIdEnrichmentsSandboxPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SandboxApi(configuration);

const request: SandboxApiV3OrganizationIdEnrichmentsSandboxPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Enrichment configuration and record
  routesV3EnrichmentSandboxRequest: {
    config: {
      secrets: 
        key: null,
      ,
      settings: 
        key: null,
      ,
    },
    record: [
      1,
    ],
    typeId: "typeId_example",
    useMockedData: true,
  },
};

const data = await apiInstance.v3OrganizationIdEnrichmentsSandboxPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3EnrichmentSandboxRequest** | **RoutesV3EnrichmentSandboxRequest**| Enrichment configuration and record |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**RoutesV3EnrichmentSandboxResponse**

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


