# UpdateOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OutputType** | Pointer to **string** |  | [optional] 

## Methods

### NewUpdateOutputRequest

`func NewUpdateOutputRequest() *UpdateOutputRequest`

NewUpdateOutputRequest instantiates a new UpdateOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateOutputRequestWithDefaults

`func NewUpdateOutputRequestWithDefaults() *UpdateOutputRequest`

NewUpdateOutputRequestWithDefaults instantiates a new UpdateOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *UpdateOutputRequest) GetConfig() SecretProcessesorOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *UpdateOutputRequest) GetConfigOk() (*SecretProcessesorOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *UpdateOutputRequest) SetConfig(v SecretProcessesorOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *UpdateOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *UpdateOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *UpdateOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateOutputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateOutputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOutputType

`func (o *UpdateOutputRequest) GetOutputType() string`

GetOutputType returns the OutputType field if non-nil, zero value otherwise.

### GetOutputTypeOk

`func (o *UpdateOutputRequest) GetOutputTypeOk() (*string, bool)`

GetOutputTypeOk returns a tuple with the OutputType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputType

`func (o *UpdateOutputRequest) SetOutputType(v string)`

SetOutputType sets OutputType field to given value.

### HasOutputType

`func (o *UpdateOutputRequest) HasOutputType() bool`

HasOutputType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


