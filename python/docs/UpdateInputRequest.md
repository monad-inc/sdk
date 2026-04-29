# UpdateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.update_input_request import UpdateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInputRequest from a JSON string
update_input_request_instance = UpdateInputRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInputRequest.to_json())

# convert the object into a dict
update_input_request_dict = update_input_request_instance.to_dict()
# create an instance of UpdateInputRequest from a dict
update_input_request_from_dict = UpdateInputRequest.from_dict(update_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


