# ModelsQuota


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | [optional] 
**billing_account_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**current_usage** | **int** |  | [optional] 
**current_usage_updated_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**limit_amount** | **int** |  | [optional] 
**limit_type** | **str** |  | [optional] 
**limit_unit** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**timeframe** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from monad.models.models_quota import ModelsQuota

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsQuota from a JSON string
models_quota_instance = ModelsQuota.from_json(json)
# print the JSON string representation of the object
print(ModelsQuota.to_json())

# convert the object into a dict
models_quota_dict = models_quota_instance.to_dict()
# create an instance of ModelsQuota from a dict
models_quota_from_dict = ModelsQuota.from_dict(models_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


