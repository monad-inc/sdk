# BoxEventsSecretsConfig

Box Events secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client Secret for the Box API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client ID for the Box API. This is required to authenticate requests. | [optional] 
**enterprise_id** | **str** | Client Secret for the Box API. This is required to authenticate requests. | [optional] 

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


