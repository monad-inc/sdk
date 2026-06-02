

# DatabricksDeltaTableSettingsConfig

Databricks Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  |
|**catalog** | **String** | The Unity Catalog name |  |
|**httpPath** | **String** | Deprecated. Moved under copy_into mode. Autoloader does not require warehouse The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123). Required for copy_into mode; not needed for autoloader. |  [optional] |
|**schema** | **String** | The target schema within the catalog |  |
|**serverHostname** | **String** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) |  |
|**volume** | **String** | The Unity Catalog Volume used for staging JSONL files |  |
|**writeMode** | [**DatabricksDeltaTableWriteMode**](DatabricksDeltaTableWriteMode.md) |  |  |



