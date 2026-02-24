# ModelsUserOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**inherited** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**parent_organization_id** | **str** |  | [optional] 
**source_organization_id** | **str** |  | [optional] 
**source_organization_name** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_user_organization import ModelsUserOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsUserOrganization from a JSON string
models_user_organization_instance = ModelsUserOrganization.from_json(json)
# print the JSON string representation of the object
print(ModelsUserOrganization.to_json())

# convert the object into a dict
models_user_organization_dict = models_user_organization_instance.to_dict()
# create an instance of ModelsUserOrganization from a dict
models_user_organization_from_dict = ModelsUserOrganization.from_dict(models_user_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


