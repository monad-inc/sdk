

# DatabricksSettingsConfig

Databricks Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**catalog** | **String** | The Unity Catalog name |  [optional] |
|**httpPath** | **String** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) |  [optional] |
|**schema** | **String** | The target schema within the catalog |  [optional] |
|**serverHostname** | **String** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) |  [optional] |
|**table** | **String** | The target Delta table name. If the table doesn&#39;t exist, Monad will create it. |  [optional] |
|**volume** | **String** | The Unity Catalog Volume used for staging JSONL files before COPY INTO |  [optional] |



