

# Sentinelv2SettingsConfig

Sentinel Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**dcrConfig** | [**Sentinelv2DCRConfig**](Sentinelv2DCRConfig.md) |  |  [optional] |
|**endpoint** | **String** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. |  |
|**ruleId** | **String** | Deprecated: RuleID is the legacy v1 top-level rule id. It is retained so a v1-shaped config still works against the v2 connector; when set with no DCRConfig it is treated as manual mode against this rule id. |  [optional] |
|**streamName** | **String** | The name of the data stream defined in the Data Collection Rule. |  |



