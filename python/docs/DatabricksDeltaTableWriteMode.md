# DatabricksDeltaTableWriteMode

The write mode: copy_into (default) stages files and uses COPY INTO; autoloader stages files for Databricks Autoloader to ingest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_loader** | **object** |  | [optional] 
**copy_into** | [**DatabricksDeltaTableCopyIntoWriteMode**](DatabricksDeltaTableCopyIntoWriteMode.md) |  | [optional] 
**write_mode** | **str** |  | 

## Example

```python
from monad.models.databricks_delta_table_write_mode import DatabricksDeltaTableWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableWriteMode from a JSON string
databricks_delta_table_write_mode_instance = DatabricksDeltaTableWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableWriteMode.to_json())

# convert the object into a dict
databricks_delta_table_write_mode_dict = databricks_delta_table_write_mode_instance.to_dict()
# create an instance of DatabricksDeltaTableWriteMode from a dict
databricks_delta_table_write_mode_from_dict = DatabricksDeltaTableWriteMode.from_dict(databricks_delta_table_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


