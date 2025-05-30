# CommunityEditionSettingsConfig

GreyNoise Community Edition settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | DestinationPath is the path where the GreyNoise data will be stored | [optional] 
**error_on_rate_limit** | **bool** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) | [optional] 
**ip_field_path** | **str** | IPFieldPath is the path to the IP address field in the record | [optional] 
**no_match_response** | **str** | NoMatchResponse is the value to add when no match is found | [optional] 
**rate_limit_response** | **str** | RateLimitResponse is the value to add when rate limited | [optional] 

## Example

```python
from monad.models.community_edition_settings_config import CommunityEditionSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityEditionSettingsConfig from a JSON string
community_edition_settings_config_instance = CommunityEditionSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CommunityEditionSettingsConfig.to_json())

# convert the object into a dict
community_edition_settings_config_dict = community_edition_settings_config_instance.to_dict()
# create an instance of CommunityEditionSettingsConfig from a dict
community_edition_settings_config_from_dict = CommunityEditionSettingsConfig.from_dict(community_edition_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


