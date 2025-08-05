# PantherSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.panther_secrets_config import PantherSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PantherSecretsConfig from a JSON string
panther_secrets_config_instance = PantherSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PantherSecretsConfig.to_json())

# convert the object into a dict
panther_secrets_config_dict = panther_secrets_config_instance.to_dict()
# create an instance of PantherSecretsConfig from a dict
panther_secrets_config_from_dict = PantherSecretsConfig.from_dict(panther_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


