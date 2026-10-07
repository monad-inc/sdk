# SqsS3BaseKeyFilter

Optional S3 key filter. nil pointer = no filtering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**SqsS3BaseFilterVariant**](SqsS3BaseFilterVariant.md) |  | [optional] 
**type** | [**SqsS3BaseKeyFilterType**](SqsS3BaseKeyFilterType.md) |  | 

## Example

```python
from monad.models.sqs_s3_base_key_filter import SqsS3BaseKeyFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SqsS3BaseKeyFilter from a JSON string
sqs_s3_base_key_filter_instance = SqsS3BaseKeyFilter.from_json(json)
# print the JSON string representation of the object
print(SqsS3BaseKeyFilter.to_json())

# convert the object into a dict
sqs_s3_base_key_filter_dict = sqs_s3_base_key_filter_instance.to_dict()
# create an instance of SqsS3BaseKeyFilter from a dict
sqs_s3_base_key_filter_from_dict = SqsS3BaseKeyFilter.from_dict(sqs_s3_base_key_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


