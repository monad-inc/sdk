# DuplicateKeyValueToKeyArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to duplicate from the record | [optional] 
**new_key** | **str** | The new key to duplicate the value to | [optional] 

## Example

```python
from monad.models.duplicate_key_value_to_key_arguments_config import DuplicateKeyValueToKeyArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DuplicateKeyValueToKeyArgumentsConfig from a JSON string
duplicate_key_value_to_key_arguments_config_instance = DuplicateKeyValueToKeyArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(DuplicateKeyValueToKeyArgumentsConfig.to_json())

# convert the object into a dict
duplicate_key_value_to_key_arguments_config_dict = duplicate_key_value_to_key_arguments_config_instance.to_dict()
# create an instance of DuplicateKeyValueToKeyArgumentsConfig from a dict
duplicate_key_value_to_key_arguments_config_from_dict = DuplicateKeyValueToKeyArgumentsConfig.from_dict(duplicate_key_value_to_key_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


