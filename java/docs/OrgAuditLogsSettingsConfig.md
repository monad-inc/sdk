

# OrgAuditLogsSettingsConfig

GitHub organization audit logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authType** | **String** | Authentication type to use |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**githubAppInstallationId** | **String** | GitHub App Installation ID (required when using GitHub App authentication) |  [optional] |
|**githubClientId** | **String** | GitHub Client ID (alternative to personal access token) |  [optional] |
|**include** | **String** | Event types to include. web: Gets all web (non-git) events. git: Gets git events. all: Gets both. |  [optional] |
|**organization** | **String** | Your GitHub organization name |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



