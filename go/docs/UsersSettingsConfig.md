# UsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression to schedule the data collection. | [optional] 
**Email** | Pointer to **string** | Email address to use to authenticate with Google Cloud. | [optional] 

## Methods

### NewUsersSettingsConfig

`func NewUsersSettingsConfig() *UsersSettingsConfig`

NewUsersSettingsConfig instantiates a new UsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsersSettingsConfigWithDefaults

`func NewUsersSettingsConfigWithDefaults() *UsersSettingsConfig`

NewUsersSettingsConfigWithDefaults instantiates a new UsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *UsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *UsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *UsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *UsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetEmail

`func (o *UsersSettingsConfig) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *UsersSettingsConfig) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *UsersSettingsConfig) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *UsersSettingsConfig) HasEmail() bool`

HasEmail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


