# BoxEventsSecretsConfig

Box Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**enterprise_id** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.box_events_secrets_config import BoxEventsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BoxEventsSecretsConfig from a JSON string
box_events_secrets_config_instance = BoxEventsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(BoxEventsSecretsConfig.to_json())

# convert the object into a dict
box_events_secrets_config_dict = box_events_secrets_config_instance.to_dict()
# create an instance of BoxEventsSecretsConfig from a dict
box_events_secrets_config_from_dict = BoxEventsSecretsConfig.from_dict(box_events_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


