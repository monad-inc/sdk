# Awssqss3SettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Compression** | **string** | Compression of S3 objects. oneof must mirror compression_handlers.ListCompressions(); TestCompressionFormatTagDrift guards drift. | 
**Format** | **string** | Format of S3 objects. oneof must mirror format_handlers.ListFormats(); TestCompressionFormatTagDrift guards drift. csv is omitted because format_handlers&#39; package init wipes its Formats map after per-file inits register, so ListFormats() doesn&#39;t include csv today. | 
**KeyFilter** | Pointer to [**SqsS3BaseKeyFilter**](SqsS3BaseKeyFilter.md) |  | [optional] 
**QueueUrl** | **string** |  | 
**RecordLocation** | Pointer to **string** | Record location within each parsed object. JSON only; empty &#x3D; whole record. | [optional] 
**Region** | **string** |  | 
**RoleArn** | Pointer to **string** |  | [optional] 
**UsesSns** | Pointer to **bool** |  | [optional] 
**WithMetadata** | Pointer to **bool** |  | [optional] 

## Methods

### NewAwssqss3SettingsConfig

`func NewAwssqss3SettingsConfig(compression string, format string, queueUrl string, region string, ) *Awssqss3SettingsConfig`

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


### GetKeyFilter

`func (o *Awssqss3SettingsConfig) GetKeyFilter() SqsS3BaseKeyFilter`

GetKeyFilter returns the KeyFilter field if non-nil, zero value otherwise.

### GetKeyFilterOk

`func (o *Awssqss3SettingsConfig) GetKeyFilterOk() (*SqsS3BaseKeyFilter, bool)`

GetKeyFilterOk returns a tuple with the KeyFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyFilter

`func (o *Awssqss3SettingsConfig) SetKeyFilter(v SqsS3BaseKeyFilter)`

SetKeyFilter sets KeyFilter field to given value.

### HasKeyFilter

`func (o *Awssqss3SettingsConfig) HasKeyFilter() bool`

HasKeyFilter returns a boolean if a field has been set.

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

### GetUsesSns

`func (o *Awssqss3SettingsConfig) GetUsesSns() bool`

GetUsesSns returns the UsesSns field if non-nil, zero value otherwise.

### GetUsesSnsOk

`func (o *Awssqss3SettingsConfig) GetUsesSnsOk() (*bool, bool)`

GetUsesSnsOk returns a tuple with the UsesSns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsesSns

`func (o *Awssqss3SettingsConfig) SetUsesSns(v bool)`

SetUsesSns sets UsesSns field to given value.

### HasUsesSns

`func (o *Awssqss3SettingsConfig) HasUsesSns() bool`

HasUsesSns returns a boolean if a field has been set.

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


