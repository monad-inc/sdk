# CrowdstrikeFdrSecretsConfig

Crowdstrike Falcon Data Replicator secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**aws_secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.crowdstrike_fdr_secrets_config import CrowdstrikeFdrSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CrowdstrikeFdrSecretsConfig from a JSON string
crowdstrike_fdr_secrets_config_instance = CrowdstrikeFdrSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CrowdstrikeFdrSecretsConfig.to_json())

# convert the object into a dict
crowdstrike_fdr_secrets_config_dict = crowdstrike_fdr_secrets_config_instance.to_dict()
# create an instance of CrowdstrikeFdrSecretsConfig from a dict
crowdstrike_fdr_secrets_config_from_dict = CrowdstrikeFdrSecretsConfig.from_dict(crowdstrike_fdr_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


