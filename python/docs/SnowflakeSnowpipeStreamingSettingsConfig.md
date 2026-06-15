# SnowflakeSnowpipeStreamingSettingsConfig

Snowflake Snowpipe Streaming Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | The unique identifier for your Snowflake account, e.g. &#39;orgname-account_name&#39;. | 
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**channel_prefix** | **str** | Optional prefix for the channel name. Channels are named \&quot;{prefix}_{instanceID}_{i}\&quot; where instanceID is a fresh random ID per connector instance. Defaults to \&quot;monad\&quot;. | [optional] 
**database** | **str** | The Snowflake database that contains the target pipe. | 
**pipe** | **str** | The name of the pre-existing STREAMING pipe (created with DATA_SOURCE(TYPE &#x3D;&gt; &#39;STREAMING&#39;)). | 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**var_schema** | **str** | The schema within the database that contains the target pipe. | 
**user** | **str** | The username of the Snowflake account used to authenticate. The user&#39;s DEFAULT_ROLE must be set to a role with access to the pipe. | 

## Example

```python
from monad.models.snowflake_snowpipe_streaming_settings_config import SnowflakeSnowpipeStreamingSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnowflakeSnowpipeStreamingSettingsConfig from a JSON string
snowflake_snowpipe_streaming_settings_config_instance = SnowflakeSnowpipeStreamingSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(SnowflakeSnowpipeStreamingSettingsConfig.to_json())

# convert the object into a dict
snowflake_snowpipe_streaming_settings_config_dict = snowflake_snowpipe_streaming_settings_config_instance.to_dict()
# create an instance of SnowflakeSnowpipeStreamingSettingsConfig from a dict
snowflake_snowpipe_streaming_settings_config_from_dict = SnowflakeSnowpipeStreamingSettingsConfig.from_dict(snowflake_snowpipe_streaming_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


