# GithubComMonadIncCorePkgTypesModelsQuota


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ModelsQuotaAction**](ModelsQuotaAction.md) |  | [optional] 
**billing_account_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**current_usage** | **int** |  | [optional] 
**current_usage_updated_at** | **str** |  | [optional] 
**end_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**limit_amount** | **int** |  | [optional] 
**limit_type** | [**ModelsQuotaLimitType**](ModelsQuotaLimitType.md) |  | [optional] 
**limit_unit** | [**ModelsQuotaLimitUnit**](ModelsQuotaLimitUnit.md) |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**start_at** | **str** |  | [optional] 
**timeframe** | [**ModelsQuotaTimeframe**](ModelsQuotaTimeframe.md) |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.github_com_monad_inc_core_pkg_types_models_quota import GithubComMonadIncCorePkgTypesModelsQuota

# TODO update the JSON string below
json = "{}"
# create an instance of GithubComMonadIncCorePkgTypesModelsQuota from a JSON string
github_com_monad_inc_core_pkg_types_models_quota_instance = GithubComMonadIncCorePkgTypesModelsQuota.from_json(json)
# print the JSON string representation of the object
print(GithubComMonadIncCorePkgTypesModelsQuota.to_json())

# convert the object into a dict
github_com_monad_inc_core_pkg_types_models_quota_dict = github_com_monad_inc_core_pkg_types_models_quota_instance.to_dict()
# create an instance of GithubComMonadIncCorePkgTypesModelsQuota from a dict
github_com_monad_inc_core_pkg_types_models_quota_from_dict = GithubComMonadIncCorePkgTypesModelsQuota.from_dict(github_com_monad_inc_core_pkg_types_models_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


