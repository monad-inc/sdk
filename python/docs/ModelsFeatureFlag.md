# ModelsFeatureFlag


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
from monad.models.models_feature_flag import ModelsFeatureFlag

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsFeatureFlag from a JSON string
models_feature_flag_instance = ModelsFeatureFlag.from_json(json)
# print the JSON string representation of the object
print(ModelsFeatureFlag.to_json())

# convert the object into a dict
models_feature_flag_dict = models_feature_flag_instance.to_dict()
# create an instance of ModelsFeatureFlag from a dict
models_feature_flag_from_dict = ModelsFeatureFlag.from_dict(models_feature_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


