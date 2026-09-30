# PagerdutySummaryConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertSource** | Pointer to **string** | alertSource is the source identifier for alert events. Defaults to &#39;monad-platform&#39;. | [optional] 
**AlertSummary** | Pointer to **string** | alertSummary is the custom summary message for alert events. Defaults to &#39;Monad triggered alert event&#39;. | [optional] 
**ChangeSource** | Pointer to **string** | changeSource is the source identifier for change events. Defaults to &#39;monad-platform&#39;. | [optional] 
**ChangeSummary** | Pointer to **string** | changeSummary is the custom summary message for change events. Defaults to &#39;Monad triggered change event&#39;. | [optional] 

## Methods

### NewPagerdutySummaryConfig

`func NewPagerdutySummaryConfig() *PagerdutySummaryConfig`

NewPagerdutySummaryConfig instantiates a new PagerdutySummaryConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPagerdutySummaryConfigWithDefaults

`func NewPagerdutySummaryConfigWithDefaults() *PagerdutySummaryConfig`

NewPagerdutySummaryConfigWithDefaults instantiates a new PagerdutySummaryConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertSource

`func (o *PagerdutySummaryConfig) GetAlertSource() string`

GetAlertSource returns the AlertSource field if non-nil, zero value otherwise.

### GetAlertSourceOk

`func (o *PagerdutySummaryConfig) GetAlertSourceOk() (*string, bool)`

GetAlertSourceOk returns a tuple with the AlertSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertSource

`func (o *PagerdutySummaryConfig) SetAlertSource(v string)`

SetAlertSource sets AlertSource field to given value.

### HasAlertSource

`func (o *PagerdutySummaryConfig) HasAlertSource() bool`

HasAlertSource returns a boolean if a field has been set.

### GetAlertSummary

`func (o *PagerdutySummaryConfig) GetAlertSummary() string`

GetAlertSummary returns the AlertSummary field if non-nil, zero value otherwise.

### GetAlertSummaryOk

`func (o *PagerdutySummaryConfig) GetAlertSummaryOk() (*string, bool)`

GetAlertSummaryOk returns a tuple with the AlertSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertSummary

`func (o *PagerdutySummaryConfig) SetAlertSummary(v string)`

SetAlertSummary sets AlertSummary field to given value.

### HasAlertSummary

`func (o *PagerdutySummaryConfig) HasAlertSummary() bool`

HasAlertSummary returns a boolean if a field has been set.

### GetChangeSource

`func (o *PagerdutySummaryConfig) GetChangeSource() string`

GetChangeSource returns the ChangeSource field if non-nil, zero value otherwise.

### GetChangeSourceOk

`func (o *PagerdutySummaryConfig) GetChangeSourceOk() (*string, bool)`

GetChangeSourceOk returns a tuple with the ChangeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeSource

`func (o *PagerdutySummaryConfig) SetChangeSource(v string)`

SetChangeSource sets ChangeSource field to given value.

### HasChangeSource

`func (o *PagerdutySummaryConfig) HasChangeSource() bool`

HasChangeSource returns a boolean if a field has been set.

### GetChangeSummary

`func (o *PagerdutySummaryConfig) GetChangeSummary() string`

GetChangeSummary returns the ChangeSummary field if non-nil, zero value otherwise.

### GetChangeSummaryOk

`func (o *PagerdutySummaryConfig) GetChangeSummaryOk() (*string, bool)`

GetChangeSummaryOk returns a tuple with the ChangeSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeSummary

`func (o *PagerdutySummaryConfig) SetChangeSummary(v string)`

SetChangeSummary sets ChangeSummary field to given value.

### HasChangeSummary

`func (o *PagerdutySummaryConfig) HasChangeSummary() bool`

HasChangeSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


