# MaskArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key whose value will be masked | [optional] 
**mode** | [**MaskModeConfig**](MaskModeConfig.md) |  | [optional] 

## Example

```python
from monad.models.mask_arguments_config import MaskArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MaskArgumentsConfig from a JSON string
mask_arguments_config_instance = MaskArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(MaskArgumentsConfig.to_json())

# convert the object into a dict
mask_arguments_config_dict = mask_arguments_config_instance.to_dict()
# create an instance of MaskArgumentsConfig from a dict
mask_arguments_config_from_dict = MaskArgumentsConfig.from_dict(mask_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


