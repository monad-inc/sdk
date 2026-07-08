# DatabricksLakewatchAutoLoaderPipelineWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_interval** | **int** | How often the ingestion Job runs, in minutes. Range: 5 to 1440 (24h). | 
**table** | **str** | The target table to ingest staged files into | 
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files | 

## Example

```python
from monad.models.databricks_lakewatch_auto_loader_pipeline_write_mode import DatabricksLakewatchAutoLoaderPipelineWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakewatchAutoLoaderPipelineWriteMode from a JSON string
databricks_lakewatch_auto_loader_pipeline_write_mode_instance = DatabricksLakewatchAutoLoaderPipelineWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakewatchAutoLoaderPipelineWriteMode.to_json())

# convert the object into a dict
databricks_lakewatch_auto_loader_pipeline_write_mode_dict = databricks_lakewatch_auto_loader_pipeline_write_mode_instance.to_dict()
# create an instance of DatabricksLakewatchAutoLoaderPipelineWriteMode from a dict
databricks_lakewatch_auto_loader_pipeline_write_mode_from_dict = DatabricksLakewatchAutoLoaderPipelineWriteMode.from_dict(databricks_lakewatch_auto_loader_pipeline_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


