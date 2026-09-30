

# ClumioConsolidatedAlertsSettingsConfig

Clumio Alerts settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**parentEntityId** | **String** | The system-generated ID of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**parentEntityType** | **String** | The system-generated name of the parent entity that is associated with the primary entity affected by the alert. |  [optional] |
|**region** | **String** | The region associated with your Clumio account |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



