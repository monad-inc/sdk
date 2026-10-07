# DropKeyArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to drop from the record | [optional] 

## Example

```python
from monad.models.drop_key_arguments_config import DropKeyArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DropKeyArgumentsConfig from a JSON string
drop_key_arguments_config_instance = DropKeyArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(DropKeyArgumentsConfig.to_json())

# convert the object into a dict
drop_key_arguments_config_dict = drop_key_arguments_config_instance.to_dict()
# create an instance of DropKeyArgumentsConfig from a dict
drop_key_arguments_config_from_dict = DropKeyArgumentsConfig.from_dict(drop_key_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


