

# RedshiftAuditLogsSettingsConfig

Amazon Redshift audit logs settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**backfillStartTime** | **String** | Date to start fetching data from. If not specified, a full sync of data up to now is performed on the first sync; subsequent syncs are incremental. |  [optional] |
|**bucket** | **String** | Name of the S3 bucket that receives Redshift audit logs. |  |
|**logType** | [**LogTypeEnum**](#LogTypeEnum) | Which Redshift audit log to ingest. Must be one of the supported log types (connectionlog, userlog). |  |
|**prefix** | **String** | Prefix of the audit log keys, up to (but not including) the date partition — e.g. \&quot;AWSLogs/123456789012/redshift/us-east-1\&quot;. If you configured a custom S3 key prefix for audit logging, include it here. |  [optional] |
|**region** | **String** | AWS Region of your bucket. |  [optional] |
|**roleArn** | **String** | Role ARN to assume when reading from S3. |  [optional] |



## Enum: LogTypeEnum

| Name | Value |
|---- | -----|
| CONNECTIONLOG | &quot;connectionlog&quot; |
| USERLOG | &quot;userlog&quot; |



