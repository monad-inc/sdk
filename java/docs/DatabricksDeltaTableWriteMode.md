

# DatabricksDeltaTableWriteMode

The write mode controls how data is loaded.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**autoLoader** | [**DatabricksDeltaTableAutoLoaderWriteMode**](DatabricksDeltaTableAutoLoaderWriteMode.md) |  |  [optional] |
|**copyInto** | [**DatabricksDeltaTableCopyIntoWriteMode**](DatabricksDeltaTableCopyIntoWriteMode.md) |  |  [optional] |
|**writeMode** | [**WriteModeEnum**](#WriteModeEnum) |  |  |
|**zerobus** | [**DatabricksDeltaTableZeroBusWriteMode**](DatabricksDeltaTableZeroBusWriteMode.md) |  |  [optional] |



## Enum: WriteModeEnum

| Name | Value |
|---- | -----|
| AUTOLOADER | &quot;autoloader&quot; |
| COPY_INTO | &quot;copy_into&quot; |
| ZEROBUS | &quot;zerobus&quot; |



