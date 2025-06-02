# AwssqsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueueUrl** | Pointer to **string** | The URL of the SQS queue to poll for messages. | [optional] 
**Region** | Pointer to **string** | The AWS region where the SQS queue is located. | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 

## Methods

### NewAwssqsSettingsConfig

`func NewAwssqsSettingsConfig() *AwssqsSettingsConfig`

NewAwssqsSettingsConfig instantiates a new AwssqsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwssqsSettingsConfigWithDefaults

`func NewAwssqsSettingsConfigWithDefaults() *AwssqsSettingsConfig`

NewAwssqsSettingsConfigWithDefaults instantiates a new AwssqsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueueUrl

`func (o *AwssqsSettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *AwssqsSettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *AwssqsSettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *AwssqsSettingsConfig) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetRegion

`func (o *AwssqsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwssqsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwssqsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AwssqsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *AwssqsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwssqsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwssqsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwssqsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


