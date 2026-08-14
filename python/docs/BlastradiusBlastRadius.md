# BlastradiusBlastRadius


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocking_count** | **int** |  | [optional] 
**findings** | [**List[BlastradiusFinding]**](BlastradiusFinding.md) | not tied to a specific instance | [optional] 
**instance_count** | **int** |  | [optional] 
**instances** | [**List[BlastradiusInstanceImpact]**](BlastradiusInstanceImpact.md) |  | [optional] 
**organization_count** | **int** |  | [optional] 
**warning_count** | **int** |  | [optional] 

## Example

```python
from monad.models.blastradius_blast_radius import BlastradiusBlastRadius

# TODO update the JSON string below
json = "{}"
# create an instance of BlastradiusBlastRadius from a JSON string
blastradius_blast_radius_instance = BlastradiusBlastRadius.from_json(json)
# print the JSON string representation of the object
print(BlastradiusBlastRadius.to_json())

# convert the object into a dict
blastradius_blast_radius_dict = blastradius_blast_radius_instance.to_dict()
# create an instance of BlastradiusBlastRadius from a dict
blastradius_blast_radius_from_dict = BlastradiusBlastRadius.from_dict(blastradius_blast_radius_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


