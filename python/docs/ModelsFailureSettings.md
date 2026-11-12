# ModelsFailureSettings

FailureSettings configures dead lettering; nil retries failing records forever. omitempty leaves the ConfigHash unchanged for pipelines without it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ModelsDeadLetterAction**](ModelsDeadLetterAction.md) |  | [optional] 
**retry_for** | **str** | RetryFor is how long a record may keep failing at one node before it is dead-lettered, as a Go duration. Required. | [optional] 
**sink** | [**ModelsFailureSink**](ModelsFailureSink.md) |  | [optional] 

## Example

```python
from monad.models.models_failure_settings import ModelsFailureSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsFailureSettings from a JSON string
models_failure_settings_instance = ModelsFailureSettings.from_json(json)
# print the JSON string representation of the object
print(ModelsFailureSettings.to_json())

# convert the object into a dict
models_failure_settings_dict = models_failure_settings_instance.to_dict()
# create an instance of ModelsFailureSettings from a dict
models_failure_settings_from_dict = ModelsFailureSettings.from_dict(models_failure_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


