# SnowflakeSettingsConfig

Snowflake Input Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**auth_type** | **str** | AuthType specifies the authentication method to use when connecting to Snowflake. Supported values are: - Password: Uses username and password authentication - Private Key: Uses key pair authentication with private/public key pair | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**user** | **str** | User specifies the username for authentication to Snowflake. | [optional] 

## Example

```python
from monad.models.snowflake_settings_config import SnowflakeSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeSettingsConfig from a JSON string
snowflake_settings_config_instance = SnowflakeSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeSettingsConfig.to_json())

# convert the object into a dict
snowflake_settings_config_dict = snowflake_settings_config_instance.to_dict()
# create an instance of SnowflakeSettingsConfig from a dict
snowflake_settings_config_from_dict = SnowflakeSettingsConfig.from_dict(snowflake_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


