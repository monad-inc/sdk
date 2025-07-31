# RoutesV3UpdateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**AuthenticationtypesConnectionConfig**](AuthenticationtypesConnectionConfig.md) |  | [optional] 
**Description** | Pointer to **string** | Connection Description to be updated | [optional] 
**Name** | Pointer to **string** | Connection Name to be updated | [optional] 

## Methods

### NewRoutesV3UpdateConnectionRequest

`func NewRoutesV3UpdateConnectionRequest() *RoutesV3UpdateConnectionRequest`

NewRoutesV3UpdateConnectionRequest instantiates a new RoutesV3UpdateConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3UpdateConnectionRequestWithDefaults

`func NewRoutesV3UpdateConnectionRequestWithDefaults() *RoutesV3UpdateConnectionRequest`

NewRoutesV3UpdateConnectionRequestWithDefaults instantiates a new RoutesV3UpdateConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3UpdateConnectionRequest) GetConfig() AuthenticationtypesConnectionConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3UpdateConnectionRequest) GetConfigOk() (*AuthenticationtypesConnectionConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3UpdateConnectionRequest) SetConfig(v AuthenticationtypesConnectionConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3UpdateConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3UpdateConnectionRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3UpdateConnectionRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3UpdateConnectionRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3UpdateConnectionRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3UpdateConnectionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3UpdateConnectionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3UpdateConnectionRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3UpdateConnectionRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


