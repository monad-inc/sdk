# \ConditionSandboxAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApplyConditionV2**](ConditionSandboxAPI.md#ApplyConditionV2) | **Post** /v2/sandbox/condition | Apply condition to record



## ApplyConditionV2

> RoutesV2ApplyConditionResponse ApplyConditionV2(ctx).ApplyConditionV2Request(applyConditionV2Request).Execute()

Apply condition to record



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
	applyConditionV2Request := openapiclient.ApplyConditionV2_request{RoutesV2ApplyConditionRequest: openapiclient.NewRoutesV2ApplyConditionRequest()} // ApplyConditionV2Request | Condition and record

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ConditionSandboxAPI.ApplyConditionV2(context.Background()).ApplyConditionV2Request(applyConditionV2Request).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConditionSandboxAPI.ApplyConditionV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApplyConditionV2`: RoutesV2ApplyConditionResponse
	fmt.Fprintf(os.Stdout, "Response from `ConditionSandboxAPI.ApplyConditionV2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApplyConditionV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applyConditionV2Request** | [**ApplyConditionV2Request**](ApplyConditionV2Request.md) | Condition and record | 

### Return type

[**RoutesV2ApplyConditionResponse**](RoutesV2ApplyConditionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

