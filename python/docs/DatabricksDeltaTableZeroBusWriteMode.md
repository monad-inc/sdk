# DatabricksDeltaTableZeroBusWriteMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | The Databricks workspace region (e.g. us-west-2) used to form the ZeroBus data-plane endpoint. | 
**table_name** | **str** | The target Delta table name. The table must already exist with the expected schema. | 
**workspace_id** | **str** | The numeric Databricks workspace ID used to scope the ZeroBus OAuth token and form the data-plane endpoint. | 

## Example

```python
from monad.models.databricks_delta_table_zero_bus_write_mode import DatabricksDeltaTableZeroBusWriteMode

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableZeroBusWriteMode from a JSON string
databricks_delta_table_zero_bus_write_mode_instance = DatabricksDeltaTableZeroBusWriteMode.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableZeroBusWriteMode.to_json())

# convert the object into a dict
databricks_delta_table_zero_bus_write_mode_dict = databricks_delta_table_zero_bus_write_mode_instance.to_dict()
# create an instance of DatabricksDeltaTableZeroBusWriteMode from a dict
databricks_delta_table_zero_bus_write_mode_from_dict = DatabricksDeltaTableZeroBusWriteMode.from_dict(databricks_delta_table_zero_bus_write_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


