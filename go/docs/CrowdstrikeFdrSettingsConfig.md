# CrowdstrikeFdrSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwsQueueUrl** | Pointer to **string** | AWS SQS queue URL provided to you by the CrowdStrike Falcon console | [optional] 
**AwsRegionName** | Pointer to **string** | Name of the region where the queue resides | [optional] 
**AwsS3Url** | Pointer to **string** | The URL of the S3 bucket | [optional] 
**Cron** | Pointer to **string** | The time in seconds to wait before each check of the queue for more messages | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**VisibilityTimeout** | Pointer to **int32** | Time in seconds before a message is returned back to the SQS queue | [optional] 

## Methods

### NewCrowdstrikeFdrSettingsConfig

`func NewCrowdstrikeFdrSettingsConfig() *CrowdstrikeFdrSettingsConfig`

NewCrowdstrikeFdrSettingsConfig instantiates a new CrowdstrikeFdrSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCrowdstrikeFdrSettingsConfigWithDefaults

`func NewCrowdstrikeFdrSettingsConfigWithDefaults() *CrowdstrikeFdrSettingsConfig`

NewCrowdstrikeFdrSettingsConfigWithDefaults instantiates a new CrowdstrikeFdrSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwsQueueUrl

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsQueueUrl() string`

GetAwsQueueUrl returns the AwsQueueUrl field if non-nil, zero value otherwise.

### GetAwsQueueUrlOk

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsQueueUrlOk() (*string, bool)`

GetAwsQueueUrlOk returns a tuple with the AwsQueueUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsQueueUrl

`func (o *CrowdstrikeFdrSettingsConfig) SetAwsQueueUrl(v string)`

SetAwsQueueUrl sets AwsQueueUrl field to given value.

### HasAwsQueueUrl

`func (o *CrowdstrikeFdrSettingsConfig) HasAwsQueueUrl() bool`

HasAwsQueueUrl returns a boolean if a field has been set.

### GetAwsRegionName

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsRegionName() string`

GetAwsRegionName returns the AwsRegionName field if non-nil, zero value otherwise.

### GetAwsRegionNameOk

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsRegionNameOk() (*string, bool)`

GetAwsRegionNameOk returns a tuple with the AwsRegionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegionName

`func (o *CrowdstrikeFdrSettingsConfig) SetAwsRegionName(v string)`

SetAwsRegionName sets AwsRegionName field to given value.

### HasAwsRegionName

`func (o *CrowdstrikeFdrSettingsConfig) HasAwsRegionName() bool`

HasAwsRegionName returns a boolean if a field has been set.

### GetAwsS3Url

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsS3Url() string`

GetAwsS3Url returns the AwsS3Url field if non-nil, zero value otherwise.

### GetAwsS3UrlOk

`func (o *CrowdstrikeFdrSettingsConfig) GetAwsS3UrlOk() (*string, bool)`

GetAwsS3UrlOk returns a tuple with the AwsS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsS3Url

`func (o *CrowdstrikeFdrSettingsConfig) SetAwsS3Url(v string)`

SetAwsS3Url sets AwsS3Url field to given value.

### HasAwsS3Url

`func (o *CrowdstrikeFdrSettingsConfig) HasAwsS3Url() bool`

HasAwsS3Url returns a boolean if a field has been set.

### GetCron

`func (o *CrowdstrikeFdrSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CrowdstrikeFdrSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CrowdstrikeFdrSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CrowdstrikeFdrSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CrowdstrikeFdrSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CrowdstrikeFdrSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CrowdstrikeFdrSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CrowdstrikeFdrSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetVisibilityTimeout

`func (o *CrowdstrikeFdrSettingsConfig) GetVisibilityTimeout() int32`

GetVisibilityTimeout returns the VisibilityTimeout field if non-nil, zero value otherwise.

### GetVisibilityTimeoutOk

`func (o *CrowdstrikeFdrSettingsConfig) GetVisibilityTimeoutOk() (*int32, bool)`

GetVisibilityTimeoutOk returns a tuple with the VisibilityTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVisibilityTimeout

`func (o *CrowdstrikeFdrSettingsConfig) SetVisibilityTimeout(v int32)`

SetVisibilityTimeout sets VisibilityTimeout field to given value.

### HasVisibilityTimeout

`func (o *CrowdstrikeFdrSettingsConfig) HasVisibilityTimeout() bool`

HasVisibilityTimeout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


