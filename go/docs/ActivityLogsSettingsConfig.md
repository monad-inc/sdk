# ActivityLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FleetUrl** | Pointer to **string** | URL of the Fleet DM instance | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewActivityLogsSettingsConfig

`func NewActivityLogsSettingsConfig() *ActivityLogsSettingsConfig`

NewActivityLogsSettingsConfig instantiates a new ActivityLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityLogsSettingsConfigWithDefaults

`func NewActivityLogsSettingsConfigWithDefaults() *ActivityLogsSettingsConfig`

NewActivityLogsSettingsConfigWithDefaults instantiates a new ActivityLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFleetUrl

`func (o *ActivityLogsSettingsConfig) GetFleetUrl() string`

GetFleetUrl returns the FleetUrl field if non-nil, zero value otherwise.

### GetFleetUrlOk

`func (o *ActivityLogsSettingsConfig) GetFleetUrlOk() (*string, bool)`

GetFleetUrlOk returns a tuple with the FleetUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFleetUrl

`func (o *ActivityLogsSettingsConfig) SetFleetUrl(v string)`

SetFleetUrl sets FleetUrl field to given value.

### HasFleetUrl

`func (o *ActivityLogsSettingsConfig) HasFleetUrl() bool`

HasFleetUrl returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *ActivityLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *ActivityLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *ActivityLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *ActivityLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


