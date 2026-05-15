# DatabricksSecretsConfig

Databricks Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.databricks_secrets_config import DatabricksSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksSecretsConfig from a JSON string
databricks_secrets_config_instance = DatabricksSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(DatabricksSecretsConfig.to_json())

# convert the object into a dict
databricks_secrets_config_dict = databricks_secrets_config_instance.to_dict()
# create an instance of DatabricksSecretsConfig from a dict
databricks_secrets_config_from_dict = DatabricksSecretsConfig.from_dict(databricks_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


