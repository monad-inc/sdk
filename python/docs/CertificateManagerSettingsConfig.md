# CertificateManagerSettingsConfig

AWS Certificate Manager settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_statuses** | **List[str]** | Filter the certificate list by status value. | [optional] 
**cron** | **str** | Cron expression for scheduling the input | [optional] 
**extended_key_usage** | **List[str]** | The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key is used. This is in addition or in place of Key Usage. | [optional] 
**key_types** | **List[str]** | Specify one or more algorithms that is used to generate key pairs.\\n\\n | [optional] 
**key_usage** | **List[str]** | The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate. | [optional] 
**managed_by** | **str** | Identifies the AWS service that manages the certificate issued by ACM. | [optional] 
**regions** | **List[str]** |  | [optional] 
**role_arn** | **str** | The ARN of the role to assume to access the bucket | [optional] 

## Example

```python
from monad.models.certificate_manager_settings_config import CertificateManagerSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateManagerSettingsConfig from a JSON string
certificate_manager_settings_config_instance = CertificateManagerSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(CertificateManagerSettingsConfig.to_json())

# convert the object into a dict
certificate_manager_settings_config_dict = certificate_manager_settings_config_instance.to_dict()
# create an instance of CertificateManagerSettingsConfig from a dict
certificate_manager_settings_config_from_dict = CertificateManagerSettingsConfig.from_dict(certificate_manager_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


