# monad.BillingProductsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_billing_accounts_billing_account_id_subscription_delete**](BillingProductsApi.md#v2_billing_accounts_billing_account_id_subscription_delete) | **DELETE** /v2/billing/accounts/{billing_account_id}/subscription | Cancel Billing Account Subscription
[**v2_billing_accounts_billing_account_id_subscription_get**](BillingProductsApi.md#v2_billing_accounts_billing_account_id_subscription_get) | **GET** /v2/billing/accounts/{billing_account_id}/subscription | Get Billing Account Subscription
[**v2_billing_accounts_billing_account_id_subscription_post**](BillingProductsApi.md#v2_billing_accounts_billing_account_id_subscription_post) | **POST** /v2/billing/accounts/{billing_account_id}/subscription | Create Billing Account Subscription
[**v2_billing_products_get**](BillingProductsApi.md#v2_billing_products_get) | **GET** /v2/billing/products | List Billing Products


# **v2_billing_accounts_billing_account_id_subscription_delete**
> v2_billing_accounts_billing_account_id_subscription_delete(billing_account_id)

Cancel Billing Account Subscription

Cancel Billing Account Subscription

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
    api_instance = monad.BillingProductsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID

    try:
        # Cancel Billing Account Subscription
        api_instance.v2_billing_accounts_billing_account_id_subscription_delete(billing_account_id)
    except Exception as e:
        print("Exception when calling BillingProductsApi->v2_billing_accounts_billing_account_id_subscription_delete: %s\n" % e)
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
**204** | Billing subscription cancelled successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to cancel billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_billing_accounts_billing_account_id_subscription_get**
> ModelsBillingProduct v2_billing_accounts_billing_account_id_subscription_get(billing_account_id)

Get Billing Account Subscription

Get Billing Account Subscription

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_product import ModelsBillingProduct
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
    api_instance = monad.BillingProductsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID

    try:
        # Get Billing Account Subscription
        api_response = api_instance.v2_billing_accounts_billing_account_id_subscription_get(billing_account_id)
        print("The response of BillingProductsApi->v2_billing_accounts_billing_account_id_subscription_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProductsApi->v2_billing_accounts_billing_account_id_subscription_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 

### Return type

[**ModelsBillingProduct**](ModelsBillingProduct.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing subscription retrieved successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to get billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_billing_accounts_billing_account_id_subscription_post**
> RoutesV2CreateBillingAccountSubscriptionResponse v2_billing_accounts_billing_account_id_subscription_post(billing_account_id, routes_v2_create_billing_account_subscription_request)

Create Billing Account Subscription

Create Billing Account Subscription

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.routes_v2_create_billing_account_subscription_request import RoutesV2CreateBillingAccountSubscriptionRequest
from monad.models.routes_v2_create_billing_account_subscription_response import RoutesV2CreateBillingAccountSubscriptionResponse
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
    api_instance = monad.BillingProductsApi(api_client)
    billing_account_id = 'billing_account_id_example' # str | Billing Account ID
    routes_v2_create_billing_account_subscription_request = monad.RoutesV2CreateBillingAccountSubscriptionRequest() # RoutesV2CreateBillingAccountSubscriptionRequest | Request body for creating a billing subscription

    try:
        # Create Billing Account Subscription
        api_response = api_instance.v2_billing_accounts_billing_account_id_subscription_post(billing_account_id, routes_v2_create_billing_account_subscription_request)
        print("The response of BillingProductsApi->v2_billing_accounts_billing_account_id_subscription_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProductsApi->v2_billing_accounts_billing_account_id_subscription_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_id** | **str**| Billing Account ID | 
 **routes_v2_create_billing_account_subscription_request** | [**RoutesV2CreateBillingAccountSubscriptionRequest**](RoutesV2CreateBillingAccountSubscriptionRequest.md)| Request body for creating a billing subscription | 

### Return type

[**RoutesV2CreateBillingAccountSubscriptionResponse**](RoutesV2CreateBillingAccountSubscriptionResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing subscription intialized successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to created billing account subscription |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_billing_products_get**
> ModelsBillingProductList v2_billing_products_get(show_inactive=show_inactive, limit=limit, offset=offset)

List Billing Products

List Billing Products

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_billing_product_list import ModelsBillingProductList
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
    api_instance = monad.BillingProductsApi(api_client)
    show_inactive = True # bool | Show inactive products (optional)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # List Billing Products
        api_response = api_instance.v2_billing_products_get(show_inactive=show_inactive, limit=limit, offset=offset)
        print("The response of BillingProductsApi->v2_billing_products_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProductsApi->v2_billing_products_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_inactive** | **bool**| Show inactive products | [optional] 
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsBillingProductList**](ModelsBillingProductList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | billing product listed successfully |  -  |
**400** | Invalid JSON request body |  -  |
**500** | Failed to list billing products |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

