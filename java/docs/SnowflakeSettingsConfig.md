

# SnowflakeSettingsConfig

Snowflake Input Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | **String** | The unique identifier for your Snowflake account, typically in the form of &#39;organization-account_name&#39;. |  [optional] |
|**authType** | **String** | AuthType specifies the authentication method to use when connecting to Snowflake. Supported values are: - Password: Uses username and password authentication - Private Key: Uses key pair authentication with private/public key pair |  [optional] |
|**cron** | **String** | Cron expression for scheduling the input |  [optional] |
|**role** | **String** | The name of the Role your service account was granted which can access your resources. |  [optional] |
|**user** | **String** | User specifies the username for authentication to Snowflake. |  [optional] |



