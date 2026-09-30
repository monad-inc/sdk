# FlattenArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**key** | **str** | The key to flatten | [optional] 

## Example

```python
from monad.models.flatten_arguments_config import FlattenArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenArgumentsConfig from a JSON string
flatten_arguments_config_instance = FlattenArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(FlattenArgumentsConfig.to_json())

# convert the object into a dict
flatten_arguments_config_dict = flatten_arguments_config_instance.to_dict()
# create an instance of FlattenArgumentsConfig from a dict
flatten_arguments_config_from_dict = FlattenArgumentsConfig.from_dict(flatten_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


