# monad.ConnectionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3_connections_connection_id_delete**](ConnectionsApi.md#v3_connections_connection_id_delete) | **DELETE** /v3/connections/{connection_id} | Delete connection
[**v3_connections_connection_id_get**](ConnectionsApi.md#v3_connections_connection_id_get) | **GET** /v3/connections/{connection_id} | Get connection by ID
[**v3_connections_connection_id_patch**](ConnectionsApi.md#v3_connections_connection_id_patch) | **PATCH** /v3/connections/{connection_id} | Update connection
[**v3_connections_get**](ConnectionsApi.md#v3_connections_get) | **GET** /v3/connections | Get all connections
[**v3_connections_post**](ConnectionsApi.md#v3_connections_post) | **POST** /v3/connections | Create a new connection


# **v3_connections_connection_id_delete**
> v3_connections_connection_id_delete(connection_id)

Delete connection

Delete an existing connection

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
    api_instance = monad.ConnectionsApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID to delete

    try:
        # Delete connection
        api_instance.v3_connections_connection_id_delete(connection_id)
    except Exception as e:
        print("Exception when calling ConnectionsApi->v3_connections_connection_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID to delete | 

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
**204** | Connection deleted successfully |  -  |
**400** | Invalid request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_get**
> ModelsConnection v3_connections_connection_id_get(connection_id)

Get connection by ID

Retrieve a connection by its ID

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection import ModelsConnection
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
    api_instance = monad.ConnectionsApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID to retrieve

    try:
        # Get connection by ID
        api_response = api_instance.v3_connections_connection_id_get(connection_id)
        print("The response of ConnectionsApi->v3_connections_connection_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->v3_connections_connection_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID to retrieve | 

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection retrieved successfully |  -  |
**400** | Invalid request |  -  |
**404** | Connection not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_connection_id_patch**
> ModelsConnection v3_connections_connection_id_patch(connection_id, routes_v3_update_connection_request)

Update connection

Update an existing connection

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection import ModelsConnection
from monad.models.routes_v3_update_connection_request import RoutesV3UpdateConnectionRequest
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
    api_instance = monad.ConnectionsApi(api_client)
    connection_id = 'connection_id_example' # str | Connection ID to update
    routes_v3_update_connection_request = monad.RoutesV3UpdateConnectionRequest() # RoutesV3UpdateConnectionRequest | Request body for updating a connection

    try:
        # Update connection
        api_response = api_instance.v3_connections_connection_id_patch(connection_id, routes_v3_update_connection_request)
        print("The response of ConnectionsApi->v3_connections_connection_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->v3_connections_connection_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id** | **str**| Connection ID to update | 
 **routes_v3_update_connection_request** | [**RoutesV3UpdateConnectionRequest**](RoutesV3UpdateConnectionRequest.md)| Request body for updating a connection | 

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection updated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_get**
> ModelsConnectionList v3_connections_get(limit=limit, offset=offset)

Get all connections

Retrieve all connections

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection_list import ModelsConnectionList
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
    api_instance = monad.ConnectionsApi(api_client)
    limit = 56 # int | Limit (optional)
    offset = 56 # int | Offset (optional)

    try:
        # Get all connections
        api_response = api_instance.v3_connections_get(limit=limit, offset=offset)
        print("The response of ConnectionsApi->v3_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->v3_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit | [optional] 
 **offset** | **int**| Offset | [optional] 

### Return type

[**ModelsConnectionList**](ModelsConnectionList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of connections retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_connections_post**
> ModelsConnection v3_connections_post(routes_v3_create_connection_request)

Create a new connection

Create a new connection with the provided details

### Example

* Api Key Authentication (Bearer):

```python
import monad
from monad.models.models_connection import ModelsConnection
from monad.models.routes_v3_create_connection_request import RoutesV3CreateConnectionRequest
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
    api_instance = monad.ConnectionsApi(api_client)
    routes_v3_create_connection_request = monad.RoutesV3CreateConnectionRequest() # RoutesV3CreateConnectionRequest | Request body for creating a connection

    try:
        # Create a new connection
        api_response = api_instance.v3_connections_post(routes_v3_create_connection_request)
        print("The response of ConnectionsApi->v3_connections_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionsApi->v3_connections_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routes_v3_create_connection_request** | [**RoutesV3CreateConnectionRequest**](RoutesV3CreateConnectionRequest.md)| Request body for creating a connection | 

### Return type

[**ModelsConnection**](ModelsConnection.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

