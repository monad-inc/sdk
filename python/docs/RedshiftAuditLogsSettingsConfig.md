# RedshiftAuditLogsSettingsConfig

Amazon Redshift audit logs settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of data up to now is performed on the first sync; subsequent syncs are incremental. | [optional] 
**bucket** | **str** | Name of the S3 bucket that receives Redshift audit logs. | 
**log_type** | **str** | Which Redshift audit log to ingest. Must be one of the supported log types (connectionlog, userlog). | 
**prefix** | **str** | Prefix of the audit log keys, up to (but not including) the date partition — e.g. \&quot;AWSLogs/123456789012/redshift/us-east-1\&quot;. If you configured a custom S3 key prefix for audit logging, include it here. | [optional] 
**region** | **str** | AWS Region of your bucket. | [optional] 
**role_arn** | **str** | Role ARN to assume when reading from S3. | [optional] 

## Example

```python
from monad.models.redshift_audit_logs_settings_config import RedshiftAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RedshiftAuditLogsSettingsConfig from a JSON string
redshift_audit_logs_settings_config_instance = RedshiftAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(RedshiftAuditLogsSettingsConfig.to_json())

# convert the object into a dict
redshift_audit_logs_settings_config_dict = redshift_audit_logs_settings_config_instance.to_dict()
# create an instance of RedshiftAuditLogsSettingsConfig from a dict
redshift_audit_logs_settings_config_from_dict = RedshiftAuditLogsSettingsConfig.from_dict(redshift_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


