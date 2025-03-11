# ModelsRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_create** | **bool** |  | [optional] 
**pipeline_delete** | **bool** |  | [optional] 
**pipeline_read** | **bool** |  | [optional] 
**pipeline_update** | **bool** |  | [optional] 
**protected** | **bool** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_role import ModelsRole

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsRole from a JSON string
models_role_instance = ModelsRole.from_json(json)
# print the JSON string representation of the object
print(ModelsRole.to_json())

# convert the object into a dict
models_role_dict = models_role_instance.to_dict()
# create an instance of ModelsRole from a dict
models_role_from_dict = ModelsRole.from_dict(models_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


