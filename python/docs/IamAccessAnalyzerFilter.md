# IamAccessAnalyzerFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criterion** | [**IamAccessAnalyzerCriterion**](IamAccessAnalyzerCriterion.md) |  | [optional] 
**filter_key** | **str** |  | [optional] 

## Example

```python
from monad.models.iam_access_analyzer_filter import IamAccessAnalyzerFilter

# TODO update the JSON string below
json = "{}"
# create an instance of IamAccessAnalyzerFilter from a JSON string
iam_access_analyzer_filter_instance = IamAccessAnalyzerFilter.from_json(json)
# print the JSON string representation of the object
print(IamAccessAnalyzerFilter.to_json())

# convert the object into a dict
iam_access_analyzer_filter_dict = iam_access_analyzer_filter_instance.to_dict()
# create an instance of IamAccessAnalyzerFilter from a dict
iam_access_analyzer_filter_from_dict = IamAccessAnalyzerFilter.from_dict(iam_access_analyzer_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


