# RunrevealSettingsConfig

RunReveal Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_config** | [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**bearer_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**webhook_id** | **str** | The RunReveal webhook ID. Only the ID — not the full URL shown in the RunReveal UI. | 

## Example

```python
from monad.models.runreveal_settings_config import RunrevealSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RunrevealSettingsConfig from a JSON string
runreveal_settings_config_instance = RunrevealSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(RunrevealSettingsConfig.to_json())

# convert the object into a dict
runreveal_settings_config_dict = runreveal_settings_config_instance.to_dict()
# create an instance of RunrevealSettingsConfig from a dict
runreveal_settings_config_from_dict = RunrevealSettingsConfig.from_dict(runreveal_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


