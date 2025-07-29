# SemgrepProjectsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewSemgrepProjectsSettingsConfig

`func NewSemgrepProjectsSettingsConfig() *SemgrepProjectsSettingsConfig`

NewSemgrepProjectsSettingsConfig instantiates a new SemgrepProjectsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSemgrepProjectsSettingsConfigWithDefaults

`func NewSemgrepProjectsSettingsConfigWithDefaults() *SemgrepProjectsSettingsConfig`

NewSemgrepProjectsSettingsConfigWithDefaults instantiates a new SemgrepProjectsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SemgrepProjectsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SemgrepProjectsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SemgrepProjectsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SemgrepProjectsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SemgrepProjectsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SemgrepProjectsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SemgrepProjectsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SemgrepProjectsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


