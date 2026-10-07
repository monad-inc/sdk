# CreateKeyValueIfKeyValueArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to add to the record | [optional] 
**key_to_watch** | **str** | The key to watch for | [optional] 
**value** | **object** |  | [optional] 
**value_to_watch** | **object** |  | [optional] 

## Example

```python
from monad.models.create_key_value_if_key_value_arguments_config import CreateKeyValueIfKeyValueArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CreateKeyValueIfKeyValueArgumentsConfig from a JSON string
create_key_value_if_key_value_arguments_config_instance = CreateKeyValueIfKeyValueArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(CreateKeyValueIfKeyValueArgumentsConfig.to_json())

# convert the object into a dict
create_key_value_if_key_value_arguments_config_dict = create_key_value_if_key_value_arguments_config_instance.to_dict()
# create an instance of CreateKeyValueIfKeyValueArgumentsConfig from a dict
create_key_value_if_key_value_arguments_config_from_dict = CreateKeyValueIfKeyValueArgumentsConfig.from_dict(create_key_value_if_key_value_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


