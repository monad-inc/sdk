# AwssecurityhubSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**QueueUrl** | Pointer to **string** | QueueUrl is the URL of the SQS queue to be used for AWS Security Hub integration. | [optional] 
**Region** | Pointer to **string** | Region is the AWS region where the SQS queue and Security Hub are located. | [optional] 
**RoleArn** | Pointer to **string** | RoleArn is the ARN of the IAM role to assume for accessing AWS Queue. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewAwssecurityhubSettingsConfig

`func NewAwssecurityhubSettingsConfig() *AwssecurityhubSettingsConfig`

NewAwssecurityhubSettingsConfig instantiates a new AwssecurityhubSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwssecurityhubSettingsConfigWithDefaults

`func NewAwssecurityhubSettingsConfigWithDefaults() *AwssecurityhubSettingsConfig`

NewAwssecurityhubSettingsConfigWithDefaults instantiates a new AwssecurityhubSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *AwssecurityhubSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *AwssecurityhubSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *AwssecurityhubSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *AwssecurityhubSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetQueueUrl

`func (o *AwssecurityhubSettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *AwssecurityhubSettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *AwssecurityhubSettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *AwssecurityhubSettingsConfig) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetRegion

`func (o *AwssecurityhubSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwssecurityhubSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwssecurityhubSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AwssecurityhubSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *AwssecurityhubSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwssecurityhubSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwssecurityhubSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwssecurityhubSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AwssecurityhubSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AwssecurityhubSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AwssecurityhubSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AwssecurityhubSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


