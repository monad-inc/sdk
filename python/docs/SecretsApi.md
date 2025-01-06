# monad.SecretsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organization_id_secrets_get**](SecretsApi.md#v2_organization_id_secrets_get) | **GET** /v2/{organization_id}/secrets | List secrets
[**v2_organization_id_secrets_post**](SecretsApi.md#v2_organization_id_secrets_post) | **POST** /v2/{organization_id}/secrets | Create secret
[**v2_organization_id_secrets_secret_id_delete**](SecretsApi.md#v2_organization_id_secrets_secret_id_delete) | **DELETE** /v2/{organization_id}/secrets/{secret_id} | Delete secret
[**v2_organization_id_secrets_secret_id_get**](SecretsApi.md#v2_organization_id_secrets_secret_id_get) | **GET** /v2/{organization_id}/secrets/{secret_id} | Get secret
[**v2_organization_id_secrets_secret_id_patch**](SecretsApi.md#v2_organization_id_secrets_secret_id_patch) | **PATCH** /v2/{organization_id}/secrets/{secret_id} | Update secret


# **v2_organization_id_secrets_get**
> ModelsSecretList v2_organization_id_secrets_get(organization_id, limit=limit, offset=offset)

List secrets

Lists all secrets for the specified organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_secret_list import ModelsSecretList
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
    api_instance = monad.SecretsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit number of results (optional)
    offset = 56 # int | Offset results (optional)

    try:
        # List secrets
        api_response = api_instance.v2_organization_id_secrets_get(organization_id, limit=limit, offset=offset)
        print("The response of SecretsApi->v2_organization_id_secrets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->v2_organization_id_secrets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit number of results | [optional] 
 **offset** | **int**| Offset results | [optional] 

### Return type

[**ModelsSecretList**](ModelsSecretList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_secrets_post**
> RoutesV2SecretResponse v2_organization_id_secrets_post(organization_id, routes_v2_create_or_update_secret_request)

Create secret

Creates a new secret for the specified organization

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_create_or_update_secret_request import RoutesV2CreateOrUpdateSecretRequest
from monad.models.routes_v2_secret_response import RoutesV2SecretResponse
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
    api_instance = monad.SecretsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v2_create_or_update_secret_request = monad.RoutesV2CreateOrUpdateSecretRequest() # RoutesV2CreateOrUpdateSecretRequest | Secret to create

    try:
        # Create secret
        api_response = api_instance.v2_organization_id_secrets_post(organization_id, routes_v2_create_or_update_secret_request)
        print("The response of SecretsApi->v2_organization_id_secrets_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->v2_organization_id_secrets_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v2_create_or_update_secret_request** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md)| Secret to create | 

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_secrets_secret_id_delete**
> v2_organization_id_secrets_secret_id_delete(organization_id, secret_id)

Delete secret

Deletes a specific secret by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
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
    api_instance = monad.SecretsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    secret_id = 'secret_id_example' # str | Secret ID

    try:
        # Delete secret
        api_instance.v2_organization_id_secrets_secret_id_delete(organization_id, secret_id)
    except Exception as e:
        print("Exception when calling SecretsApi->v2_organization_id_secrets_secret_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **secret_id** | **str**| Secret ID | 

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_secrets_secret_id_get**
> RoutesV2SecretResponse v2_organization_id_secrets_secret_id_get(organization_id, secret_id)

Get secret

Gets a specific secret by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_secret_response import RoutesV2SecretResponse
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
    api_instance = monad.SecretsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    secret_id = 'secret_id_example' # str | Secret ID

    try:
        # Get secret
        api_response = api_instance.v2_organization_id_secrets_secret_id_get(organization_id, secret_id)
        print("The response of SecretsApi->v2_organization_id_secrets_secret_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->v2_organization_id_secrets_secret_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **secret_id** | **str**| Secret ID | 

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organization_id_secrets_secret_id_patch**
> RoutesV2SecretResponse v2_organization_id_secrets_secret_id_patch(organization_id, secret_id, routes_v2_create_or_update_secret_request)

Update secret

Updates a specific secret by ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_create_or_update_secret_request import RoutesV2CreateOrUpdateSecretRequest
from monad.models.routes_v2_secret_response import RoutesV2SecretResponse
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
    api_instance = monad.SecretsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    secret_id = 'secret_id_example' # str | Secret ID
    routes_v2_create_or_update_secret_request = monad.RoutesV2CreateOrUpdateSecretRequest() # RoutesV2CreateOrUpdateSecretRequest | Secret updates

    try:
        # Update secret
        api_response = api_instance.v2_organization_id_secrets_secret_id_patch(organization_id, secret_id, routes_v2_create_or_update_secret_request)
        print("The response of SecretsApi->v2_organization_id_secrets_secret_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecretsApi->v2_organization_id_secrets_secret_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **secret_id** | **str**| Secret ID | 
 **routes_v2_create_or_update_secret_request** | [**RoutesV2CreateOrUpdateSecretRequest**](RoutesV2CreateOrUpdateSecretRequest.md)| Secret updates | 

### Return type

[**RoutesV2SecretResponse**](RoutesV2SecretResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request body |  -  |
**404** | Secret not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

