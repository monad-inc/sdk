# BoxUsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**FilterTerm** | Pointer to **string** | Limits the results to only users who&#39;s name or login start with the search term. | [optional] 

## Methods

### NewBoxUsersSettingsConfig

`func NewBoxUsersSettingsConfig() *BoxUsersSettingsConfig`

NewBoxUsersSettingsConfig instantiates a new BoxUsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBoxUsersSettingsConfigWithDefaults

`func NewBoxUsersSettingsConfigWithDefaults() *BoxUsersSettingsConfig`

NewBoxUsersSettingsConfigWithDefaults instantiates a new BoxUsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *BoxUsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *BoxUsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *BoxUsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *BoxUsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFilterTerm

`func (o *BoxUsersSettingsConfig) GetFilterTerm() string`

GetFilterTerm returns the FilterTerm field if non-nil, zero value otherwise.

### GetFilterTermOk

`func (o *BoxUsersSettingsConfig) GetFilterTermOk() (*string, bool)`

GetFilterTermOk returns a tuple with the FilterTerm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterTerm

`func (o *BoxUsersSettingsConfig) SetFilterTerm(v string)`

SetFilterTerm sets FilterTerm field to given value.

### HasFilterTerm

`func (o *BoxUsersSettingsConfig) HasFilterTerm() bool`

HasFilterTerm returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


