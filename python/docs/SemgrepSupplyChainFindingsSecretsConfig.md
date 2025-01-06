# SemgrepSupplyChainFindingsSecretsConfig

Semgrep supply chain findings secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API Key for the Semgrep API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.semgrep_supply_chain_findings_secrets_config import SemgrepSupplyChainFindingsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepSupplyChainFindingsSecretsConfig from a JSON string
semgrep_supply_chain_findings_secrets_config_instance = SemgrepSupplyChainFindingsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepSupplyChainFindingsSecretsConfig.to_json())

# convert the object into a dict
semgrep_supply_chain_findings_secrets_config_dict = semgrep_supply_chain_findings_secrets_config_instance.to_dict()
# create an instance of SemgrepSupplyChainFindingsSecretsConfig from a dict
semgrep_supply_chain_findings_secrets_config_from_dict = SemgrepSupplyChainFindingsSecretsConfig.from_dict(semgrep_supply_chain_findings_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


