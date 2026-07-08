# TenableVulnerabilitiesCronSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 

## Methods

### NewTenableVulnerabilitiesCronSettingsConfig

`func NewTenableVulnerabilitiesCronSettingsConfig() *TenableVulnerabilitiesCronSettingsConfig`

NewTenableVulnerabilitiesCronSettingsConfig instantiates a new TenableVulnerabilitiesCronSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenableVulnerabilitiesCronSettingsConfigWithDefaults

`func NewTenableVulnerabilitiesCronSettingsConfigWithDefaults() *TenableVulnerabilitiesCronSettingsConfig`

NewTenableVulnerabilitiesCronSettingsConfigWithDefaults instantiates a new TenableVulnerabilitiesCronSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *TenableVulnerabilitiesCronSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *TenableVulnerabilitiesCronSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *TenableVulnerabilitiesCronSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *TenableVulnerabilitiesCronSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetRateLimit

`func (o *TenableVulnerabilitiesCronSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *TenableVulnerabilitiesCronSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *TenableVulnerabilitiesCronSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *TenableVulnerabilitiesCronSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


