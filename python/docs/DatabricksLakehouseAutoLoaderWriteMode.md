# DatabricksLakehouseAutoLoaderWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline** | [**DatabricksLakehousePipelineConfig**](DatabricksLakehousePipelineConfig.md) |  | [optional] 
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files | 

## Example

```python
from monad.models.databricks_lakehouse_auto_loader_write_mode import DatabricksLakehouseAutoLoaderWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakehouseAutoLoaderWriteMode from a JSON string
databricks_lakehouse_auto_loader_write_mode_instance = DatabricksLakehouseAutoLoaderWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakehouseAutoLoaderWriteMode.to_json())

# convert the object into a dict
databricks_lakehouse_auto_loader_write_mode_dict = databricks_lakehouse_auto_loader_write_mode_instance.to_dict()
# create an instance of DatabricksLakehouseAutoLoaderWriteMode from a dict
databricks_lakehouse_auto_loader_write_mode_from_dict = DatabricksLakehouseAutoLoaderWriteMode.from_dict(databricks_lakehouse_auto_loader_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


