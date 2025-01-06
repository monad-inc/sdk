# ModelsPipelineEdgeConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[ModelsPipelineEdgeCondition]**](ModelsPipelineEdgeCondition.md) |  | [optional] 
**operator** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline_edge_conditions import ModelsPipelineEdgeConditions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineEdgeConditions from a JSON string
models_pipeline_edge_conditions_instance = ModelsPipelineEdgeConditions.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineEdgeConditions.to_json())

# convert the object into a dict
models_pipeline_edge_conditions_dict = models_pipeline_edge_conditions_instance.to_dict()
# create an instance of ModelsPipelineEdgeConditions from a dict
models_pipeline_edge_conditions_from_dict = ModelsPipelineEdgeConditions.from_dict(models_pipeline_edge_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


