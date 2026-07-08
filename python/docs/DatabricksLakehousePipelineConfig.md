# DatabricksLakehousePipelineConfig

Who manages the Auto Loader ingestion pipeline; omitted means self-managed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** |  | 
**monad_managed** | [**DatabricksLakehouseMonadManagedPipeline**](DatabricksLakehouseMonadManagedPipeline.md) |  | [optional] 

## Example

```python
from monad.models.databricks_lakehouse_pipeline_config import DatabricksLakehousePipelineConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakehousePipelineConfig from a JSON string
databricks_lakehouse_pipeline_config_instance = DatabricksLakehousePipelineConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakehousePipelineConfig.to_json())

# convert the object into a dict
databricks_lakehouse_pipeline_config_dict = databricks_lakehouse_pipeline_config_instance.to_dict()
# create an instance of DatabricksLakehousePipelineConfig from a dict
databricks_lakehouse_pipeline_config_from_dict = DatabricksLakehousePipelineConfig.from_dict(databricks_lakehouse_pipeline_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


