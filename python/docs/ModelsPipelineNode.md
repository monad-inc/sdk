# ModelsPipelineNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component** | [**ModelsNodeComponent**](ModelsNodeComponent.md) |  | [optional] 
**component_id** | **str** |  | [optional] 
**component_sub_type** | **str** |  | [optional] 
**component_type** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_node import ModelsPipelineNode

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineNode from a JSON string
models_pipeline_node_instance = ModelsPipelineNode.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineNode.to_json())

# convert the object into a dict
models_pipeline_node_dict = models_pipeline_node_instance.to_dict()
# create an instance of ModelsPipelineNode from a dict
models_pipeline_node_from_dict = ModelsPipelineNode.from_dict(models_pipeline_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


