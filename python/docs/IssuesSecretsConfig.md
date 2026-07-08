# IssuesSecretsConfig

Wiz Issues secrets configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | [**ModelsSecret**](ModelsSecret.md) |  | 
**client_secret** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.issues_secrets_config import IssuesSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesSecretsConfig from a JSON string
issues_secrets_config_instance = IssuesSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(IssuesSecretsConfig.to_json())

# convert the object into a dict
issues_secrets_config_dict = issues_secrets_config_instance.to_dict()
# create an instance of IssuesSecretsConfig from a dict
issues_secrets_config_from_dict = IssuesSecretsConfig.from_dict(issues_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


