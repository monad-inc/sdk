# RoutesCreateOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.routes_create_organization_request import RoutesCreateOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesCreateOrganizationRequest from a JSON string
routes_create_organization_request_instance = RoutesCreateOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(RoutesCreateOrganizationRequest.to_json())

# convert the object into a dict
routes_create_organization_request_dict = routes_create_organization_request_instance.to_dict()
# create an instance of RoutesCreateOrganizationRequest from a dict
routes_create_organization_request_from_dict = RoutesCreateOrganizationRequest.from_dict(routes_create_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


