

# ObjectStorageSettingsConfig

Object Storage Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bucket** | **String** | The name of the object storage bucket where data will be stored |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing |  [optional] |
|**endpoint** | **String** | The endpoint URL for the object storage service (e.g., https://fly.storage.tigris.dev, https://minio.example.com) |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for object keys to organize data within the bucket |  [optional] |
|**region** | **String** | The region for the object storage service (optional for some providers) |  [optional] |
|**skipSslVerification** | **Boolean** | Whether to skip SSL certificate verification (useful for self-signed certificates or development environments) |  [optional] |
|**usePathStyle** | **Boolean** | Whether to use path-style URLs (bucket.endpoint.com/object vs endpoint.com/bucket/object). Most S3-compatible services require this to be true. |  [optional] |



