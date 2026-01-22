# PolymerSecretsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.polymer_secrets_config import PolymerSecretsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PolymerSecretsConfig from a JSON string
polymer_secrets_config_instance = PolymerSecretsConfig.from_json(json)
# print the JSON string representation of the object
print(PolymerSecretsConfig.to_json())

# convert the object into a dict
polymer_secrets_config_dict = polymer_secrets_config_instance.to_dict()
# create an instance of PolymerSecretsConfig from a dict
polymer_secrets_config_from_dict = PolymerSecretsConfig.from_dict(polymer_secrets_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


