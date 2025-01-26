

# S3SettingsConfig

S3 Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**bucket** | **String** | The name of the S3 bucket where data will be stored |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing in S3 |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Specifies the format for organizing data into partitions within your S3 bucket. This determines the directory structure and naming convention for stored objects, affecting data organization and query efficiency. Examples include Hive-style partitioning (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) and simple date-based formats (e.g., &#39;2024/01/01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for S3 object keys to organize data within the bucket |  [optional] |
|**region** | **String** | The AWS region where the S3 bucket is located |  [optional] |
|**roleArn** | **String** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket |  [optional] |



