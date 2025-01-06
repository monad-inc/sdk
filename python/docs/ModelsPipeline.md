# ModelsPipeline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**input_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_pipeline import ModelsPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipeline from a JSON string
models_pipeline_instance = ModelsPipeline.from_json(json)
# print the JSON string representation of the object
print(ModelsPipeline.to_json())

# convert the object into a dict
models_pipeline_dict = models_pipeline_instance.to_dict()
# create an instance of ModelsPipeline from a dict
models_pipeline_from_dict = ModelsPipeline.from_dict(models_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


