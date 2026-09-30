# ScannerParquetVariant

Parquet output configuration (required when type is parquet).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | JSON schema describing the Parquet columns. | 

## Example

```python
from monad.models.scanner_parquet_variant import ScannerParquetVariant

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerParquetVariant from a JSON string
scanner_parquet_variant_instance = ScannerParquetVariant.from_json(json)
# print the JSON string representation of the object
print(ScannerParquetVariant.to_json())

# convert the object into a dict
scanner_parquet_variant_dict = scanner_parquet_variant_instance.to_dict()
# create an instance of ScannerParquetVariant from a dict
scanner_parquet_variant_from_dict = ScannerParquetVariant.from_dict(scanner_parquet_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


