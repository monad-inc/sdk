

# GoogleCloudStorageOutputSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bucket** | **String** | The name of the bucket where data will be stored |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing |  [optional] |
|**format** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for object keys to organize data within the bucket |  [optional] |



