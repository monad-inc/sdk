# AxiomSecretsConfig

Axiom Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.axiom_secrets_config import AxiomSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AxiomSecretsConfig from a JSON string
axiom_secrets_config_instance = AxiomSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AxiomSecretsConfig.to_json())

# convert the object into a dict
axiom_secrets_config_dict = axiom_secrets_config_instance.to_dict()
# create an instance of AxiomSecretsConfig from a dict
axiom_secrets_config_from_dict = AxiomSecretsConfig.from_dict(axiom_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


