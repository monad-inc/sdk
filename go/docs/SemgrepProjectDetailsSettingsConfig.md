# SemgrepProjectDetailsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewSemgrepProjectDetailsSettingsConfig

`func NewSemgrepProjectDetailsSettingsConfig() *SemgrepProjectDetailsSettingsConfig`

NewSemgrepProjectDetailsSettingsConfig instantiates a new SemgrepProjectDetailsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSemgrepProjectDetailsSettingsConfigWithDefaults

`func NewSemgrepProjectDetailsSettingsConfigWithDefaults() *SemgrepProjectDetailsSettingsConfig`

NewSemgrepProjectDetailsSettingsConfigWithDefaults instantiates a new SemgrepProjectDetailsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SemgrepProjectDetailsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SemgrepProjectDetailsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SemgrepProjectDetailsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SemgrepProjectDetailsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SemgrepProjectDetailsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SemgrepProjectDetailsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SemgrepProjectDetailsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SemgrepProjectDetailsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


