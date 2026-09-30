# ScannerFormatConfig

The on-disk format Scanner will index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimited** | [**ScannerDelimitedVariant**](ScannerDelimitedVariant.md) |  | [optional] 
**var_json** | [**ScannerJSONVariant**](ScannerJSONVariant.md) |  | [optional] 
**parquet** | [**ScannerParquetVariant**](ScannerParquetVariant.md) |  | [optional] 
**type** | **str** | Output format: json, parquet, or delimited. | 

## Example

```python
from monad.models.scanner_format_config import ScannerFormatConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScannerFormatConfig from a JSON string
scanner_format_config_instance = ScannerFormatConfig.from_json(json)
# print the JSON string representation of the object
print(ScannerFormatConfig.to_json())

# convert the object into a dict
scanner_format_config_dict = scanner_format_config_instance.to_dict()
# create an instance of ScannerFormatConfig from a dict
scanner_format_config_from_dict = ScannerFormatConfig.from_dict(scanner_format_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


