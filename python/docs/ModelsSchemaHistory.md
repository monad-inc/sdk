# ModelsSchemaHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**edge_id** | **str** |  | [optional] 
**event_tags** | **List[str]** |  | [optional] 
**from_node_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**pipeline_name** | **str** |  | [optional] 
**var_schema** | [**Dict[str, ModelsFieldState]**](ModelsFieldState.md) |  | [optional] 
**to_node_name** | **str** |  | [optional] 

## Example

```python
from monad.models.models_schema_history import ModelsSchemaHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSchemaHistory from a JSON string
models_schema_history_instance = ModelsSchemaHistory.from_json(json)
# print the JSON string representation of the object
print(ModelsSchemaHistory.to_json())

# convert the object into a dict
models_schema_history_dict = models_schema_history_instance.to_dict()
# create an instance of ModelsSchemaHistory from a dict
models_schema_history_from_dict = ModelsSchemaHistory.from_dict(models_schema_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


