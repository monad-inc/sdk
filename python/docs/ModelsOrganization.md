# ModelsOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_organization import ModelsOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsOrganization from a JSON string
models_organization_instance = ModelsOrganization.from_json(json)
# print the JSON string representation of the object
print(ModelsOrganization.to_json())

# convert the object into a dict
models_organization_dict = models_organization_instance.to_dict()
# create an instance of ModelsOrganization from a dict
models_organization_from_dict = ModelsOrganization.from_dict(models_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


