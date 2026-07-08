# S3SecretsConfig

S3 Output Secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.s3_secrets_config import S3SecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of S3SecretsConfig from a JSON string
s3_secrets_config_instance = S3SecretsConfig.from_json(json)
# print the JSON string representation of the object
print(S3SecretsConfig.to_json())

# convert the object into a dict
s3_secrets_config_dict = s3_secrets_config_instance.to_dict()
# create an instance of S3SecretsConfig from a dict
s3_secrets_config_from_dict = S3SecretsConfig.from_dict(s3_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


