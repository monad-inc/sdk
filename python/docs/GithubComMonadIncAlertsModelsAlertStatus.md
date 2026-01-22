# GithubComMonadIncAlertsModelsAlertStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearing_started_at** | **int** | When clearing began | [optional] 
**resolved_at** | **int** | Unix timestamp when resolved | [optional] 
**state** | **str** | FIRING or RESOLVED | [optional] 

## Example

```python
from monad.models.github_com_monad_inc_alerts_models_alert_status import GithubComMonadIncAlertsModelsAlertStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GithubComMonadIncAlertsModelsAlertStatus from a JSON string
github_com_monad_inc_alerts_models_alert_status_instance = GithubComMonadIncAlertsModelsAlertStatus.from_json(json)
# print the JSON string representation of the object
print(GithubComMonadIncAlertsModelsAlertStatus.to_json())

# convert the object into a dict
github_com_monad_inc_alerts_models_alert_status_dict = github_com_monad_inc_alerts_models_alert_status_instance.to_dict()
# create an instance of GithubComMonadIncAlertsModelsAlertStatus from a dict
github_com_monad_inc_alerts_models_alert_status_from_dict = GithubComMonadIncAlertsModelsAlertStatus.from_dict(github_com_monad_inc_alerts_models_alert_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


