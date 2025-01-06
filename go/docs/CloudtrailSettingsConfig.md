# CloudtrailSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Bucket** | Pointer to **string** | The name of the S3 bucket | [optional] 
**Prefix** | Pointer to **string** | Prefix of the S3 object keys to read. | [optional] 
**Region** | Pointer to **string** | The region of the S3 bucket | [optional] 
**RoleArn** | Pointer to **string** | The ARN of the role to assume to access the bucket | [optional] 

## Methods

### NewCloudtrailSettingsConfig

`func NewCloudtrailSettingsConfig() *CloudtrailSettingsConfig`

NewCloudtrailSettingsConfig instantiates a new CloudtrailSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudtrailSettingsConfigWithDefaults

`func NewCloudtrailSettingsConfigWithDefaults() *CloudtrailSettingsConfig`

NewCloudtrailSettingsConfigWithDefaults instantiates a new CloudtrailSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBucket

`func (o *CloudtrailSettingsConfig) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *CloudtrailSettingsConfig) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *CloudtrailSettingsConfig) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *CloudtrailSettingsConfig) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetPrefix

`func (o *CloudtrailSettingsConfig) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *CloudtrailSettingsConfig) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *CloudtrailSettingsConfig) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *CloudtrailSettingsConfig) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRegion

`func (o *CloudtrailSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *CloudtrailSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *CloudtrailSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *CloudtrailSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *CloudtrailSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *CloudtrailSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *CloudtrailSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *CloudtrailSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


