# monad.SandboxApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_sandbox_template_get**](SandboxApi.md#v2_sandbox_template_get) | **GET** /v2/sandbox/template | List available templates
[**v2_sandbox_template_post**](SandboxApi.md#v2_sandbox_template_post) | **POST** /v2/sandbox/template | Generate sample record
[**v2_sandbox_transform_post**](SandboxApi.md#v2_sandbox_transform_post) | **POST** /v2/sandbox/transform | Apply transformation to record
[**v3_organization_id_enrichments_sandbox_post**](SandboxApi.md#v3_organization_id_enrichments_sandbox_post) | **POST** /v3/{organization_id}/enrichments/sandbox | Apply enrichment to record


# **v2_sandbox_template_get**
> RoutesV2ListTemplatesResponse v2_sandbox_template_get(body=body)

List available templates

Get a list of all valid record type templates

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_list_templates_response import RoutesV2ListTemplatesResponse
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
    api_instance = monad.SandboxApi(api_client)
    body = None # object |  (optional)

    try:
        # List available templates
        api_response = api_instance.v2_sandbox_template_get(body=body)
        print("The response of SandboxApi->v2_sandbox_template_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->v2_sandbox_template_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

[**RoutesV2ListTemplatesResponse**](RoutesV2ListTemplatesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of template names |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_sandbox_template_post**
> RoutesV2GenerateRecordResponse v2_sandbox_template_post(routes_v2_generate_record_request)

Generate sample record

Generate a sample record using the specified template type

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_generate_record_request import RoutesV2GenerateRecordRequest
from monad.models.routes_v2_generate_record_response import RoutesV2GenerateRecordResponse
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
    api_instance = monad.SandboxApi(api_client)
    routes_v2_generate_record_request = monad.RoutesV2GenerateRecordRequest() # RoutesV2GenerateRecordRequest | Record generation parameters

    try:
        # Generate sample record
        api_response = api_instance.v2_sandbox_template_post(routes_v2_generate_record_request)
        print("The response of SandboxApi->v2_sandbox_template_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->v2_sandbox_template_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_v2_generate_record_request** | [**RoutesV2GenerateRecordRequest**](RoutesV2GenerateRecordRequest.md)| Record generation parameters | 

### Return type

[**RoutesV2GenerateRecordResponse**](RoutesV2GenerateRecordResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_sandbox_transform_post**
> RoutesV2ApplyTransformationResponse v2_sandbox_transform_post(routes_v2_apply_transformation_request)

Apply transformation to record

Apply a transformation configuration to a JSON record

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_apply_transformation_request import RoutesV2ApplyTransformationRequest
from monad.models.routes_v2_apply_transformation_response import RoutesV2ApplyTransformationResponse
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
    api_instance = monad.SandboxApi(api_client)
    routes_v2_apply_transformation_request = monad.RoutesV2ApplyTransformationRequest() # RoutesV2ApplyTransformationRequest | Transform configuration and record

    try:
        # Apply transformation to record
        api_response = api_instance.v2_sandbox_transform_post(routes_v2_apply_transformation_request)
        print("The response of SandboxApi->v2_sandbox_transform_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->v2_sandbox_transform_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_v2_apply_transformation_request** | [**RoutesV2ApplyTransformationRequest**](RoutesV2ApplyTransformationRequest.md)| Transform configuration and record | 

### Return type

[**RoutesV2ApplyTransformationResponse**](RoutesV2ApplyTransformationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_enrichments_sandbox_post**
> RoutesV3EnrichmentSandboxResponse v3_organization_id_enrichments_sandbox_post(organization_id, routes_v3_enrichment_sandbox_request)

Apply enrichment to record

Apply a enrichment configuration to a JSON record

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v3_enrichment_sandbox_request import RoutesV3EnrichmentSandboxRequest
from monad.models.routes_v3_enrichment_sandbox_response import RoutesV3EnrichmentSandboxResponse
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
    api_instance = monad.SandboxApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_enrichment_sandbox_request = monad.RoutesV3EnrichmentSandboxRequest() # RoutesV3EnrichmentSandboxRequest | Enrichment configuration and record

    try:
        # Apply enrichment to record
        api_response = api_instance.v3_organization_id_enrichments_sandbox_post(organization_id, routes_v3_enrichment_sandbox_request)
        print("The response of SandboxApi->v3_organization_id_enrichments_sandbox_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SandboxApi->v3_organization_id_enrichments_sandbox_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_enrichment_sandbox_request** | [**RoutesV3EnrichmentSandboxRequest**](RoutesV3EnrichmentSandboxRequest.md)| Enrichment configuration and record | 

### Return type

[**RoutesV3EnrichmentSandboxResponse**](RoutesV3EnrichmentSandboxResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

