# RoutesV3CreateSessionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrganizationId** | Pointer to **string** |  | [optional] 
**TtlSeconds** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesV3CreateSessionRequest

`func NewRoutesV3CreateSessionRequest() *RoutesV3CreateSessionRequest`

NewRoutesV3CreateSessionRequest instantiates a new RoutesV3CreateSessionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateSessionRequestWithDefaults

`func NewRoutesV3CreateSessionRequestWithDefaults() *RoutesV3CreateSessionRequest`

NewRoutesV3CreateSessionRequestWithDefaults instantiates a new RoutesV3CreateSessionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizationId

`func (o *RoutesV3CreateSessionRequest) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV3CreateSessionRequest) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV3CreateSessionRequest) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV3CreateSessionRequest) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetTtlSeconds

`func (o *RoutesV3CreateSessionRequest) GetTtlSeconds() int32`

GetTtlSeconds returns the TtlSeconds field if non-nil, zero value otherwise.

### GetTtlSecondsOk

`func (o *RoutesV3CreateSessionRequest) GetTtlSecondsOk() (*int32, bool)`

GetTtlSecondsOk returns a tuple with the TtlSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtlSeconds

`func (o *RoutesV3CreateSessionRequest) SetTtlSeconds(v int32)`

SetTtlSeconds sets TtlSeconds field to given value.

### HasTtlSeconds

`func (o *RoutesV3CreateSessionRequest) HasTtlSeconds() bool`

HasTtlSeconds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


