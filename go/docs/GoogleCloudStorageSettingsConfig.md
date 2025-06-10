# GoogleCloudStorageSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BucketName** | Pointer to **string** | The name of the Google Cloud Storage bucket to use | [optional] 
**Compression** | Pointer to **string** | Compression format of the Google Cloud Storage objects. | [optional] 
**Format** | Pointer to **string** | The format of the files in the bucket, e.g., \&quot;json\&quot;, \&quot;csv\&quot;, etc. | [optional] 
**PartitionFormat** | Pointer to **string** | Specifies the partition format of your bucket. Select the option that matches how your data is currently organized. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization. | [optional] 
**Prefix** | Pointer to **string** | The prefix to use when reading from the bucket. This is used to filter objects in the bucket. | [optional] 
**ProjectId** | Pointer to **string** | The Google Cloud project ID to use | [optional] 
**RecordLocation** | Pointer to **string** | Location of the record in the JSON object. Applies only if the format is JSON. | [optional] 

## Methods

### NewGoogleCloudStorageSettingsConfig

`func NewGoogleCloudStorageSettingsConfig() *GoogleCloudStorageSettingsConfig`

NewGoogleCloudStorageSettingsConfig instantiates a new GoogleCloudStorageSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGoogleCloudStorageSettingsConfigWithDefaults

`func NewGoogleCloudStorageSettingsConfigWithDefaults() *GoogleCloudStorageSettingsConfig`

NewGoogleCloudStorageSettingsConfigWithDefaults instantiates a new GoogleCloudStorageSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBucketName

`func (o *GoogleCloudStorageSettingsConfig) GetBucketName() string`

GetBucketName returns the BucketName field if non-nil, zero value otherwise.

### GetBucketNameOk

`func (o *GoogleCloudStorageSettingsConfig) GetBucketNameOk() (*string, bool)`

GetBucketNameOk returns a tuple with the BucketName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucketName

`func (o *GoogleCloudStorageSettingsConfig) SetBucketName(v string)`

SetBucketName sets BucketName field to given value.

### HasBucketName

`func (o *GoogleCloudStorageSettingsConfig) HasBucketName() bool`

HasBucketName returns a boolean if a field has been set.

### GetCompression

`func (o *GoogleCloudStorageSettingsConfig) GetCompression() string`

GetCompression returns the Compression field if non-nil, zero value otherwise.

### GetCompressionOk

`func (o *GoogleCloudStorageSettingsConfig) GetCompressionOk() (*string, bool)`

GetCompressionOk returns a tuple with the Compression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompression

`func (o *GoogleCloudStorageSettingsConfig) SetCompression(v string)`

SetCompression sets Compression field to given value.

### HasCompression

`func (o *GoogleCloudStorageSettingsConfig) HasCompression() bool`

HasCompression returns a boolean if a field has been set.

### GetFormat

`func (o *GoogleCloudStorageSettingsConfig) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *GoogleCloudStorageSettingsConfig) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *GoogleCloudStorageSettingsConfig) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *GoogleCloudStorageSettingsConfig) HasFormat() bool`

HasFormat returns a boolean if a field has been set.

### GetPartitionFormat

`func (o *GoogleCloudStorageSettingsConfig) GetPartitionFormat() string`

GetPartitionFormat returns the PartitionFormat field if non-nil, zero value otherwise.

### GetPartitionFormatOk

`func (o *GoogleCloudStorageSettingsConfig) GetPartitionFormatOk() (*string, bool)`

GetPartitionFormatOk returns a tuple with the PartitionFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPartitionFormat

`func (o *GoogleCloudStorageSettingsConfig) SetPartitionFormat(v string)`

SetPartitionFormat sets PartitionFormat field to given value.

### HasPartitionFormat

`func (o *GoogleCloudStorageSettingsConfig) HasPartitionFormat() bool`

HasPartitionFormat returns a boolean if a field has been set.

### GetPrefix

`func (o *GoogleCloudStorageSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *GoogleCloudStorageSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *GoogleCloudStorageSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *GoogleCloudStorageSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetProjectId

`func (o *GoogleCloudStorageSettingsConfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *GoogleCloudStorageSettingsConfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *GoogleCloudStorageSettingsConfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *GoogleCloudStorageSettingsConfig) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### GetRecordLocation

`func (o *GoogleCloudStorageSettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *GoogleCloudStorageSettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *GoogleCloudStorageSettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *GoogleCloudStorageSettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


