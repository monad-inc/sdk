# monad.AlertRulesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_alert_rules_alert_rule_type_id_get**](AlertRulesApi.md#v3_alert_rules_alert_rule_type_id_get) | **GET** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata
[**v3_alert_rules_get**](AlertRulesApi.md#v3_alert_rules_get) | **GET** /v3/alert_rules | List alert rule types
[**v3_organization_id_alert_rules_alert_rule_id_delete**](AlertRulesApi.md#v3_organization_id_alert_rules_alert_rule_id_delete) | **DELETE** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule
[**v3_organization_id_alert_rules_alert_rule_id_get**](AlertRulesApi.md#v3_organization_id_alert_rules_alert_rule_id_get) | **GET** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID
[**v3_organization_id_alert_rules_alert_rule_id_put**](AlertRulesApi.md#v3_organization_id_alert_rules_alert_rule_id_put) | **PUT** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule
[**v3_organization_id_alert_rules_get**](AlertRulesApi.md#v3_organization_id_alert_rules_get) | **GET** /v3/{organization_id}/alert_rules | Get all alert rules
[**v3_organization_id_alert_rules_post**](AlertRulesApi.md#v3_organization_id_alert_rules_post) | **POST** /v3/{organization_id}/alert_rules | Create a new alert rule


# **v3_alert_rules_alert_rule_type_id_get**
> AlertsAlertMeta v3_alert_rules_alert_rule_type_id_get(alert_rule_type_id)

Get alert rule type config metadata

Get configuration metadata for a specific alert rule type by its type ID

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.alerts_alert_meta import AlertsAlertMeta
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
    api_instance = monad.AlertRulesApi(api_client)
    alert_rule_type_id = 'alert_rule_type_id_example' # str | Alert Rule Type ID

    try:
        # Get alert rule type config metadata
        api_response = api_instance.v3_alert_rules_alert_rule_type_id_get(alert_rule_type_id)
        print("The response of AlertRulesApi->v3_alert_rules_alert_rule_type_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_alert_rules_alert_rule_type_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_rule_type_id** | **str**| Alert Rule Type ID | 

### Return type

[**AlertsAlertMeta**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule type config metadata retrieved successfully |  -  |
**404** | Alert rule type not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_alert_rules_get**
> List[AlertsAlertMeta] v3_alert_rules_get()

List alert rule types

List all available alert rule types with their configuration metadata

### Example

* Api Key Authentication (ApiKeyAuth):
* Api Key Authentication (Bearer):

```python
import monad
from monad.models.alerts_alert_meta import AlertsAlertMeta
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
    api_instance = monad.AlertRulesApi(api_client)

    try:
        # List alert rule types
        api_response = api_instance.v3_alert_rules_get()
        print("The response of AlertRulesApi->v3_alert_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_alert_rules_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AlertsAlertMeta]**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule types retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alert_rules_alert_rule_id_delete**
> v3_organization_id_alert_rules_alert_rule_id_delete(organization_id, alert_rule_id)

Delete alert rule

Delete an existing alert rule

### Example

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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AlertRulesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    alert_rule_id = 'alert_rule_id_example' # str | Alert Rule ID to delete

    try:
        # Delete alert rule
        api_instance.v3_organization_id_alert_rules_alert_rule_id_delete(organization_id, alert_rule_id)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_organization_id_alert_rules_alert_rule_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **alert_rule_id** | **str**| Alert Rule ID to delete | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alert_rules_alert_rule_id_get**
> ModelsAlertRule v3_organization_id_alert_rules_alert_rule_id_get(organization_id, alert_rule_id)

Get alert rule by ID

Retrieve an alert rule by its ID

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_alert_rule import ModelsAlertRule
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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AlertRulesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    alert_rule_id = 'alert_rule_id_example' # str | Alert Rule ID to retrieve

    try:
        # Get alert rule by ID
        api_response = api_instance.v3_organization_id_alert_rules_alert_rule_id_get(organization_id, alert_rule_id)
        print("The response of AlertRulesApi->v3_organization_id_alert_rules_alert_rule_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_organization_id_alert_rules_alert_rule_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **alert_rule_id** | **str**| Alert Rule ID to retrieve | 

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alert_rules_alert_rule_id_put**
> ModelsAlertRule v3_organization_id_alert_rules_alert_rule_id_put(organization_id, alert_rule_id, routes_v3_update_alert_rule_request)

Update alert rule

Update an existing alert rule

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_alert_rule import ModelsAlertRule
from monad.models.routes_v3_update_alert_rule_request import RoutesV3UpdateAlertRuleRequest
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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AlertRulesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    alert_rule_id = 'alert_rule_id_example' # str | Alert Rule ID to update
    routes_v3_update_alert_rule_request = monad.RoutesV3UpdateAlertRuleRequest() # RoutesV3UpdateAlertRuleRequest | Request body for updating an alert rule

    try:
        # Update alert rule
        api_response = api_instance.v3_organization_id_alert_rules_alert_rule_id_put(organization_id, alert_rule_id, routes_v3_update_alert_rule_request)
        print("The response of AlertRulesApi->v3_organization_id_alert_rules_alert_rule_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_organization_id_alert_rules_alert_rule_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **alert_rule_id** | **str**| Alert Rule ID to update | 
 **routes_v3_update_alert_rule_request** | [**RoutesV3UpdateAlertRuleRequest**](RoutesV3UpdateAlertRuleRequest.md)| Request body for updating an alert rule | 

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alert rule updated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alert_rules_get**
> ModelsAlertRuleList v3_organization_id_alert_rules_get(organization_id, limit=limit, offset=offset)

Get all alert rules

Retrieve all alert rules for an organization

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_alert_rule_list import ModelsAlertRuleList
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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AlertRulesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # Get all alert rules
        api_response = api_instance.v3_organization_id_alert_rules_get(organization_id, limit=limit, offset=offset)
        print("The response of AlertRulesApi->v3_organization_id_alert_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_organization_id_alert_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsAlertRuleList**](ModelsAlertRuleList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of alert rules retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_organization_id_alert_rules_post**
> ModelsAlertRule v3_organization_id_alert_rules_post(organization_id, routes_v3_create_alert_rule_request)

Create a new alert rule

Create a new alert rule with the provided details

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_alert_rule import ModelsAlertRule
from monad.models.routes_v3_create_alert_rule_request import RoutesV3CreateAlertRuleRequest
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

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with monad.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = monad.AlertRulesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    routes_v3_create_alert_rule_request = monad.RoutesV3CreateAlertRuleRequest() # RoutesV3CreateAlertRuleRequest | Request body for creating an alert rule

    try:
        # Create a new alert rule
        api_response = api_instance.v3_organization_id_alert_rules_post(organization_id, routes_v3_create_alert_rule_request)
        print("The response of AlertRulesApi->v3_organization_id_alert_rules_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->v3_organization_id_alert_rules_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **routes_v3_create_alert_rule_request** | [**RoutesV3CreateAlertRuleRequest**](RoutesV3CreateAlertRuleRequest.md)| Request body for creating an alert rule | 

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Alert rule created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

