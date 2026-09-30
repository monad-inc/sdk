# EncryptAESVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key** | [**ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Example

```python
from monad.models.encrypt_aes_variant import EncryptAESVariant

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptAESVariant from a JSON string
encrypt_aes_variant_instance = EncryptAESVariant.from_json(json)
# print the JSON string representation of the object
print(EncryptAESVariant.to_json())

# convert the object into a dict
encrypt_aes_variant_dict = encrypt_aes_variant_instance.to_dict()
# create an instance of EncryptAESVariant from a dict
encrypt_aes_variant_from_dict = EncryptAESVariant.from_dict(encrypt_aes_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


