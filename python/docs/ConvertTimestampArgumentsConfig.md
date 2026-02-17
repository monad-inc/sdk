# ConvertTimestampArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_format** | **str** | Required: Format of source timestamp | [optional] 
**source_format_custom** | **str** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**source_key** | **str** | Required: JSONPath to source timestamp field | [optional] 
**source_timezone** | **str** | Optional: Source timezone (default: UTC) | [optional] 
**target_format** | **str** | Required: Format of source timestamp | [optional] 
**target_format_custom** | **str** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**target_key** | **str** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**target_timezone** | **str** | Optional: Target timezone (default: UTC) | [optional] 

## Example

```python
from monad.models.convert_timestamp_arguments_config import ConvertTimestampArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertTimestampArgumentsConfig from a JSON string
convert_timestamp_arguments_config_instance = ConvertTimestampArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(ConvertTimestampArgumentsConfig.to_json())

# convert the object into a dict
convert_timestamp_arguments_config_dict = convert_timestamp_arguments_config_instance.to_dict()
# create an instance of ConvertTimestampArgumentsConfig from a dict
convert_timestamp_arguments_config_from_dict = ConvertTimestampArgumentsConfig.from_dict(convert_timestamp_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


