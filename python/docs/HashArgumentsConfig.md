# HashArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Hash algorithm | [optional] 
**fields** | **List[str]** | Fields to hash, in order; empty hashes the whole record | [optional] 
**key** | **str** | Key to store the resulting hash in | [optional] 

## Example

```python
from monad.models.hash_arguments_config import HashArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HashArgumentsConfig from a JSON string
hash_arguments_config_instance = HashArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(HashArgumentsConfig.to_json())

# convert the object into a dict
hash_arguments_config_dict = hash_arguments_config_instance.to_dict()
# create an instance of HashArgumentsConfig from a dict
hash_arguments_config_from_dict = HashArgumentsConfig.from_dict(hash_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


