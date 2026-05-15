

# DatabricksWriteMode

The write mode: copy_into (default) stages files and uses COPY INTO; autoloader stages files for Databricks Autoloader to ingest

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoLoader** | **Object** |  |  [optional] |
|**copyInto** | [**DatabricksCopyIntoWriteMode**](DatabricksCopyIntoWriteMode.md) |  |  [optional] |
|**writeMode** | [**WriteModeEnum**](#WriteModeEnum) |  |  |



## Enum: WriteModeEnum

| Name | Value |
|---- | -----|
| AUTOLOADER | &quot;autoloader&quot; |
| COPY_INTO | &quot;copy_into&quot; |



