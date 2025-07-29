# ModelsQuotaList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**quotas** | [**List[ModelsQuota]**](ModelsQuota.md) |  | [optional] 

## Example

```python
from monad.models.models_quota_list import ModelsQuotaList

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsQuotaList from a JSON string
models_quota_list_instance = ModelsQuotaList.from_json(json)
# print the JSON string representation of the object
print(ModelsQuotaList.to_json())

# convert the object into a dict
models_quota_list_dict = models_quota_list_instance.to_dict()
# create an instance of ModelsQuotaList from a dict
models_quota_list_from_dict = ModelsQuotaList.from_dict(models_quota_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


