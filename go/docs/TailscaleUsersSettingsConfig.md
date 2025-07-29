# TailscaleUsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**OrganizationId** | Pointer to **string** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**UserRoleOption** | Pointer to **string** | Allows for filtering the output by user role. | [optional] 
**UserTypeOption** | Pointer to **string** | Allows for filtering the output by user type. | [optional] 

## Methods

### NewTailscaleUsersSettingsConfig

`func NewTailscaleUsersSettingsConfig() *TailscaleUsersSettingsConfig`

NewTailscaleUsersSettingsConfig instantiates a new TailscaleUsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTailscaleUsersSettingsConfigWithDefaults

`func NewTailscaleUsersSettingsConfigWithDefaults() *TailscaleUsersSettingsConfig`

NewTailscaleUsersSettingsConfigWithDefaults instantiates a new TailscaleUsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *TailscaleUsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *TailscaleUsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *TailscaleUsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *TailscaleUsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetOrganizationId

`func (o *TailscaleUsersSettingsConfig) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *TailscaleUsersSettingsConfig) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *TailscaleUsersSettingsConfig) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *TailscaleUsersSettingsConfig) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *TailscaleUsersSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *TailscaleUsersSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *TailscaleUsersSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *TailscaleUsersSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetUserRoleOption

`func (o *TailscaleUsersSettingsConfig) GetUserRoleOption() string`

GetUserRoleOption returns the UserRoleOption field if non-nil, zero value otherwise.

### GetUserRoleOptionOk

`func (o *TailscaleUsersSettingsConfig) GetUserRoleOptionOk() (*string, bool)`

GetUserRoleOptionOk returns a tuple with the UserRoleOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserRoleOption

`func (o *TailscaleUsersSettingsConfig) SetUserRoleOption(v string)`

SetUserRoleOption sets UserRoleOption field to given value.

### HasUserRoleOption

`func (o *TailscaleUsersSettingsConfig) HasUserRoleOption() bool`

HasUserRoleOption returns a boolean if a field has been set.

### GetUserTypeOption

`func (o *TailscaleUsersSettingsConfig) GetUserTypeOption() string`

GetUserTypeOption returns the UserTypeOption field if non-nil, zero value otherwise.

### GetUserTypeOptionOk

`func (o *TailscaleUsersSettingsConfig) GetUserTypeOptionOk() (*string, bool)`

GetUserTypeOptionOk returns a tuple with the UserTypeOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserTypeOption

`func (o *TailscaleUsersSettingsConfig) SetUserTypeOption(v string)`

SetUserTypeOption sets UserTypeOption field to given value.

### HasUserTypeOption

`func (o *TailscaleUsersSettingsConfig) HasUserTypeOption() bool`

HasUserTypeOption returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


