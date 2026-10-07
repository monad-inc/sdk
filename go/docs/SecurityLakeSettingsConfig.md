# SecurityLakeSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**BucketUrl** | Pointer to **string** | The name of the S3 bucket where data will be stored | [optional] 
**ParquetFormat** | Pointer to [**ParquetParquetFormatter**](ParquetParquetFormatter.md) |  | [optional] 
**RoleArn** | Pointer to **string** | The Amazon Resource Name (ARN) of the IAM role to assume which grants access to the S3 bucket | [optional] 
**SourceAccountDetails** | Pointer to [**SecurityLakeSourceAccountDetails**](SecurityLakeSourceAccountDetails.md) |  | [optional] 

## Methods

### NewSecurityLakeSettingsConfig

`func NewSecurityLakeSettingsConfig() *SecurityLakeSettingsConfig`

NewSecurityLakeSettingsConfig instantiates a new SecurityLakeSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecurityLakeSettingsConfigWithDefaults

`func NewSecurityLakeSettingsConfigWithDefaults() *SecurityLakeSettingsConfig`

NewSecurityLakeSettingsConfigWithDefaults instantiates a new SecurityLakeSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchConfig

`func (o *SecurityLakeSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *SecurityLakeSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *SecurityLakeSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *SecurityLakeSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetBucketUrl

`func (o *SecurityLakeSettingsConfig) GetBucketUrl() string`

GetBucketUrl returns the BucketUrl field if non-nil, zero value otherwise.

### GetBucketUrlOk

`func (o *SecurityLakeSettingsConfig) GetBucketUrlOk() (*string, bool)`

GetBucketUrlOk returns a tuple with the BucketUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketUrl

`func (o *SecurityLakeSettingsConfig) SetBucketUrl(v string)`

SetBucketUrl sets BucketUrl field to given value.

### HasBucketUrl

`func (o *SecurityLakeSettingsConfig) HasBucketUrl() bool`

HasBucketUrl returns a boolean if a field has been set.

### GetParquetFormat

`func (o *SecurityLakeSettingsConfig) GetParquetFormat() ParquetParquetFormatter`

GetParquetFormat returns the ParquetFormat field if non-nil, zero value otherwise.

### GetParquetFormatOk

`func (o *SecurityLakeSettingsConfig) GetParquetFormatOk() (*ParquetParquetFormatter, bool)`

GetParquetFormatOk returns a tuple with the ParquetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParquetFormat

`func (o *SecurityLakeSettingsConfig) SetParquetFormat(v ParquetParquetFormatter)`

SetParquetFormat sets ParquetFormat field to given value.

### HasParquetFormat

`func (o *SecurityLakeSettingsConfig) HasParquetFormat() bool`

HasParquetFormat returns a boolean if a field has been set.

### GetRoleArn

`func (o *SecurityLakeSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *SecurityLakeSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *SecurityLakeSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *SecurityLakeSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetSourceAccountDetails

`func (o *SecurityLakeSettingsConfig) GetSourceAccountDetails() SecurityLakeSourceAccountDetails`

GetSourceAccountDetails returns the SourceAccountDetails field if non-nil, zero value otherwise.

### GetSourceAccountDetailsOk

`func (o *SecurityLakeSettingsConfig) GetSourceAccountDetailsOk() (*SecurityLakeSourceAccountDetails, bool)`

GetSourceAccountDetailsOk returns a tuple with the SourceAccountDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAccountDetails

`func (o *SecurityLakeSettingsConfig) SetSourceAccountDetails(v SecurityLakeSourceAccountDetails)`

SetSourceAccountDetails sets SourceAccountDetails field to given value.

### HasSourceAccountDetails

`func (o *SecurityLakeSettingsConfig) HasSourceAccountDetails() bool`

HasSourceAccountDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


