# DatabricksLakehouseWriteMode

The write mode: autoloader stages files for Databricks Autoloader to ingest; zerobus sends data via the ZeroBus streaming protocol

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoloader** | [**DatabricksLakehouseAutoLoaderWriteMode**](DatabricksLakehouseAutoLoaderWriteMode.md) |  | [optional] 
**write_mode** | **str** |  | 
**zerobus** | [**DatabricksLakehouseZeroBusWriteMode**](DatabricksLakehouseZeroBusWriteMode.md) |  | [optional] 

## Example

```python
from monad.models.databricks_lakehouse_write_mode import DatabricksLakehouseWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakehouseWriteMode from a JSON string
databricks_lakehouse_write_mode_instance = DatabricksLakehouseWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakehouseWriteMode.to_json())

# convert the object into a dict
databricks_lakehouse_write_mode_dict = databricks_lakehouse_write_mode_instance.to_dict()
# create an instance of DatabricksLakehouseWriteMode from a dict
databricks_lakehouse_write_mode_from_dict = DatabricksLakehouseWriteMode.from_dict(databricks_lakehouse_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


