

# ConvertTimestampConvertTimestamp


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**sourceFormat** | **String** | Required: Format of source timestamp |  [optional] |
|**sourceFormatCustom** | **String** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**sourceKey** | **String** | Required: JSONPath to source timestamp field |  [optional] |
|**sourceTimezone** | **String** | Optional: Source timezone (default: UTC) |  [optional] |
|**targetFormat** | **String** | Required: Target format |  [optional] |
|**targetFormatCustom** | **String** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**targetKey** | **String** | Optional: Target field (if empty, overwrites SourceKey) |  [optional] |
|**targetTimezone** | **String** | Optional: Target timezone (default: UTC) |  [optional] |



