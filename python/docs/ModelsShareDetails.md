# ModelsShareDetails

ShareDetails is set when the enrichment is involved in org-to-org sharing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_organization_id** | **str** | OwnerOrganizationID is the org that owns the resource; set only when SharedWithMe. | [optional] 
**shared_with_children** | **bool** | SharedWithChildren is true when the requesting org owns the resource and has shared it out to at least one child org. | [optional] 
**shared_with_me** | **bool** | SharedWithMe is true when the resource is shared to the requesting org by a parent org. | [optional] 

## Example

```python
from monad.models.models_share_details import ModelsShareDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsShareDetails from a JSON string
models_share_details_instance = ModelsShareDetails.from_json(json)
# print the JSON string representation of the object
print(ModelsShareDetails.to_json())

# convert the object into a dict
models_share_details_dict = models_share_details_instance.to_dict()
# create an instance of ModelsShareDetails from a dict
models_share_details_from_dict = ModelsShareDetails.from_dict(models_share_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


