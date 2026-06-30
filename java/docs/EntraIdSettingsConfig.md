

# EntraIdSettingsConfig

Microsoft Entra ID settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | The date to start fetching data from on first sync |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) | The Category of logs to query |  |
|**ingestionDelay** | **Integer** | The ingestion delay in seconds for the data source |  [optional] |
|**rateLimit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  |  [optional] |
|**tenantId** | **String** | The tenant ID of the Azure AD application |  |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**workspaceId** | **String** | The workspace ID of the Log Analytics workspace |  |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| AUDIT_LOGS | &quot;AuditLogs&quot; |
| SIGNIN_LOGS | &quot;SigninLogs&quot; |
| AAD_NON_INTERACTIVE_USER_SIGN_IN_LOGS | &quot;AADNonInteractiveUserSignInLogs&quot; |
| AAD_SERVICE_PRINCIPAL_SIGN_IN_LOGS | &quot;AADServicePrincipalSignInLogs&quot; |
| AAD_MANAGED_IDENTITY_SIGN_IN_LOGS | &quot;AADManagedIdentitySignInLogs&quot; |



