# \ConditionsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2ConditionsGet**](ConditionsAPI.md#V2ConditionsGet) | **Get** /v2/conditions | List conditions



## V2ConditionsGet

> []ConditionInfo V2ConditionsGet(ctx).Execute()

List conditions



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
	resp, r, err := apiClient.ConditionsAPI.V2ConditionsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ConditionsAPI.V2ConditionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ConditionsGet`: []ConditionInfo
	fmt.Fprintf(os.Stdout, "Response from `ConditionsAPI.V2ConditionsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV2ConditionsGetRequest struct via the builder pattern


### Return type

[**[]ConditionInfo**](ConditionInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

