# RoutesV2ApplyTransformationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**record** | **List[int]** |  | [optional] 

## Example

```python
from monad.models.routes_v2_apply_transformation_request import RoutesV2ApplyTransformationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2ApplyTransformationRequest from a JSON string
routes_v2_apply_transformation_request_instance = RoutesV2ApplyTransformationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2ApplyTransformationRequest.to_json())

# convert the object into a dict
routes_v2_apply_transformation_request_dict = routes_v2_apply_transformation_request_instance.to_dict()
# create an instance of RoutesV2ApplyTransformationRequest from a dict
routes_v2_apply_transformation_request_from_dict = RoutesV2ApplyTransformationRequest.from_dict(routes_v2_apply_transformation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


