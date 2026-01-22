# BuildkiteAuditLogsSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Generate synthetic demo data instead of connecting to the real data source. UseSyntheticData bool &#x60;json:\&quot;use_synthetic_data\&quot;&#x60; Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**org_slug** | **str** | The URL slug of your Buildkite organizations | [optional] 

## Example

```python
from monad.models.buildkite_audit_logs_settings_config import BuildkiteAuditLogsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BuildkiteAuditLogsSettingsConfig from a JSON string
buildkite_audit_logs_settings_config_instance = BuildkiteAuditLogsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(BuildkiteAuditLogsSettingsConfig.to_json())

# convert the object into a dict
buildkite_audit_logs_settings_config_dict = buildkite_audit_logs_settings_config_instance.to_dict()
# create an instance of BuildkiteAuditLogsSettingsConfig from a dict
buildkite_audit_logs_settings_config_from_dict = BuildkiteAuditLogsSettingsConfig.from_dict(buildkite_audit_logs_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


