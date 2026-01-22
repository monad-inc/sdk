# .ConnectionsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v3OrganizationIdConnectionsConnectionIdDelete**](ConnectionsApi.md#v3OrganizationIdConnectionsConnectionIdDelete) | **DELETE** /v3/{organization_id}/connections/{connection_id} | Delete connection
[**v3OrganizationIdConnectionsConnectionIdGet**](ConnectionsApi.md#v3OrganizationIdConnectionsConnectionIdGet) | **GET** /v3/{organization_id}/connections/{connection_id} | Get connection by ID
[**v3OrganizationIdConnectionsConnectionIdPatch**](ConnectionsApi.md#v3OrganizationIdConnectionsConnectionIdPatch) | **PATCH** /v3/{organization_id}/connections/{connection_id} | Update connection
[**v3OrganizationIdConnectionsGet**](ConnectionsApi.md#v3OrganizationIdConnectionsGet) | **GET** /v3/{organization_id}/connections | Get all connections
[**v3OrganizationIdConnectionsPost**](ConnectionsApi.md#v3OrganizationIdConnectionsPost) | **POST** /v3/{organization_id}/connections | Create a new connection


# **v3OrganizationIdConnectionsConnectionIdDelete**
> void v3OrganizationIdConnectionsConnectionIdDelete()

Delete an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3OrganizationIdConnectionsConnectionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3OrganizationIdConnectionsConnectionIdDeleteRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to delete
  connectionId: "connection_id_example",
};

const data = await apiInstance.v3OrganizationIdConnectionsConnectionIdDelete(request);
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

# **v3OrganizationIdConnectionsConnectionIdGet**
> ModelsConnection v3OrganizationIdConnectionsConnectionIdGet()

Retrieve a connection by its ID

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3OrganizationIdConnectionsConnectionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3OrganizationIdConnectionsConnectionIdGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to retrieve
  connectionId: "connection_id_example",
};

const data = await apiInstance.v3OrganizationIdConnectionsConnectionIdGet(request);
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

# **v3OrganizationIdConnectionsConnectionIdPatch**
> ModelsConnection v3OrganizationIdConnectionsConnectionIdPatch(routesV3UpdateConnectionRequest)

Update an existing connection

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3OrganizationIdConnectionsConnectionIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3OrganizationIdConnectionsConnectionIdPatchRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Connection ID to update
  connectionId: "connection_id_example",
    // Request body for updating a connection
  routesV3UpdateConnectionRequest: {
    description: "description_example",
    name: "name_example",
  },
};

const data = await apiInstance.v3OrganizationIdConnectionsConnectionIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3UpdateConnectionRequest** | **RoutesV3UpdateConnectionRequest**| Request body for updating a connection |
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

# **v3OrganizationIdConnectionsGet**
> ModelsConnectionList v3OrganizationIdConnectionsGet()

Retrieve all connections

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3OrganizationIdConnectionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3OrganizationIdConnectionsGetRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.v3OrganizationIdConnectionsGet(request);
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

# **v3OrganizationIdConnectionsPost**
> ModelsConnection v3OrganizationIdConnectionsPost(routesV3CreateConnectionRequest)

Create a new connection with the provided details

### Example


```typescript
import { createConfiguration, ConnectionsApi } from '';
import type { ConnectionsApiV3OrganizationIdConnectionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConnectionsApi(configuration);

const request: ConnectionsApiV3OrganizationIdConnectionsPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for creating a connection
  routesV3CreateConnectionRequest: {
    description: "description_example",
    name: "name_example",
    saml: {
      entityId: "entityId_example",
      metadataUrl: "metadataUrl_example",
    },
  },
};

const data = await apiInstance.v3OrganizationIdConnectionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesV3CreateConnectionRequest** | **RoutesV3CreateConnectionRequest**| Request body for creating a connection |
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


