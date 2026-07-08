# DatabricksLakehouseSettingsConfig

Databricks Lakehouse Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | 
**catalog** | **str** | The Unity Catalog name | 
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**var_schema** | **str** | The target schema within the catalog | 
**server_hostname** | **str** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | 
**write_mode** | [**DatabricksLakehouseWriteMode**](DatabricksLakehouseWriteMode.md) |  | 

## Example

```python
from monad.models.databricks_lakehouse_settings_config import DatabricksLakehouseSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksLakehouseSettingsConfig from a JSON string
databricks_lakehouse_settings_config_instance = DatabricksLakehouseSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksLakehouseSettingsConfig.to_json())

# convert the object into a dict
databricks_lakehouse_settings_config_dict = databricks_lakehouse_settings_config_instance.to_dict()
# create an instance of DatabricksLakehouseSettingsConfig from a dict
databricks_lakehouse_settings_config_from_dict = DatabricksLakehouseSettingsConfig.from_dict(databricks_lakehouse_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


