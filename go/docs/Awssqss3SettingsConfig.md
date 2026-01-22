# Awssqss3SettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Compression** | Pointer to **string** | Compression format of the S3 objects. | [optional] 
**Format** | Pointer to **string** | File format of the S3 objects. | [optional] 
**QueueUrl** | Pointer to **string** | The URL of the SQS queue to poll for messages. | [optional] 
**RecordLocation** | Pointer to **string** | Location of the record in the JSON object. This can be ignored if the record is not in JSON format. | [optional] 
**Region** | Pointer to **string** | The AWS region where the SQS queue is located. | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the IAM role to assume for accessing the SQS queue. | [optional] 
**WithMetadata** | Pointer to **bool** | Whether to include S3 object metadata in the output. | [optional] 

## Methods

### NewAwssqss3SettingsConfig

`func NewAwssqss3SettingsConfig() *Awssqss3SettingsConfig`

NewAwssqss3SettingsConfig instantiates a new Awssqss3SettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwssqss3SettingsConfigWithDefaults

`func NewAwssqss3SettingsConfigWithDefaults() *Awssqss3SettingsConfig`

NewAwssqss3SettingsConfigWithDefaults instantiates a new Awssqss3SettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompression

`func (o *Awssqss3SettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *Awssqss3SettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *Awssqss3SettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *Awssqss3SettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormat

`func (o *Awssqss3SettingsConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *Awssqss3SettingsConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *Awssqss3SettingsConfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *Awssqss3SettingsConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetQueueUrl

`func (o *Awssqss3SettingsConfig) GetQueueUrl() string`

GetQueueUrl returns the QueueUrl field if non-nil, zero value otherwise.

### GetQueueUrlOk

`func (o *Awssqss3SettingsConfig) GetQueueUrlOk() (*string, bool)`

GetQueueUrlOk returns a tuple with the QueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueUrl

`func (o *Awssqss3SettingsConfig) SetQueueUrl(v string)`

SetQueueUrl sets QueueUrl field to given value.

### HasQueueUrl

`func (o *Awssqss3SettingsConfig) HasQueueUrl() bool`

HasQueueUrl returns a boolean if a field has been set.

### GetRecordLocation

`func (o *Awssqss3SettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *Awssqss3SettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *Awssqss3SettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *Awssqss3SettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetRegion

`func (o *Awssqss3SettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *Awssqss3SettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *Awssqss3SettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *Awssqss3SettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *Awssqss3SettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *Awssqss3SettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *Awssqss3SettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *Awssqss3SettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetWithMetadata

`func (o *Awssqss3SettingsConfig) GetWithMetadata() bool`

GetWithMetadata returns the WithMetadata field if non-nil, zero value otherwise.

### GetWithMetadataOk

`func (o *Awssqss3SettingsConfig) GetWithMetadataOk() (*bool, bool)`

GetWithMetadataOk returns a tuple with the WithMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithMetadata

`func (o *Awssqss3SettingsConfig) SetWithMetadata(v bool)`

SetWithMetadata sets WithMetadata field to given value.

### HasWithMetadata

`func (o *Awssqss3SettingsConfig) HasWithMetadata() bool`

HasWithMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


