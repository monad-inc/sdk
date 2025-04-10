# SnowflakeInputSettingsConfig

Snowflake Input Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. | [optional] 
**auth_type** | **str** | Authentication type: \&quot;password\&quot; or \&quot;private key\&quot; | [optional] 
**cron** | **str** | Cron string for scheduling the ingest of your input | [optional] 
**database** | **str** | The name of the Snowflake database to connect to and perform operations on | [optional] 
**query** | **str** | Optional custom query to use instead of table (must include timestamp_column) | [optional] 
**role** | **str** | The name of the Role your service account was granted which can access your resources. | [optional] 
**var_schema** | **str** | The schema within the Snowflake database where the target table resides. | [optional] 
**table** | **str** | The name of the table in Snowflake to query data from. | [optional] 
**timestamp_column** | **str** | The column containing timestamp values used for incremental loading | [optional] 
**user** | **str** | The username of the Snowflake account used to establish the connection. | [optional] 
**warehouse** | **str** | The Snowflake virtual warehouse to use for executing queries and processing data. | [optional] 

## Example

```python
from monad.models.snowflake_input_settings_config import SnowflakeInputSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeInputSettingsConfig from a JSON string
snowflake_input_settings_config_instance = SnowflakeInputSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeInputSettingsConfig.to_json())

# convert the object into a dict
snowflake_input_settings_config_dict = snowflake_input_settings_config_instance.to_dict()
# create an instance of SnowflakeInputSettingsConfig from a dict
snowflake_input_settings_config_from_dict = SnowflakeInputSettingsConfig.from_dict(snowflake_input_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


