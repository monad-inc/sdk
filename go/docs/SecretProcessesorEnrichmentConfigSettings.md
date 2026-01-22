# SecretProcessesorEnrichmentConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationPath** | Pointer to **string** | DestinationPath is the path where Geolocus results will be added to each record | [optional] 
**ErrorOnRateLimit** | Pointer to **bool** | ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false) | [optional] 
**IpAddressPath** | Pointer to **string** | IPAddressPath is the path to a field containing an IP address to look up | [optional] 
**NoMatchResponse** | Pointer to **string** | NoMatchResponse is the value to add to the record when no match is found | [optional] 
**RateLimitResponse** | Pointer to **string** | RateLimitResponse is the value to add when rate limited | [optional] 
**DestinationKey** | Pointer to **string** | DestinationKey is the path where the result will be stored in the record | [optional] 
**ErrorOnMissingKey** | Pointer to **bool** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store | [optional] 
**JoinPath** | Pointer to **string** | JoinPath is the path to a field whose values will be used as the lookup keys | [optional] 
**KvLookupOutputId** | Pointer to **string** | KVLookupOutputID is the id of the KV lookup output to join with | [optional] 

## Methods

### NewSecretProcessesorEnrichmentConfigSettings

`func NewSecretProcessesorEnrichmentConfigSettings() *SecretProcessesorEnrichmentConfigSettings`

NewSecretProcessesorEnrichmentConfigSettings instantiates a new SecretProcessesorEnrichmentConfigSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorEnrichmentConfigSettingsWithDefaults

`func NewSecretProcessesorEnrichmentConfigSettingsWithDefaults() *SecretProcessesorEnrichmentConfigSettings`

NewSecretProcessesorEnrichmentConfigSettingsWithDefaults instantiates a new SecretProcessesorEnrichmentConfigSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationPath

`func (o *SecretProcessesorEnrichmentConfigSettings) GetDestinationPath() string`

GetDestinationPath returns the DestinationPath field if non-nil, zero value otherwise.

### GetDestinationPathOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetDestinationPathOk() (*string, bool)`

GetDestinationPathOk returns a tuple with the DestinationPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationPath

`func (o *SecretProcessesorEnrichmentConfigSettings) SetDestinationPath(v string)`

SetDestinationPath sets DestinationPath field to given value.

### HasDestinationPath

`func (o *SecretProcessesorEnrichmentConfigSettings) HasDestinationPath() bool`

HasDestinationPath returns a boolean if a field has been set.

### GetErrorOnRateLimit

`func (o *SecretProcessesorEnrichmentConfigSettings) GetErrorOnRateLimit() bool`

GetErrorOnRateLimit returns the ErrorOnRateLimit field if non-nil, zero value otherwise.

### GetErrorOnRateLimitOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetErrorOnRateLimitOk() (*bool, bool)`

GetErrorOnRateLimitOk returns a tuple with the ErrorOnRateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorOnRateLimit

`func (o *SecretProcessesorEnrichmentConfigSettings) SetErrorOnRateLimit(v bool)`

SetErrorOnRateLimit sets ErrorOnRateLimit field to given value.

### HasErrorOnRateLimit

`func (o *SecretProcessesorEnrichmentConfigSettings) HasErrorOnRateLimit() bool`

HasErrorOnRateLimit returns a boolean if a field has been set.

### GetIpAddressPath

`func (o *SecretProcessesorEnrichmentConfigSettings) GetIpAddressPath() string`

GetIpAddressPath returns the IpAddressPath field if non-nil, zero value otherwise.

### GetIpAddressPathOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetIpAddressPathOk() (*string, bool)`

GetIpAddressPathOk returns a tuple with the IpAddressPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddressPath

`func (o *SecretProcessesorEnrichmentConfigSettings) SetIpAddressPath(v string)`

SetIpAddressPath sets IpAddressPath field to given value.

### HasIpAddressPath

`func (o *SecretProcessesorEnrichmentConfigSettings) HasIpAddressPath() bool`

HasIpAddressPath returns a boolean if a field has been set.

### GetNoMatchResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) GetNoMatchResponse() string`

GetNoMatchResponse returns the NoMatchResponse field if non-nil, zero value otherwise.

### GetNoMatchResponseOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetNoMatchResponseOk() (*string, bool)`

GetNoMatchResponseOk returns a tuple with the NoMatchResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoMatchResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) SetNoMatchResponse(v string)`

SetNoMatchResponse sets NoMatchResponse field to given value.

### HasNoMatchResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) HasNoMatchResponse() bool`

HasNoMatchResponse returns a boolean if a field has been set.

### GetRateLimitResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) GetRateLimitResponse() string`

GetRateLimitResponse returns the RateLimitResponse field if non-nil, zero value otherwise.

### GetRateLimitResponseOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetRateLimitResponseOk() (*string, bool)`

GetRateLimitResponseOk returns a tuple with the RateLimitResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimitResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) SetRateLimitResponse(v string)`

SetRateLimitResponse sets RateLimitResponse field to given value.

### HasRateLimitResponse

`func (o *SecretProcessesorEnrichmentConfigSettings) HasRateLimitResponse() bool`

HasRateLimitResponse returns a boolean if a field has been set.

### GetDestinationKey

`func (o *SecretProcessesorEnrichmentConfigSettings) GetDestinationKey() string`

GetDestinationKey returns the DestinationKey field if non-nil, zero value otherwise.

### GetDestinationKeyOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetDestinationKeyOk() (*string, bool)`

GetDestinationKeyOk returns a tuple with the DestinationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationKey

`func (o *SecretProcessesorEnrichmentConfigSettings) SetDestinationKey(v string)`

SetDestinationKey sets DestinationKey field to given value.

### HasDestinationKey

`func (o *SecretProcessesorEnrichmentConfigSettings) HasDestinationKey() bool`

HasDestinationKey returns a boolean if a field has been set.

### GetErrorOnMissingKey

`func (o *SecretProcessesorEnrichmentConfigSettings) GetErrorOnMissingKey() bool`

GetErrorOnMissingKey returns the ErrorOnMissingKey field if non-nil, zero value otherwise.

### GetErrorOnMissingKeyOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetErrorOnMissingKeyOk() (*bool, bool)`

GetErrorOnMissingKeyOk returns a tuple with the ErrorOnMissingKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorOnMissingKey

`func (o *SecretProcessesorEnrichmentConfigSettings) SetErrorOnMissingKey(v bool)`

SetErrorOnMissingKey sets ErrorOnMissingKey field to given value.

### HasErrorOnMissingKey

`func (o *SecretProcessesorEnrichmentConfigSettings) HasErrorOnMissingKey() bool`

HasErrorOnMissingKey returns a boolean if a field has been set.

### GetJoinPath

`func (o *SecretProcessesorEnrichmentConfigSettings) GetJoinPath() string`

GetJoinPath returns the JoinPath field if non-nil, zero value otherwise.

### GetJoinPathOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetJoinPathOk() (*string, bool)`

GetJoinPathOk returns a tuple with the JoinPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinPath

`func (o *SecretProcessesorEnrichmentConfigSettings) SetJoinPath(v string)`

SetJoinPath sets JoinPath field to given value.

### HasJoinPath

`func (o *SecretProcessesorEnrichmentConfigSettings) HasJoinPath() bool`

HasJoinPath returns a boolean if a field has been set.

### GetKvLookupOutputId

`func (o *SecretProcessesorEnrichmentConfigSettings) GetKvLookupOutputId() string`

GetKvLookupOutputId returns the KvLookupOutputId field if non-nil, zero value otherwise.

### GetKvLookupOutputIdOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetKvLookupOutputIdOk() (*string, bool)`

GetKvLookupOutputIdOk returns a tuple with the KvLookupOutputId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKvLookupOutputId

`func (o *SecretProcessesorEnrichmentConfigSettings) SetKvLookupOutputId(v string)`

SetKvLookupOutputId sets KvLookupOutputId field to given value.

### HasKvLookupOutputId

`func (o *SecretProcessesorEnrichmentConfigSettings) HasKvLookupOutputId() bool`

HasKvLookupOutputId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


