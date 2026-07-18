# OrganizationMcpRegistrationsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listMCPClientRegistrations**](OrganizationMcpRegistrationsApi.md#listMCPClientRegistrations) | **GET** /v2/{organization_id}/mcp/registrations | List MCP client registrations |
| [**revokeMCPClientRegistration**](OrganizationMcpRegistrationsApi.md#revokeMCPClientRegistration) | **DELETE** /v2/{organization_id}/mcp/registrations/{client_id} | Revoke an MCP client registration |


<a id="listMCPClientRegistrations"></a>
# **listMCPClientRegistrations**
> ModelsMCPClientRegistrationList listMCPClientRegistrations(organizationId, ownedBy, limit, offset)

List MCP client registrations

List Connected-Applications: caller&#39;s own with &#x60;owned_by&#x3D;me&#x60;, or all in the org for admins.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationMcpRegistrationsApi;

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

    OrganizationMcpRegistrationsApi apiInstance = new OrganizationMcpRegistrationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String ownedBy = "ownedBy_example"; // String | Set to `me` to scope to the caller's own registrations
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsMCPClientRegistrationList result = apiInstance.listMCPClientRegistrations(organizationId, ownedBy, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationMcpRegistrationsApi#listMCPClientRegistrations");
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
| **ownedBy** | **String**| Set to &#x60;me&#x60; to scope to the caller&#39;s own registrations | [optional] |
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**ModelsMCPClientRegistrationList**](ModelsMCPClientRegistrationList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **403** | access denied |  -  |
| **500** | Failed to list registrations |  -  |

<a id="revokeMCPClientRegistration"></a>
# **revokeMCPClientRegistration**
> revokeMCPClientRegistration(organizationId, clientId)

Revoke an MCP client registration

Revoke a Connected Application. Owners can revoke their own; admins (mcp_registration:delete) can revoke any in the org.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrganizationMcpRegistrationsApi;

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

    OrganizationMcpRegistrationsApi apiInstance = new OrganizationMcpRegistrationsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String clientId = "clientId_example"; // String | MCP client registration ID
    try {
      apiInstance.revokeMCPClientRegistration(organizationId, clientId);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrganizationMcpRegistrationsApi#revokeMCPClientRegistration");
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
| **clientId** | **String**| MCP client registration ID | |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Revoked |  -  |
| **403** | access denied |  -  |
| **404** | registration not found in this organization |  -  |
| **500** | Failed to revoke registration |  -  |

