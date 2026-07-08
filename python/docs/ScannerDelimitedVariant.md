# ScannerDelimitedVariant

Delimited (CSV) output configuration (required when type is delimited).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | Single-character field delimiter (e.g. &#39;,&#39;). | 
**headers** | **List[str]** | Optional ordered list of column headers. | 

## Example

```python
from monad.models.scanner_delimited_variant import ScannerDelimitedVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerDelimitedVariant from a JSON string
scanner_delimited_variant_instance = ScannerDelimitedVariant.from_json(json)
# print the JSON string representation of the object
print(ScannerDelimitedVariant.to_json())

# convert the object into a dict
scanner_delimited_variant_dict = scanner_delimited_variant_instance.to_dict()
# create an instance of ScannerDelimitedVariant from a dict
scanner_delimited_variant_from_dict = ScannerDelimitedVariant.from_dict(scanner_delimited_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


