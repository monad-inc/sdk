# TenableAssetsCronSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 

## Methods

### NewTenableAssetsCronSettingsConfig

`func NewTenableAssetsCronSettingsConfig() *TenableAssetsCronSettingsConfig`

NewTenableAssetsCronSettingsConfig instantiates a new TenableAssetsCronSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenableAssetsCronSettingsConfigWithDefaults

`func NewTenableAssetsCronSettingsConfigWithDefaults() *TenableAssetsCronSettingsConfig`

NewTenableAssetsCronSettingsConfigWithDefaults instantiates a new TenableAssetsCronSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *TenableAssetsCronSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *TenableAssetsCronSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *TenableAssetsCronSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *TenableAssetsCronSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetRateLimit

`func (o *TenableAssetsCronSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *TenableAssetsCronSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *TenableAssetsCronSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *TenableAssetsCronSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


