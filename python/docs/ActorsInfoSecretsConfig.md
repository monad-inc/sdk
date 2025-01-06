# ActorsInfoSecretsConfig

CrowdStrike EDR actors info secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.actors_info_secrets_config import ActorsInfoSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActorsInfoSecretsConfig from a JSON string
actors_info_secrets_config_instance = ActorsInfoSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(ActorsInfoSecretsConfig.to_json())

# convert the object into a dict
actors_info_secrets_config_dict = actors_info_secrets_config_instance.to_dict()
# create an instance of ActorsInfoSecretsConfig from a dict
actors_info_secrets_config_from_dict = ActorsInfoSecretsConfig.from_dict(actors_info_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


