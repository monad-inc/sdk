# ScannerSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Auth** | Pointer to [**ScannerAuthConfig**](ScannerAuthConfig.md) |  | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Bucket** | **string** | The S3 bucket in your AWS account that Scanner indexes. | 
**Compression** | **string** | Compression applied before upload. Scanner indexes both uncompressed and gzip objects. | 
**Format** | Pointer to [**ScannerFormatConfig**](ScannerFormatConfig.md) |  | [optional] 
**PartitionFormat** | Pointer to **string** | Directory structure used to partition stored objects. | [optional] 
**Prefix** | Pointer to **string** | Optional prefix for S3 object keys. Should match the prefix on the Scanner source. | [optional] 
**Region** | **string** | The AWS region where the S3 bucket is located. | 

## Methods

### NewScannerSettingsConfig

`func NewScannerSettingsConfig(bucket string, compression string, region string, ) *ScannerSettingsConfig`

NewScannerSettingsConfig instantiates a new ScannerSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScannerSettingsConfigWithDefaults

`func NewScannerSettingsConfigWithDefaults() *ScannerSettingsConfig`

NewScannerSettingsConfigWithDefaults instantiates a new ScannerSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuth

`func (o *ScannerSettingsConfig) GetAuth() ScannerAuthConfig`

GetAuth returns the Auth field if non-nil, zero value otherwise.

### GetAuthOk

`func (o *ScannerSettingsConfig) GetAuthOk() (*ScannerAuthConfig, bool)`

GetAuthOk returns a tuple with the Auth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuth

`func (o *ScannerSettingsConfig) SetAuth(v ScannerAuthConfig)`

SetAuth sets Auth field to given value.

### HasAuth

`func (o *ScannerSettingsConfig) HasAuth() bool`

HasAuth returns a boolean if a field has been set.

### GetBatchConfig

`func (o *ScannerSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *ScannerSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *ScannerSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *ScannerSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBucket

`func (o *ScannerSettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *ScannerSettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *ScannerSettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.


### GetCompression

`func (o *ScannerSettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *ScannerSettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *ScannerSettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.


### GetFormat

`func (o *ScannerSettingsConfig) GetFormat() ScannerFormatConfig`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *ScannerSettingsConfig) GetFormatOk() (*ScannerFormatConfig, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *ScannerSettingsConfig) SetFormat(v ScannerFormatConfig)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *ScannerSettingsConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *ScannerSettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *ScannerSettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *ScannerSettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *ScannerSettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *ScannerSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *ScannerSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *ScannerSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *ScannerSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *ScannerSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *ScannerSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *ScannerSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


