# SecretProcessesorEnrichmentConfigSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationKey** | Pointer to **string** | DestinationKey the path where the result will be stored in the record. Use &#39;.&#39; for the root object, &#39;field.subfield&#39; for nested properties, &#39;array[0]&#39; for array elements, or combined paths like &#39;users[0].name&#39;. | [optional] 
**ErrorOnMissingKey** | Pointer to **bool** | ErrorOnMissingKey if true, will throw an error if the key is not found in the KV lookup output | [optional] 
**JoinKey** | Pointer to **string** | JoinKey is the key in the record whose value will be used to join with the KV lookup output | [optional] 
**KvLookupOutputId** | Pointer to **string** | KVLookupOutputID is the ID of the KV lookup output to join with | [optional] 

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

### GetJoinKey

`func (o *SecretProcessesorEnrichmentConfigSettings) GetJoinKey() string`

GetJoinKey returns the JoinKey field if non-nil, zero value otherwise.

### GetJoinKeyOk

`func (o *SecretProcessesorEnrichmentConfigSettings) GetJoinKeyOk() (*string, bool)`

GetJoinKeyOk returns a tuple with the JoinKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinKey

`func (o *SecretProcessesorEnrichmentConfigSettings) SetJoinKey(v string)`

SetJoinKey sets JoinKey field to given value.

### HasJoinKey

`func (o *SecretProcessesorEnrichmentConfigSettings) HasJoinKey() bool`

HasJoinKey returns a boolean if a field has been set.

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


