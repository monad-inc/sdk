# DatabricksDeltaTableCopyIntoWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_path** | **str** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123). Required for copy_into mode; not needed for autoloader. | 
**table_name** | **str** | The target Delta table name. Required for copy_into mode. If the table doesn&#39;t exist, Monad will create it. | 

## Example

```python
from monad.models.databricks_delta_table_copy_into_write_mode import DatabricksDeltaTableCopyIntoWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableCopyIntoWriteMode from a JSON string
databricks_delta_table_copy_into_write_mode_instance = DatabricksDeltaTableCopyIntoWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableCopyIntoWriteMode.to_json())

# convert the object into a dict
databricks_delta_table_copy_into_write_mode_dict = databricks_delta_table_copy_into_write_mode_instance.to_dict()
# create an instance of DatabricksDeltaTableCopyIntoWriteMode from a dict
databricks_delta_table_copy_into_write_mode_from_dict = DatabricksDeltaTableCopyIntoWriteMode.from_dict(databricks_delta_table_copy_into_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


