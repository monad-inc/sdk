# ModelsOrganizationUserList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**users** | [**List[ModelsOrganizationUser]**](ModelsOrganizationUser.md) |  | [optional] 

## Example

```python
from monad.models.models_organization_user_list import ModelsOrganizationUserList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationUserList from a JSON string
models_organization_user_list_instance = ModelsOrganizationUserList.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationUserList.to_json())

# convert the object into a dict
models_organization_user_list_dict = models_organization_user_list_instance.to_dict()
# create an instance of ModelsOrganizationUserList from a dict
models_organization_user_list_from_dict = ModelsOrganizationUserList.from_dict(models_organization_user_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


