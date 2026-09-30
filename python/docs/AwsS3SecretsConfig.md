# AwsS3SecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.aws_s3_secrets_config import AwsS3SecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsS3SecretsConfig from a JSON string
aws_s3_secrets_config_instance = AwsS3SecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsS3SecretsConfig.to_json())

# convert the object into a dict
aws_s3_secrets_config_dict = aws_s3_secrets_config_instance.to_dict()
# create an instance of AwsS3SecretsConfig from a dict
aws_s3_secrets_config_from_dict = AwsS3SecretsConfig.from_dict(aws_s3_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


