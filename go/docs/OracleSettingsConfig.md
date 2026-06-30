# OracleSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from. If not specified, a full sync of is fetched on the first sync. All syncs thereafter will be incremental. | [optional] 
**Domain** | **string** | Domain name for the Oracle Cloud service | 
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**Username** | **string** | Username of Oracle Cloud service user with permissions to access the resource | 

## Methods

### NewOracleSettingsConfig

`func NewOracleSettingsConfig(domain string, username string, ) *OracleSettingsConfig`

NewOracleSettingsConfig instantiates a new OracleSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOracleSettingsConfigWithDefaults

`func NewOracleSettingsConfigWithDefaults() *OracleSettingsConfig`

NewOracleSettingsConfigWithDefaults instantiates a new OracleSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBackfillStartTime

`func (o *OracleSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *OracleSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *OracleSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *OracleSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetDomain

`func (o *OracleSettingsConfig) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *OracleSettingsConfig) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *OracleSettingsConfig) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRateLimit

`func (o *OracleSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *OracleSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *OracleSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *OracleSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *OracleSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *OracleSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *OracleSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *OracleSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetUsername

`func (o *OracleSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *OracleSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *OracleSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


