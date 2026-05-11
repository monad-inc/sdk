# CreateChildOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**friendly_name** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from monad.models.create_child_organization_request import CreateChildOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChildOrganizationRequest from a JSON string
create_child_organization_request_instance = CreateChildOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateChildOrganizationRequest.to_json())

# convert the object into a dict
create_child_organization_request_dict = create_child_organization_request_instance.to_dict()
# create an instance of CreateChildOrganizationRequest from a dict
create_child_organization_request_from_dict = CreateChildOrganizationRequest.from_dict(create_child_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


