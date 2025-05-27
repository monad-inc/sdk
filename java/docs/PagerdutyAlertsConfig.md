

# PagerdutyAlertsConfig

AlertsConfig contains configuration options that apply only when EventType is set to 'alert'

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**propertyClass** | **String** | Class defines the class/type of the event based on the input source. Defaults to an empty value. |  [optional] |
|**group** | **String** | A cluster or grouping of sources. For example, sources \\\&quot;prod-datapipe-02\\\&quot; and \\\&quot;prod-datapipe-03\\\&quot; might both be part of \\\&quot;prod-datapipe\\\&quot;. Applicable if event type is set to alerts. Defaults to an empty value. |  [optional] |
|**severity** | **String** | Indicates the severity of the impact to the affected system. Applicable for you if event type is set to alerts. Defaults to &#39;critical&#39;. |  [optional] |



