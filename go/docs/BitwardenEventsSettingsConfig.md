# BitwardenEventsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, will fetch from the most recent data available. | [optional] 
**BaseUrl** | Pointer to **string** | Base URL for self-hosted Bitwarden instance (required if region is SelfHosted) | [optional] 
**Region** | Pointer to **string** | Region of the Bitwarden instance: US, EU, or SelfHosted (default: US) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewBitwardenEventsSettingsConfig

`func NewBitwardenEventsSettingsConfig() *BitwardenEventsSettingsConfig`

NewBitwardenEventsSettingsConfig instantiates a new BitwardenEventsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBitwardenEventsSettingsConfigWithDefaults

`func NewBitwardenEventsSettingsConfigWithDefaults() *BitwardenEventsSettingsConfig`

NewBitwardenEventsSettingsConfigWithDefaults instantiates a new BitwardenEventsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *BitwardenEventsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *BitwardenEventsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *BitwardenEventsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *BitwardenEventsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetBaseUrl

`func (o *BitwardenEventsSettingsConfig) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *BitwardenEventsSettingsConfig) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *BitwardenEventsSettingsConfig) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *BitwardenEventsSettingsConfig) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetRegion

`func (o *BitwardenEventsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *BitwardenEventsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *BitwardenEventsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *BitwardenEventsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *BitwardenEventsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *BitwardenEventsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *BitwardenEventsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *BitwardenEventsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


