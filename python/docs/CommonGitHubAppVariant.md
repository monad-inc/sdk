# CommonGitHubAppVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | 
**installation_id** | **str** |  | 
**private_key** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.common_git_hub_app_variant import CommonGitHubAppVariant

# TODO update the JSON string below
json = "{}"
# create an instance of CommonGitHubAppVariant from a JSON string
common_git_hub_app_variant_instance = CommonGitHubAppVariant.from_json(json)
# print the JSON string representation of the object
print(CommonGitHubAppVariant.to_json())

# convert the object into a dict
common_git_hub_app_variant_dict = common_git_hub_app_variant_instance.to_dict()
# create an instance of CommonGitHubAppVariant from a dict
common_git_hub_app_variant_from_dict = CommonGitHubAppVariant.from_dict(common_git_hub_app_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


