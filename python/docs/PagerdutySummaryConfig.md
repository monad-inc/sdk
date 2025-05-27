# PagerdutySummaryConfig

SummaryConfig allows customization of event summary messages displayed in PagerDuty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_source** | **str** | alertSource is the source identifier for alert events. Defaults to &#39;monad-platform&#39;. | [optional] 
**alert_summary** | **str** | alertSummary is the custom summary message for alert events. Defaults to &#39;Monad triggered alert event&#39;. | [optional] 
**change_source** | **str** | changeSource is the source identifier for change events. Defaults to &#39;monad-platform&#39;. | [optional] 
**change_summary** | **str** | changeSummary is the custom summary message for change events. Defaults to &#39;Monad triggered change event&#39;. | [optional] 

## Example

```python
from monad.models.pagerduty_summary_config import PagerdutySummaryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutySummaryConfig from a JSON string
pagerduty_summary_config_instance = PagerdutySummaryConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutySummaryConfig.to_json())

# convert the object into a dict
pagerduty_summary_config_dict = pagerduty_summary_config_instance.to_dict()
# create an instance of PagerdutySummaryConfig from a dict
pagerduty_summary_config_from_dict = PagerdutySummaryConfig.from_dict(pagerduty_summary_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


