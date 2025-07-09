# CognitoUsersSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input. eg: &#x60;0 0 * * *&#x60; - Daily at midnight, or &#x60;*_/15 * * * *&#x60; - Every 15 minutes | [optional] 
**Filter** | Pointer to [**CognitoUsersFilter**](CognitoUsersFilter.md) |  | [optional] 
**Region** | Pointer to **string** | The Region that you would receieve findings for | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 
**UserPoolId** | Pointer to **string** | User Pool ID to extract users from | [optional] 

## Methods

### NewCognitoUsersSettingsConfig

`func NewCognitoUsersSettingsConfig() *CognitoUsersSettingsConfig`

NewCognitoUsersSettingsConfig instantiates a new CognitoUsersSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCognitoUsersSettingsConfigWithDefaults

`func NewCognitoUsersSettingsConfigWithDefaults() *CognitoUsersSettingsConfig`

NewCognitoUsersSettingsConfigWithDefaults instantiates a new CognitoUsersSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *CognitoUsersSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CognitoUsersSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CognitoUsersSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CognitoUsersSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFilter

`func (o *CognitoUsersSettingsConfig) GetFilter() CognitoUsersFilter`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *CognitoUsersSettingsConfig) GetFilterOk() (*CognitoUsersFilter, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *CognitoUsersSettingsConfig) SetFilter(v CognitoUsersFilter)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *CognitoUsersSettingsConfig) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetRegion

`func (o *CognitoUsersSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *CognitoUsersSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *CognitoUsersSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *CognitoUsersSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *CognitoUsersSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *CognitoUsersSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *CognitoUsersSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *CognitoUsersSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUserPoolId

`func (o *CognitoUsersSettingsConfig) GetUserPoolId() string`

GetUserPoolId returns the UserPoolId field if non-nil, zero value otherwise.

### GetUserPoolIdOk

`func (o *CognitoUsersSettingsConfig) GetUserPoolIdOk() (*string, bool)`

GetUserPoolIdOk returns a tuple with the UserPoolId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPoolId

`func (o *CognitoUsersSettingsConfig) SetUserPoolId(v string)`

SetUserPoolId sets UserPoolId field to given value.

### HasUserPoolId

`func (o *CognitoUsersSettingsConfig) HasUserPoolId() bool`

HasUserPoolId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


