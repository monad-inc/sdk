# AwsGuarddutySecretsConfig

Aws Guardduty secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.aws_guardduty_secrets_config import AwsGuarddutySecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AwsGuarddutySecretsConfig from a JSON string
aws_guardduty_secrets_config_instance = AwsGuarddutySecretsConfig.from_json(json)
# print the JSON string representation of the object
print(AwsGuarddutySecretsConfig.to_json())

# convert the object into a dict
aws_guardduty_secrets_config_dict = aws_guardduty_secrets_config_instance.to_dict()
# create an instance of AwsGuarddutySecretsConfig from a dict
aws_guardduty_secrets_config_from_dict = AwsGuarddutySecretsConfig.from_dict(aws_guardduty_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


