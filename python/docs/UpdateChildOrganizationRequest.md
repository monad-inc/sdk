# UpdateChildOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**friendly_name** | **str** |  | 

## Example

```python
from monad.models.update_child_organization_request import UpdateChildOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChildOrganizationRequest from a JSON string
update_child_organization_request_instance = UpdateChildOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChildOrganizationRequest.to_json())

# convert the object into a dict
update_child_organization_request_dict = update_child_organization_request_instance.to_dict()
# create an instance of UpdateChildOrganizationRequest from a dict
update_child_organization_request_from_dict = UpdateChildOrganizationRequest.from_dict(update_child_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


