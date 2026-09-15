# ModelsTagSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from monad.models.models_tag_summary import ModelsTagSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsTagSummary from a JSON string
models_tag_summary_instance = ModelsTagSummary.from_json(json)
# print the JSON string representation of the object
print(ModelsTagSummary.to_json())

# convert the object into a dict
models_tag_summary_dict = models_tag_summary_instance.to_dict()
# create an instance of ModelsTagSummary from a dict
models_tag_summary_from_dict = ModelsTagSummary.from_dict(models_tag_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


