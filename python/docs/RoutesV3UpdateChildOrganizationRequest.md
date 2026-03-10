# RoutesV3UpdateChildOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from monad.models.routes_v3_update_child_organization_request import RoutesV3UpdateChildOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesV3UpdateChildOrganizationRequest from a JSON string
routes_v3_update_child_organization_request_instance = RoutesV3UpdateChildOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesV3UpdateChildOrganizationRequest.to_json())

# convert the object into a dict
routes_v3_update_child_organization_request_dict = routes_v3_update_child_organization_request_instance.to_dict()
# create an instance of RoutesV3UpdateChildOrganizationRequest from a dict
routes_v3_update_child_organization_request_from_dict = RoutesV3UpdateChildOrganizationRequest.from_dict(routes_v3_update_child_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


