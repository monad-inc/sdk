

# ScannerFormatConfig

The on-disk format Scanner will index.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**delimited** | [**ScannerDelimitedVariant**](ScannerDelimitedVariant.md) |  |  [optional] |
|**json** | [**ScannerJSONVariant**](ScannerJSONVariant.md) |  |  [optional] |
|**parquet** | [**ScannerParquetVariant**](ScannerParquetVariant.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Output format: json, parquet, or delimited. |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| JSON | &quot;json&quot; |
| PARQUET | &quot;parquet&quot; |
| DELIMITED | &quot;delimited&quot; |



