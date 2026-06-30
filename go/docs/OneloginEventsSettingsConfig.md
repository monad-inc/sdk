# OneloginEventsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateLimit** | Pointer to [**ModelsInputRateLimit**](ModelsInputRateLimit.md) |  | [optional] 
**Subdomain** | **string** | SubDomain is a placeholder that represents your specific OneLogin subdomain. | 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewOneloginEventsSettingsConfig

`func NewOneloginEventsSettingsConfig(subdomain string, ) *OneloginEventsSettingsConfig`

NewOneloginEventsSettingsConfig instantiates a new OneloginEventsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOneloginEventsSettingsConfigWithDefaults

`func NewOneloginEventsSettingsConfigWithDefaults() *OneloginEventsSettingsConfig`

NewOneloginEventsSettingsConfigWithDefaults instantiates a new OneloginEventsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateLimit

`func (o *OneloginEventsSettingsConfig) GetRateLimit() ModelsInputRateLimit`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *OneloginEventsSettingsConfig) GetRateLimitOk() (*ModelsInputRateLimit, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *OneloginEventsSettingsConfig) SetRateLimit(v ModelsInputRateLimit)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *OneloginEventsSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetSubdomain

`func (o *OneloginEventsSettingsConfig) GetSubdomain() string`

GetSubdomain returns the Subdomain field if non-nil, zero value otherwise.

### GetSubdomainOk

`func (o *OneloginEventsSettingsConfig) GetSubdomainOk() (*string, bool)`

GetSubdomainOk returns a tuple with the Subdomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubdomain

`func (o *OneloginEventsSettingsConfig) SetSubdomain(v string)`

SetSubdomain sets Subdomain field to given value.


### GetUseSyntheticData

`func (o *OneloginEventsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *OneloginEventsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *OneloginEventsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *OneloginEventsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


