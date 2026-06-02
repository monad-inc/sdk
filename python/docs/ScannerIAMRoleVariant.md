# ScannerIAMRoleVariant

IAM role configuration (required when type is iam_role).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_arn** | **str** | The ARN of the IAM role to assume (e.g. arn:aws:iam::123456789012:role/MonadRole). | 

## Example

```python
from monad.models.scanner_iam_role_variant import ScannerIAMRoleVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerIAMRoleVariant from a JSON string
scanner_iam_role_variant_instance = ScannerIAMRoleVariant.from_json(json)
# print the JSON string representation of the object
print(ScannerIAMRoleVariant.to_json())

# convert the object into a dict
scanner_iam_role_variant_dict = scanner_iam_role_variant_instance.to_dict()
# create an instance of ScannerIAMRoleVariant from a dict
scanner_iam_role_variant_from_dict = ScannerIAMRoleVariant.from_dict(scanner_iam_role_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


