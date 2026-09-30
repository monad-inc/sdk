# EncryptAlgorithmConfig

Encryption algorithm configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aes** | [**EncryptAESVariant**](EncryptAESVariant.md) |  | [optional] 
**age** | [**EncryptAgeVariant**](EncryptAgeVariant.md) |  | [optional] 
**type** | **str** | \&quot;aes\&quot; or \&quot;age\&quot; | [optional] 

## Example

```python
from monad.models.encrypt_algorithm_config import EncryptAlgorithmConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptAlgorithmConfig from a JSON string
encrypt_algorithm_config_instance = EncryptAlgorithmConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptAlgorithmConfig.to_json())

# convert the object into a dict
encrypt_algorithm_config_dict = encrypt_algorithm_config_instance.to_dict()
# create an instance of EncryptAlgorithmConfig from a dict
encrypt_algorithm_config_from_dict = EncryptAlgorithmConfig.from_dict(encrypt_algorithm_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


