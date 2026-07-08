# DatabricksLakewatchAutoLoaderWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files | 

## Example

```python
from monad.models.databricks_lakewatch_auto_loader_write_mode import DatabricksLakewatchAutoLoaderWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakewatchAutoLoaderWriteMode from a JSON string
databricks_lakewatch_auto_loader_write_mode_instance = DatabricksLakewatchAutoLoaderWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakewatchAutoLoaderWriteMode.to_json())

# convert the object into a dict
databricks_lakewatch_auto_loader_write_mode_dict = databricks_lakewatch_auto_loader_write_mode_instance.to_dict()
# create an instance of DatabricksLakewatchAutoLoaderWriteMode from a dict
databricks_lakewatch_auto_loader_write_mode_from_dict = DatabricksLakewatchAutoLoaderWriteMode.from_dict(databricks_lakewatch_auto_loader_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


