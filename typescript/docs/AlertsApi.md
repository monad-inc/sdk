# .AlertsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdAlertsGet**](AlertsApi.md#v3OrganizationIdAlertsGet) | **GET** /v3/{organization_id}/alerts | List alerts with pagination
[**v3OrganizationIdAlertsStreamGet**](AlertsApi.md#v3OrganizationIdAlertsStreamGet) | **GET** /v3/{organization_id}/alerts/stream | Stream alerts in real-time


# **v3OrganizationIdAlertsGet**
> RoutesV3AlertList v3OrganizationIdAlertsGet()

Get list of recent historical alerts for an organization

### Example


```typescript
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiV3OrganizationIdAlertsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiV3OrganizationIdAlertsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Comma-separated alert rule IDs (optional)
  ruleIds: "rule_ids_example",
    // Comma-separated severity levels (optional)
  severities: "severities_example",
    // Comma-separated pipeline IDs (optional)
  pipelineIds: "pipeline_ids_example",
    // Resource type filter (optional)
  resourceType: "resource_type_example",
    // Specific resource ID (optional)
  resourceId: "resource_id_example",
    // RFC3339 timestamp for start time (optional)
  since: "since_example",
    // RFC3339 timestamp for end time (optional)
  until: "until_example",
};

const data = await apiInstance.v3OrganizationIdAlertsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **ruleIds** | [**string**] | Comma-separated alert rule IDs | (optional) defaults to undefined
 **severities** | [**string**] | Comma-separated severity levels | (optional) defaults to undefined
 **pipelineIds** | [**string**] | Comma-separated pipeline IDs | (optional) defaults to undefined
 **resourceType** | [**string**] | Resource type filter | (optional) defaults to undefined
 **resourceId** | [**string**] | Specific resource ID | (optional) defaults to undefined
 **since** | [**string**] | RFC3339 timestamp for start time | (optional) defaults to undefined
 **until** | [**string**] | RFC3339 timestamp for end time | (optional) defaults to undefined


### Return type

**RoutesV3AlertList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated alerts |  -  |
**400** | Invalid parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3OrganizationIdAlertsStreamGet**
> string v3OrganizationIdAlertsStreamGet()

Stream alerts for an organization using Server-Sent Events

### Example


```typescript
import { createConfiguration, AlertsApi } from '';
import type { AlertsApiV3OrganizationIdAlertsStreamGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AlertsApi(configuration);

const request: AlertsApiV3OrganizationIdAlertsStreamGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // RFC3339 timestamp to start streaming from (optional)
  since: "since_example",
    // Duration to start streaming from (e.g., \'5m\', \'1h\', \'24h\') (optional)
  last: "last_example",
    // Comma-separated alert rule IDs (optional)
  ruleIds: "rule_ids_example",
    // Comma-separated severity levels (optional)
  severities: "severities_example",
    // Comma-separated resource IDs (optional)
  resourceIds: "resource_ids_example",
    // Resource type filter (optional)
  resourceType: "resource_type_example",
};

const data = await apiInstance.v3OrganizationIdAlertsStreamGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **since** | [**string**] | RFC3339 timestamp to start streaming from | (optional) defaults to undefined
 **last** | [**string**] | Duration to start streaming from (e.g., \&#39;5m\&#39;, \&#39;1h\&#39;, \&#39;24h\&#39;) | (optional) defaults to undefined
 **ruleIds** | [**string**] | Comma-separated alert rule IDs | (optional) defaults to undefined
 **severities** | [**string**] | Comma-separated severity levels | (optional) defaults to undefined
 **resourceIds** | [**string**] | Comma-separated resource IDs | (optional) defaults to undefined
 **resourceType** | [**string**] | Resource type filter | (optional) defaults to undefined


### Return type

**string**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert stream |  -  |
**400** | Invalid parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


