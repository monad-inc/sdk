# DedupArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **List[str]** | fields to key on, in order; empty &#x3D; whole record | [optional] 
**window** | **str** | dedup window / key TTL: one of 1m..5m | [optional] 

## Example

```python
from monad.models.dedup_arguments_config import DedupArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DedupArgumentsConfig from a JSON string
dedup_arguments_config_instance = DedupArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(DedupArgumentsConfig.to_json())

# convert the object into a dict
dedup_arguments_config_dict = dedup_arguments_config_instance.to_dict()
# create an instance of DedupArgumentsConfig from a dict
dedup_arguments_config_from_dict = DedupArgumentsConfig.from_dict(dedup_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


