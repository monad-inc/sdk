# SnowflakeSettingsConfig

Snowflake Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;account_name.cloud_provider&#39; | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**stage** | **str** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**table** | **str** | The name of the table in Snowflake where the data will be written | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 

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


