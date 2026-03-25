# .AlertRulesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlertRule**](AlertRulesApi.md#createAlertRule) | **POST** /v3/{organization_id}/alert_rules | Create a new alert rule
[**deleteAlertRule**](AlertRulesApi.md#deleteAlertRule) | **DELETE** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule
[**getAlertRuleByID**](AlertRulesApi.md#getAlertRuleByID) | **GET** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID
[**getAlertRuleConfigMeta**](AlertRulesApi.md#getAlertRuleConfigMeta) | **GET** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata
[**listAlertRuleTypes**](AlertRulesApi.md#listAlertRuleTypes) | **GET** /v3/alert_rules | List alert rule types
[**listAlertRules**](AlertRulesApi.md#listAlertRules) | **GET** /v3/{organization_id}/alert_rules | Get all alert rules
[**updateAlertRule**](AlertRulesApi.md#updateAlertRule) | **PUT** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule


# **createAlertRule**
> ModelsAlertRule createAlertRule(routesV3CreateAlertRuleRequest)

Create a new alert rule with the provided details

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiCreateAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiCreateAlertRuleRequest = {
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

const data = await apiInstance.createAlertRule(request);
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

# **deleteAlertRule**
> void deleteAlertRule()

Delete an existing alert rule

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiDeleteAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiDeleteAlertRuleRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Alert Rule ID to delete
  alertRuleId: "alert_rule_id_example",
};

const data = await apiInstance.deleteAlertRule(request);
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

# **getAlertRuleByID**
> ModelsAlertRule getAlertRuleByID()

Retrieve an alert rule by its ID

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiGetAlertRuleByIDRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiGetAlertRuleByIDRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Alert Rule ID to retrieve
  alertRuleId: "alert_rule_id_example",
};

const data = await apiInstance.getAlertRuleByID(request);
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

# **getAlertRuleConfigMeta**
> AlertsAlertMeta getAlertRuleConfigMeta()

Get configuration metadata for a specific alert rule type by its type ID

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiGetAlertRuleConfigMetaRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiGetAlertRuleConfigMetaRequest = {
    // Alert Rule Type ID
  alertRuleTypeId: "alert_rule_type_id_example",
};

const data = await apiInstance.getAlertRuleConfigMeta(request);
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

# **listAlertRuleTypes**
> Array<AlertsAlertMeta> listAlertRuleTypes()

List all available alert rule types with their configuration metadata

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request = {};

const data = await apiInstance.listAlertRuleTypes(request);
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

# **listAlertRules**
> ModelsAlertRuleList listAlertRules()

Retrieve all alert rules for an organization

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiListAlertRulesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiListAlertRulesRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listAlertRules(request);
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

# **updateAlertRule**
> ModelsAlertRule updateAlertRule(routesV3UpdateAlertRuleRequest)

Update an existing alert rule

### Example


```typescript
import { createConfiguration, AlertRulesApi } from '';
import type { AlertRulesApiUpdateAlertRuleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertRulesApi(configuration);

const request: AlertRulesApiUpdateAlertRuleRequest = {
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

const data = await apiInstance.updateAlertRule(request);
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


