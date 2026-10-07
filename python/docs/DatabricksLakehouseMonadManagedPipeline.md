# DatabricksLakehouseMonadManagedPipeline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval** | **int** | How often the pipeline runs, in minutes; defaults to 60 | [optional] 
**table_name** | **str** | The bronze table the pipeline writes into; defaults to bronze_&lt;volume&gt; | [optional] 

## Example

```python
from monad.models.databricks_lakehouse_monad_managed_pipeline import DatabricksLakehouseMonadManagedPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakehouseMonadManagedPipeline from a JSON string
databricks_lakehouse_monad_managed_pipeline_instance = DatabricksLakehouseMonadManagedPipeline.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakehouseMonadManagedPipeline.to_json())

# convert the object into a dict
databricks_lakehouse_monad_managed_pipeline_dict = databricks_lakehouse_monad_managed_pipeline_instance.to_dict()
# create an instance of DatabricksLakehouseMonadManagedPipeline from a dict
databricks_lakehouse_monad_managed_pipeline_from_dict = DatabricksLakehouseMonadManagedPipeline.from_dict(databricks_lakehouse_monad_managed_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


