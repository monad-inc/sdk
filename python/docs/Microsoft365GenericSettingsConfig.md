# Microsoft365GenericSettingsConfig

Microsoft 365 settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill_start_time** | **str** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**tenant_id** | **str** | The Azure Entra ID tenant (directory) ID | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Example

```python
from monad.models.microsoft365_generic_settings_config import Microsoft365GenericSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of Microsoft365GenericSettingsConfig from a JSON string
microsoft365_generic_settings_config_instance = Microsoft365GenericSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(Microsoft365GenericSettingsConfig.to_json())

# convert the object into a dict
microsoft365_generic_settings_config_dict = microsoft365_generic_settings_config_instance.to_dict()
# create an instance of Microsoft365GenericSettingsConfig from a dict
microsoft365_generic_settings_config_from_dict = Microsoft365GenericSettingsConfig.from_dict(microsoft365_generic_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


