

# SnowflakeInputSettingsConfig

Snowflake Input Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  |
|**authType** | [**AuthTypeEnum**](#AuthTypeEnum) | Authentication type: \&quot;password\&quot; or \&quot;private key\&quot; |  |
|**cron** | **String** | Cron string for scheduling the ingest of your input |  |
|**database** | **String** | The name of the Snowflake database to connect to and perform operations on |  |
|**query** | **String** | Optional custom query to use instead of table (must include timestamp_column) |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  |
|**schema** | **String** | The schema within the Snowflake database where the target table resides. |  |
|**table** | **String** | The name of the table in Snowflake to query data from. |  [optional] |
|**timestampColumn** | **String** | The column containing timestamp values used for incremental loading |  |
|**user** | **String** | The username of the Snowflake account used to establish the connection. |  |
|**warehouse** | **String** | The Snowflake virtual warehouse to use for executing queries and processing data. |  |



## Enum: AuthTypeEnum

| Name | Value |
|---- | -----|
| PASSWORD | &quot;password&quot; |
| PRIVATE_KEY | &quot;private key&quot; |



