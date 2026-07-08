# DatabricksDeltaTableSecretsConfig

Databricks Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.databricks_delta_table_secrets_config import DatabricksDeltaTableSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksDeltaTableSecretsConfig from a JSON string
databricks_delta_table_secrets_config_instance = DatabricksDeltaTableSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksDeltaTableSecretsConfig.to_json())

# convert the object into a dict
databricks_delta_table_secrets_config_dict = databricks_delta_table_secrets_config_instance.to_dict()
# create an instance of DatabricksDeltaTableSecretsConfig from a dict
databricks_delta_table_secrets_config_from_dict = DatabricksDeltaTableSecretsConfig.from_dict(databricks_delta_table_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


