

# ObjectStorageInputSettingsConfig

Object storage settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**bucket** | **String** | Name of the storage bucket |  |
|**compression** | [**CompressionEnum**](#CompressionEnum) | Compression format of the objects |  |
|**endpoint** | **String** | Endpoint URL for the object storage service (e.g., https://minio.example.com, https://s3.amazonaws.com) |  |
|**format** | [**FormatEnum**](#FormatEnum) | File format of the objects |  |
|**partitionFormat** | [**PartitionFormatEnum**](#PartitionFormatEnum) | Partition format of your bucket. Options: hive compliant (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), flat hive compliant (&#39;dt&#x3D;2024-01-01&#39;), or simple date (&#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | Prefix that leads to the start of the expected partition. For example: \&quot;/foobar/year&#x3D;2024/month&#x3D;01/day&#x3D;01/\&quot;. The prefix is &#x60;foobar&#x60;. |  [optional] |
|**recordLocation** | **String** | Location of the record in the object. Applies only for JSON objects. Leave empty for the entire record. |  [optional] |
|**region** | **String** | Optional region for the object storage service. This is often required for services like AWS S3. |  [optional] |
|**skipSslVerification** | **Boolean** | Skip SSL verification for self-signed certificates |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |



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



## Enum: PartitionFormatEnum

| Name | Value |
|---- | -----|
| FLAT_HIVE_COMPLIANT | &quot;flat hive compliant&quot; |
| HIVE_COMPLIANT | &quot;hive compliant&quot; |
| SIMPLE_DATE | &quot;simple date&quot; |



