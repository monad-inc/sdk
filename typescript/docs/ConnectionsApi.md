# .ConnectionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnection**](ConnectionsApi.md#createConnection) | **POST** /v3/{organization_id}/connections | Create a new connection
[**deleteConnection**](ConnectionsApi.md#deleteConnection) | **DELETE** /v3/{organization_id}/connections/{connection_id} | Delete connection
[**getConnectionByID**](ConnectionsApi.md#getConnectionByID) | **GET** /v3/{organization_id}/connections/{connection_id} | Get connection by ID
[**listConnections**](ConnectionsApi.md#listConnections) | **GET** /v3/{organization_id}/connections | Get all connections
[**updateConnection**](ConnectionsApi.md#updateConnection) | **PATCH** /v3/{organization_id}/connections/{connection_id} | Update connection


# **createConnection**
> ModelsConnection createConnection(createConnectionRequest)

Create a new connection with the provided details

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiCreateConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiCreateConnectionRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a connection
  createConnectionRequest: null,
};

const data = await apiInstance.createConnection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConnectionRequest** | **CreateConnectionRequest**| Request body for creating a connection |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**ModelsConnection**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection created successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteConnection**
> void deleteConnection()

Delete an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiDeleteConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiDeleteConnectionRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to delete
  connectionId: "connection_id_example",
};

const data = await apiInstance.deleteConnection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **connectionId** | [**string**] | Connection ID to delete | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Connection deleted successfully |  -  |
**400** | Invalid request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConnectionByID**
> ModelsConnection getConnectionByID()

Retrieve a connection by its ID

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiGetConnectionByIDRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiGetConnectionByIDRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to retrieve
  connectionId: "connection_id_example",
};

const data = await apiInstance.getConnectionByID(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **connectionId** | [**string**] | Connection ID to retrieve | defaults to undefined


### Return type

**ModelsConnection**

### Authorization

[Bearer](README.md#Bearer)

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConnections**
> ModelsConnectionList listConnections()

Retrieve all connections

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiListConnectionsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiListConnectionsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listConnections(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsConnectionList**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of connections retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateConnection**
> ModelsConnection updateConnection(updateConnectionRequest)

Update an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiUpdateConnectionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiUpdateConnectionRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to update
  connectionId: "connection_id_example",
    // Request body for updating a connection
  updateConnectionRequest: null,
};

const data = await apiInstance.updateConnection(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateConnectionRequest** | **UpdateConnectionRequest**| Request body for updating a connection |
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **connectionId** | [**string**] | Connection ID to update | defaults to undefined


### Return type

**ModelsConnection**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection updated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


