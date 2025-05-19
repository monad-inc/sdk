# RoutesV3ImportTransformResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**RoutesV3TransformConfig**](RoutesV3TransformConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | 

## Methods

### NewRoutesV3ImportTransformResponse

`func NewRoutesV3ImportTransformResponse(name string, ) *RoutesV3ImportTransformResponse`

NewRoutesV3ImportTransformResponse instantiates a new RoutesV3ImportTransformResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3ImportTransformResponseWithDefaults

`func NewRoutesV3ImportTransformResponseWithDefaults() *RoutesV3ImportTransformResponse`

NewRoutesV3ImportTransformResponseWithDefaults instantiates a new RoutesV3ImportTransformResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3ImportTransformResponse) GetConfig() RoutesV3TransformConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3ImportTransformResponse) GetConfigOk() (*RoutesV3TransformConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3ImportTransformResponse) SetConfig(v RoutesV3TransformConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3ImportTransformResponse) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3ImportTransformResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3ImportTransformResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3ImportTransformResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3ImportTransformResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3ImportTransformResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3ImportTransformResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3ImportTransformResponse) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


