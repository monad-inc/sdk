# ModelsSecret


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from monad.models.models_secret import ModelsSecret

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSecret from a JSON string
models_secret_instance = ModelsSecret.from_json(json)
# print the JSON string representation of the object
print(ModelsSecret.to_json())

# convert the object into a dict
models_secret_dict = models_secret_instance.to_dict()
# create an instance of ModelsSecret from a dict
models_secret_from_dict = ModelsSecret.from_dict(models_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


