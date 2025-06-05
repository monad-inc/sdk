# AwssqsoutputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageGroupId** | Pointer to **string** | The message group ID for FIFO queues. This is required for FIFO queues. | [optional] 
**QueueType** | Pointer to **string** | The type of SQS queue to use. Can be either \&quot;standard\&quot; or \&quot;fifo\&quot;. | [optional] 
**QueueUrl** | Pointer to **string** | The URL of the SQS queue to poll for messages. | [optional] 
**Region** | Pointer to **string** | The AWS region where the SQS queue is located. | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 

## Methods

### NewAwssqsoutputSettingsConfig

`func NewAwssqsoutputSettingsConfig() *AwssqsoutputSettingsConfig`

NewAwssqsoutputSettingsConfig instantiates a new AwssqsoutputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwssqsoutputSettingsConfigWithDefaults

`func NewAwssqsoutputSettingsConfigWithDefaults() *AwssqsoutputSettingsConfig`

NewAwssqsoutputSettingsConfigWithDefaults instantiates a new AwssqsoutputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageGroupId

`func (o *AwssqsoutputSettingsConfig) GetMessageGroupId() string`

GetMessageGroupId returns the MessageGroupId field if non-nil, zero value otherwise.

### GetMessageGroupIdOk

`func (o *AwssqsoutputSettingsConfig) GetMessageGroupIdOk() (*string, bool)`

GetMessageGroupIdOk returns a tuple with the MessageGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageGroupId

`func (o *AwssqsoutputSettingsConfig) SetMessageGroupId(v string)`

SetMessageGroupId sets MessageGroupId field to given value.

### HasMessageGroupId

`func (o *AwssqsoutputSettingsConfig) HasMessageGroupId() bool`

HasMessageGroupId returns a boolean if a field has been set.

### GetQueueType

`func (o *AwssqsoutputSettingsConfig) GetQueueType() string`

GetQueueType returns the QueueType field if non-nil, zero value otherwise.

### GetQueueTypeOk

`func (o *AwssqsoutputSettingsConfig) GetQueueTypeOk() (*string, bool)`

GetQueueTypeOk returns a tuple with the QueueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueType

`func (o *AwssqsoutputSettingsConfig) SetQueueType(v string)`

SetQueueType sets QueueType field to given value.

### HasQueueType

`func (o *AwssqsoutputSettingsConfig) HasQueueType() bool`

HasQueueType returns a boolean if a field has been set.

### GetQueueUrl

`func (o *AwssqsoutputSettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *AwssqsoutputSettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *AwssqsoutputSettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *AwssqsoutputSettingsConfig) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetRegion

`func (o *AwssqsoutputSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwssqsoutputSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwssqsoutputSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AwssqsoutputSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *AwssqsoutputSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwssqsoutputSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwssqsoutputSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwssqsoutputSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


