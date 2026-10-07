# NextGenSiemSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.next_gen_siem_secrets_config import NextGenSiemSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NextGenSiemSecretsConfig from a JSON string
next_gen_siem_secrets_config_instance = NextGenSiemSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(NextGenSiemSecretsConfig.to_json())

# convert the object into a dict
next_gen_siem_secrets_config_dict = next_gen_siem_secrets_config_instance.to_dict()
# create an instance of NextGenSiemSecretsConfig from a dict
next_gen_siem_secrets_config_from_dict = NextGenSiemSecretsConfig.from_dict(next_gen_siem_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


