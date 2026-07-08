# PostgresqlSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.postgresql_secrets_config import PostgresqlSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PostgresqlSecretsConfig from a JSON string
postgresql_secrets_config_instance = PostgresqlSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PostgresqlSecretsConfig.to_json())

# convert the object into a dict
postgresql_secrets_config_dict = postgresql_secrets_config_instance.to_dict()
# create an instance of PostgresqlSecretsConfig from a dict
postgresql_secrets_config_from_dict = PostgresqlSecretsConfig.from_dict(postgresql_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


