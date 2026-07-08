

# DatabricksLakehouseWriteMode

The write mode: autoloader stages files for Databricks Autoloader to ingest; zerobus sends data via the ZeroBus streaming protocol

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoloader** | [**DatabricksLakehouseAutoLoaderWriteMode**](DatabricksLakehouseAutoLoaderWriteMode.md) |  |  [optional] |
|**writeMode** | [**WriteModeEnum**](#WriteModeEnum) |  |  |
|**zerobus** | [**DatabricksLakehouseZeroBusWriteMode**](DatabricksLakehouseZeroBusWriteMode.md) |  |  [optional] |



## Enum: WriteModeEnum

| Name | Value |
|---- | -----|
| AUTOLOADER | &quot;autoloader&quot; |
| ZEROBUS | &quot;zerobus&quot; |



