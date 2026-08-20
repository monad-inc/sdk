# CommunityTransformsInternalTransformConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**config** | **Dict[str, object]** |  | [optional] 
**contributors** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**inputs** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.community_transforms_internal_transform_config import CommunityTransformsInternalTransformConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityTransformsInternalTransformConfig from a JSON string
community_transforms_internal_transform_config_instance = CommunityTransformsInternalTransformConfig.from_json(json)
# print the JSON string representation of the object
print(CommunityTransformsInternalTransformConfig.to_json())

# convert the object into a dict
community_transforms_internal_transform_config_dict = community_transforms_internal_transform_config_instance.to_dict()
# create an instance of CommunityTransformsInternalTransformConfig from a dict
community_transforms_internal_transform_config_from_dict = CommunityTransformsInternalTransformConfig.from_dict(community_transforms_internal_transform_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


