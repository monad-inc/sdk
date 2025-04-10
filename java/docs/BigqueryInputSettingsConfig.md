

# BigqueryInputSettingsConfig

BigQuery Input Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cron** | **String** | Cron string for scheduling the ingest of your input |  [optional] |
|**dataset** | **String** | The BigQuery dataset ID containing the table |  [optional] |
|**project** | **String** | The GCP project ID containing the BigQuery dataset |  [optional] |
|**query** | **String** | Optional custom query to use instead of table (must include timestamp_column) |  [optional] |
|**table** | **String** | The BigQuery table ID to query data from |  [optional] |
|**timestampColumn** | **String** | The column containing timestamp values used for incremental loading |  [optional] |



