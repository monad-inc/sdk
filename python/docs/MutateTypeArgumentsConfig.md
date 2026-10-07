# MutateTypeArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to mutate the type of | [optional] 
**type** | **str** | The new type of the key | [optional] 

## Example

```python
from monad.models.mutate_type_arguments_config import MutateTypeArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MutateTypeArgumentsConfig from a JSON string
mutate_type_arguments_config_instance = MutateTypeArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(MutateTypeArgumentsConfig.to_json())

# convert the object into a dict
mutate_type_arguments_config_dict = mutate_type_arguments_config_instance.to_dict()
# create an instance of MutateTypeArgumentsConfig from a dict
mutate_type_arguments_config_from_dict = MutateTypeArgumentsConfig.from_dict(mutate_type_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


