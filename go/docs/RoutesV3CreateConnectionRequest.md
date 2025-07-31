# RoutesV3CreateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**AuthenticationtypesConnectionConfig**](AuthenticationtypesConnectionConfig.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the connection | [optional] 
**Name** | Pointer to **string** | Name of the connection | [optional] 

## Methods

### NewRoutesV3CreateConnectionRequest

`func NewRoutesV3CreateConnectionRequest() *RoutesV3CreateConnectionRequest`

NewRoutesV3CreateConnectionRequest instantiates a new RoutesV3CreateConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateConnectionRequestWithDefaults

`func NewRoutesV3CreateConnectionRequestWithDefaults() *RoutesV3CreateConnectionRequest`

NewRoutesV3CreateConnectionRequestWithDefaults instantiates a new RoutesV3CreateConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3CreateConnectionRequest) GetConfig() AuthenticationtypesConnectionConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3CreateConnectionRequest) GetConfigOk() (*AuthenticationtypesConnectionConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3CreateConnectionRequest) SetConfig(v AuthenticationtypesConnectionConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3CreateConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3CreateConnectionRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3CreateConnectionRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3CreateConnectionRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3CreateConnectionRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3CreateConnectionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3CreateConnectionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3CreateConnectionRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3CreateConnectionRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


