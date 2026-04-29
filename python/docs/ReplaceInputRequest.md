# ReplaceInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.replace_input_request import ReplaceInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceInputRequest from a JSON string
replace_input_request_instance = ReplaceInputRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceInputRequest.to_json())

# convert the object into a dict
replace_input_request_dict = replace_input_request_instance.to_dict()
# create an instance of ReplaceInputRequest from a dict
replace_input_request_from_dict = ReplaceInputRequest.from_dict(replace_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


