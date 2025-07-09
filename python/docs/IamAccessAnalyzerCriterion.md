# IamAccessAnalyzerCriterion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains** | **List[str]** |  | [optional] 
**eq** | **List[str]** |  | [optional] 
**exists** | **bool** |  | [optional] 
**neq** | **List[str]** |  | [optional] 

## Example

```python
from monad.models.iam_access_analyzer_criterion import IamAccessAnalyzerCriterion

# TODO update the JSON string below
json = "{}"
# create an instance of IamAccessAnalyzerCriterion from a JSON string
iam_access_analyzer_criterion_instance = IamAccessAnalyzerCriterion.from_json(json)
# print the JSON string representation of the object
print(IamAccessAnalyzerCriterion.to_json())

# convert the object into a dict
iam_access_analyzer_criterion_dict = iam_access_analyzer_criterion_instance.to_dict()
# create an instance of IamAccessAnalyzerCriterion from a dict
iam_access_analyzer_criterion_from_dict = IamAccessAnalyzerCriterion.from_dict(iam_access_analyzer_criterion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


