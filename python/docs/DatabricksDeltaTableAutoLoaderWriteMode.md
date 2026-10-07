# DatabricksDeltaTableAutoLoaderWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files for Autoloader to ingest. | 

## Example

```python
from monad.models.databricks_delta_table_auto_loader_write_mode import DatabricksDeltaTableAutoLoaderWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableAutoLoaderWriteMode from a JSON string
databricks_delta_table_auto_loader_write_mode_instance = DatabricksDeltaTableAutoLoaderWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableAutoLoaderWriteMode.to_json())

# convert the object into a dict
databricks_delta_table_auto_loader_write_mode_dict = databricks_delta_table_auto_loader_write_mode_instance.to_dict()
# create an instance of DatabricksDeltaTableAutoLoaderWriteMode from a dict
databricks_delta_table_auto_loader_write_mode_from_dict = DatabricksDeltaTableAutoLoaderWriteMode.from_dict(databricks_delta_table_auto_loader_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


