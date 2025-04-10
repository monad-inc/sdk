# TenableAssetsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**FullSync** | Pointer to **bool** | Boolean to control weather the input performs full syncs or incremental syncs | [optional] 

## Methods

### NewTenableAssetsSettingsConfig

`func NewTenableAssetsSettingsConfig() *TenableAssetsSettingsConfig`

NewTenableAssetsSettingsConfig instantiates a new TenableAssetsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenableAssetsSettingsConfigWithDefaults

`func NewTenableAssetsSettingsConfigWithDefaults() *TenableAssetsSettingsConfig`

NewTenableAssetsSettingsConfigWithDefaults instantiates a new TenableAssetsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *TenableAssetsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *TenableAssetsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *TenableAssetsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *TenableAssetsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFullSync

`func (o *TenableAssetsSettingsConfig) GetFullSync() bool`

GetFullSync returns the FullSync field if non-nil, zero value otherwise.

### GetFullSyncOk

`func (o *TenableAssetsSettingsConfig) GetFullSyncOk() (*bool, bool)`

GetFullSyncOk returns a tuple with the FullSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullSync

`func (o *TenableAssetsSettingsConfig) SetFullSync(v bool)`

SetFullSync sets FullSync field to given value.

### HasFullSync

`func (o *TenableAssetsSettingsConfig) HasFullSync() bool`

HasFullSync returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


