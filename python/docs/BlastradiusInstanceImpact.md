# BlastradiusInstanceImpact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | [**List[BlastradiusFinding]**](BlastradiusFinding.md) |  | [optional] 
**node_id** | **str** |  | [optional] 
**organization_id** | **str** |  | [optional] 
**organization_name** | **str** |  | [optional] 
**pipeline_id** | **str** |  | [optional] 
**pipeline_name** | **str** |  | [optional] 

## Example

```python
from monad.models.blastradius_instance_impact import BlastradiusInstanceImpact

# TODO update the JSON string below
json = "{}"
# create an instance of BlastradiusInstanceImpact from a JSON string
blastradius_instance_impact_instance = BlastradiusInstanceImpact.from_json(json)
# print the JSON string representation of the object
print(BlastradiusInstanceImpact.to_json())

# convert the object into a dict
blastradius_instance_impact_dict = blastradius_instance_impact_instance.to_dict()
# create an instance of BlastradiusInstanceImpact from a dict
blastradius_instance_impact_from_dict = BlastradiusInstanceImpact.from_dict(blastradius_instance_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


