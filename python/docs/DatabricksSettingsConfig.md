# DatabricksSettingsConfig

Databricks Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**catalog** | **str** | The Unity Catalog name | [optional] 
**http_path** | **str** | The SQL warehouse HTTP path from connection details (e.g. /sql/1.0/warehouses/abc123) | [optional] 
**var_schema** | **str** | The target schema within the catalog | [optional] 
**server_hostname** | **str** | The Databricks workspace hostname (e.g. adb-1234567890.azuredatabricks.net) | [optional] 
**table** | **str** | The target Delta table name. If the table doesn&#39;t exist, Monad will create it. | [optional] 
**volume** | **str** | The Unity Catalog Volume used for staging JSONL files before COPY INTO | [optional] 

## Example

```python
from monad.models.databricks_settings_config import DatabricksSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksSettingsConfig from a JSON string
databricks_settings_config_instance = DatabricksSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksSettingsConfig.to_json())

# convert the object into a dict
databricks_settings_config_dict = databricks_settings_config_instance.to_dict()
# create an instance of DatabricksSettingsConfig from a dict
databricks_settings_config_from_dict = DatabricksSettingsConfig.from_dict(databricks_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


