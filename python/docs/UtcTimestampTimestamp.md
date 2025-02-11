# UtcTimestampTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the timestamp | [optional] 
**key** | **str** | The key to store the timestamp in | [optional] 

## Example

```python
from monad.models.utc_timestamp_timestamp import UtcTimestampTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of UtcTimestampTimestamp from a JSON string
utc_timestamp_timestamp_instance = UtcTimestampTimestamp.from_json(json)
# print the JSON string representation of the object
print(UtcTimestampTimestamp.to_json())

# convert the object into a dict
utc_timestamp_timestamp_dict = utc_timestamp_timestamp_instance.to_dict()
# create an instance of UtcTimestampTimestamp from a dict
utc_timestamp_timestamp_from_dict = UtcTimestampTimestamp.from_dict(utc_timestamp_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


