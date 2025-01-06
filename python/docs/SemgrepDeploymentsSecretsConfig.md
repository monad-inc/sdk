# SemgrepDeploymentsSecretsConfig

Semgrep deployments secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | API Key for the Semgrep API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.semgrep_deployments_secrets_config import SemgrepDeploymentsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SemgrepDeploymentsSecretsConfig from a JSON string
semgrep_deployments_secrets_config_instance = SemgrepDeploymentsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(SemgrepDeploymentsSecretsConfig.to_json())

# convert the object into a dict
semgrep_deployments_secrets_config_dict = semgrep_deployments_secrets_config_instance.to_dict()
# create an instance of SemgrepDeploymentsSecretsConfig from a dict
semgrep_deployments_secrets_config_from_dict = SemgrepDeploymentsSecretsConfig.from_dict(semgrep_deployments_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


