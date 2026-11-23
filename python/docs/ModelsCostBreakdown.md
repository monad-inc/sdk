# ModelsCostBreakdown

Breakdown is the org-wide sum of the per-output breakdowns, each priced at its output's own rate. Omitted when it was not computed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_bytes** | **int** |  | [optional] 
**context_cost** | **float** |  | [optional] 
**cost_with_monad** | **float** |  | [optional] 
**cost_without_monad** | **float** |  | [optional] 
**delivered_bytes** | **int** |  | [optional] 
**estimated** | **bool** |  | [optional] 
**filtered_bytes** | **int** |  | [optional] 
**filtering_savings** | **float** |  | [optional] 
**kept_bytes** | **int** |  | [optional] 
**kept_cost** | **float** |  | [optional] 
**raw_input_bytes** | **int** |  | [optional] 
**reduction_savings** | **float** |  | [optional] 
**removed_bytes** | **int** |  | [optional] 
**routed_away_bytes** | **int** |  | [optional] 
**routing_savings** | **float** |  | [optional] 

## Example

```python
from monad.models.models_cost_breakdown import ModelsCostBreakdown

# TODO update the JSON string below
json = "{}"
# create an instance of ModelsCostBreakdown from a JSON string
models_cost_breakdown_instance = ModelsCostBreakdown.from_json(json)
# print the JSON string representation of the object
print(ModelsCostBreakdown.to_json())

# convert the object into a dict
models_cost_breakdown_dict = models_cost_breakdown_instance.to_dict()
# create an instance of ModelsCostBreakdown from a dict
models_cost_breakdown_from_dict = ModelsCostBreakdown.from_dict(models_cost_breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


