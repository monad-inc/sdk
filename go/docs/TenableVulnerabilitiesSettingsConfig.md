# TenableVulnerabilitiesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**FullSync** | Pointer to **bool** | Boolean to control weather the input performs full syncs or incremental syncs | [optional] 

## Methods

### NewTenableVulnerabilitiesSettingsConfig

`func NewTenableVulnerabilitiesSettingsConfig() *TenableVulnerabilitiesSettingsConfig`

NewTenableVulnerabilitiesSettingsConfig instantiates a new TenableVulnerabilitiesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenableVulnerabilitiesSettingsConfigWithDefaults

`func NewTenableVulnerabilitiesSettingsConfigWithDefaults() *TenableVulnerabilitiesSettingsConfig`

NewTenableVulnerabilitiesSettingsConfigWithDefaults instantiates a new TenableVulnerabilitiesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *TenableVulnerabilitiesSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *TenableVulnerabilitiesSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *TenableVulnerabilitiesSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *TenableVulnerabilitiesSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFullSync

`func (o *TenableVulnerabilitiesSettingsConfig) GetFullSync() bool`

GetFullSync returns the FullSync field if non-nil, zero value otherwise.

### GetFullSyncOk

`func (o *TenableVulnerabilitiesSettingsConfig) GetFullSyncOk() (*bool, bool)`

GetFullSyncOk returns a tuple with the FullSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSync

`func (o *TenableVulnerabilitiesSettingsConfig) SetFullSync(v bool)`

SetFullSync sets FullSync field to given value.

### HasFullSync

`func (o *TenableVulnerabilitiesSettingsConfig) HasFullSync() bool`

HasFullSync returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


