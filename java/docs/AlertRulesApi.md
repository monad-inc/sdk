# AlertRulesApi

All URIs are relative to *https://monad.com/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v3AlertRulesAlertRuleTypeIdGet**](AlertRulesApi.md#v3AlertRulesAlertRuleTypeIdGet) | **GET** /v3/alert_rules/{alert_rule_type_id} | Get alert rule type config metadata |
| [**v3AlertRulesGet**](AlertRulesApi.md#v3AlertRulesGet) | **GET** /v3/alert_rules | List alert rule types |
| [**v3OrganizationIdAlertRulesAlertRuleIdDelete**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdDelete) | **DELETE** /v3/{organization_id}/alert_rules/{alert_rule_id} | Delete alert rule |
| [**v3OrganizationIdAlertRulesAlertRuleIdGet**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdGet) | **GET** /v3/{organization_id}/alert_rules/{alert_rule_id} | Get alert rule by ID |
| [**v3OrganizationIdAlertRulesAlertRuleIdPut**](AlertRulesApi.md#v3OrganizationIdAlertRulesAlertRuleIdPut) | **PUT** /v3/{organization_id}/alert_rules/{alert_rule_id} | Update alert rule |
| [**v3OrganizationIdAlertRulesGet**](AlertRulesApi.md#v3OrganizationIdAlertRulesGet) | **GET** /v3/{organization_id}/alert_rules | Get all alert rules |
| [**v3OrganizationIdAlertRulesPost**](AlertRulesApi.md#v3OrganizationIdAlertRulesPost) | **POST** /v3/{organization_id}/alert_rules | Create a new alert rule |


<a id="v3AlertRulesAlertRuleTypeIdGet"></a>
# **v3AlertRulesAlertRuleTypeIdGet**
> AlertsAlertMeta v3AlertRulesAlertRuleTypeIdGet(alertRuleTypeId)

Get alert rule type config metadata

Get configuration metadata for a specific alert rule type by its type ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

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

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String alertRuleTypeId = "alertRuleTypeId_example"; // String | Alert Rule Type ID
    try {
      AlertsAlertMeta result = apiInstance.v3AlertRulesAlertRuleTypeIdGet(alertRuleTypeId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3AlertRulesAlertRuleTypeIdGet");
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
| **alertRuleTypeId** | **String**| Alert Rule Type ID | |

### Return type

[**AlertsAlertMeta**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule type config metadata retrieved successfully |  -  |
| **404** | Alert rule type not found |  -  |

<a id="v3AlertRulesGet"></a>
# **v3AlertRulesGet**
> List&lt;AlertsAlertMeta&gt; v3AlertRulesGet()

List alert rule types

List all available alert rule types with their configuration metadata

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

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

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    try {
      List<AlertsAlertMeta> result = apiInstance.v3AlertRulesGet();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3AlertRulesGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;AlertsAlertMeta&gt;**](AlertsAlertMeta.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule types retrieved successfully |  -  |

<a id="v3OrganizationIdAlertRulesAlertRuleIdDelete"></a>
# **v3OrganizationIdAlertRulesAlertRuleIdDelete**
> v3OrganizationIdAlertRulesAlertRuleIdDelete(organizationId, alertRuleId)

Delete alert rule

Delete an existing alert rule

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String alertRuleId = "alertRuleId_example"; // String | Alert Rule ID to delete
    try {
      apiInstance.v3OrganizationIdAlertRulesAlertRuleIdDelete(organizationId, alertRuleId);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3OrganizationIdAlertRulesAlertRuleIdDelete");
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
| **alertRuleId** | **String**| Alert Rule ID to delete | |

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Alert rule deleted successfully |  -  |
| **400** | Invalid request |  -  |
| **404** | Alert rule not found |  -  |
| **500** | Internal server error |  -  |

<a id="v3OrganizationIdAlertRulesAlertRuleIdGet"></a>
# **v3OrganizationIdAlertRulesAlertRuleIdGet**
> ModelsAlertRule v3OrganizationIdAlertRulesAlertRuleIdGet(organizationId, alertRuleId)

Get alert rule by ID

Retrieve an alert rule by its ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String alertRuleId = "alertRuleId_example"; // String | Alert Rule ID to retrieve
    try {
      ModelsAlertRule result = apiInstance.v3OrganizationIdAlertRulesAlertRuleIdGet(organizationId, alertRuleId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3OrganizationIdAlertRulesAlertRuleIdGet");
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
| **alertRuleId** | **String**| Alert Rule ID to retrieve | |

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule retrieved successfully |  -  |
| **400** | Invalid request |  -  |
| **404** | Alert rule not found |  -  |
| **500** | Internal server error |  -  |

<a id="v3OrganizationIdAlertRulesAlertRuleIdPut"></a>
# **v3OrganizationIdAlertRulesAlertRuleIdPut**
> ModelsAlertRule v3OrganizationIdAlertRulesAlertRuleIdPut(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest)

Update alert rule

Update an existing alert rule

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    String alertRuleId = "alertRuleId_example"; // String | Alert Rule ID to update
    RoutesV3UpdateAlertRuleRequest routesV3UpdateAlertRuleRequest = new RoutesV3UpdateAlertRuleRequest(); // RoutesV3UpdateAlertRuleRequest | Request body for updating an alert rule
    try {
      ModelsAlertRule result = apiInstance.v3OrganizationIdAlertRulesAlertRuleIdPut(organizationId, alertRuleId, routesV3UpdateAlertRuleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3OrganizationIdAlertRulesAlertRuleIdPut");
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
| **alertRuleId** | **String**| Alert Rule ID to update | |
| **routesV3UpdateAlertRuleRequest** | [**RoutesV3UpdateAlertRuleRequest**](RoutesV3UpdateAlertRuleRequest.md)| Request body for updating an alert rule | |

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alert rule updated successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

<a id="v3OrganizationIdAlertRulesGet"></a>
# **v3OrganizationIdAlertRulesGet**
> ModelsAlertRuleList v3OrganizationIdAlertRulesGet(organizationId, limit, offset)

Get all alert rules

Retrieve all alert rules for an organization

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    Integer limit = 56; // Integer | Limit
    Integer offset = 56; // Integer | Offset
    try {
      ModelsAlertRuleList result = apiInstance.v3OrganizationIdAlertRulesGet(organizationId, limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3OrganizationIdAlertRulesGet");
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
| **limit** | **Integer**| Limit | [optional] |
| **offset** | **Integer**| Offset | [optional] |

### Return type

[**ModelsAlertRuleList**](ModelsAlertRuleList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of alert rules retrieved successfully |  -  |
| **500** | Internal server error |  -  |

<a id="v3OrganizationIdAlertRulesPost"></a>
# **v3OrganizationIdAlertRulesPost**
> ModelsAlertRule v3OrganizationIdAlertRulesPost(organizationId, routesV3CreateAlertRuleRequest)

Create a new alert rule

Create a new alert rule with the provided details

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AlertRulesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://monad.com/api");
    
    // Configure API key authorization: Bearer
    ApiKeyAuth Bearer = (ApiKeyAuth) defaultClient.getAuthentication("Bearer");
    Bearer.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //Bearer.setApiKeyPrefix("Token");

    AlertRulesApi apiInstance = new AlertRulesApi(defaultClient);
    String organizationId = "organizationId_example"; // String | Organization ID
    RoutesV3CreateAlertRuleRequest routesV3CreateAlertRuleRequest = new RoutesV3CreateAlertRuleRequest(); // RoutesV3CreateAlertRuleRequest | Request body for creating an alert rule
    try {
      ModelsAlertRule result = apiInstance.v3OrganizationIdAlertRulesPost(organizationId, routesV3CreateAlertRuleRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AlertRulesApi#v3OrganizationIdAlertRulesPost");
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
| **routesV3CreateAlertRuleRequest** | [**RoutesV3CreateAlertRuleRequest**](RoutesV3CreateAlertRuleRequest.md)| Request body for creating an alert rule | |

### Return type

[**ModelsAlertRule**](ModelsAlertRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Alert rule created successfully |  -  |
| **400** | Invalid request body |  -  |
| **500** | Internal server error |  -  |

