# GoogleWorkspaceSettingsConfig

Google Workspace Activity settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** | Authentication type (service_account or oauth) | [optional] 
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of data from google workspace is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**email** | **str** | Email address to use for authenticating with Google Cloud (required for service_account auth). | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.google_workspace_settings_config import GoogleWorkspaceSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleWorkspaceSettingsConfig from a JSON string
google_workspace_settings_config_instance = GoogleWorkspaceSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleWorkspaceSettingsConfig.to_json())

# convert the object into a dict
google_workspace_settings_config_dict = google_workspace_settings_config_instance.to_dict()
# create an instance of GoogleWorkspaceSettingsConfig from a dict
google_workspace_settings_config_from_dict = GoogleWorkspaceSettingsConfig.from_dict(google_workspace_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


