# ScannerJSONVariant

JSON output configuration (required when type is json).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | &#39;line&#39; writes one JSON object per line (JSON Lines); &#39;array&#39; writes a JSON array of objects. | 

## Example

```python
from monad.models.scanner_json_variant import ScannerJSONVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerJSONVariant from a JSON string
scanner_json_variant_instance = ScannerJSONVariant.from_json(json)
# print the JSON string representation of the object
print(ScannerJSONVariant.to_json())

# convert the object into a dict
scanner_json_variant_dict = scanner_json_variant_instance.to_dict()
# create an instance of ScannerJSONVariant from a dict
scanner_json_variant_from_dict = ScannerJSONVariant.from_dict(scanner_json_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


