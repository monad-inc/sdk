# SqsS3BaseFilterVariant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | [**SqsS3BaseKeyFilterMode**](SqsS3BaseKeyFilterMode.md) |  | 
**operator** | [**SqsS3BaseKeyFilterOperator**](SqsS3BaseKeyFilterOperator.md) |  | 
**value** | **str** |  | 

## Example

```python
from monad.models.sqs_s3_base_filter_variant import SqsS3BaseFilterVariant

# TODO update the JSON string below
json = "{}"
# create an instance of SqsS3BaseFilterVariant from a JSON string
sqs_s3_base_filter_variant_instance = SqsS3BaseFilterVariant.from_json(json)
# print the JSON string representation of the object
print(SqsS3BaseFilterVariant.to_json())

# convert the object into a dict
sqs_s3_base_filter_variant_dict = sqs_s3_base_filter_variant_instance.to_dict()
# create an instance of SqsS3BaseFilterVariant from a dict
sqs_s3_base_filter_variant_from_dict = SqsS3BaseFilterVariant.from_dict(sqs_s3_base_filter_variant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


