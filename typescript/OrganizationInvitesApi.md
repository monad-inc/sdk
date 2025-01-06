# .OrganizationInvitesApi

All URIs are relative to *https://monad.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrganizationIdInvitesPost**](OrganizationInvitesApi.md#v1OrganizationIdInvitesPost) | **POST** /v1/{organization_id}/invites | Invite user to organization


# **v1OrganizationIdInvitesPost**
> string v1OrganizationIdInvitesPost(routesInviteUserToOrganizationRequest)

Invite user to organization

### Example


```typescript
import { createConfiguration, OrganizationInvitesApi } from '';
import type { OrganizationInvitesApiV1OrganizationIdInvitesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new OrganizationInvitesApi(configuration);

const request: OrganizationInvitesApiV1OrganizationIdInvitesPostRequest = {
    // Organization ID
  organizationId: "organization_id_example",
    // Request body for inviting a user to an organization
  routesInviteUserToOrganizationRequest: {
    email: "email_example",
    roleId: "roleId_example",
  },
};

const data = await apiInstance.v1OrganizationIdInvitesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routesInviteUserToOrganizationRequest** | **RoutesInviteUserToOrganizationRequest**| Request body for inviting a user to an organization |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth), [Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User added to organization |  -  |
**400** | Bad request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


