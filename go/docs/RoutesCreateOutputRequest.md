# RoutesCreateOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | **string** |  | 
**OutputType** | **string** |  | 

## Methods

### NewRoutesCreateOutputRequest

`func NewRoutesCreateOutputRequest(name string, outputType string, ) *RoutesCreateOutputRequest`

NewRoutesCreateOutputRequest instantiates a new RoutesCreateOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesCreateOutputRequestWithDefaults

`func NewRoutesCreateOutputRequestWithDefaults() *RoutesCreateOutputRequest`

NewRoutesCreateOutputRequestWithDefaults instantiates a new RoutesCreateOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesCreateOutputRequest) GetConfig() ModelsOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesCreateOutputRequest) GetConfigOk() (*ModelsOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesCreateOutputRequest) SetConfig(v ModelsOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesCreateOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesCreateOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesCreateOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesCreateOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesCreateOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *RoutesCreateOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesCreateOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesCreateOutputRequest) SetName(v string)`

SetName sets Name field to given value.


### GetOutputType

`func (o *RoutesCreateOutputRequest) GetOutputType() string`

GetOutputType returns the OutputType field if non-nil, zero value otherwise.

### GetOutputTypeOk

`func (o *RoutesCreateOutputRequest) GetOutputTypeOk() (*string, bool)`

GetOutputTypeOk returns a tuple with the OutputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputType

`func (o *RoutesCreateOutputRequest) SetOutputType(v string)`

SetOutputType sets OutputType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


