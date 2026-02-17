# UtcTimestampArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the timestamp | [optional] 
**key** | **str** | The key to store the timestamp in | [optional] 

## Example

```python
from monad.models.utc_timestamp_arguments_config import UtcTimestampArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UtcTimestampArgumentsConfig from a JSON string
utc_timestamp_arguments_config_instance = UtcTimestampArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(UtcTimestampArgumentsConfig.to_json())

# convert the object into a dict
utc_timestamp_arguments_config_dict = utc_timestamp_arguments_config_instance.to_dict()
# create an instance of UtcTimestampArgumentsConfig from a dict
utc_timestamp_arguments_config_from_dict = UtcTimestampArgumentsConfig.from_dict(utc_timestamp_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


