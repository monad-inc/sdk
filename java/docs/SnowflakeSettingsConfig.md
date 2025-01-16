

# SnowflakeSettingsConfig

Snowflake Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;account_name.cloud_provider&#39; |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  [optional] |
|**stage** | **String** | The name of the Snowflake stage where the data will be copied to. Monad create or replace the stage. |  [optional] |
|**table** | **String** | The name of the table in Snowflake where the data will be written |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |



