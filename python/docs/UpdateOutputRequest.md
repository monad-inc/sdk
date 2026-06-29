# UpdateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from monad.models.update_output_request import UpdateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOutputRequest from a JSON string
update_output_request_instance = UpdateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOutputRequest.to_json())

# convert the object into a dict
update_output_request_dict = update_output_request_instance.to_dict()
# create an instance of UpdateOutputRequest from a dict
update_output_request_from_dict = UpdateOutputRequest.from_dict(update_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


