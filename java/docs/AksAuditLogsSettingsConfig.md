

# AksAuditLogsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** |  |  [optional] |
|**clientId** | [**ModelsSecret**](ModelsSecret.md) |  |  |
|**clientSecret** | [**ModelsSecret**](ModelsSecret.md) |  |  |
|**clusterResourceId** | **String** |  |  [optional] |
|**logCategory** | [**LogCategoryEnum**](#LogCategoryEnum) |  |  |
|**source** | [**AksAuditLogsSourceConfig**](AksAuditLogsSourceConfig.md) |  |  [optional] |
|**tenantId** | **String** |  |  |
|**useSyntheticData** | **Boolean** |  |  [optional] |



## Enum: LogCategoryEnum

| Name | Value |
|---- | -----|
| KUBE_AUDIT_ADMIN | &quot;kube-audit-admin&quot; |
| KUBE_AUDIT | &quot;kube-audit&quot; |



