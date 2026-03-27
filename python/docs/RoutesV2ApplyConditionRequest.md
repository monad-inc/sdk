# RoutesV2ApplyConditionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**record** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.routes_v2_apply_condition_request import RoutesV2ApplyConditionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2ApplyConditionRequest from a JSON string
routes_v2_apply_condition_request_instance = RoutesV2ApplyConditionRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2ApplyConditionRequest.to_json())

# convert the object into a dict
routes_v2_apply_condition_request_dict = routes_v2_apply_condition_request_instance.to_dict()
# create an instance of RoutesV2ApplyConditionRequest from a dict
routes_v2_apply_condition_request_from_dict = RoutesV2ApplyConditionRequest.from_dict(routes_v2_apply_condition_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


