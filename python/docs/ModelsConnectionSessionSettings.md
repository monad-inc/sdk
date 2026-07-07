# ModelsConnectionSessionSettings

SessionSettings controls the session length for logins through this connection. Optional; nil preserves the existing value, non-nil overwrites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_timeout** | **int** |  | [optional] 

## Example

```python
from monad.models.models_connection_session_settings import ModelsConnectionSessionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsConnectionSessionSettings from a JSON string
models_connection_session_settings_instance = ModelsConnectionSessionSettings.from_json(json)
# print the JSON string representation of the object
print(ModelsConnectionSessionSettings.to_json())

# convert the object into a dict
models_connection_session_settings_dict = models_connection_session_settings_instance.to_dict()
# create an instance of ModelsConnectionSessionSettings from a dict
models_connection_session_settings_from_dict = ModelsConnectionSessionSettings.from_dict(models_connection_session_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


