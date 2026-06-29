# ReplaceOutputRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**SecretProcessesorOutputConfig**](SecretProcessesorOutputConfig.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewReplaceOutputRequest

`func NewReplaceOutputRequest() *ReplaceOutputRequest`

NewReplaceOutputRequest instantiates a new ReplaceOutputRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplaceOutputRequestWithDefaults

`func NewReplaceOutputRequestWithDefaults() *ReplaceOutputRequest`

NewReplaceOutputRequestWithDefaults instantiates a new ReplaceOutputRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *ReplaceOutputRequest) GetConfig() SecretProcessesorOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ReplaceOutputRequest) GetConfigOk() (*SecretProcessesorOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ReplaceOutputRequest) SetConfig(v SecretProcessesorOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ReplaceOutputRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *ReplaceOutputRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReplaceOutputRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReplaceOutputRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReplaceOutputRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *ReplaceOutputRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReplaceOutputRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReplaceOutputRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReplaceOutputRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ReplaceOutputRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReplaceOutputRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReplaceOutputRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReplaceOutputRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


