

# Awssqss3SettingsConfig

AWS SQS S3 settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**compression** | [**CompressionEnum**](#CompressionEnum) | Compression of S3 objects. oneof must mirror compression_handlers.ListCompressions(); TestCompressionFormatTagDrift guards drift. |  |
|**format** | [**FormatEnum**](#FormatEnum) | Format of S3 objects. oneof must mirror format_handlers.ListFormats(); TestCompressionFormatTagDrift guards drift. csv is omitted because format_handlers&#39; package init wipes its Formats map after per-file inits register, so ListFormats() doesn&#39;t include csv today. |  |
|**keyFilter** | [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  |  [optional] |
|**queueUrl** | **String** |  |  |
|**recordLocation** | **String** | Record location within each parsed object. JSON only; empty &#x3D; whole record. |  [optional] |
|**region** | **String** |  |  |
|**roleArn** | **String** |  |  [optional] |
|**usesSns** | **Boolean** |  |  [optional] |
|**withMetadata** | **Boolean** |  |  [optional] |



## Enum: CompressionEnum

| Name | Value |
|---- | -----|
| AUTO | &quot;auto&quot; |
| GZIP | &quot;gzip&quot; |
| NONE | &quot;none&quot; |



## Enum: FormatEnum

| Name | Value |
|---- | -----|
| JSON | &quot;json&quot; |
| JSONL | &quot;jsonl&quot; |
| WSV | &quot;wsv&quot; |



