# PersonaSettingsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_limit** | [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 

## Example

```python
from monad.models.persona_settings_config import PersonaSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PersonaSettingsConfig from a JSON string
persona_settings_config_instance = PersonaSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(PersonaSettingsConfig.to_json())

# convert the object into a dict
persona_settings_config_dict = persona_settings_config_instance.to_dict()
# create an instance of PersonaSettingsConfig from a dict
persona_settings_config_from_dict = PersonaSettingsConfig.from_dict(persona_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


