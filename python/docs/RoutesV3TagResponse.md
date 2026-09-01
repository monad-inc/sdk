# RoutesV3TagResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_tag_response import RoutesV3TagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3TagResponse from a JSON string
routes_v3_tag_response_instance = RoutesV3TagResponse.from_json(json)
# print the JSON string representation of the object
print(RoutesV3TagResponse.to_json())

# convert the object into a dict
routes_v3_tag_response_dict = routes_v3_tag_response_instance.to_dict()
# create an instance of RoutesV3TagResponse from a dict
routes_v3_tag_response_from_dict = RoutesV3TagResponse.from_dict(routes_v3_tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


