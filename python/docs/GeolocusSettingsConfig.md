# GeolocusSettingsConfig

Geolocus settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | DestinationPath is the path where Geolocus results will be added to each record | [optional] 
**ip_address_path** | **str** | IPAddressPath is the path to a field containing an IP address to look up | [optional] 
**no_match_response** | **str** | NoMatchResponse is the value to add when no match is found | [optional] 

## Example

```python
from monad.models.geolocus_settings_config import GeolocusSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GeolocusSettingsConfig from a JSON string
geolocus_settings_config_instance = GeolocusSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(GeolocusSettingsConfig.to_json())

# convert the object into a dict
geolocus_settings_config_dict = geolocus_settings_config_instance.to_dict()
# create an instance of GeolocusSettingsConfig from a dict
geolocus_settings_config_from_dict = GeolocusSettingsConfig.from_dict(geolocus_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


