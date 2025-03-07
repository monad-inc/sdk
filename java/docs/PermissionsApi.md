# PermissionsApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganizationIdRolesPermissionsGet**](PermissionsApi.md#v2OrganizationIdRolesPermissionsGet) | **GET** /v2/{organization_id}/roles/permissions | List permissions |


<a id="v2OrganizationIdRolesPermissionsGet"></a>
# **v2OrganizationIdRolesPermissionsGet**
> ModelsPermissionList v2OrganizationIdRolesPermissionsGet(organizationId, limit, offset)

List permissions

List all available permissions in the system

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.PermissionsApi;

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

    PermissionsApi apiInstance = new PermissionsApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit the number of permissions returned (default: 10)
    Integer offset = 56; // Integer | Offset the permissions returned (default: 0)
    try {
      ModelsPermissionList result = apiInstance.v2OrganizationIdRolesPermissionsGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PermissionsApi#v2OrganizationIdRolesPermissionsGet");
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
| **limit** | **Integer**| Limit the number of permissions returned (default: 10) | [optional] |
| **offset** | **Integer**| Offset the permissions returned (default: 0) | [optional] |

### Return type

[**ModelsPermissionList**](ModelsPermissionList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Permissions retrieved successfully |  -  |
| **500** | Error listing permissions |  -  |

