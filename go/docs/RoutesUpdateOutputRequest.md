# RoutesUpdateOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**RoutesUpdateOutputRequestConfig**](RoutesUpdateOutputRequestConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OutputType** | **string** |  | 

## Methods

### NewRoutesUpdateOutputRequest

`func NewRoutesUpdateOutputRequest(outputType string, ) *RoutesUpdateOutputRequest`

NewRoutesUpdateOutputRequest instantiates a new RoutesUpdateOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesUpdateOutputRequestWithDefaults

`func NewRoutesUpdateOutputRequestWithDefaults() *RoutesUpdateOutputRequest`

NewRoutesUpdateOutputRequestWithDefaults instantiates a new RoutesUpdateOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesUpdateOutputRequest) GetConfig() RoutesUpdateOutputRequestConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesUpdateOutputRequest) GetConfigOk() (*RoutesUpdateOutputRequestConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesUpdateOutputRequest) SetConfig(v RoutesUpdateOutputRequestConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesUpdateOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesUpdateOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesUpdateOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesUpdateOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesUpdateOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesUpdateOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesUpdateOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesUpdateOutputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesUpdateOutputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOutputType

`func (o *RoutesUpdateOutputRequest) GetOutputType() string`

GetOutputType returns the OutputType field if non-nil, zero value otherwise.

### GetOutputTypeOk

`func (o *RoutesUpdateOutputRequest) GetOutputTypeOk() (*string, bool)`

GetOutputTypeOk returns a tuple with the OutputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputType

`func (o *RoutesUpdateOutputRequest) SetOutputType(v string)`

SetOutputType sets OutputType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


