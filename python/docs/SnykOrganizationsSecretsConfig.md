# SnykOrganizationsSecretsConfig

Snyk organizations secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.snyk_organizations_secrets_config import SnykOrganizationsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SnykOrganizationsSecretsConfig from a JSON string
snyk_organizations_secrets_config_instance = SnykOrganizationsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SnykOrganizationsSecretsConfig.to_json())

# convert the object into a dict
snyk_organizations_secrets_config_dict = snyk_organizations_secrets_config_instance.to_dict()
# create an instance of SnykOrganizationsSecretsConfig from a dict
snyk_organizations_secrets_config_from_dict = SnykOrganizationsSecretsConfig.from_dict(snyk_organizations_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


