# RoutesV2CreateAPIKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**ExpirationTime** | **string** |  | 
**Name** | **string** |  | 
**RoleId** | **string** |  | 

## Methods

### NewRoutesV2CreateAPIKeyRequest

`func NewRoutesV2CreateAPIKeyRequest(expirationTime string, name string, roleId string, ) *RoutesV2CreateAPIKeyRequest`

NewRoutesV2CreateAPIKeyRequest instantiates a new RoutesV2CreateAPIKeyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2CreateAPIKeyRequestWithDefaults

`func NewRoutesV2CreateAPIKeyRequestWithDefaults() *RoutesV2CreateAPIKeyRequest`

NewRoutesV2CreateAPIKeyRequestWithDefaults instantiates a new RoutesV2CreateAPIKeyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV2CreateAPIKeyRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2CreateAPIKeyRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2CreateAPIKeyRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2CreateAPIKeyRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExpirationTime

`func (o *RoutesV2CreateAPIKeyRequest) GetExpirationTime() string`

GetExpirationTime returns the ExpirationTime field if non-nil, zero value otherwise.

### GetExpirationTimeOk

`func (o *RoutesV2CreateAPIKeyRequest) GetExpirationTimeOk() (*string, bool)`

GetExpirationTimeOk returns a tuple with the ExpirationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationTime

`func (o *RoutesV2CreateAPIKeyRequest) SetExpirationTime(v string)`

SetExpirationTime sets ExpirationTime field to given value.


### GetName

`func (o *RoutesV2CreateAPIKeyRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2CreateAPIKeyRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2CreateAPIKeyRequest) SetName(v string)`

SetName sets Name field to given value.


### GetRoleId

`func (o *RoutesV2CreateAPIKeyRequest) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *RoutesV2CreateAPIKeyRequest) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *RoutesV2CreateAPIKeyRequest) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


