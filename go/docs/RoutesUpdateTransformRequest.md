# RoutesUpdateTransformRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**ModelsTransformConfig**](ModelsTransformConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | 

## Methods

### NewRoutesUpdateTransformRequest

`func NewRoutesUpdateTransformRequest(name string, ) *RoutesUpdateTransformRequest`

NewRoutesUpdateTransformRequest instantiates a new RoutesUpdateTransformRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesUpdateTransformRequestWithDefaults

`func NewRoutesUpdateTransformRequestWithDefaults() *RoutesUpdateTransformRequest`

NewRoutesUpdateTransformRequestWithDefaults instantiates a new RoutesUpdateTransformRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesUpdateTransformRequest) GetConfig() ModelsTransformConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesUpdateTransformRequest) GetConfigOk() (*ModelsTransformConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesUpdateTransformRequest) SetConfig(v ModelsTransformConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesUpdateTransformRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesUpdateTransformRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesUpdateTransformRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesUpdateTransformRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesUpdateTransformRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesUpdateTransformRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesUpdateTransformRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesUpdateTransformRequest) SetName(v string)`

SetName sets Name field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


