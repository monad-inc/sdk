# RegenerateAPIKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpirationTime** | Pointer to **string** | Omitted (nil) keeps the key&#39;s existing expiration — rotating the secret does not extend the key&#39;s term on its own. | [optional] 

## Methods

### NewRegenerateAPIKeyRequest

`func NewRegenerateAPIKeyRequest() *RegenerateAPIKeyRequest`

NewRegenerateAPIKeyRequest instantiates a new RegenerateAPIKeyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegenerateAPIKeyRequestWithDefaults

`func NewRegenerateAPIKeyRequestWithDefaults() *RegenerateAPIKeyRequest`

NewRegenerateAPIKeyRequestWithDefaults instantiates a new RegenerateAPIKeyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpirationTime

`func (o *RegenerateAPIKeyRequest) GetExpirationTime() string`

GetExpirationTime returns the ExpirationTime field if non-nil, zero value otherwise.

### GetExpirationTimeOk

`func (o *RegenerateAPIKeyRequest) GetExpirationTimeOk() (*string, bool)`

GetExpirationTimeOk returns a tuple with the ExpirationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationTime

`func (o *RegenerateAPIKeyRequest) SetExpirationTime(v string)`

SetExpirationTime sets ExpirationTime field to given value.

### HasExpirationTime

`func (o *RegenerateAPIKeyRequest) HasExpirationTime() bool`

HasExpirationTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


