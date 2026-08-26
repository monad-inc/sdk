# ModelsSchemaTrackingSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_detection** | **int** |  | [optional] 
**in_learning** | **int** |  | [optional] 

## Example

```python
from monad.models.models_schema_tracking_summary import ModelsSchemaTrackingSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsSchemaTrackingSummary from a JSON string
models_schema_tracking_summary_instance = ModelsSchemaTrackingSummary.from_json(json)
# print the JSON string representation of the object
print(ModelsSchemaTrackingSummary.to_json())

# convert the object into a dict
models_schema_tracking_summary_dict = models_schema_tracking_summary_instance.to_dict()
# create an instance of ModelsSchemaTrackingSummary from a dict
models_schema_tracking_summary_from_dict = ModelsSchemaTrackingSummary.from_dict(models_schema_tracking_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


