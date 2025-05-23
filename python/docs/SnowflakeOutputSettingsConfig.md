# SnowflakeOutputSettingsConfig

Snowflake Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**auth_type** | **str** |  | [optional] 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**case_insensitivity** | **bool** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**stage** | **str** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. | [optional] 
**table** | **str** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist Monad will create the table. | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 

## Example

```python
from monad.models.snowflake_output_settings_config import SnowflakeOutputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeOutputSettingsConfig from a JSON string
snowflake_output_settings_config_instance = SnowflakeOutputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeOutputSettingsConfig.to_json())

# convert the object into a dict
snowflake_output_settings_config_dict = snowflake_output_settings_config_instance.to_dict()
# create an instance of SnowflakeOutputSettingsConfig from a dict
snowflake_output_settings_config_from_dict = SnowflakeOutputSettingsConfig.from_dict(snowflake_output_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


