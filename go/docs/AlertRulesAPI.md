# \AlertRulesAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3AlertRulesAlertRuleTypeIdGet**](AlertRulesAPI.md#V3AlertRulesAlertRuleTypeIdGet) | **Get** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata
[**V3AlertRulesGet**](AlertRulesAPI.md#V3AlertRulesGet) | **Get** /v3/alert_rules | List alert rule types
[**V3OrganizationIdAlertRulesAlertRuleIdDelete**](AlertRulesAPI.md#V3OrganizationIdAlertRulesAlertRuleIdDelete) | **Delete** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule
[**V3OrganizationIdAlertRulesAlertRuleIdGet**](AlertRulesAPI.md#V3OrganizationIdAlertRulesAlertRuleIdGet) | **Get** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID
[**V3OrganizationIdAlertRulesAlertRuleIdPut**](AlertRulesAPI.md#V3OrganizationIdAlertRulesAlertRuleIdPut) | **Put** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule
[**V3OrganizationIdAlertRulesGet**](AlertRulesAPI.md#V3OrganizationIdAlertRulesGet) | **Get** /v3/{organization_id}/alert_rules | Get all alert rules
[**V3OrganizationIdAlertRulesPost**](AlertRulesAPI.md#V3OrganizationIdAlertRulesPost) | **Post** /v3/{organization_id}/alert_rules | Create a new alert rule



## V3AlertRulesAlertRuleTypeIdGet

> AlertsAlertMeta V3AlertRulesAlertRuleTypeIdGet(ctx, alertRuleTypeId).Execute()

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
	resp, r, err := apiClient.AlertRulesAPI.V3AlertRulesAlertRuleTypeIdGet(context.Background(), alertRuleTypeId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3AlertRulesAlertRuleTypeIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3AlertRulesAlertRuleTypeIdGet`: AlertsAlertMeta
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3AlertRulesAlertRuleTypeIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**alertRuleTypeId** | **string** | Alert Rule Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3AlertRulesAlertRuleTypeIdGetRequest struct via the builder pattern


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


## V3AlertRulesGet

> []AlertsAlertMeta V3AlertRulesGet(ctx).Execute()

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
	resp, r, err := apiClient.AlertRulesAPI.V3AlertRulesGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3AlertRulesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3AlertRulesGet`: []AlertsAlertMeta
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3AlertRulesGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3AlertRulesGetRequest struct via the builder pattern


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


## V3OrganizationIdAlertRulesAlertRuleIdDelete

> V3OrganizationIdAlertRulesAlertRuleIdDelete(ctx, organizationId, alertRuleId).Execute()

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
	r, err := apiClient.AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdDelete(context.Background(), organizationId, alertRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiV3OrganizationIdAlertRulesAlertRuleIdDeleteRequest struct via the builder pattern


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


## V3OrganizationIdAlertRulesAlertRuleIdGet

> ModelsAlertRule V3OrganizationIdAlertRulesAlertRuleIdGet(ctx, organizationId, alertRuleId).Execute()

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
	resp, r, err := apiClient.AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdGet(context.Background(), organizationId, alertRuleId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdAlertRulesAlertRuleIdGet`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**alertRuleId** | **string** | Alert Rule ID to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdAlertRulesAlertRuleIdGetRequest struct via the builder pattern


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


## V3OrganizationIdAlertRulesAlertRuleIdPut

> ModelsAlertRule V3OrganizationIdAlertRulesAlertRuleIdPut(ctx, organizationId, alertRuleId).RoutesV3UpdateAlertRuleRequest(routesV3UpdateAlertRuleRequest).Execute()

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
	routesV3UpdateAlertRuleRequest := *openapiclient.NewRoutesV3UpdateAlertRuleRequest() // RoutesV3UpdateAlertRuleRequest | Request body for updating an alert rule

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdPut(context.Background(), organizationId, alertRuleId).RoutesV3UpdateAlertRuleRequest(routesV3UpdateAlertRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdPut``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdAlertRulesAlertRuleIdPut`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3OrganizationIdAlertRulesAlertRuleIdPut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 
**alertRuleId** | **string** | Alert Rule ID to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdAlertRulesAlertRuleIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **routesV3UpdateAlertRuleRequest** | [**RoutesV3UpdateAlertRuleRequest**](RoutesV3UpdateAlertRuleRequest.md) | Request body for updating an alert rule | 

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


## V3OrganizationIdAlertRulesGet

> ModelsAlertRuleList V3OrganizationIdAlertRulesGet(ctx, organizationId).Limit(limit).Offset(offset).Execute()

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
	resp, r, err := apiClient.AlertRulesAPI.V3OrganizationIdAlertRulesGet(context.Background(), organizationId).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3OrganizationIdAlertRulesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdAlertRulesGet`: ModelsAlertRuleList
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3OrganizationIdAlertRulesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdAlertRulesGetRequest struct via the builder pattern


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


## V3OrganizationIdAlertRulesPost

> ModelsAlertRule V3OrganizationIdAlertRulesPost(ctx, organizationId).RoutesV3CreateAlertRuleRequest(routesV3CreateAlertRuleRequest).Execute()

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
	routesV3CreateAlertRuleRequest := *openapiclient.NewRoutesV3CreateAlertRuleRequest() // RoutesV3CreateAlertRuleRequest | Request body for creating an alert rule

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertRulesAPI.V3OrganizationIdAlertRulesPost(context.Background(), organizationId).RoutesV3CreateAlertRuleRequest(routesV3CreateAlertRuleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertRulesAPI.V3OrganizationIdAlertRulesPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3OrganizationIdAlertRulesPost`: ModelsAlertRule
	fmt.Fprintf(os.Stdout, "Response from `AlertRulesAPI.V3OrganizationIdAlertRulesPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**organizationId** | **string** | Organization ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV3OrganizationIdAlertRulesPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **routesV3CreateAlertRuleRequest** | [**RoutesV3CreateAlertRuleRequest**](RoutesV3CreateAlertRuleRequest.md) | Request body for creating an alert rule | 

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

