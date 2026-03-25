# monad.BillingAccountsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_billing_account**](BillingAccountsApi.md#create_billing_account) | **POST** /v2/billing/accounts | Create Billing Account
[**delete_billing_account**](BillingAccountsApi.md#delete_billing_account) | **DELETE** /v2/billing/accounts/{billing_account_id} | Delete Billing Account
[**get_billing_account**](BillingAccountsApi.md#get_billing_account) | **GET** /v2/billing/accounts/{billing_account_id} | Get Billing Account
[**get_billing_accounts**](BillingAccountsApi.md#get_billing_accounts) | **GET** /v2/billing/accounts | List Billing Accounts
[**update_billing_account**](BillingAccountsApi.md#update_billing_account) | **PATCH** /v2/billing/accounts/{billing_account_id} | Update Billing Account


# **create_billing_account**
> ModelsBillingAccount create_billing_account(routes_v2_create_billing_account_request)

Create Billing Account

Create Billing Account

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account import ModelsBillingAccount
from monad.models.routes_v2_create_billing_account_request import RoutesV2CreateBillingAccountRequest
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
    api_instance = monad.BillingAccountsApi(api_client)
    routes_v2_create_billing_account_request = monad.RoutesV2CreateBillingAccountRequest() # RoutesV2CreateBillingAccountRequest | Request body for creating a billing account

    try:
        # Create Billing Account
        api_response = api_instance.create_billing_account(routes_v2_create_billing_account_request)
        print("The response of BillingAccountsApi->create_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsApi->create_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_v2_create_billing_account_request** | [**RoutesV2CreateBillingAccountRequest**](RoutesV2CreateBillingAccountRequest.md)| Request body for creating a billing account | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account created successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to create Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_billing_account**
> delete_billing_account(billing_account_id)

Delete Billing Account

Delete Billing Account

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
    api_instance = monad.BillingAccountsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID

    try:
        # Delete Billing Account
        api_instance.delete_billing_account(billing_account_id)
    except Exception as e:
        print("Exception when calling BillingAccountsApi->delete_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 

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
**200** | Billing account deleted successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to delete Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_account**
> ModelsBillingAccount get_billing_account(billing_account_id)

Get Billing Account

Get Billing Account

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account import ModelsBillingAccount
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
    api_instance = monad.BillingAccountsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID

    try:
        # Get Billing Account
        api_response = api_instance.get_billing_account(billing_account_id)
        print("The response of BillingAccountsApi->get_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsApi->get_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get billing account successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_billing_accounts**
> ModelsBillingAccountList get_billing_accounts(limit=limit, offset=offset)

List Billing Accounts

List Billing Accounts

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account_list import ModelsBillingAccountList
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
    api_instance = monad.BillingAccountsApi(api_client)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List Billing Accounts
        api_response = api_instance.get_billing_accounts(limit=limit, offset=offset)
        print("The response of BillingAccountsApi->get_billing_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsApi->get_billing_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsBillingAccountList**](ModelsBillingAccountList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list billing accounts successfull |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list Billing Accounts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_billing_account**
> ModelsBillingAccount update_billing_account(billing_account_id, routes_v2_update_billing_account_request)

Update Billing Account

Update Billing Account

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_account import ModelsBillingAccount
from monad.models.routes_v2_update_billing_account_request import RoutesV2UpdateBillingAccountRequest
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
    api_instance = monad.BillingAccountsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    routes_v2_update_billing_account_request = monad.RoutesV2UpdateBillingAccountRequest() # RoutesV2UpdateBillingAccountRequest | Request body for updating a billing account

    try:
        # Update Billing Account
        api_response = api_instance.update_billing_account(billing_account_id, routes_v2_update_billing_account_request)
        print("The response of BillingAccountsApi->update_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingAccountsApi->update_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **routes_v2_update_billing_account_request** | [**RoutesV2UpdateBillingAccountRequest**](RoutesV2UpdateBillingAccountRequest.md)| Request body for updating a billing account | 

### Return type

[**ModelsBillingAccount**](ModelsBillingAccount.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing account updated successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to update Billing Account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

