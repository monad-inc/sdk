# PagerdutySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertsConfig** | Pointer to [**PagerdutyAlertsConfig**](PagerdutyAlertsConfig.md) |  | [optional] 
**DefaultEventType** | Pointer to **string** | EventType determines whether events are sent as &#39;change&#39; or &#39;alert&#39; events. We recommend reading the docs for this output before making this choice. | [optional] 
**SummaryConfig** | Pointer to [**PagerdutySummaryConfig**](PagerdutySummaryConfig.md) |  | [optional] 

## Methods

### NewPagerdutySettingsConfig

`func NewPagerdutySettingsConfig() *PagerdutySettingsConfig`

NewPagerdutySettingsConfig instantiates a new PagerdutySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPagerdutySettingsConfigWithDefaults

`func NewPagerdutySettingsConfigWithDefaults() *PagerdutySettingsConfig`

NewPagerdutySettingsConfigWithDefaults instantiates a new PagerdutySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertsConfig

`func (o *PagerdutySettingsConfig) GetAlertsConfig() PagerdutyAlertsConfig`

GetAlertsConfig returns the AlertsConfig field if non-nil, zero value otherwise.

### GetAlertsConfigOk

`func (o *PagerdutySettingsConfig) GetAlertsConfigOk() (*PagerdutyAlertsConfig, bool)`

GetAlertsConfigOk returns a tuple with the AlertsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertsConfig

`func (o *PagerdutySettingsConfig) SetAlertsConfig(v PagerdutyAlertsConfig)`

SetAlertsConfig sets AlertsConfig field to given value.

### HasAlertsConfig

`func (o *PagerdutySettingsConfig) HasAlertsConfig() bool`

HasAlertsConfig returns a boolean if a field has been set.

### GetDefaultEventType

`func (o *PagerdutySettingsConfig) GetDefaultEventType() string`

GetDefaultEventType returns the DefaultEventType field if non-nil, zero value otherwise.

### GetDefaultEventTypeOk

`func (o *PagerdutySettingsConfig) GetDefaultEventTypeOk() (*string, bool)`

GetDefaultEventTypeOk returns a tuple with the DefaultEventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultEventType

`func (o *PagerdutySettingsConfig) SetDefaultEventType(v string)`

SetDefaultEventType sets DefaultEventType field to given value.

### HasDefaultEventType

`func (o *PagerdutySettingsConfig) HasDefaultEventType() bool`

HasDefaultEventType returns a boolean if a field has been set.

### GetSummaryConfig

`func (o *PagerdutySettingsConfig) GetSummaryConfig() PagerdutySummaryConfig`

GetSummaryConfig returns the SummaryConfig field if non-nil, zero value otherwise.

### GetSummaryConfigOk

`func (o *PagerdutySettingsConfig) GetSummaryConfigOk() (*PagerdutySummaryConfig, bool)`

GetSummaryConfigOk returns a tuple with the SummaryConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryConfig

`func (o *PagerdutySettingsConfig) SetSummaryConfig(v PagerdutySummaryConfig)`

SetSummaryConfig sets SummaryConfig field to given value.

### HasSummaryConfig

`func (o *PagerdutySettingsConfig) HasSummaryConfig() bool`

HasSummaryConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


