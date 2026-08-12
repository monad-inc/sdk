# CreateInputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorInputConfig**](SecretProcessesorInputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.create_input_request import CreateInputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInputRequest from a JSON string
create_input_request_instance = CreateInputRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInputRequest.to_json())

# convert the object into a dict
create_input_request_dict = create_input_request_instance.to_dict()
# create an instance of CreateInputRequest from a dict
create_input_request_from_dict = CreateInputRequest.from_dict(create_input_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


