# ModelsOrganizationList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizations** | [**List[ModelsOrganization]**](ModelsOrganization.md) |  | [optional] 
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Example

```python
from monad.models.models_organization_list import ModelsOrganizationList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationList from a JSON string
models_organization_list_instance = ModelsOrganizationList.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationList.to_json())

# convert the object into a dict
models_organization_list_dict = models_organization_list_instance.to_dict()
# create an instance of ModelsOrganizationList from a dict
models_organization_list_from_dict = ModelsOrganizationList.from_dict(models_organization_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


