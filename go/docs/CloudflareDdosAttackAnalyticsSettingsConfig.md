# CloudflareDdosAttackAnalyticsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Cloudflare Account ID | [optional] 
**BackfillStartTime** | Pointer to **string** | The date to start fetching data from (RFC3339 format). If not specified, fetches all available data within API retention limits. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudflareDdosAttackAnalyticsSettingsConfig

`func NewCloudflareDdosAttackAnalyticsSettingsConfig() *CloudflareDdosAttackAnalyticsSettingsConfig`

NewCloudflareDdosAttackAnalyticsSettingsConfig instantiates a new CloudflareDdosAttackAnalyticsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareDdosAttackAnalyticsSettingsConfigWithDefaults

`func NewCloudflareDdosAttackAnalyticsSettingsConfigWithDefaults() *CloudflareDdosAttackAnalyticsSettingsConfig`

NewCloudflareDdosAttackAnalyticsSettingsConfigWithDefaults instantiates a new CloudflareDdosAttackAnalyticsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareDdosAttackAnalyticsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


