# \AlertRulesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAlertRule**](AlertRulesAPI.md#CreateAlertRule) | **Post** /v3/{organization_id}/alert_rules | Create a new alert rule
[**DeleteAlertRule**](AlertRulesAPI.md#DeleteAlertRule) | **Delete** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule
[**GetAlertRuleByID**](AlertRulesAPI.md#GetAlertRuleByID) | **Get** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID
[**GetAlertRuleConfigMeta**](AlertRulesAPI.md#GetAlertRuleConfigMeta) | **Get** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata
[**ListAlertRuleTypes**](AlertRulesAPI.md#ListAlertRuleTypes) | **Get** /v3/alert_rules | List alert rule types
[**ListAlertRules**](AlertRulesAPI.md#ListAlertRules) | **Get** /v3/{organization_id}/alert_rules | Get all alert rules
[**UpdateAlertRule**](AlertRulesAPI.md#UpdateAlertRule) | **Put** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule



## CreateAlertRule

> ModelsAlertRule CreateAlertRule(ctx, organizationId).CreateAlertRuleRequest(createAlertRuleRequest).Execute()

Create a new alert rule



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	createAlertRuleRequest := openapiclient.CreateAlertRule_request{RoutesV3CreateAlertRuleRequest: openapiclient.NewRoutesV3CreateAlertRuleRequest()} // CreateAlertRuleRequest | Request body for creating an alert rule

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.CreateAlertRule(context.Background(), organizationId).CreateAlertRuleRequest(createAlertRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.CreateAlertRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAlertRule`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.CreateAlertRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAlertRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createAlertRuleRequest** | [**CreateAlertRuleRequest**](CreateAlertRuleRequest.md) | Request body for creating an alert rule | 

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAlertRule

> DeleteAlertRule(ctx, organizationId, alertRuleId).Execute()

Delete alert rule



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	alertRuleId := "alertRuleId_example" // string | Alert Rule ID to delete

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AlertRulesAPI.DeleteAlertRule(context.Background(), organizationId, alertRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.DeleteAlertRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**alertRuleId** | **string** | Alert Rule ID to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAlertRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAlertRuleByID

> ModelsAlertRule GetAlertRuleByID(ctx, organizationId, alertRuleId).Execute()

Get alert rule by ID



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	alertRuleId := "alertRuleId_example" // string | Alert Rule ID to retrieve

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.GetAlertRuleByID(context.Background(), organizationId, alertRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.GetAlertRuleByID``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAlertRuleByID`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.GetAlertRuleByID`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**alertRuleId** | **string** | Alert Rule ID to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertRuleByIDRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAlertRuleConfigMeta

> AlertsAlertMeta GetAlertRuleConfigMeta(ctx, alertRuleTypeId).Execute()

Get alert rule type config metadata



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	alertRuleTypeId := "alertRuleTypeId_example" // string | Alert Rule Type ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.GetAlertRuleConfigMeta(context.Background(), alertRuleTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.GetAlertRuleConfigMeta``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAlertRuleConfigMeta`: AlertsAlertMeta
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.GetAlertRuleConfigMeta`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**alertRuleTypeId** | **string** | Alert Rule Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertRuleConfigMetaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AlertsAlertMeta**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListAlertRuleTypes

> []AlertsAlertMeta ListAlertRuleTypes(ctx).Execute()

List alert rule types



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.ListAlertRuleTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.ListAlertRuleTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAlertRuleTypes`: []AlertsAlertMeta
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.ListAlertRuleTypes`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListAlertRuleTypesRequest struct via the builder pattern


### Return type

[**[]AlertsAlertMeta**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListAlertRules

> ModelsAlertRuleList ListAlertRules(ctx, organizationId).Limit(limit).Offset(offset).Execute()

Get all alert rules



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	limit := int32(56) // int32 | Limit (optional)
	offset := int32(56) // int32 | Offset (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.ListAlertRules(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.ListAlertRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAlertRules`: ModelsAlertRuleList
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.ListAlertRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAlertRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit | 
 **offset** | **int32** | Offset | 

### Return type

[**ModelsAlertRuleList**](ModelsAlertRuleList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAlertRule

> ModelsAlertRule UpdateAlertRule(ctx, organizationId, alertRuleId).UpdateAlertRuleRequest(updateAlertRuleRequest).Execute()

Update alert rule



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/monad-inc/sdk/go"
)

func main() {
	organizationId := "organizationId_example" // string | Organization ID
	alertRuleId := "alertRuleId_example" // string | Alert Rule ID to update
	updateAlertRuleRequest := openapiclient.UpdateAlertRule_request{RoutesV3UpdateAlertRuleRequest: openapiclient.NewRoutesV3UpdateAlertRuleRequest()} // UpdateAlertRuleRequest | Request body for updating an alert rule

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.UpdateAlertRule(context.Background(), organizationId, alertRuleId).UpdateAlertRuleRequest(updateAlertRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.UpdateAlertRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateAlertRule`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.UpdateAlertRule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**alertRuleId** | **string** | Alert Rule ID to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAlertRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateAlertRuleRequest** | [**UpdateAlertRuleRequest**](UpdateAlertRuleRequest.md) | Request body for updating an alert rule | 

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

