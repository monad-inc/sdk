# CloudConfigurationFindingsSecretsConfig

Wiz cloud configuration findings secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID for the Wiz API. This is required to authenticate requests. | [optional] 
**client_secret** | **str** | Client Secret for the Wiz API. This is required to authenticate requests. | [optional] 

## Example

```python
from monad.models.cloud_configuration_findings_secrets_config import CloudConfigurationFindingsSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudConfigurationFindingsSecretsConfig from a JSON string
cloud_configuration_findings_secrets_config_instance = CloudConfigurationFindingsSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(CloudConfigurationFindingsSecretsConfig.to_json())

# convert the object into a dict
cloud_configuration_findings_secrets_config_dict = cloud_configuration_findings_secrets_config_instance.to_dict()
# create an instance of CloudConfigurationFindingsSecretsConfig from a dict
cloud_configuration_findings_secrets_config_from_dict = CloudConfigurationFindingsSecretsConfig.from_dict(cloud_configuration_findings_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


