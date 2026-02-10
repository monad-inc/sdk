# ConvertTimestampConvertTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_format** | **str** | Required: Format of source timestamp | [optional] 
**source_format_custom** | **str** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**source_key** | **str** | Required: JSONPath to source timestamp field | [optional] 
**source_timezone** | **str** | Optional: Source timezone (default: UTC) | [optional] 
**target_format** | **str** | Required: Target format | [optional] 
**target_format_custom** | **str** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**target_key** | **str** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**target_timezone** | **str** | Optional: Target timezone (default: UTC) | [optional] 

## Example

```python
from monad.models.convert_timestamp_convert_timestamp import ConvertTimestampConvertTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertTimestampConvertTimestamp from a JSON string
convert_timestamp_convert_timestamp_instance = ConvertTimestampConvertTimestamp.from_json(json)
# print the JSON string representation of the object
print(ConvertTimestampConvertTimestamp.to_json())

# convert the object into a dict
convert_timestamp_convert_timestamp_dict = convert_timestamp_convert_timestamp_instance.to_dict()
# create an instance of ConvertTimestampConvertTimestamp from a dict
convert_timestamp_convert_timestamp_from_dict = ConvertTimestampConvertTimestamp.from_dict(convert_timestamp_convert_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


