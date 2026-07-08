# EncryptArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | [**EncryptAlgorithmConfig**](EncryptAlgorithmConfig.md) |  | [optional] 
**key** | **str** | Key whose value will be encrypted | [optional] 

## Example

```python
from monad.models.encrypt_arguments_config import EncryptArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptArgumentsConfig from a JSON string
encrypt_arguments_config_instance = EncryptArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptArgumentsConfig.to_json())

# convert the object into a dict
encrypt_arguments_config_dict = encrypt_arguments_config_instance.to_dict()
# create an instance of EncryptArgumentsConfig from a dict
encrypt_arguments_config_from_dict = EncryptArgumentsConfig.from_dict(encrypt_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


