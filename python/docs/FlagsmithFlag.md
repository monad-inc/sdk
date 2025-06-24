# FlagsmithFlag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**feature_id** | **int** |  | [optional] 
**feature_name** | **str** |  | [optional] 
**is_default** | **bool** |  | [optional] 
**value** | **object** |  | [optional] 

## Example

```python
from monad.models.flagsmith_flag import FlagsmithFlag

# TODO update the JSON string below
json = "{}"
# create an instance of FlagsmithFlag from a JSON string
flagsmith_flag_instance = FlagsmithFlag.from_json(json)
# print the JSON string representation of the object
print(FlagsmithFlag.to_json())

# convert the object into a dict
flagsmith_flag_dict = flagsmith_flag_instance.to_dict()
# create an instance of FlagsmithFlag from a dict
flagsmith_flag_from_dict = FlagsmithFlag.from_dict(flagsmith_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


