

# RoutesTransformOperationArguments


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**key** | **String** | The key to store the timestamp in |  [optional] |
|**value** | **Object** |  |  [optional] |
|**type** | **String** | The new type of the key |  [optional] |
|**sourceFormat** | **ConvertTimestampTimestampFormat** |  |  [optional] |
|**sourceFormatCustom** | **String** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**sourceKey** | **String** | Required: JSONPath to source timestamp field |  [optional] |
|**sourceTimezone** | **String** | Optional: Source timezone (default: UTC) |  [optional] |
|**targetFormat** | **ConvertTimestampTimestampFormat** |  |  [optional] |
|**targetFormatCustom** | **String** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) |  [optional] |
|**targetKey** | **String** | Optional: Target field (if empty, overwrites SourceKey) |  [optional] |
|**targetTimezone** | **String** | Optional: Target timezone (default: UTC) |  [optional] |
|**keyToWatch** | **String** | The key to watch for |  [optional] |
|**valueToWatch** | **Object** |  |  [optional] |
|**newKey** | **String** | The new key to rename to |  [optional] |
|**algorithm** | [**EncryptAlgorithmConfig**](EncryptAlgorithmConfig.md) |  |  [optional] |
|**delimiter** | **String** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 |  [optional] |
|**query** | **String** | The raw query string from config |  [optional] |
|**mode** | [**MaskModeConfig**](MaskModeConfig.md) |  |  [optional] |
|**valueToSet** | **Object** |  |  [optional] |
|**format** | **UtcTimestampTimestampFormat** |  |  [optional] |



