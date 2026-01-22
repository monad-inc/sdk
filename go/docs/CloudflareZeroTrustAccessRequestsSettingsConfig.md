# CloudflareZeroTrustAccessRequestsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Cloudflare Account ID | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from (RFC3339 format) | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Methods

### NewCloudflareZeroTrustAccessRequestsSettingsConfig

`func NewCloudflareZeroTrustAccessRequestsSettingsConfig() *CloudflareZeroTrustAccessRequestsSettingsConfig`

NewCloudflareZeroTrustAccessRequestsSettingsConfig instantiates a new CloudflareZeroTrustAccessRequestsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareZeroTrustAccessRequestsSettingsConfigWithDefaults

`func NewCloudflareZeroTrustAccessRequestsSettingsConfigWithDefaults() *CloudflareZeroTrustAccessRequestsSettingsConfig`

NewCloudflareZeroTrustAccessRequestsSettingsConfigWithDefaults instantiates a new CloudflareZeroTrustAccessRequestsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareZeroTrustAccessRequestsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


