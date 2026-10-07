

# SnowflakeOutputSettingsConfig

Snowflake Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**authType** | **String** |  |  [optional] |
|**batchConfig** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  |  [optional] |
|**caseInsensitivity** | **Boolean** | Treat column names as case-insensitive (convert to uppercase) to match Snowflake&#39;s default behavior. |  [optional] |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  [optional] |
|**stage** | **String** | The name of the Snowflake stage where the data will be copied to. The connector creates or replaces the stage. |  [optional] |
|**table** | **String** | The name of the table in Snowflake where the data will be written. If the table doesn&#39;t exist, the connector will create it. |  [optional] |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  [optional] |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  [optional] |



