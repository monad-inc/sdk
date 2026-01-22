# KvLookupSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationKey** | Pointer to **string** | DestinationKey is the path where the result will be stored in the record | [optional] 
**ErrorOnMissingKey** | Pointer to **bool** | ErrorOnMissingKey If true, throw an error when key is not found in the KV store | [optional] 
**JoinPath** | Pointer to **string** | JoinPath is the path to a field whose values will be used as the lookup keys | [optional] 
**KvLookupOutputId** | Pointer to **string** | KVLookupOutputID is the id of the KV lookup output to join with | [optional] 
**NoMatchResponse** | Pointer to **string** | NoMatchResponse is the value to add to the record when no match is found | [optional] 

## Methods

### NewKvLookupSettingsConfig

`func NewKvLookupSettingsConfig() *KvLookupSettingsConfig`

NewKvLookupSettingsConfig instantiates a new KvLookupSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKvLookupSettingsConfigWithDefaults

`func NewKvLookupSettingsConfigWithDefaults() *KvLookupSettingsConfig`

NewKvLookupSettingsConfigWithDefaults instantiates a new KvLookupSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationKey

`func (o *KvLookupSettingsConfig) GetDestinationKey() string`

GetDestinationKey returns the DestinationKey field if non-nil, zero value otherwise.

### GetDestinationKeyOk

`func (o *KvLookupSettingsConfig) GetDestinationKeyOk() (*string, bool)`

GetDestinationKeyOk returns a tuple with the DestinationKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationKey

`func (o *KvLookupSettingsConfig) SetDestinationKey(v string)`

SetDestinationKey sets DestinationKey field to given value.

### HasDestinationKey

`func (o *KvLookupSettingsConfig) HasDestinationKey() bool`

HasDestinationKey returns a boolean if a field has been set.

### GetErrorOnMissingKey

`func (o *KvLookupSettingsConfig) GetErrorOnMissingKey() bool`

GetErrorOnMissingKey returns the ErrorOnMissingKey field if non-nil, zero value otherwise.

### GetErrorOnMissingKeyOk

`func (o *KvLookupSettingsConfig) GetErrorOnMissingKeyOk() (*bool, bool)`

GetErrorOnMissingKeyOk returns a tuple with the ErrorOnMissingKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorOnMissingKey

`func (o *KvLookupSettingsConfig) SetErrorOnMissingKey(v bool)`

SetErrorOnMissingKey sets ErrorOnMissingKey field to given value.

### HasErrorOnMissingKey

`func (o *KvLookupSettingsConfig) HasErrorOnMissingKey() bool`

HasErrorOnMissingKey returns a boolean if a field has been set.

### GetJoinPath

`func (o *KvLookupSettingsConfig) GetJoinPath() string`

GetJoinPath returns the JoinPath field if non-nil, zero value otherwise.

### GetJoinPathOk

`func (o *KvLookupSettingsConfig) GetJoinPathOk() (*string, bool)`

GetJoinPathOk returns a tuple with the JoinPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinPath

`func (o *KvLookupSettingsConfig) SetJoinPath(v string)`

SetJoinPath sets JoinPath field to given value.

### HasJoinPath

`func (o *KvLookupSettingsConfig) HasJoinPath() bool`

HasJoinPath returns a boolean if a field has been set.

### GetKvLookupOutputId

`func (o *KvLookupSettingsConfig) GetKvLookupOutputId() string`

GetKvLookupOutputId returns the KvLookupOutputId field if non-nil, zero value otherwise.

### GetKvLookupOutputIdOk

`func (o *KvLookupSettingsConfig) GetKvLookupOutputIdOk() (*string, bool)`

GetKvLookupOutputIdOk returns a tuple with the KvLookupOutputId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKvLookupOutputId

`func (o *KvLookupSettingsConfig) SetKvLookupOutputId(v string)`

SetKvLookupOutputId sets KvLookupOutputId field to given value.

### HasKvLookupOutputId

`func (o *KvLookupSettingsConfig) HasKvLookupOutputId() bool`

HasKvLookupOutputId returns a boolean if a field has been set.

### GetNoMatchResponse

`func (o *KvLookupSettingsConfig) GetNoMatchResponse() string`

GetNoMatchResponse returns the NoMatchResponse field if non-nil, zero value otherwise.

### GetNoMatchResponseOk

`func (o *KvLookupSettingsConfig) GetNoMatchResponseOk() (*string, bool)`

GetNoMatchResponseOk returns a tuple with the NoMatchResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoMatchResponse

`func (o *KvLookupSettingsConfig) SetNoMatchResponse(v string)`

SetNoMatchResponse sets NoMatchResponse field to given value.

### HasNoMatchResponse

`func (o *KvLookupSettingsConfig) HasNoMatchResponse() bool`

HasNoMatchResponse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


