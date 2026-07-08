# PagerdutyAlertsConfig

AlertsConfig contains configuration options that apply only when EventType is set to 'alert'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** | Class defines the class/type of the event based on the input source. Defaults to an empty value. | [optional] 
**group** | **str** | A cluster or grouping of sources. For example, sources \\\&quot;prod-datapipe-02\\\&quot; and \\\&quot;prod-datapipe-03\\\&quot; might both be part of \\\&quot;prod-datapipe\\\&quot;. Applicable if event type is set to alerts. Defaults to an empty value. | [optional] 
**severity** | **str** | Indicates the severity of the impact to the affected system. Applicable for you if event type is set to alerts. Defaults to &#39;critical&#39;. | [optional] 

## Example

```python
from monad.models.pagerduty_alerts_config import PagerdutyAlertsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PagerdutyAlertsConfig from a JSON string
pagerduty_alerts_config_instance = PagerdutyAlertsConfig.from_json(json)
# print the JSON string representation of the object
print(PagerdutyAlertsConfig.to_json())

# convert the object into a dict
pagerduty_alerts_config_dict = pagerduty_alerts_config_instance.to_dict()
# create an instance of PagerdutyAlertsConfig from a dict
pagerduty_alerts_config_from_dict = PagerdutyAlertsConfig.from_dict(pagerduty_alerts_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


