

# AbsSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountUrl** | **String** | Represents your storage account in Azure. Typically of the format https://{account}.blob.core.windows.net. |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing in Azure |  [optional] |
|**container** | **String** | A container organizes a set of blobs, similar to a directory in a file system. |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your Azure container. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for Azure object keys to organize data within the container |  [optional] |



