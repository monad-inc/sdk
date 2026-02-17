# JqJQ


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | [**JqArgumentsConfig**](JqArgumentsConfig.md) |  | [optional] 

## Example

```python
from monad.models.jq_jq import JqJQ

# TODO update the JSON string below
json = "{}"
# create an instance of JqJQ from a JSON string
jq_jq_instance = JqJQ.from_json(json)
# print the JSON string representation of the object
print(JqJQ.to_json())

# convert the object into a dict
jq_jq_dict = jq_jq_instance.to_dict()
# create an instance of JqJQ from a dict
jq_jq_from_dict = JqJQ.from_dict(jq_jq_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


