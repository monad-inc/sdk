

# SentinelThreatIntelligenceSettingsConfig

Microsoft Sentinel Threat Intelligence Upload API Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**clientId** | **String** | The application (client) ID registered in Microsoft Entra. |  |
|**clientSecret** | [**ModelsSecret**](ModelsSecret.md) |  |  |
|**sourceSystem** | **String** | Free-form label identifying the source system in Sentinel. Must NOT be \&quot;Microsoft Sentinel\&quot; — that value is restricted by the API. |  |
|**tenantId** | **String** | The Microsoft Entra tenant (directory) ID. |  |
|**workspaceId** | **String** | The Log Analytics workspace ID (GUID) that will store the STIX objects. |  |



