# PubsubSettingsConfig

Salesforce Pubsub settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_url** | **str** | Domain URL for the Salesforce instance | [optional] 
**organization_id** | **str** | Organization ID for the Salesforce instance | [optional] 
**topic** | **str** | Pub/Sub topic to subscribe to | [optional] 

## Example

```python
from monad.models.pubsub_settings_config import PubsubSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PubsubSettingsConfig from a JSON string
pubsub_settings_config_instance = PubsubSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PubsubSettingsConfig.to_json())

# convert the object into a dict
pubsub_settings_config_dict = pubsub_settings_config_instance.to_dict()
# create an instance of PubsubSettingsConfig from a dict
pubsub_settings_config_from_dict = PubsubSettingsConfig.from_dict(pubsub_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


