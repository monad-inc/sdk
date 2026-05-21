# RoutesV3CreateSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpiresAt** | Pointer to **string** |  | [optional] 
**SessionToken** | Pointer to **string** |  | [optional] 
**TtlSeconds** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesV3CreateSessionResponse

`func NewRoutesV3CreateSessionResponse() *RoutesV3CreateSessionResponse`

NewRoutesV3CreateSessionResponse instantiates a new RoutesV3CreateSessionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateSessionResponseWithDefaults

`func NewRoutesV3CreateSessionResponseWithDefaults() *RoutesV3CreateSessionResponse`

NewRoutesV3CreateSessionResponseWithDefaults instantiates a new RoutesV3CreateSessionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpiresAt

`func (o *RoutesV3CreateSessionResponse) GetExpiresAt() string`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *RoutesV3CreateSessionResponse) GetExpiresAtOk() (*string, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *RoutesV3CreateSessionResponse) SetExpiresAt(v string)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *RoutesV3CreateSessionResponse) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetSessionToken

`func (o *RoutesV3CreateSessionResponse) GetSessionToken() string`

GetSessionToken returns the SessionToken field if non-nil, zero value otherwise.

### GetSessionTokenOk

`func (o *RoutesV3CreateSessionResponse) GetSessionTokenOk() (*string, bool)`

GetSessionTokenOk returns a tuple with the SessionToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionToken

`func (o *RoutesV3CreateSessionResponse) SetSessionToken(v string)`

SetSessionToken sets SessionToken field to given value.

### HasSessionToken

`func (o *RoutesV3CreateSessionResponse) HasSessionToken() bool`

HasSessionToken returns a boolean if a field has been set.

### GetTtlSeconds

`func (o *RoutesV3CreateSessionResponse) GetTtlSeconds() int32`

GetTtlSeconds returns the TtlSeconds field if non-nil, zero value otherwise.

### GetTtlSecondsOk

`func (o *RoutesV3CreateSessionResponse) GetTtlSecondsOk() (*int32, bool)`

GetTtlSecondsOk returns a tuple with the TtlSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtlSeconds

`func (o *RoutesV3CreateSessionResponse) SetTtlSeconds(v int32)`

SetTtlSeconds sets TtlSeconds field to given value.

### HasTtlSeconds

`func (o *RoutesV3CreateSessionResponse) HasTtlSeconds() bool`

HasTtlSeconds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


