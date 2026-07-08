

# IndividualAlertsSettingsConfig

Clumio Alerts settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**alertType** | **String** | Filter by alert type (e.g., policy_violated, tag_conflict) |  [optional] |
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**embed** | **String** | Embed related resources in the data returned (e.g., read-consolidated-alert) |  [optional] |
|**primaryEntityType** | **String** | Filter by primary entity type (e.g., aws_ebs_volume, vmware_vm) |  [optional] |
|**primaryEntityValue** | **String** | Filter by primary entity value (contains search) |  [optional] |
|**region** | **String** | The region associated with your Clumio account |  [optional] |
|**severity** | **String** | Filter by alert severity (error, warning) |  [optional] |
|**status** | **String** | Filter by alert status (active, cleared) |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



