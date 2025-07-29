# EntraIdSettingsConfig

Microsoft Entra ID settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The Category of logs to query | [optional] 
**tenant_id** | **str** | The tenant ID of the Azure AD application | [optional] 
**use_synthetic_data** | **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**workspace_id** | **str** | The workspace ID of the Log Analytics workspace | [optional] 

## Example

```python
from monad.models.entra_id_settings_config import EntraIdSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EntraIdSettingsConfig from a JSON string
entra_id_settings_config_instance = EntraIdSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(EntraIdSettingsConfig.to_json())

# convert the object into a dict
entra_id_settings_config_dict = entra_id_settings_config_instance.to_dict()
# create an instance of EntraIdSettingsConfig from a dict
entra_id_settings_config_from_dict = EntraIdSettingsConfig.from_dict(entra_id_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


