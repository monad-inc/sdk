# RoutesTransformOperationArguments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to store the timestamp in | [optional] 
**value** | **object** |  | [optional] 
**type** | **str** | The new type of the key | [optional] 
**source_format** | **str** | Required: Format of source timestamp | [optional] 
**source_format_custom** | **str** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**source_key** | **str** | Required: JSONPath to source timestamp field | [optional] 
**source_timezone** | **str** | Optional: Source timezone (default: UTC) | [optional] 
**target_format** | **str** | Required: Target format | [optional] 
**target_format_custom** | **str** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**target_key** | **str** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**target_timezone** | **str** | Optional: Target timezone (default: UTC) | [optional] 
**key_to_watch** | **str** | The key to watch for | [optional] 
**value_to_watch** | **object** |  | [optional] 
**new_key** | **str** | The new key to rename to | [optional] 
**delimiter** | **str** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**query** | **str** | The JQ query to apply to the record | [optional] 
**value_to_set** | **object** |  | [optional] 
**format** | **str** | The format of the timestamp | [optional] 

## Example

```python
from monad.models.routes_transform_operation_arguments import RoutesTransformOperationArguments

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesTransformOperationArguments from a JSON string
routes_transform_operation_arguments_instance = RoutesTransformOperationArguments.from_json(json)
# print the JSON string representation of the object
print(RoutesTransformOperationArguments.to_json())

# convert the object into a dict
routes_transform_operation_arguments_dict = routes_transform_operation_arguments_instance.to_dict()
# create an instance of RoutesTransformOperationArguments from a dict
routes_transform_operation_arguments_from_dict = RoutesTransformOperationArguments.from_dict(routes_transform_operation_arguments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


