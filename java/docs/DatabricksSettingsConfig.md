

# DatabricksSettingsConfig

Databricks Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  |
|**catalog** | **String** | The Unity Catalog name |  |
|**httpPath** | **String** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) |  |
|**schema** | **String** | The target schema within the catalog |  |
|**serverHostname** | **String** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) |  |
|**volume** | **String** | The Unity Catalog Volume used for staging JSONL files |  |
|**writeMode** | [**DatabricksWriteMode**](DatabricksWriteMode.md) |  |  |



