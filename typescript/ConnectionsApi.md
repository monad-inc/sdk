# .ConnectionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3ConnectionsConnectionIdDelete**](ConnectionsApi.md#v3ConnectionsConnectionIdDelete) | **DELETE** /v3/connections/{connection_id} | Delete connection
[**v3ConnectionsConnectionIdGet**](ConnectionsApi.md#v3ConnectionsConnectionIdGet) | **GET** /v3/connections/{connection_id} | Get connection by ID
[**v3ConnectionsConnectionIdPatch**](ConnectionsApi.md#v3ConnectionsConnectionIdPatch) | **PATCH** /v3/connections/{connection_id} | Update connection
[**v3ConnectionsGet**](ConnectionsApi.md#v3ConnectionsGet) | **GET** /v3/connections | Get all connections
[**v3ConnectionsPost**](ConnectionsApi.md#v3ConnectionsPost) | **POST** /v3/connections | Create a new connection


# **v3ConnectionsConnectionIdDelete**
> void v3ConnectionsConnectionIdDelete()

Delete an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3ConnectionsConnectionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3ConnectionsConnectionIdDeleteRequest = {
    // Connection ID to delete
  connectionId: "connection_id_example",
  
  body: {},
};

const data = await apiInstance.v3ConnectionsConnectionIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **connectionId** | [**string**] | Connection ID to delete | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Connection deleted successfully |  -  |
**400** | Invalid request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdGet**
> ModelsConnection v3ConnectionsConnectionIdGet()

Retrieve a connection by its ID

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3ConnectionsConnectionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3ConnectionsConnectionIdGetRequest = {
    // Connection ID to retrieve
  connectionId: "connection_id_example",
  
  body: {},
};

const data = await apiInstance.v3ConnectionsConnectionIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **connectionId** | [**string**] | Connection ID to retrieve | defaults to undefined


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
**200** | Connection retrieved successfully |  -  |
**400** | Invalid request |  -  |
**404** | Connection not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsConnectionIdPatch**
> ModelsConnection v3ConnectionsConnectionIdPatch(routesV3UpdateConnectionRequest)

Update an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3ConnectionsConnectionIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3ConnectionsConnectionIdPatchRequest = {
    // Connection ID to update
  connectionId: "connection_id_example",
    // Request body for updating a connection
  routesV3UpdateConnectionRequest: {
    config: {
      auth0: {
        okta: {
          clientId: "clientId_example",
          clientSecret: "clientSecret_example",
          domain: "domain_example",
        },
      },
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v3ConnectionsConnectionIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateConnectionRequest** | **RoutesV3UpdateConnectionRequest**| Request body for updating a connection |
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

# **v3ConnectionsGet**
> Array<ModelsConnection> v3ConnectionsGet()

Retrieve all connections

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3ConnectionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3ConnectionsGetRequest = {
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
  
  body: {},
};

const data = await apiInstance.v3ConnectionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**Array<ModelsConnection>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of connections retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v3ConnectionsPost**
> ModelsConnection v3ConnectionsPost(routesV3CreateConnectionRequest)

Create a new connection with the provided details

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3ConnectionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3ConnectionsPostRequest = {
    // Request body for creating a connection
  routesV3CreateConnectionRequest: {
    config: {
      auth0: {
        okta: {
          clientId: "clientId_example",
          clientSecret: "clientSecret_example",
          domain: "domain_example",
        },
      },
    },
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v3ConnectionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateConnectionRequest** | **RoutesV3CreateConnectionRequest**| Request body for creating a connection |


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


