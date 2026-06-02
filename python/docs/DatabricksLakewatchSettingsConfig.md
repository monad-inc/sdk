# DatabricksLakewatchSettingsConfig

Databricks Lakewatch Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**catalog** | **str** | The Unity Catalog name | 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**var_schema** | **str** | The target schema within the catalog | 
**server_hostname** | **str** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**write_mode** | [**DatabricksLakewatchWriteMode**](DatabricksLakewatchWriteMode.md) |  | 

## Example

```python
from monad.models.databricks_lakewatch_settings_config import DatabricksLakewatchSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakewatchSettingsConfig from a JSON string
databricks_lakewatch_settings_config_instance = DatabricksLakewatchSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakewatchSettingsConfig.to_json())

# convert the object into a dict
databricks_lakewatch_settings_config_dict = databricks_lakewatch_settings_config_instance.to_dict()
# create an instance of DatabricksLakewatchSettingsConfig from a dict
databricks_lakewatch_settings_config_from_dict = DatabricksLakewatchSettingsConfig.from_dict(databricks_lakewatch_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


