# SnowflakeSecretsConfig

Snowflake Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The Users password | [optional] 

## Example

```python
from monad.models.snowflake_secrets_config import SnowflakeSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeSecretsConfig from a JSON string
snowflake_secrets_config_instance = SnowflakeSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeSecretsConfig.to_json())

# convert the object into a dict
snowflake_secrets_config_dict = snowflake_secrets_config_instance.to_dict()
# create an instance of SnowflakeSecretsConfig from a dict
snowflake_secrets_config_from_dict = SnowflakeSecretsConfig.from_dict(snowflake_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


