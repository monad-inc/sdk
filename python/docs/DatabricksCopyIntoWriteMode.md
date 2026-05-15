# DatabricksCopyIntoWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_name** | **str** | The target Delta table name. Required for copy_into mode. If the table doesn&#39;t exist, Monad will create it. | 

## Example

```python
from monad.models.databricks_copy_into_write_mode import DatabricksCopyIntoWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksCopyIntoWriteMode from a JSON string
databricks_copy_into_write_mode_instance = DatabricksCopyIntoWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksCopyIntoWriteMode.to_json())

# convert the object into a dict
databricks_copy_into_write_mode_dict = databricks_copy_into_write_mode_instance.to_dict()
# create an instance of DatabricksCopyIntoWriteMode from a dict
databricks_copy_into_write_mode_from_dict = DatabricksCopyIntoWriteMode.from_dict(databricks_copy_into_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


