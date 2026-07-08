# MathMultiplyWithValueArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The Key value to multiply | [optional] 
**new_key** | **str** | The key to store the result of the multiplication | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.math_multiply_with_value_arguments_config import MathMultiplyWithValueArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MathMultiplyWithValueArgumentsConfig from a JSON string
math_multiply_with_value_arguments_config_instance = MathMultiplyWithValueArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(MathMultiplyWithValueArgumentsConfig.to_json())

# convert the object into a dict
math_multiply_with_value_arguments_config_dict = math_multiply_with_value_arguments_config_instance.to_dict()
# create an instance of MathMultiplyWithValueArgumentsConfig from a dict
math_multiply_with_value_arguments_config_from_dict = MathMultiplyWithValueArgumentsConfig.from_dict(math_multiply_with_value_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


