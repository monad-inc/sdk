# \FeatureFlagsAPI

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V3FeatureFlagsGet**](FeatureFlagsAPI.md#V3FeatureFlagsGet) | **Get** /v3/feature_flags | Get feature flags



## V3FeatureFlagsGet

> RoutesV3GetFeatureFlagResponse V3FeatureFlagsGet(ctx).Execute()

Get feature flags



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
	resp, r, err := apiClient.FeatureFlagsAPI.V3FeatureFlagsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `FeatureFlagsAPI.V3FeatureFlagsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V3FeatureFlagsGet`: RoutesV3GetFeatureFlagResponse
	fmt.Fprintf(os.Stdout, "Response from `FeatureFlagsAPI.V3FeatureFlagsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiV3FeatureFlagsGetRequest struct via the builder pattern


### Return type

[**RoutesV3GetFeatureFlagResponse**](RoutesV3GetFeatureFlagResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

