# AwsSqsS3CloudtrailSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkingMode** | Pointer to [**AwsSqsS3CloudtrailChunkingMode**](AwsSqsS3CloudtrailChunkingMode.md) |  | [optional] 
**ExcludeDigestFiles** | Pointer to **bool** | ExcludeDigestFiles skips keys containing \&quot;/CloudTrail-Digest/\&quot; (hash signatures, not events). | [optional] 
**QueueUrl** | **string** |  | 
**Region** | **string** |  | 
**RoleArn** | Pointer to **string** |  | [optional] 
**UsesSns** | Pointer to **bool** |  | [optional] 
**WithMetadata** | Pointer to **bool** |  | [optional] 

## Methods

### NewAwsSqsS3CloudtrailSettingsConfig

`func NewAwsSqsS3CloudtrailSettingsConfig(queueUrl string, region string, ) *AwsSqsS3CloudtrailSettingsConfig`

NewAwsSqsS3CloudtrailSettingsConfig instantiates a new AwsSqsS3CloudtrailSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsSqsS3CloudtrailSettingsConfigWithDefaults

`func NewAwsSqsS3CloudtrailSettingsConfigWithDefaults() *AwsSqsS3CloudtrailSettingsConfig`

NewAwsSqsS3CloudtrailSettingsConfigWithDefaults instantiates a new AwsSqsS3CloudtrailSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChunkingMode

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetChunkingMode() AwsSqsS3CloudtrailChunkingMode`

GetChunkingMode returns the ChunkingMode field if non-nil, zero value otherwise.

### GetChunkingModeOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetChunkingModeOk() (*AwsSqsS3CloudtrailChunkingMode, bool)`

GetChunkingModeOk returns a tuple with the ChunkingMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkingMode

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetChunkingMode(v AwsSqsS3CloudtrailChunkingMode)`

SetChunkingMode sets ChunkingMode field to given value.

### HasChunkingMode

`func (o *AwsSqsS3CloudtrailSettingsConfig) HasChunkingMode() bool`

HasChunkingMode returns a boolean if a field has been set.

### GetExcludeDigestFiles

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetExcludeDigestFiles() bool`

GetExcludeDigestFiles returns the ExcludeDigestFiles field if non-nil, zero value otherwise.

### GetExcludeDigestFilesOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetExcludeDigestFilesOk() (*bool, bool)`

GetExcludeDigestFilesOk returns a tuple with the ExcludeDigestFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeDigestFiles

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetExcludeDigestFiles(v bool)`

SetExcludeDigestFiles sets ExcludeDigestFiles field to given value.

### HasExcludeDigestFiles

`func (o *AwsSqsS3CloudtrailSettingsConfig) HasExcludeDigestFiles() bool`

HasExcludeDigestFiles returns a boolean if a field has been set.

### GetQueueUrl

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.


### GetRegion

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetRoleArn

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *AwsSqsS3CloudtrailSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUsesSns

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetUsesSns() bool`

GetUsesSns returns the UsesSns field if non-nil, zero value otherwise.

### GetUsesSnsOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetUsesSnsOk() (*bool, bool)`

GetUsesSnsOk returns a tuple with the UsesSns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsesSns

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetUsesSns(v bool)`

SetUsesSns sets UsesSns field to given value.

### HasUsesSns

`func (o *AwsSqsS3CloudtrailSettingsConfig) HasUsesSns() bool`

HasUsesSns returns a boolean if a field has been set.

### GetWithMetadata

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetWithMetadata() bool`

GetWithMetadata returns the WithMetadata field if non-nil, zero value otherwise.

### GetWithMetadataOk

`func (o *AwsSqsS3CloudtrailSettingsConfig) GetWithMetadataOk() (*bool, bool)`

GetWithMetadataOk returns a tuple with the WithMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithMetadata

`func (o *AwsSqsS3CloudtrailSettingsConfig) SetWithMetadata(v bool)`

SetWithMetadata sets WithMetadata field to given value.

### HasWithMetadata

`func (o *AwsSqsS3CloudtrailSettingsConfig) HasWithMetadata() bool`

HasWithMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


