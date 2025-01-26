# FormatterFormatConfig

The format config to use

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** |  | [optional] 
**delimited_format** | [**DelimitedDelimiterFormatter**](DelimitedDelimiterFormatter.md) |  | [optional] 
**json_format** | [**JsonJsonFormatter**](JsonJsonFormatter.md) |  | [optional] 
**parquet_format** | [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 

## Example

```python
from monad.models.formatter_format_config import FormatterFormatConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FormatterFormatConfig from a JSON string
formatter_format_config_instance = FormatterFormatConfig.from_json(json)
# print the JSON string representation of the object
print(FormatterFormatConfig.to_json())

# convert the object into a dict
formatter_format_config_dict = formatter_format_config_instance.to_dict()
# create an instance of FormatterFormatConfig from a dict
formatter_format_config_from_dict = FormatterFormatConfig.from_dict(formatter_format_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


