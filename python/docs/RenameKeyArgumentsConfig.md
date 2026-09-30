# RenameKeyArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to rename | [optional] 
**new_key** | **str** | The new key to rename to | [optional] 

## Example

```python
from monad.models.rename_key_arguments_config import RenameKeyArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RenameKeyArgumentsConfig from a JSON string
rename_key_arguments_config_instance = RenameKeyArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(RenameKeyArgumentsConfig.to_json())

# convert the object into a dict
rename_key_arguments_config_dict = rename_key_arguments_config_instance.to_dict()
# create an instance of RenameKeyArgumentsConfig from a dict
rename_key_arguments_config_from_dict = RenameKeyArgumentsConfig.from_dict(rename_key_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


