# SecurityGroupsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron string for scheduling the ingest of your input | [optional] 
**Filters** | Pointer to [**[]SecurityGroupsFilter**](SecurityGroupsFilter.md) | Filters for the security groups | [optional] 
**Region** | Pointer to **string** | The AWS region where the security groups that are being fetched are located. | [optional] 
**RoleArn** | Pointer to **string** | RoleArn is the ARN of the IAM role to assume for accessing AWS security groups. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewSecurityGroupsSettingsConfig

`func NewSecurityGroupsSettingsConfig() *SecurityGroupsSettingsConfig`

NewSecurityGroupsSettingsConfig instantiates a new SecurityGroupsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecurityGroupsSettingsConfigWithDefaults

`func NewSecurityGroupsSettingsConfigWithDefaults() *SecurityGroupsSettingsConfig`

NewSecurityGroupsSettingsConfigWithDefaults instantiates a new SecurityGroupsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *SecurityGroupsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *SecurityGroupsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *SecurityGroupsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *SecurityGroupsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFilters

`func (o *SecurityGroupsSettingsConfig) GetFilters() []SecurityGroupsFilter`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *SecurityGroupsSettingsConfig) GetFiltersOk() (*[]SecurityGroupsFilter, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *SecurityGroupsSettingsConfig) SetFilters(v []SecurityGroupsFilter)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *SecurityGroupsSettingsConfig) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetRegion

`func (o *SecurityGroupsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *SecurityGroupsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *SecurityGroupsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *SecurityGroupsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *SecurityGroupsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *SecurityGroupsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *SecurityGroupsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *SecurityGroupsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *SecurityGroupsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *SecurityGroupsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *SecurityGroupsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *SecurityGroupsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


