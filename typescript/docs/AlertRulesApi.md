# .AlertRulesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3AlertRulesAlertRuleTypeIdGet**](AlertRulesApi.md#v3AlertRulesAlertRuleTypeIdGet) | **GET** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata
[**v3AlertRulesGet**](AlertRulesApi.md#v3AlertRulesGet) | **GET** /v3/alert_rules | List alert rule types
[**v3OrganizationIdAlertRulesAlertRuleIdDelete**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdDelete) | **DELETE** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule
[**v3OrganizationIdAlertRulesAlertRuleIdGet**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdGet) | **GET** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID
[**v3OrganizationIdAlertRulesAlertRuleIdPut**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdPut) | **PUT** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule
[**v3OrganizationIdAlertRulesGet**](AlertRulesApi.md#v3OrganizationIdAlertRulesGet) | **GET** /v3/{organization_id}/alert_rules | Get all alert rules
[**v3OrganizationIdAlertRulesPost**](AlertRulesApi.md#v3OrganizationIdAlertRulesPost) | **POST** /v3/{organization_id}/alert_rules | Create a new alert rule


# **v3AlertRulesAlertRuleTypeIdGet**
> AlertsAlertMeta v3AlertRulesAlertRuleTypeIdGet()

Get configuration metadata for a specific alert rule type by its type ID

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3AlertRulesAlertRuleTypeIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3AlertRulesAlertRuleTypeIdGetRequest = {
    // Alert Rule Type ID
  alertRuleTypeId: "alert_rule_type_id_example",
};

const data = await apiInstance.v3AlertRulesAlertRuleTypeIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertRuleTypeId** | [**string**] | Alert Rule Type ID | defaults to undefined


### Return type

**AlertsAlertMeta**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule type config metadata retrieved successfully |  -  |
**404** | Alert rule type not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3AlertRulesGet**
> Array<AlertsAlertMeta> v3AlertRulesGet()

List all available alert rule types with their configuration metadata

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request = {};

const data = await apiInstance.v3AlertRulesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AlertsAlertMeta>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule types retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertRulesAlertRuleIdDelete**
> void v3OrganizationIdAlertRulesAlertRuleIdDelete()

Delete an existing alert rule

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Alert Rule ID to delete
  alertRuleId: "alert_rule_id_example",
};

const data = await apiInstance.v3OrganizationIdAlertRulesAlertRuleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **alertRuleId** | [**string**] | Alert Rule ID to delete | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Alert rule deleted successfully |  -  |
**400** | Invalid request |  -  |
**404** | Alert rule not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertRulesAlertRuleIdGet**
> ModelsAlertRule v3OrganizationIdAlertRulesAlertRuleIdGet()

Retrieve an alert rule by its ID

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Alert Rule ID to retrieve
  alertRuleId: "alert_rule_id_example",
};

const data = await apiInstance.v3OrganizationIdAlertRulesAlertRuleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **alertRuleId** | [**string**] | Alert Rule ID to retrieve | defaults to undefined


### Return type

**ModelsAlertRule**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule retrieved successfully |  -  |
**400** | Invalid request |  -  |
**404** | Alert rule not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertRulesAlertRuleIdPut**
> ModelsAlertRule v3OrganizationIdAlertRulesAlertRuleIdPut(routesV3UpdateAlertRuleRequest)

Update an existing alert rule

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3OrganizationIdAlertRulesAlertRuleIdPutRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Alert Rule ID to update
  alertRuleId: "alert_rule_id_example",
    // Request body for updating an alert rule
  routesV3UpdateAlertRuleRequest: {
    active: true,
    description: "description_example",
    name: "name_example",
    pipelineIds: [
      "pipelineIds_example",
    ],
    ruleConfig: {
      "key": null,
    },
    severity: "severity_example",
  },
};

const data = await apiInstance.v3OrganizationIdAlertRulesAlertRuleIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateAlertRuleRequest** | **RoutesV3UpdateAlertRuleRequest**| Request body for updating an alert rule |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **alertRuleId** | [**string**] | Alert Rule ID to update | defaults to undefined


### Return type

**ModelsAlertRule**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule updated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertRulesGet**
> ModelsAlertRuleList v3OrganizationIdAlertRulesGet()

Retrieve all alert rules for an organization

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3OrganizationIdAlertRulesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3OrganizationIdAlertRulesGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v3OrganizationIdAlertRulesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsAlertRuleList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of alert rules retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertRulesPost**
> ModelsAlertRule v3OrganizationIdAlertRulesPost(routesV3CreateAlertRuleRequest)

Create a new alert rule with the provided details

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiV3OrganizationIdAlertRulesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiV3OrganizationIdAlertRulesPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating an alert rule
  routesV3CreateAlertRuleRequest: {
    active: true,
    description: "description_example",
    name: "name_example",
    pipelineIds: [
      "pipelineIds_example",
    ],
    ruleConfig: {
      "key": null,
    },
    severity: "severity_example",
    type: "type_example",
  },
};

const data = await apiInstance.v3OrganizationIdAlertRulesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateAlertRuleRequest** | **RoutesV3CreateAlertRuleRequest**| Request body for creating an alert rule |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsAlertRule**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Alert rule created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


