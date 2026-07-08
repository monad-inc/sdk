

# InspectorSettingsConfig

AWS Inspector settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync is fetched on the first sync. All syncs thereafter will be incremental. |  [optional] |
|**region** | **String** | The AWS region where Inspector is enabled. |  [optional] |
|**roleArn** | **String** | The ARN of the IAM role to assume for accessing Inspector. |  [optional] |
|**severities** | **List&lt;String&gt;** | Minimum severity level of findings to fetch. |  [optional] |
|**severityFilter** | [**List&lt;TypesStringFilter&gt;**](TypesStringFilter.md) |  |  [optional] |
|**useSyntheticData** | **Boolean** | Generate synthetic demo data instead of connecting to the real data source. |  [optional] |



