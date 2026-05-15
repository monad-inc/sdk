# DatabricksWriteMode

The write mode: copy_into (default) stages files and uses COPY INTO; autoloader stages files for Databricks Autoloader to ingest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_loader** | **object** |  | [optional] 
**copy_into** | [**DatabricksCopyIntoWriteMode**](DatabricksCopyIntoWriteMode.md) |  | [optional] 
**write_mode** | **str** |  | 

## Example

```python
from monad.models.databricks_write_mode import DatabricksWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksWriteMode from a JSON string
databricks_write_mode_instance = DatabricksWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksWriteMode.to_json())

# convert the object into a dict
databricks_write_mode_dict = databricks_write_mode_instance.to_dict()
# create an instance of DatabricksWriteMode from a dict
databricks_write_mode_from_dict = DatabricksWriteMode.from_dict(databricks_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


