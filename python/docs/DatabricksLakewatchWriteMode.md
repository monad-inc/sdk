# DatabricksLakewatchWriteMode

The write mode: autoloader stages files for Databricks Autoloader to ingest; zerobus sends data via the ZeroBus streaming protocol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoloader** | [**DatabricksLakewatchAutoLoaderWriteMode**](DatabricksLakewatchAutoLoaderWriteMode.md) |  | [optional] 
**autoloader_pipeline** | [**DatabricksLakewatchAutoLoaderPipelineWriteMode**](DatabricksLakewatchAutoLoaderPipelineWriteMode.md) |  | [optional] 
**write_mode** | **str** |  | 
**zerobus** | [**DatabricksLakewatchZeroBusWriteMode**](DatabricksLakewatchZeroBusWriteMode.md) |  | [optional] 

## Example

```python
from monad.models.databricks_lakewatch_write_mode import DatabricksLakewatchWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakewatchWriteMode from a JSON string
databricks_lakewatch_write_mode_instance = DatabricksLakewatchWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakewatchWriteMode.to_json())

# convert the object into a dict
databricks_lakewatch_write_mode_dict = databricks_lakewatch_write_mode_instance.to_dict()
# create an instance of DatabricksLakewatchWriteMode from a dict
databricks_lakewatch_write_mode_from_dict = DatabricksLakewatchWriteMode.from_dict(databricks_lakewatch_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


