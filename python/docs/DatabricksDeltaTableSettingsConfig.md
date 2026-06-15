# DatabricksDeltaTableSettingsConfig

Databricks Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**catalog** | **str** | The Unity Catalog name | 
**var_schema** | **str** | The target schema within the catalog | 
**server_hostname** | **str** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**write_mode** | [**DatabricksDeltaTableWriteMode**](DatabricksDeltaTableWriteMode.md) |  | 

## Example

```python
from monad.models.databricks_delta_table_settings_config import DatabricksDeltaTableSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableSettingsConfig from a JSON string
databricks_delta_table_settings_config_instance = DatabricksDeltaTableSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableSettingsConfig.to_json())

# convert the object into a dict
databricks_delta_table_settings_config_dict = databricks_delta_table_settings_config_instance.to_dict()
# create an instance of DatabricksDeltaTableSettingsConfig from a dict
databricks_delta_table_settings_config_from_dict = DatabricksDeltaTableSettingsConfig.from_dict(databricks_delta_table_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


