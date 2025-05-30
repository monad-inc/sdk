# CommunityEditionSecretsConfig

GreyNoise Community Edition secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.community_edition_secrets_config import CommunityEditionSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityEditionSecretsConfig from a JSON string
community_edition_secrets_config_instance = CommunityEditionSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CommunityEditionSecretsConfig.to_json())

# convert the object into a dict
community_edition_secrets_config_dict = community_edition_secrets_config_instance.to_dict()
# create an instance of CommunityEditionSecretsConfig from a dict
community_edition_secrets_config_from_dict = CommunityEditionSecretsConfig.from_dict(community_edition_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


