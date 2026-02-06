# GithubComMonadIncAlertsModelsAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | Timestamp of original alert creation | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**resource** | [**GithubComMonadIncAlertsModelsResourceReference**](GithubComMonadIncAlertsModelsResourceReference.md) |  | [optional] 
**rule_id** | **str** |  | [optional] 
**rule_type** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**status** | [**GithubComMonadIncAlertsModelsAlertStatus**](GithubComMonadIncAlertsModelsAlertStatus.md) |  | [optional] 

## Example

```python
from monad.models.github_com_monad_inc_alerts_models_alert import GithubComMonadIncAlertsModelsAlert

# TODO update the JSON string below
json = "{}"
# create an instance of GithubComMonadIncAlertsModelsAlert from a JSON string
github_com_monad_inc_alerts_models_alert_instance = GithubComMonadIncAlertsModelsAlert.from_json(json)
# print the JSON string representation of the object
print(GithubComMonadIncAlertsModelsAlert.to_json())

# convert the object into a dict
github_com_monad_inc_alerts_models_alert_dict = github_com_monad_inc_alerts_models_alert_instance.to_dict()
# create an instance of GithubComMonadIncAlertsModelsAlert from a dict
github_com_monad_inc_alerts_models_alert_from_dict = GithubComMonadIncAlertsModelsAlert.from_dict(github_com_monad_inc_alerts_models_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


