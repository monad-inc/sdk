# GithubComMonadIncAlertsModelsResourceReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_id** | **str** | e.g., pipeline ID if resource is a node | [optional] 
**parent_type** | **str** | For hierarchical resources | [optional] 
**resource_id** | **str** |  | [optional] 
**resource_type** | **str** | \&quot;pipeline\&quot;, \&quot;node\&quot;, \&quot;organization\&quot; | [optional] 

## Example

```python
from monad.models.github_com_monad_inc_alerts_models_resource_reference import GithubComMonadIncAlertsModelsResourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of GithubComMonadIncAlertsModelsResourceReference from a JSON string
github_com_monad_inc_alerts_models_resource_reference_instance = GithubComMonadIncAlertsModelsResourceReference.from_json(json)
# print the JSON string representation of the object
print(GithubComMonadIncAlertsModelsResourceReference.to_json())

# convert the object into a dict
github_com_monad_inc_alerts_models_resource_reference_dict = github_com_monad_inc_alerts_models_resource_reference_instance.to_dict()
# create an instance of GithubComMonadIncAlertsModelsResourceReference from a dict
github_com_monad_inc_alerts_models_resource_reference_from_dict = GithubComMonadIncAlertsModelsResourceReference.from_dict(github_com_monad_inc_alerts_models_resource_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


