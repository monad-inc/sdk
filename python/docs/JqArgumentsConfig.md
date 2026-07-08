# JqArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Optional key to store result under | [optional] 
**query** | **str** | The raw query string from config | [optional] 

## Example

```python
from monad.models.jq_arguments_config import JqArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of JqArgumentsConfig from a JSON string
jq_arguments_config_instance = JqArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(JqArgumentsConfig.to_json())

# convert the object into a dict
jq_arguments_config_dict = jq_arguments_config_instance.to_dict()
# create an instance of JqArgumentsConfig from a dict
jq_arguments_config_from_dict = JqArgumentsConfig.from_dict(jq_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


