# RoutesV2UpdateOutputRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**output_type** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v2_update_output_request import RoutesV2UpdateOutputRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV2UpdateOutputRequest from a JSON string
routes_v2_update_output_request_instance = RoutesV2UpdateOutputRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV2UpdateOutputRequest.to_json())

# convert the object into a dict
routes_v2_update_output_request_dict = routes_v2_update_output_request_instance.to_dict()
# create an instance of RoutesV2UpdateOutputRequest from a dict
routes_v2_update_output_request_from_dict = RoutesV2UpdateOutputRequest.from_dict(routes_v2_update_output_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


