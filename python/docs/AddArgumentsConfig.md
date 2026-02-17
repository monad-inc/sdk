# AddArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key to add to the record | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.add_arguments_config import AddArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddArgumentsConfig from a JSON string
add_arguments_config_instance = AddArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(AddArgumentsConfig.to_json())

# convert the object into a dict
add_arguments_config_dict = add_arguments_config_instance.to_dict()
# create an instance of AddArgumentsConfig from a dict
add_arguments_config_from_dict = AddArgumentsConfig.from_dict(add_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


