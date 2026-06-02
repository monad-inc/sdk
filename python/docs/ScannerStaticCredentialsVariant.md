# ScannerStaticCredentialsVariant

Static credential configuration (required when type is static_credentials).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**ModelsSecret**](ModelsSecret.md) |  | 
**secret_key** | [**ModelsSecret**](ModelsSecret.md) |  | 

## Example

```python
from monad.models.scanner_static_credentials_variant import ScannerStaticCredentialsVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerStaticCredentialsVariant from a JSON string
scanner_static_credentials_variant_instance = ScannerStaticCredentialsVariant.from_json(json)
# print the JSON string representation of the object
print(ScannerStaticCredentialsVariant.to_json())

# convert the object into a dict
scanner_static_credentials_variant_dict = scanner_static_credentials_variant_instance.to_dict()
# create an instance of ScannerStaticCredentialsVariant from a dict
scanner_static_credentials_variant_from_dict = ScannerStaticCredentialsVariant.from_dict(scanner_static_credentials_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


