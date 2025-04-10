# OpensearchSettingsConfig

OpenSearch Output Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_mode** | **str** | The authentication mode (basic, aws_role) | [optional] 
**index** | **str** | The name of the OpenSearch index to use. | [optional] 
**insecure_skip_verify** | **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 
**region** | **str** | The AWS Region where the OpenSearch domain is located | [optional] 
**role_arn** | **str** | The AWS IAM Role ARN to assume (used for aws_role auth) | [optional] 
**url** | **str** | The URL of the OpenSearch instance (must start with https). | [optional] 
**username** | **str** | The username for authenticating with OpenSearch (used for basic auth). | [optional] 

## Example

```python
from monad.models.opensearch_settings_config import OpensearchSettingsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OpensearchSettingsConfig from a JSON string
opensearch_settings_config_instance = OpensearchSettingsConfig.from_json(json)
# print the JSON string representation of the object
print(OpensearchSettingsConfig.to_json())

# convert the object into a dict
opensearch_settings_config_dict = opensearch_settings_config_instance.to_dict()
# create an instance of OpensearchSettingsConfig from a dict
opensearch_settings_config_from_dict = OpensearchSettingsConfig.from_dict(opensearch_settings_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


