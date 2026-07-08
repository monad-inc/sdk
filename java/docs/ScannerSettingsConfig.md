

# ScannerSettingsConfig

Scanner S3 Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**auth** | [**ScannerAuthConfig**](ScannerAuthConfig.md) |  |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bucket** | **String** | The S3 bucket in your AWS account that Scanner indexes. |  |
|**compression** | [**CompressionEnum**](#CompressionEnum) | Compression applied before upload. Scanner indexes both uncompressed and gzip objects. |  |
|**format** | [**ScannerFormatConfig**](ScannerFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Directory structure used to partition stored objects. |  [optional] |
|**prefix** | **String** | Optional prefix for S3 object keys. Should match the prefix on the Scanner source. |  [optional] |
|**region** | **String** | The AWS region where the S3 bucket is located. |  |



## Enum: CompressionEnum

| Name | Value |
|---- | -----|
| NONE | &quot;none&quot; |
| GZIP | &quot;gzip&quot; |



