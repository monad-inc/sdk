# SlackUsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**TeamId** | Pointer to **string** | Team ID to filter user results by | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewSlackUsersSettingsConfig

`func NewSlackUsersSettingsConfig() *SlackUsersSettingsConfig`

NewSlackUsersSettingsConfig instantiates a new SlackUsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSlackUsersSettingsConfigWithDefaults

`func NewSlackUsersSettingsConfigWithDefaults() *SlackUsersSettingsConfig`

NewSlackUsersSettingsConfigWithDefaults instantiates a new SlackUsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SlackUsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SlackUsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SlackUsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SlackUsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetTeamId

`func (o *SlackUsersSettingsConfig) GetTeamId() string`

GetTeamId returns the TeamId field if non-nil, zero value otherwise.

### GetTeamIdOk

`func (o *SlackUsersSettingsConfig) GetTeamIdOk() (*string, bool)`

GetTeamIdOk returns a tuple with the TeamId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTeamId

`func (o *SlackUsersSettingsConfig) SetTeamId(v string)`

SetTeamId sets TeamId field to given value.

### HasTeamId

`func (o *SlackUsersSettingsConfig) HasTeamId() bool`

HasTeamId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SlackUsersSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SlackUsersSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SlackUsersSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SlackUsersSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


