# SnowflakeInputSecretsConfig

Snowflake Input Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.snowflake_input_secrets_config import SnowflakeInputSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeInputSecretsConfig from a JSON string
snowflake_input_secrets_config_instance = SnowflakeInputSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeInputSecretsConfig.to_json())

# convert the object into a dict
snowflake_input_secrets_config_dict = snowflake_input_secrets_config_instance.to_dict()
# create an instance of SnowflakeInputSecretsConfig from a dict
snowflake_input_secrets_config_from_dict = SnowflakeInputSecretsConfig.from_dict(snowflake_input_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


