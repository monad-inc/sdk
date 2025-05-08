# CommunityTransformsInternalTransformMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**created_by** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**last_modified** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.community_transforms_internal_transform_metadata import CommunityTransformsInternalTransformMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CommunityTransformsInternalTransformMetadata from a JSON string
community_transforms_internal_transform_metadata_instance = CommunityTransformsInternalTransformMetadata.from_json(json)
# print the JSON string representation of the object
print(CommunityTransformsInternalTransformMetadata.to_json())

# convert the object into a dict
community_transforms_internal_transform_metadata_dict = community_transforms_internal_transform_metadata_instance.to_dict()
# create an instance of CommunityTransformsInternalTransformMetadata from a dict
community_transforms_internal_transform_metadata_from_dict = CommunityTransformsInternalTransformMetadata.from_dict(community_transforms_internal_transform_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


