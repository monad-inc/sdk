# SnowflakeOutputSecretsConfig

Snowflake Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.snowflake_output_secrets_config import SnowflakeOutputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeOutputSecretsConfig from a JSON string
snowflake_output_secrets_config_instance = SnowflakeOutputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeOutputSecretsConfig.to_json())

# convert the object into a dict
snowflake_output_secrets_config_dict = snowflake_output_secrets_config_instance.to_dict()
# create an instance of SnowflakeOutputSecretsConfig from a dict
snowflake_output_secrets_config_from_dict = SnowflakeOutputSecretsConfig.from_dict(snowflake_output_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


