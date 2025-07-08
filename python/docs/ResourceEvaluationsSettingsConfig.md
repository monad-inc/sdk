# ResourceEvaluationsSettingsConfig

AWS Resource Evaluations settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*/15 * * * *&#x60; - Every 15 minutes | [optional] 
**evaluation_context_identifier** | **str** | Filters proactive resource evaluations for a given infrastructure deployment. | [optional] 
**region** | **str** | The Region that you would receieve findings for | [optional] 
**role_arn** | **str** | The ARN of the role to assume to access the bucket | [optional] 

## Example

```python
from monad.models.resource_evaluations_settings_config import ResourceEvaluationsSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceEvaluationsSettingsConfig from a JSON string
resource_evaluations_settings_config_instance = ResourceEvaluationsSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(ResourceEvaluationsSettingsConfig.to_json())

# convert the object into a dict
resource_evaluations_settings_config_dict = resource_evaluations_settings_config_instance.to_dict()
# create an instance of ResourceEvaluationsSettingsConfig from a dict
resource_evaluations_settings_config_from_dict = ResourceEvaluationsSettingsConfig.from_dict(resource_evaluations_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


