# ModelsUserOrganizationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**List[ModelsUserOrganization]**](ModelsUserOrganization.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_user_organization_list import ModelsUserOrganizationList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsUserOrganizationList from a JSON string
models_user_organization_list_instance = ModelsUserOrganizationList.from_json(json)
# print the JSON string representation of the object
print(ModelsUserOrganizationList.to_json())

# convert the object into a dict
models_user_organization_list_dict = models_user_organization_list_instance.to_dict()
# create an instance of ModelsUserOrganizationList from a dict
models_user_organization_list_from_dict = ModelsUserOrganizationList.from_dict(models_user_organization_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


