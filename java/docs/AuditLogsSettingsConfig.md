

# AuditLogsSettingsConfig

GitHub audit logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**actions** | **List&lt;String&gt;** | Filter by specific actions. Use wildcards for broader matches (e.g., repo.*) |  [optional] |
|**actor** | **String** | Filter by the username that initiated the action |  [optional] |
|**country** | **String** | Filter by actor&#39;s country code (e.g., US) |  [optional] |
|**createdAfter** | **String** | Only return audit log entries after this RFC3339 formatted time stamp |  [optional] |
|**enterprise** | **String** | Your GitHub enterprise slug or ID |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Filter by organization name |  [optional] |
|**repository** | **String** | Filter by repository (format: org-name/repo-name) |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |
|**user** | **String** | Filter by the username that was affected by the action |  [optional] |



