# OperationInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type_id** | **str** |  | [optional] 

## Example

```python
from monad.models.operation_information import OperationInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OperationInformation from a JSON string
operation_information_instance = OperationInformation.from_json(json)
# print the JSON string representation of the object
print(OperationInformation.to_json())

# convert the object into a dict
operation_information_dict = operation_information_instance.to_dict()
# create an instance of OperationInformation from a dict
operation_information_from_dict = OperationInformation.from_dict(operation_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


