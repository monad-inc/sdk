# .OrganizationMCPRegistrationsApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMCPClientRegistrations**](OrganizationMCPRegistrationsApi.md#listMCPClientRegistrations) | **GET** /v2/{organization_id}/mcp/registrations | List MCP client registrations
[**revokeMCPClientRegistration**](OrganizationMCPRegistrationsApi.md#revokeMCPClientRegistration) | **DELETE** /v2/{organization_id}/mcp/registrations/{client_id} | Revoke an MCP client registration


# **listMCPClientRegistrations**
> ModelsMCPClientRegistrationList listMCPClientRegistrations()

List Connected-Applications: caller\'s own with `owned_by=me`, or all in the org for admins.

### Example


```typescript
import { createConfiguration, OrganizationMCPRegistrationsApi } from '';
import type { OrganizationMCPRegistrationsApiListMCPClientRegistrationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationMCPRegistrationsApi(configuration);

const request: OrganizationMCPRegistrationsApiListMCPClientRegistrationsRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Set to `me` to scope to the caller\'s own registrations (optional)
  ownedBy: "owned_by_example",
    // Limit (optional)
  limit: 1,
    // Offset (optional)
  offset: 1,
};

const data = await apiInstance.listMCPClientRegistrations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **ownedBy** | [**string**] | Set to &#x60;me&#x60; to scope to the caller\&#39;s own registrations | (optional) defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined
 **offset** | [**number**] | Offset | (optional) defaults to undefined


### Return type

**ModelsMCPClientRegistrationList**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | access denied |  -  |
**500** | Failed to list registrations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **revokeMCPClientRegistration**
> void revokeMCPClientRegistration()

Revoke a Connected Application. Owners can revoke their own; admins (mcp_registration:delete) can revoke any in the org.

### Example


```typescript
import { createConfiguration, OrganizationMCPRegistrationsApi } from '';
import type { OrganizationMCPRegistrationsApiRevokeMCPClientRegistrationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationMCPRegistrationsApi(configuration);

const request: OrganizationMCPRegistrationsApiRevokeMCPClientRegistrationRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // MCP client registration ID
  clientId: "client_id_example",
};

const data = await apiInstance.revokeMCPClientRegistration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clientId** | [**string**] | MCP client registration ID | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Revoked |  -  |
**403** | access denied |  -  |
**404** | registration not found in this organization |  -  |
**500** | Failed to revoke registration |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


