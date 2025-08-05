# OrganizationInvitesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OrganizationIdInvitesPost**](OrganizationInvitesApi.md#v1OrganizationIdInvitesPost) | **POST** /v1/{organization_id}/invites | Invite user to organization |


<a id="v1OrganizationIdInvitesPost"></a>
# **v1OrganizationIdInvitesPost**
> String v1OrganizationIdInvitesPost(organizationId, routesInviteUserToOrganizationRequest)

Invite user to organization

Invite user to organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationInvitesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    OrganizationInvitesApi apiInstance = new OrganizationInvitesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesInviteUserToOrganizationRequest routesInviteUserToOrganizationRequest = new RoutesInviteUserToOrganizationRequest(); // RoutesInviteUserToOrganizationRequest | Request body for inviting a user to an organization
    try {
      String result = apiInstance.v1OrganizationIdInvitesPost(organizationId, routesInviteUserToOrganizationRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationInvitesApi#v1OrganizationIdInvitesPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | **String**| Organization ID | |
| **routesInviteUserToOrganizationRequest** | [**RoutesInviteUserToOrganizationRequest**](RoutesInviteUserToOrganizationRequest.md)| Request body for inviting a user to an organization | |

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User added to organization |  -  |
| **400** | Bad request |  -  |
| **429** | Too Many Requests |  -  |
| **500** | Internal Server Error |  -  |

