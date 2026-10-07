# CommonAuthConfig

AuthConfig downloads logs; needs actions:read on the scoped repos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_app** | [**CommonGitHubAppVariant**](CommonGitHubAppVariant.md) |  | [optional] 
**personal_access_token** | [**CommonPersonalAccessTokenVariant**](CommonPersonalAccessTokenVariant.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from monad.models.common_auth_config import CommonAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CommonAuthConfig from a JSON string
common_auth_config_instance = CommonAuthConfig.from_json(json)
# print the JSON string representation of the object
print(CommonAuthConfig.to_json())

# convert the object into a dict
common_auth_config_dict = common_auth_config_instance.to_dict()
# create an instance of CommonAuthConfig from a dict
common_auth_config_from_dict = CommonAuthConfig.from_dict(common_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


