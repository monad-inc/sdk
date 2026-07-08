

# DatabricksDeltaTableCopyIntoWriteMode


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**httpPath** | **String** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123). Required for copy_into mode; not needed for autoloader. |  |
|**tableName** | **String** | The target Delta table name. Required for copy_into mode. If the table doesn&#39;t exist, Monad will create it. |  |
|**volume** | **String** | The Unity Catalog Volume used for staging JSONL files before COPY INTO. |  |



