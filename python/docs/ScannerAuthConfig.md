# ScannerAuthConfig

Authentication used to write to the bucket (IAM role or static credentials).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_role** | [**ScannerIAMRoleVariant**](ScannerIAMRoleVariant.md) |  | [optional] 
**static_credentials** | [**ScannerStaticCredentialsVariant**](ScannerStaticCredentialsVariant.md) |  | [optional] 
**type** | **str** | Authentication type: iam_role or static_credentials. | 

## Example

```python
from monad.models.scanner_auth_config import ScannerAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerAuthConfig from a JSON string
scanner_auth_config_instance = ScannerAuthConfig.from_json(json)
# print the JSON string representation of the object
print(ScannerAuthConfig.to_json())

# convert the object into a dict
scanner_auth_config_dict = scanner_auth_config_instance.to_dict()
# create an instance of ScannerAuthConfig from a dict
scanner_auth_config_from_dict = ScannerAuthConfig.from_dict(scanner_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


