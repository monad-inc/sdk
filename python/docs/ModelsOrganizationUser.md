# ModelsOrganizationUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_providers** | [**List[ModelsUserAuthProvider]**](ModelsUserAuthProvider.md) |  | [optional] 
**connection_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from monad.models.models_organization_user import ModelsOrganizationUser

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganizationUser from a JSON string
models_organization_user_instance = ModelsOrganizationUser.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganizationUser.to_json())

# convert the object into a dict
models_organization_user_dict = models_organization_user_instance.to_dict()
# create an instance of ModelsOrganizationUser from a dict
models_organization_user_from_dict = ModelsOrganizationUser.from_dict(models_organization_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


