# KmsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**KmsType** | Pointer to **string** | Type of KMS resources to list | [optional] 
**Region** | Pointer to **string** | AWS region to use | [optional] 
**RoleArn** | Pointer to **string** | Role ARN to assume | [optional] 

## Methods

### NewKmsSettingsConfig

`func NewKmsSettingsConfig() *KmsSettingsConfig`

NewKmsSettingsConfig instantiates a new KmsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKmsSettingsConfigWithDefaults

`func NewKmsSettingsConfigWithDefaults() *KmsSettingsConfig`

NewKmsSettingsConfigWithDefaults instantiates a new KmsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *KmsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *KmsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *KmsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *KmsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetKmsType

`func (o *KmsSettingsConfig) GetKmsType() string`

GetKmsType returns the KmsType field if non-nil, zero value otherwise.

### GetKmsTypeOk

`func (o *KmsSettingsConfig) GetKmsTypeOk() (*string, bool)`

GetKmsTypeOk returns a tuple with the KmsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKmsType

`func (o *KmsSettingsConfig) SetKmsType(v string)`

SetKmsType sets KmsType field to given value.

### HasKmsType

`func (o *KmsSettingsConfig) HasKmsType() bool`

HasKmsType returns a boolean if a field has been set.

### GetRegion

`func (o *KmsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *KmsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *KmsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *KmsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *KmsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *KmsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *KmsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *KmsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


