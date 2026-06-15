

# SnowflakeSnowpipeStreamingSettingsConfig

Snowflake Snowpipe Streaming Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | **String** | The unique identifier for your Snowflake account, e.g. &#39;orgname-account_name&#39;. |  |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**channelPrefix** | **String** | Optional prefix for the channel name. Channels are named \&quot;{prefix}_{instanceID}_{i}\&quot; where instanceID is a fresh random ID per connector instance. Defaults to \&quot;monad\&quot;. |  [optional] |
|**database** | **String** | The Snowflake database that contains the target pipe. |  |
|**pipe** | **String** | The name of the pre-existing STREAMING pipe (created with DATA_SOURCE(TYPE &#x3D;&gt; &#39;STREAMING&#39;)). |  |
|**privateKey** | [**ModelsSecret**](ModelsSecret.md) |  |  |
|**schema** | **String** | The schema within the database that contains the target pipe. |  |
|**user** | **String** | The username of the Snowflake account used to authenticate. The user&#39;s DEFAULT_ROLE must be set to a role with access to the pipe. |  |



