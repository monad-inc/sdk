# AwsGuarddutySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Region** | Pointer to **string** | The AWS region where GuardDuty is enabled. | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the IAM role to assume for accessing GuardDuty. | [optional] 
**Severity** | Pointer to **string** | Filter findings by severity levels. | [optional] 

## Methods

### NewAwsGuarddutySettingsConfig

`func NewAwsGuarddutySettingsConfig() *AwsGuarddutySettingsConfig`

NewAwsGuarddutySettingsConfig instantiates a new AwsGuarddutySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsGuarddutySettingsConfigWithDefaults

`func NewAwsGuarddutySettingsConfigWithDefaults() *AwsGuarddutySettingsConfig`

NewAwsGuarddutySettingsConfigWithDefaults instantiates a new AwsGuarddutySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegion

`func (o *AwsGuarddutySettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwsGuarddutySettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwsGuarddutySettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AwsGuarddutySettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *AwsGuarddutySettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwsGuarddutySettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwsGuarddutySettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwsGuarddutySettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetSeverity

`func (o *AwsGuarddutySettingsConfig) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *AwsGuarddutySettingsConfig) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *AwsGuarddutySettingsConfig) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *AwsGuarddutySettingsConfig) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


