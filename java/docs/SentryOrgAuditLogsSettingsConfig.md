

# SentryOrgAuditLogsSettingsConfig

Sentry Organization Audit Logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**hostName** | **String** | For self-hosted, specify your host name here. Otherwise, leave it default as sentry.io. |  [optional] |
|**orgSlug** | **String** | The ID or slug of the organization |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



