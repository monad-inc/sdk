# RoutesUpdateOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_update_organization_request import RoutesUpdateOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesUpdateOrganizationRequest from a JSON string
routes_update_organization_request_instance = RoutesUpdateOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesUpdateOrganizationRequest.to_json())

# convert the object into a dict
routes_update_organization_request_dict = routes_update_organization_request_instance.to_dict()
# create an instance of RoutesUpdateOrganizationRequest from a dict
routes_update_organization_request_from_dict = RoutesUpdateOrganizationRequest.from_dict(routes_update_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


