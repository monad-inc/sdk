

# BackblazeSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**bucket** | **String** | The name of the B2 bucket where data will be stored |  [optional] |
|**compression** | **String** | The compression method to be applied to the data before storing in B2 |  [optional] |
|**formatConfig** | [**FormatterFormatConfig**](FormatterFormatConfig.md) |  |  [optional] |
|**partitionFormat** | **String** | Directory structure used to partition stored objects. Options: simple date (e.g., &#39;2024/01/01&#39;), hive compliant (e.g., &#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;), and flat hive compliant (e.g., &#39;dt&#x3D;2024-01-01&#39;). |  [optional] |
|**prefix** | **String** | An optional prefix for B2 object keys to organize data within the bucket |  [optional] |
|**region** | **String** | The B2 region/endpoint (e.g., us-west-001) |  [optional] |



