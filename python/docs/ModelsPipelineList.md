# ModelsPipelineList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**pipelines** | [**List[ModelsPipeline]**](ModelsPipeline.md) |  | [optional] 

## Example

```python
from monad.models.models_pipeline_list import ModelsPipelineList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsPipelineList from a JSON string
models_pipeline_list_instance = ModelsPipelineList.from_json(json)
# print the JSON string representation of the object
print(ModelsPipelineList.to_json())

# convert the object into a dict
models_pipeline_list_dict = models_pipeline_list_instance.to_dict()
# create an instance of ModelsPipelineList from a dict
models_pipeline_list_from_dict = ModelsPipelineList.from_dict(models_pipeline_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


