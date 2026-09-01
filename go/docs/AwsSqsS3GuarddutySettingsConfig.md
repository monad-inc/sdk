# AwsSqsS3GuarddutySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueueUrl** | **string** |  | 
**Region** | **string** |  | 
**RoleArn** | Pointer to **string** |  | [optional] 
**UseFips** | Pointer to **bool** |  | [optional] 
**UsesSns** | Pointer to **bool** |  | [optional] 
**WithMetadata** | Pointer to **bool** |  | [optional] 

## Methods

### NewAwsSqsS3GuarddutySettingsConfig

`func NewAwsSqsS3GuarddutySettingsConfig(queueUrl string, region string, ) *AwsSqsS3GuarddutySettingsConfig`

NewAwsSqsS3GuarddutySettingsConfig instantiates a new AwsSqsS3GuarddutySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsSqsS3GuarddutySettingsConfigWithDefaults

`func NewAwsSqsS3GuarddutySettingsConfigWithDefaults() *AwsSqsS3GuarddutySettingsConfig`

NewAwsSqsS3GuarddutySettingsConfigWithDefaults instantiates a new AwsSqsS3GuarddutySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueueUrl

`func (o *AwsSqsS3GuarddutySettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *AwsSqsS3GuarddutySettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.


### GetRegion

`func (o *AwsSqsS3GuarddutySettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwsSqsS3GuarddutySettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetRoleArn

`func (o *AwsSqsS3GuarddutySettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwsSqsS3GuarddutySettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwsSqsS3GuarddutySettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUseFips

`func (o *AwsSqsS3GuarddutySettingsConfig) GetUseFips() bool`

GetUseFips returns the UseFips field if non-nil, zero value otherwise.

### GetUseFipsOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetUseFipsOk() (*bool, bool)`

GetUseFipsOk returns a tuple with the UseFips field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseFips

`func (o *AwsSqsS3GuarddutySettingsConfig) SetUseFips(v bool)`

SetUseFips sets UseFips field to given value.

### HasUseFips

`func (o *AwsSqsS3GuarddutySettingsConfig) HasUseFips() bool`

HasUseFips returns a boolean if a field has been set.

### GetUsesSns

`func (o *AwsSqsS3GuarddutySettingsConfig) GetUsesSns() bool`

GetUsesSns returns the UsesSns field if non-nil, zero value otherwise.

### GetUsesSnsOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetUsesSnsOk() (*bool, bool)`

GetUsesSnsOk returns a tuple with the UsesSns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsesSns

`func (o *AwsSqsS3GuarddutySettingsConfig) SetUsesSns(v bool)`

SetUsesSns sets UsesSns field to given value.

### HasUsesSns

`func (o *AwsSqsS3GuarddutySettingsConfig) HasUsesSns() bool`

HasUsesSns returns a boolean if a field has been set.

### GetWithMetadata

`func (o *AwsSqsS3GuarddutySettingsConfig) GetWithMetadata() bool`

GetWithMetadata returns the WithMetadata field if non-nil, zero value otherwise.

### GetWithMetadataOk

`func (o *AwsSqsS3GuarddutySettingsConfig) GetWithMetadataOk() (*bool, bool)`

GetWithMetadataOk returns a tuple with the WithMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithMetadata

`func (o *AwsSqsS3GuarddutySettingsConfig) SetWithMetadata(v bool)`

SetWithMetadata sets WithMetadata field to given value.

### HasWithMetadata

`func (o *AwsSqsS3GuarddutySettingsConfig) HasWithMetadata() bool`

HasWithMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


