# RoutesUpdateInputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**RoutesUpdateInputRequestConfig**](RoutesUpdateInputRequestConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewRoutesUpdateInputRequest

`func NewRoutesUpdateInputRequest(type_ string, ) *RoutesUpdateInputRequest`

NewRoutesUpdateInputRequest instantiates a new RoutesUpdateInputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesUpdateInputRequestWithDefaults

`func NewRoutesUpdateInputRequestWithDefaults() *RoutesUpdateInputRequest`

NewRoutesUpdateInputRequestWithDefaults instantiates a new RoutesUpdateInputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesUpdateInputRequest) GetConfig() RoutesUpdateInputRequestConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesUpdateInputRequest) GetConfigOk() (*RoutesUpdateInputRequestConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesUpdateInputRequest) SetConfig(v RoutesUpdateInputRequestConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesUpdateInputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesUpdateInputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesUpdateInputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesUpdateInputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesUpdateInputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesUpdateInputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesUpdateInputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesUpdateInputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesUpdateInputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *RoutesUpdateInputRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesUpdateInputRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesUpdateInputRequest) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


