

# DatabricksLakewatchWriteMode

The write mode: autoloader stages files for Databricks Autoloader to ingest; zerobus sends data via the ZeroBus streaming protocol

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoloader** | [**DatabricksLakewatchAutoLoaderWriteMode**](DatabricksLakewatchAutoLoaderWriteMode.md) |  |  [optional] |
|**autoloaderPipeline** | [**DatabricksLakewatchAutoLoaderPipelineWriteMode**](DatabricksLakewatchAutoLoaderPipelineWriteMode.md) |  |  [optional] |
|**writeMode** | [**WriteModeEnum**](#WriteModeEnum) |  |  |
|**zerobus** | [**DatabricksLakewatchZeroBusWriteMode**](DatabricksLakewatchZeroBusWriteMode.md) |  |  [optional] |



## Enum: WriteModeEnum

| Name | Value |
|---- | -----|
| AUTOLOADER | &quot;autoloader&quot; |
| AUTOLOADER_PIPELINE | &quot;autoloader_pipeline&quot; |
| ZEROBUS | &quot;zerobus&quot; |



