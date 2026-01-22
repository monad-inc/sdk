# monad.TransformsRecommendationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_organization_id_transform_recommendations_optimizers_get**](TransformsRecommendationsApi.md#v3_organization_id_transform_recommendations_optimizers_get) | **GET** /v3/{organization_id}/transform_recommendations/optimizers | List available transform optimizers
[**v3_organization_id_transform_recommendations_post**](TransformsRecommendationsApi.md#v3_organization_id_transform_recommendations_post) | **POST** /v3/{organization_id}/transform_recommendations | Create transform recommendation


# **v3_organization_id_transform_recommendations_optimizers_get**
> List[RoutesV3OptimizerType] v3_organization_id_transform_recommendations_optimizers_get(organization_id)

List available transform optimizers

List available transform optimizers

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_optimizer_type import RoutesV3OptimizerType
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.TransformsRecommendationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List available transform optimizers
        api_response = api_instance.v3_organization_id_transform_recommendations_optimizers_get(organization_id)
        print("The response of TransformsRecommendationsApi->v3_organization_id_transform_recommendations_optimizers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRecommendationsApi->v3_organization_id_transform_recommendations_optimizers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**List[RoutesV3OptimizerType]**](RoutesV3OptimizerType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform recommendation created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_transform_recommendations_post**
> RoutesV3SecurityDataAnalysis v3_organization_id_transform_recommendations_post(organization_id, routes_v3_transform_recommendation_request)

Create transform recommendation

Analyze security data and provide transformation recommendations

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_security_data_analysis import RoutesV3SecurityDataAnalysis
from monad.models.routes_v3_transform_recommendation_request import RoutesV3TransformRecommendationRequest
from monad.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monad.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = monad.Configuration(
    host = "https://monad.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.TransformsRecommendationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_transform_recommendation_request = monad.RoutesV3TransformRecommendationRequest() # RoutesV3TransformRecommendationRequest | Security data to analyze

    try:
        # Create transform recommendation
        api_response = api_instance.v3_organization_id_transform_recommendations_post(organization_id, routes_v3_transform_recommendation_request)
        print("The response of TransformsRecommendationsApi->v3_organization_id_transform_recommendations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransformsRecommendationsApi->v3_organization_id_transform_recommendations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_transform_recommendation_request** | [**RoutesV3TransformRecommendationRequest**](RoutesV3TransformRecommendationRequest.md)| Security data to analyze | 

### Return type

[**RoutesV3SecurityDataAnalysis**](RoutesV3SecurityDataAnalysis.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transform recommendation created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |
**503** | Service unavailable (API key not configured) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

