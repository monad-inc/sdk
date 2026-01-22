# KvLookupOutputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyField** | Pointer to **string** | The field in the incoming record to use as the key | [optional] 
**Ttl** | Pointer to **int32** | Time-to-live in hours for stored key-value pairs (0 means no expiration) | [optional] 
**ValueField** | Pointer to **string** | The field in the incoming record to use as the value | [optional] 

## Methods

### NewKvLookupOutputSettingsConfig

`func NewKvLookupOutputSettingsConfig() *KvLookupOutputSettingsConfig`

NewKvLookupOutputSettingsConfig instantiates a new KvLookupOutputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKvLookupOutputSettingsConfigWithDefaults

`func NewKvLookupOutputSettingsConfigWithDefaults() *KvLookupOutputSettingsConfig`

NewKvLookupOutputSettingsConfigWithDefaults instantiates a new KvLookupOutputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyField

`func (o *KvLookupOutputSettingsConfig) GetKeyField() string`

GetKeyField returns the KeyField field if non-nil, zero value otherwise.

### GetKeyFieldOk

`func (o *KvLookupOutputSettingsConfig) GetKeyFieldOk() (*string, bool)`

GetKeyFieldOk returns a tuple with the KeyField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyField

`func (o *KvLookupOutputSettingsConfig) SetKeyField(v string)`

SetKeyField sets KeyField field to given value.

### HasKeyField

`func (o *KvLookupOutputSettingsConfig) HasKeyField() bool`

HasKeyField returns a boolean if a field has been set.

### GetTtl

`func (o *KvLookupOutputSettingsConfig) GetTtl() int32`

GetTtl returns the Ttl field if non-nil, zero value otherwise.

### GetTtlOk

`func (o *KvLookupOutputSettingsConfig) GetTtlOk() (*int32, bool)`

GetTtlOk returns a tuple with the Ttl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtl

`func (o *KvLookupOutputSettingsConfig) SetTtl(v int32)`

SetTtl sets Ttl field to given value.

### HasTtl

`func (o *KvLookupOutputSettingsConfig) HasTtl() bool`

HasTtl returns a boolean if a field has been set.

### GetValueField

`func (o *KvLookupOutputSettingsConfig) GetValueField() string`

GetValueField returns the ValueField field if non-nil, zero value otherwise.

### GetValueFieldOk

`func (o *KvLookupOutputSettingsConfig) GetValueFieldOk() (*string, bool)`

GetValueFieldOk returns a tuple with the ValueField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueField

`func (o *KvLookupOutputSettingsConfig) SetValueField(v string)`

SetValueField sets ValueField field to given value.

### HasValueField

`func (o *KvLookupOutputSettingsConfig) HasValueField() bool`

HasValueField returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


