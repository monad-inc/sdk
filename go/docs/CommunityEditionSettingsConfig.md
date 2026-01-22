# CommunityEditionSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationPath** | Pointer to **string** | DestinationPath is the path where the GreyNoise data will be stored | [optional] 
**ErrorOnRateLimit** | Pointer to **bool** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) | [optional] 
**IpAddressPath** | Pointer to **string** | IPAddressPath is the path to a field containing an IP address to look up | [optional] 
**NoMatchResponse** | Pointer to **string** | NoMatchResponse is the value to add when no match is found | [optional] 
**RateLimitResponse** | Pointer to **string** | RateLimitResponse is the value to add when rate limited | [optional] 

## Methods

### NewCommunityEditionSettingsConfig

`func NewCommunityEditionSettingsConfig() *CommunityEditionSettingsConfig`

NewCommunityEditionSettingsConfig instantiates a new CommunityEditionSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunityEditionSettingsConfigWithDefaults

`func NewCommunityEditionSettingsConfigWithDefaults() *CommunityEditionSettingsConfig`

NewCommunityEditionSettingsConfigWithDefaults instantiates a new CommunityEditionSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationPath

`func (o *CommunityEditionSettingsConfig) GetDestinationPath() string`

GetDestinationPath returns the DestinationPath field if non-nil, zero value otherwise.

### GetDestinationPathOk

`func (o *CommunityEditionSettingsConfig) GetDestinationPathOk() (*string, bool)`

GetDestinationPathOk returns a tuple with the DestinationPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationPath

`func (o *CommunityEditionSettingsConfig) SetDestinationPath(v string)`

SetDestinationPath sets DestinationPath field to given value.

### HasDestinationPath

`func (o *CommunityEditionSettingsConfig) HasDestinationPath() bool`

HasDestinationPath returns a boolean if a field has been set.

### GetErrorOnRateLimit

`func (o *CommunityEditionSettingsConfig) GetErrorOnRateLimit() bool`

GetErrorOnRateLimit returns the ErrorOnRateLimit field if non-nil, zero value otherwise.

### GetErrorOnRateLimitOk

`func (o *CommunityEditionSettingsConfig) GetErrorOnRateLimitOk() (*bool, bool)`

GetErrorOnRateLimitOk returns a tuple with the ErrorOnRateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorOnRateLimit

`func (o *CommunityEditionSettingsConfig) SetErrorOnRateLimit(v bool)`

SetErrorOnRateLimit sets ErrorOnRateLimit field to given value.

### HasErrorOnRateLimit

`func (o *CommunityEditionSettingsConfig) HasErrorOnRateLimit() bool`

HasErrorOnRateLimit returns a boolean if a field has been set.

### GetIpAddressPath

`func (o *CommunityEditionSettingsConfig) GetIpAddressPath() string`

GetIpAddressPath returns the IpAddressPath field if non-nil, zero value otherwise.

### GetIpAddressPathOk

`func (o *CommunityEditionSettingsConfig) GetIpAddressPathOk() (*string, bool)`

GetIpAddressPathOk returns a tuple with the IpAddressPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddressPath

`func (o *CommunityEditionSettingsConfig) SetIpAddressPath(v string)`

SetIpAddressPath sets IpAddressPath field to given value.

### HasIpAddressPath

`func (o *CommunityEditionSettingsConfig) HasIpAddressPath() bool`

HasIpAddressPath returns a boolean if a field has been set.

### GetNoMatchResponse

`func (o *CommunityEditionSettingsConfig) GetNoMatchResponse() string`

GetNoMatchResponse returns the NoMatchResponse field if non-nil, zero value otherwise.

### GetNoMatchResponseOk

`func (o *CommunityEditionSettingsConfig) GetNoMatchResponseOk() (*string, bool)`

GetNoMatchResponseOk returns a tuple with the NoMatchResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoMatchResponse

`func (o *CommunityEditionSettingsConfig) SetNoMatchResponse(v string)`

SetNoMatchResponse sets NoMatchResponse field to given value.

### HasNoMatchResponse

`func (o *CommunityEditionSettingsConfig) HasNoMatchResponse() bool`

HasNoMatchResponse returns a boolean if a field has been set.

### GetRateLimitResponse

`func (o *CommunityEditionSettingsConfig) GetRateLimitResponse() string`

GetRateLimitResponse returns the RateLimitResponse field if non-nil, zero value otherwise.

### GetRateLimitResponseOk

`func (o *CommunityEditionSettingsConfig) GetRateLimitResponseOk() (*string, bool)`

GetRateLimitResponseOk returns a tuple with the RateLimitResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimitResponse

`func (o *CommunityEditionSettingsConfig) SetRateLimitResponse(v string)`

SetRateLimitResponse sets RateLimitResponse field to given value.

### HasRateLimitResponse

`func (o *CommunityEditionSettingsConfig) HasRateLimitResponse() bool`

HasRateLimitResponse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


